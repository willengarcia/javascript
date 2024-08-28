const express = require('express');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000;

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI('AIzaSyC0--e30gFe36M538DBiwMturjQmv71Pp4');
// Converts local file information to a GoogleGenerativeAI.Part object
function fileToGenerativePart(filePath, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(filePath)).toString('base64'),
      mimeType
    },
  };
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/upload', async (req, res) => {
  // Path to your local image
  const imagePath = path.join(__dirname, 'AGUA-1.png');

  // Convert local image to base64
  const imagePart = fileToGenerativePart(imagePath, 'image/png');

  // Simulate request body for demonstration purposes
  const reqBody = {
    customer_code: '123456',
    measure_type: 'WATER'
  };

  // Validate the request body
  if (!reqBody.customer_code || !reqBody.measure_type) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  // Use the imagePart to generate content using GoogleGenerativeAI
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = 'O que há na imagem?';

    // Generate content with the image part
    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text();
    
    // Respond with the text extracted from the image
    res.json({ text });
  } catch (err) {
    console.error('Error processing image:', err);
    res.status(500).json({ error: 'Failed to process image' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});