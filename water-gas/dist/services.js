"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMeasures = exports.confirmMeasure = exports.uploadImage = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const joi_1 = __importDefault(require("joi"));
const dotenv_1 = __importDefault(require("dotenv"));
const generative_ai_1 = require("@google/generative-ai");
dotenv_1.default.config();
const genAI = new generative_ai_1.GoogleGenerativeAI('AIzaSyC0--e30gFe36M538DBiwMturjQmv71Pp4');
function fileToGenerativePart(filePath, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs_1.default.readFileSync(filePath)).toString('base64'),
            mimeType
        },
    };
}
const uploadImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object({
        imageBase64: joi_1.default.string().base64().required(),
        customer_code: joi_1.default.string().required(),
        measure_datetime: joi_1.default.date().iso().required(),
        measure_type: joi_1.default.string().valid('WATER', 'GAS').required(),
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
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
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
        const result = yield model.generateContent([prompt, imagePart]);
        const response = yield result.response;
        const text = response.text();
        console.log(text);
        // Gerar um nome único para o arquivo da imagem
        const imageName = `${generateUUID()}.png`;
        const imagePath = path_1.default.join(__dirname, 'uploads', imageName);
        // Salvar a imagem no servidor localmente
        fs_1.default.writeFileSync(imagePath, Buffer.from(imageBase64, 'base64'));
        const imageUrl = `/uploads/${imageName}`;
        res.status(200).json({
            image_url: imageUrl, // Provide actual image URL if available
            measure_value: parseFloat(text), // Convert text to integer value
            measure_uuid: generateUUID() // Provide actual UUID from Gemini response
        });
    }
    catch (err) {
        console.error('Error processing image:', err);
        res.status(500).json({ error_code: 'INTERNAL_ERROR', error_description: 'Failed to process image' });
    }
});
exports.uploadImage = uploadImage;
const confirmMeasure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object({
        measure_uuid: joi_1.default.string().required(),
        confirmed_value: joi_1.default.number().integer().required(),
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
});
exports.confirmMeasure = confirmMeasure;
const listMeasures = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customer_code } = req.params;
    const { measure_type } = req.query;
    if (measure_type && !['WATER', 'GAS'].includes(measure_type)) {
        return res.status(400).json({ error_code: 'INVALID_TYPE', error_description: 'Tipo de medição não permitida' });
    }
    // Simulate measure retrieval
    const measures = [1]; // Replace with actual DB query
    if (measures.length === 0) {
        return res.status(404).json({ error_code: 'MEASURES_NOT_FOUND', error_description: 'Nenhuma leitura encontrada' });
    }
    res.status(200).json({
        customer_code,
        measures: measures.map((measure) => ({
            measure_uuid: measure.measure_uuid,
            measure_datetime: measure.measure_datetime,
            measure_type: measure.measure_type,
            has_confirmed: measure.has_confirmed,
            image_url: measure.image_url
        }))
    });
});
exports.listMeasures = listMeasures;
