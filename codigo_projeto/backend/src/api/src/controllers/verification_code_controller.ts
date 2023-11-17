import { Request, Response, NextFunction } from "express";
import getCurrentLine from 'get-current-line';

import { verification_code_services } from "../services/verification_code_services";
import { errors } from "../constants/errors";
import { IAuthRequest } from '../middlewares/middlewares';
import { IVerificationCode } from "../interfaces/IVerificationCode";
import { hashSync } from "bcrypt";

// Define uma interface para solicitações relacionadas a códigos de verificação.
export interface IVerificationCodeRequest extends IAuthRequest {
    verification_code?: IVerificationCode 
};

/**
 * Controlador de códigos de verificação que lida com operações relacionadas a códigos de verificação.
 */
export const verification_code_controller = {

    /**
     * Cria um novo código de verificação para um usuário autenticado.
     * 
     * @param req - Objeto de solicitação do Express, estendido com informações do usuário autenticado e um código de verificação.
     * @param res - Objeto de resposta do Express para enviar o resultado da criação como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Um código de verificação é armazenado em "req.verification_code" e o controle é passado para o próximo middleware.
     */
    async store(req: IVerificationCodeRequest, res: Response, next: NextFunction) {
        try {
            // Chama o serviço para criar um novo código de verificação para o usuário autenticado.
            const verification_code = await verification_code_services.store(req.user?.id as string);
            
            // Armazena o código de verificação criado em "req.verification_code".
            req.verification_code = verification_code;

            // Passa o controle para o próximo middleware.
            next();
        } catch (error) {
            // Em caso de erro, retorna uma resposta de erro interno do servidor (código 500).
            return res.status(500).json({
                status: 500,
                error: {
                    title: errors.SERVER.internal_server_error.title,
                    description: errors.SERVER.internal_server_error.description,
                    failure: error
                }
            });
        };
    },

    /**
     * Criptografa o código de verificação armazenado em "req.verification_code".
     * 
     * @param req - Objeto de solicitação do Express, contendo um código de verificação.
     * @param res - Objeto de resposta do Express para enviar um status 201 (Criado) como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Um código de verificação criptografado é atualizado no banco de dados e uma resposta de sucesso é retornada.
     */
    async encrypt(req: IVerificationCodeRequest, res: Response, next: NextFunction) {
        // Atualiza o código de verificação armazenado em "req.verification_code" com a versão criptografada.
        await req.verification_code?.update({
            code: hashSync(req.verification_code.code, 10)
        });

        // Retorna uma resposta de sucesso com status 201 (Criado).
        return res.status(201).json({
            status: 201,
            success: {
                title: "Código de verificação criado com sucesso."
            }
        });
    }
}