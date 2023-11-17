import { Router } from "express";
import { auth } from '../middlewares/middlewares';
import { IVerificationCodeRequest, verification_code_controller } from '../controllers/verification_code_controller';
import { mail_controller } from '../controllers/mail_controller';

// Cria uma instância do roteador Express.
const router = Router();

// Define as rotas e seus controladores associados.

/**
 * Rota POST para criar um novo código de verificação.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O middleware 'verification_code_controller.store' é responsável por criar o código de verificação.
 * O middleware 'mail_controller.sendVerificationMail' envia o email de verificação.
 * O middleware 'verification_code_controller.encrypt' é responsável por criptografar o código de verificação.
 */
router.post('/', 
    auth,
    (req: IVerificationCodeRequest, res, next) => verification_code_controller.store(req, res, next),   
    mail_controller.sendVerificationMail,
    verification_code_controller.encrypt
);

/**
 * Rota POST para verificar um código de verificação.
 * Requer autenticação, pois usa o middleware 'auth'.
 * O controlador 'verification_code_controller.verify' é responsável por verificar o código de verificação.
 */
router.post('/verify', auth, verification_code_controller.verify);

// Exporta o roteador para uso em outras partes do aplicativo.
export default router;