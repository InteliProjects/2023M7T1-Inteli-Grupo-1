import { Router } from "express";
import { cart_item_controller } from "../controllers/cart_item_controller";
import { auth } from '../middlewares/middlewares';

// Cria uma instância do roteador Express.
const router = Router();

// Define as rotas e seus controladores associados.

/**
 * Rota POST para criar um novo item no carrinho.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'cart_item_controller.store' é responsável por lidar com esta rota.
 */
router.post('/', auth, cart_item_controller.store);

/**
 * Rota GET para listar itens do carrinho com base no ID do carrinho.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'cart_item_controller.list' é responsável por lidar com esta rota.
 */
router.get('/:cartId', auth, cart_item_controller.list);

/**
 * Rota DELETE para excluir um item do carrinho com base no ID do item.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'cart_item_controller.delete' é responsável por lidar com esta rota.
 */
router.delete('/:itemId', auth, cart_item_controller.delete);

/**
 * Rota PUT para atualizar um item do carrinho com base no ID do item.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'cart_item_controller.update' é responsável por lidar com esta rota.
 */
router.put('/:itemId', auth, cart_item_controller.update);

// Exporta o roteador para uso em outras partes do aplicativo.
export default router;