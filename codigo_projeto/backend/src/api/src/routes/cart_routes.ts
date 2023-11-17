import { Router } from "express";
import { cart_controller } from "../controllers/cart_controller";
import { auth } from '../middlewares/middlewares';

// Cria uma instância do roteador Express.
const router = Router();

// Define as rotas e seus controladores associados.

/**
 * Rota POST para criar um novo carrinho.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'cart_controller.createCart' é responsável por lidar com esta rota.
 */
router.post('/', auth, cart_controller.createCart);

/**
 * Rota GET para obter informações de um carrinho com base no ID do carrinho.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'cart_controller.getCartById' é responsável por lidar com esta rota.
 */
router.get('/:cartId', auth, cart_controller.getCartById);

/**
 * Rota PUT para atualizar o status de um carrinho com base no ID do carrinho.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'cart_controller.updateCartStatus' é responsável por lidar com esta rota.
 */
router.put('/:cartId/status', auth, cart_controller.updateCartStatus);

/**
 * Rota DELETE para excluir um carrinho com base no ID do carrinho.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'cart_controller.deleteCart' é responsável por lidar com esta rota.
 */
router.delete('/:cartId', auth, cart_controller.deleteCart);

// Exporta o roteador para uso em outras partes do aplicativo.
export default router;