import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import Joi from 'joi';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAI = new GoogleGenerativeAI('AIzaSyC0--e30gFe36M538DBiwMturjQmv71Pp4');

function fileToGenerativePart(filePath: string, mimeType: string) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(filePath)).toString('base64'),
      mimeType
    },
  };
}

export const uploadImage = async (req: Request, res: Response) => {
  const schema = Joi.object({
    imageBase64: Joi.string().base64().required(),
    customer_code: Joi.string().required(),
    measure_datetime: Joi.date().iso().required(),
    measure_type: Joi.string().valid('WATER', 'GAS').required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error_code: 'INVALID_DATA', error_description: error.details[0].message, imagem: error.details });
  }

  const { imageBase64, customer_code, measure_datetime, measure_type } = req.body;

  // Simulate existing reading check
  const existingReading = false; // Replace with actual DB check

  if (existingReading) {
    return res.status(409).json({ error_code: 'DOUBLE_REPORT', error_description: 'Leitura do mês já realizada' });
  }

  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const imagePart = {
      inlineData: {
        data: imageBase64,
        mimeType: 'image/png'
      },
    };

    const prompt = 'Quero que retorne somente o numero principal contido na imagem, nada a mais';

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text =  response.text();
    console.log(text)
    
    // Gerar um nome único para o arquivo da imagem
    const imageName = `${generateUUID()}.png`;
    const imagePath = path.join(__dirname, 'uploads', imageName);

    // Salvar a imagem no servidor localmente
    fs.writeFileSync(imagePath, Buffer.from(imageBase64, 'base64'));

    const imageUrl = `/uploads/${imageName}`;
    res.status(200).json({ 
      image_url: imageUrl, // Provide actual image URL if available
      measure_value: parseFloat(text), // Convert text to integer value
      measure_uuid: generateUUID() // Provide actual UUID from Gemini response
    });
  } catch (err) {
    console.error('Error processing image:', err);
    res.status(500).json({ error_code: 'INTERNAL_ERROR', error_description: 'Failed to process image' });
  }
};

export const confirmMeasure = async (req: Request, res: Response) => {
  const schema = Joi.object({
    measure_uuid: Joi.string().required(),
    confirmed_value: Joi.number().integer().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error_code: 'INVALID_DATA', error_description: error.details[0].message });
  }

  const { measure_uuid, confirmed_value } = req.body;

  // Simulate reading check and confirmation status
  const reading = true; // Replace with actual DB check
  const alreadyConfirmed = false; // Replace with actual DB check

  if (!reading) {
    return res.status(404).json({ error_code: 'MEASURE_NOT_FOUND', error_description: 'Leitura não encontrada' });
  }

  if (alreadyConfirmed) {
    return res.status(409).json({ error_code: 'CONFIRMATION_DUPLICATE', error_description: 'Leitura já confirmada' });
  }

  // Simulate saving the confirmed value
  res.status(200).json({ success: true });
};

export const listMeasures = async (req: Request, res: Response) => {
  const { customer_code } = req.params;
  const { measure_type } = req.query;

  if (measure_type && !['WATER', 'GAS'].includes(measure_type as string)) {
    return res.status(400).json({ error_code: 'INVALID_TYPE', error_description: 'Tipo de medição não permitida' });
  }

  // Simulate measure retrieval
  const measures = [1]; // Replace with actual DB query

  if (measures.length === 0) {
    return res.status(404).json({ error_code: 'MEASURES_NOT_FOUND', error_description: 'Nenhuma leitura encontrada' });
  }

  res.status(200).json({
    customer_code,
    measures: measures.map((measure: any) => ({
      measure_uuid: measure.measure_uuid,
      measure_datetime: measure.measure_datetime,
      measure_type: measure.measure_type,
      has_confirmed: measure.has_confirmed,
      image_url: measure.image_url
    }))
  });
};
