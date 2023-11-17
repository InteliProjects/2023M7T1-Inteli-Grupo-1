import { Request, Response, NextFunction } from "express";
import getCurrentLine from 'get-current-line';

import { user_services } from "../services/user_services";
import { errors } from "../constants/errors";

/**
 * Controlador de usuário que lida com solicitações relacionadas a usuários.
 */
export const user_controller = {

    /**
     * Verifica se um endereço de e-mail está em uso.
     * 
     * @param req - Objeto de solicitação do Express contendo o endereço de e-mail no corpo.
     * @param res - Objeto de resposta do Express para enviar o resultado da verificação como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com o resultado da verificação ou uma resposta de erro interno do servidor.
     */
    async checkEmailInUse(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await user_services.checkEmailInUse(req.body.email);
            return res.status(response.status).json(response);
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: {
                    title: errors.SERVER.internal_server_error.title,
                    description: errors.SERVER.internal_server_error.description,
                    failure: error
                }
            });
        }
    },

    /**
     * Encontra todos os usuários.
     * 
     * @param req - Objeto de solicitação do Express.
     * @param res - Objeto de resposta do Express para enviar a lista de usuários como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com a lista de usuários ou uma resposta de erro interno do servidor.
     */
    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await user_services.findAll();
            return res.status(response.status).json(response);
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: {
                    title: errors.SERVER.internal_server_error.title,
                    description: errors.SERVER.internal_server_error.description,
                    failure: error
                }
            });
        }
    },

    /**
     * Realiza o login de um usuário.
     * 
     * @param req - Objeto de solicitação do Express contendo informações de login no corpo.
     * @param res - Objeto de resposta do Express para enviar o resultado do login como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com o resultado do login ou uma resposta de erro interno do servidor.
     */
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await user_services.login(req.body);
            return res.status(response.status).json(response);
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: {
                    title: errors.SERVER.internal_server_error.title,
                    description: errors.SERVER.internal_server_error.description,
                    source: {
                        pointer: __filename,
                        line: getCurrentLine().line
                    }
                }
            });
        }
    },

    /**
     * Cria um novo usuário.
     * 
     * @param req - Objeto de solicitação do Express contendo os dados do novo usuário no corpo.
     * @param res - Objeto de resposta do Express para enviar o resultado da criação como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com o resultado da criação ou uma resposta de erro interno do servidor.
     */
    async store(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await user_services.store(req.body);
            return res.status(response.status).json(response);
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: {
                    title: errors.SERVER.internal_server_error.title,
                    description: errors.SERVER.internal_server_error.description,
                    failure: error
                }
            });
        }
    },

    /**
     * Verifica se um CPF está em uso.
     * 
     * @param req - Objeto de solicitação do Express contendo o CPF no corpo.
     * @param res - Objeto de resposta do Express para enviar o resultado da verificação como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com o resultado da verificação ou uma resposta de erro interno do servidor.
     */
    async checkCpfInUse(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await user_services.store(req.body); // Atenção: deve ser "checkCpfInUse" em vez de "store".
            return res.status(response.status).json(response);
        } catch (error) {
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