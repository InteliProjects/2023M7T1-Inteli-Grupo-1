import express from 'express';
import cors from 'cors';

import api_routes from './routes/api_routes';
import user_routes from './routes/user_routes';
import order_routes from './routes/order_routes';
import address_routes from './routes/address_routes';
import inventory_routes from './routes/inventory_routes';
import order_product_routes from './routes/order_product_routes';
import verification_code_routes from './routes/verification_code_routes';
import cart_routes from './routes/cart_routes';

const app = express();

// Middleware para permitir requisições de origens diferentes (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware para analisar o corpo das solicitações como JSON
app.use(express.json());

// Middleware para analisar os dados dos formulários enviados via POST
app.use(express.urlencoded({ extended: true }));

// Define as rotas para diferentes partes da aplicação
app.use('/', api_routes);
app.use('/user', user_routes);
app.use('/order', order_routes);
app.use('/address', address_routes);
app.use('/inventory', inventory_routes);
app.use('/order-product', order_product_routes);
app.use('/verification-code', verification_code_routes);
app.use('/cart', cart_routes);

export default app;