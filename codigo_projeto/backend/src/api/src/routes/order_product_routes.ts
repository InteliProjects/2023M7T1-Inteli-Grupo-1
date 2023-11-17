import { Router } from "express";
import { order_product_controller } from "../controllers/order_product_controller";
import { auth } from '../middlewares/middlewares';

// Cria uma instância do roteador Express.
const router = Router();

// Define uma rota POST para criar um novo produto de pedido.
// Requer autenticação, pois usa o middleware 'auth'.
// O controlador 'order_product_controller.store' é responsável por lidar com esta rota.
router.post('/', auth, order_product_controller.store);

// Exporta o roteador para uso em outras partes do aplicativo.
export default router;