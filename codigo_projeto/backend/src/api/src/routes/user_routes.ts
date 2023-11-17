import { Router } from "express";
import { user_controller } from "../controllers/user_controller";
import { auth } from '../middlewares/middlewares';
import { verification_code_controller } from '../controllers/verification_code_controller';

// Cria uma instância do roteador Express.
const router = Router();

// Define as rotas e seus controladores associados.

/**
 * Rota POST para criar um novo usuário.
 * O controlador 'user_controller.store' é responsável por lidar com esta rota.
 */
router.post('/', user_controller.store);

/**
 * Rota POST para verificar se um determinado endereço de email já está em uso.
 * O controlador 'user_controller.checkEmailInUse' é responsável por lidar com esta rota.
 */
router.post('/check-email', user_controller.checkEmailInUse);

/**
 * Rota POST para autenticar um usuário com base no endereço de email e senha.
 * O controlador 'user_controller.login' é responsável por lidar com esta rota.
 */
router.post('/login', user_controller.login);

/**
 * Rota GET para listar todos os usuários.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'user_controller.findAll' é responsável por lidar com esta rota.
 */
router.get('/', auth, user_controller.findAll);

// Exporta o roteador para uso em outras partes do aplicativo.
export default router;