import { Request, Response } from "express";
import { address_services } from "../services/address_services"
import { errors } from "../constants/errors";
import getCurrentLine from "get-current-line";
import { IAuthRequest } from '../middlewares/middlewares';

/**
 * Controlador de endereços que lida com operações relacionadas a endereços de usuários autenticados.
 */
export const address_controller = {

    /**
     * Cria um novo endereço para o usuário autenticado.
     * 
     * @param req - Objeto de solicitação do Express contendo os detalhes do endereço a ser criado no corpo e informações do usuário autenticado.
     * @param res - Objeto de resposta do Express para enviar o resultado da criação do endereço como JSON.
     * @returns Uma resposta JSON com o resultado da criação do endereço ou uma resposta de erro interno do servidor.
     */
    async store(req: IAuthRequest, res: Response) {
        try {
            // Chama o serviço para criar um novo endereço com base nos detalhes fornecidos e nas informações do usuário autenticado.
            const response = await address_services.store(req.body, req.user?.id as string);
            return res.status(response.status).json(response);
        } catch (error) {
            // Em caso de erro, retorna uma resposta de erro interno do servidor (código 500).
            return res.status(500).json({
                title: errors.SERVER.internal_server_error.title,
                description: errors.SERVER.internal_server_error.description,
                source: {
                    line: getCurrentLine(),
                    pointer: __filename
                }
            });
        }
    },

    /**
     * Obtém todos os endereços associados ao usuário autenticado.
     * 
     * @param req - Objeto de solicitação do Express contendo informações do usuário autenticado.
     * @param res - Objeto de resposta do Express para enviar a lista de endereços como JSON.
     * @returns Uma resposta JSON com a lista de endereços do usuário autenticado ou uma resposta de erro interno do servidor.
     */
    async findAll(req: IAuthRequest, res: Response) {
        try {
            // Chama o serviço para obter todos os endereços associados ao usuário autenticado com base em suas informações.
            const response = await address_services.findByUser(req.user?.id as string);
            return res.status(response.status).json(response);
        } catch (error) {
            // Em caso de erro, retorna uma resposta de erro interno do servidor (código 500).
            return res.status(500).json({
                title: errors.SERVER.internal_server_error.title,
                description: errors.SERVER.internal_server_error.description,
                source: {
                    line: getCurrentLine(),
                    pointer: __filename
                }
            });
        }
    }

}