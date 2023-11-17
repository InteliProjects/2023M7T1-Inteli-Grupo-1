import express from 'express';
import cors from 'cors';

import plan_routes from './routes/plan_routes';
import plan_queue_routes from './routes/plan_queue_routes';

// Cria uma instância do aplicativo Express.
const app = express();

// Habilita o CORS para permitir solicitações de diferentes origens.
app.use(cors());

// Configura o Express para trabalhar com JSON e dados de formulário.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define as rotas do aplicativo.
app.use('/plan', plan_routes); // Rota para planos
app.use('/plans', plan_queue_routes); // Rota para fila de planos

// Exporta o aplicativo Express configurado.
export default app;