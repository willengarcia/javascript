import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
import path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Configuração o middleware cors
app.use(cors({
  origin: 'http://localhost:3002', // Permitir requisições somente do frontend
}));

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
