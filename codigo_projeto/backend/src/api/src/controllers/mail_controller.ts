import { Request, Response, NextFunction } from "express";
import getCurrentLine from 'get-current-line';

import { verification_code_services } from "../services/verification_code_services";
import { errors } from "../constants/errors";
import { IAuthRequest } from '../middlewares/middlewares';
import { IVerificationCode } from "../interfaces/IVerificationCode";
import { IVerificationCodeRequest } from "./verification_code_controller";
import { mail_services } from "../services/mail_services";


export const mail_controller = {

    /**
     * Envia um email de verificação com o código fornecido.
     *
     * @param {IVerificationCodeRequest} req - O objeto de solicitação contendo o código de verificação a ser enviado.
     * @param {Response} res - O objeto de resposta para enviar a resposta HTTP.
     * @param {NextFunction} next - A próxima função de middleware.
     * @returns {Promise<Response>} - Uma resposta HTTP com o resultado do envio do email de verificação.
     */
    async sendVerificationMail(req: IVerificationCodeRequest, res: Response, next: NextFunction) {
        try {
            // Chama o serviço de email para enviar o código de verificação.
            const response = await mail_services.sendVerificationCode(req.verification_code as IVerificationCode);

            if (response?.status) {
                // Se o serviço de email retornar um status, retorna essa resposta HTTP.
                return res.status(response.status).json(response);
            }

            // Se não houver status retornado, passa para o próximo middleware.
            next();
        } catch (error) {
            // Em caso de erro, retorna uma resposta de erro com status 500.
            return res.status(500).json({
                status: 500,
                error: {
                    title: errors.SERVER.internal_server_error.title,
                    description: errors.SERVER.internal_server_error.description,
                    failure: error
                }
            });
        }
    }

}