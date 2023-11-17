import { Router } from "express";
import { address_controller } from "../controllers/address_controller";
import { auth } from "../middlewares/middlewares";

// Cria uma instância do roteador Express.
const router = Router();

// Define as rotas e seus controladores associados.

/**
 * Rota POST para criar um novo endereço.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'address_controller.store' é responsável por lidar com esta rota.
 */
router.post('/', auth, address_controller.store);

/**
 * Rota GET para listar endereços de um usuário específico com base no ID.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'address_controller.findAll' é responsável por lidar com esta rota.
 */
router.get('/list-by-user/:id', auth, address_controller.findAll);

// Exporta o roteador para uso em outras partes do aplicativo.
export default router;