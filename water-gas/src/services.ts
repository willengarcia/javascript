import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import Joi from 'joi';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PrismaClient } from '@prisma/client';


dotenv.config();
const prisma = new PrismaClient();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('API key for Google Generative AI is not defined. Please set GEMINI_API_KEY in your .env file.');
}

const genAI = new GoogleGenerativeAI(apiKey);

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
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

  try {
    // Verificar se a leitura já foi registrada
    const existingReading = await prisma.measure.findFirst({
      where: {
        customer_code: customer_code,
        measure_datetime: new Date(measure_datetime),
        measure_type: measure_type
      }
    });

    if (existingReading) {
      return res.status(409).json({ error_code: 'DOUBLE_REPORT', error_description: 'Leitura do mês já realizada' });
    }

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
    const text = await response.text(); // Await for the text to be fully resolved
    console.log(text);

    // Gerar um nome único para o arquivo da imagem
    const imageName = `${generateUUID()}.png`;
    const imagePath = path.join(__dirname, 'uploads', imageName);

    // Salvar a imagem no servidor localmente
    fs.writeFileSync(imagePath, Buffer.from(imageBase64, 'base64'));

    const imageUrl = `/uploads/${imageName}`;
    // Gerar o UUID para a medida
    const measure_uuid = generateUUID();
    // Armazenar a leitura no banco de dados
    await prisma.measure.create({
      data: {
        measure_uuid: measure_uuid,
        confirmed_value: null,
        measure_datetime: new Date(measure_datetime),
        measure_type: measure_type,
        image_url: imageUrl,
        customer_code: customer_code,
        has_confirmed: false,
      }
    });

    res.status(200).json({ 
      image_url: imageUrl, 
      measure_value: parseFloat(text), 
      measure_uuid: measure_uuid
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

  try {
    // Verificar se a leitura existe e se já foi confirmada
    const measure = await prisma.measure.findUnique({
      where: { measure_uuid },
    });

    if (!measure) {
      return res.status(404).json({ error_code: 'MEASURE_NOT_FOUND', error_description: 'Leitura não encontrada' });
    }

    if (measure.confirmed_value !== null) {
      return res.status(409).json({ error_code: 'CONFIRMATION_DUPLICATE', error_description: 'Leitura já confirmada' });
    }

    // Atualizar o valor confirmado
    await prisma.measure.update({
      where: { measure_uuid },
      data: { confirmed_value, has_confirmed: true },
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error processing measure confirmation:', err);
    res.status(500).json({ error_code: 'INTERNAL_ERROR', error_description: 'Failed to process measure confirmation' });
  }
};

export const listMeasures = async (req: Request, res: Response) => {
  const { customer_code } = req.params;
  const { measure_type } = req.query;

  if (measure_type && !['WATER', 'GAS'].includes(measure_type as string)) {
    return res.status(400).json({ error_code: 'INVALID_TYPE', error_description: 'Tipo de medição não permitida' });
  }

  try {
    // Consultar medidas com base no código do cliente e tipo de medição
    const measures = await prisma.measure.findMany({
      where: {
        customer_code: customer_code,
        measure_type: measure_type as string | undefined
      }
    });

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
  }
  catch (err) {
    console.error('Error retrieving measures:', err);
    res.status(500).json({ error_code: 'INTERNAL_ERROR', error_description: 'Failed to retrieve measures' });
  }
};