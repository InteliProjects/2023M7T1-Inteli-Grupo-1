import { Router } from "express";
import { order_controller } from "../controllers/order_controller";
import { auth } from '../middlewares/middlewares';

// Cria uma instância do roteador Express.
const router = Router();

// Define as rotas e seus controladores associados.

/**
 * Rota POST para criar um novo pedido.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'order_controller.store' é responsável por lidar com esta rota.
 */
router.post('/', auth, order_controller.store);

/**
 * Rota DELETE para excluir um pedido.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'order_controller.delete' é responsável por lidar com esta rota.
 */
router.delete('/', auth, order_controller.delete);

/**
 * Rota GET para listar pedidos de um usuário.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'order_controller.findByUserId' é responsável por lidar com esta rota.
 */
router.get('/', auth, order_controller.findByUserId);

/**
 * Rota GET para obter informações de um pedido com base no ID do pedido.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'order_controller.filterById' é responsável por lidar com esta rota.
 */
router.get('/:order_id', auth, order_controller.filterById);

// Exporta o roteador para uso em outras partes do aplicativo.
export default router;