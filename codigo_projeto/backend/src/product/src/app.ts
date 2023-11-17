import express from 'express';
import cors from 'cors';

import product_routes from './routes/product_routes';

const app = express();

// Habilita o middleware CORS para lidar com requisições de diferentes origens
app.use(cors());

// Configura o middleware para analisar solicitações JSON
app.use(express.json());

// Configura o middleware para analisar solicitações com dados codificados em URL
app.use(express.urlencoded({ extended: true }));

// Define a rota '/product' como ponto de entrada para as rotas relacionadas a produtos
app.use('/product', product_routes);

export default app;