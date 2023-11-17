import { Request, Response, NextFunction } from "express";
import getCurrentLine from "get-current-line";

import { errors } from "../constants/errors";
import { cart_services } from "../services/cart_services";
import { IAuthRequest } from "../middlewares/middlewares";

/**
 * Controlador de carrinhos que lida com operações relacionadas a carrinhos de compras.
 */
export const cart_controller = {
    
    /**
     * Cria um novo carrinho para um usuário autenticado.
     * 
     * @param req - Objeto de solicitação do Express contendo informações do usuário autenticado.
     * @param res - Objeto de resposta do Express para enviar o resultado da criação do carrinho como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com o resultado da criação do carrinho ou uma resposta de erro interno do servidor.
     */
    async createCart(req: IAuthRequest, res: Response, next: NextFunction) {
        try {
            // Chama o serviço para criar um novo carrinho para o usuário autenticado.
            const response = await cart_services.createCart(req.user?.id as string);
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
     * Obtém informações sobre um carrinho com base em seu ID.
     * 
     * @param req - Objeto de solicitação do Express contendo o ID do carrinho nos parâmetros.
     * @param res - Objeto de resposta do Express para enviar as informações do carrinho como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com as informações do carrinho ou uma resposta de erro interno do servidor.
     */
    async getCartById(req: Request, res: Response, next: NextFunction) {
        try {
            // Obtém o ID do carrinho dos parâmetros da solicitação.
            const cartId = req.params.cartId;

            // Chama o serviço para obter informações sobre o carrinho com base no ID do carrinho.
            const response = await cart_services.getCartById(cartId);

            // Retorna as informações do carrinho como uma resposta JSON.
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
     * Atualiza o status de um carrinho com base em seu ID.
     * 
     * @param req - Objeto de solicitação do Express contendo o ID do carrinho nos parâmetros e o novo status no corpo.
     * @param res - Objeto de resposta do Express para enviar o resultado da atualização como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com o resultado da atualização do status do carrinho ou uma resposta de erro interno do servidor.
     */
    async updateCartStatus(req: Request, res: Response, next: NextFunction) {
        try {
            // Obtém o ID do carrinho a ser atualizado dos parâmetros da solicitação.
            const cartId = req.params.cartId;

            // Obtém o novo status do carrinho do corpo da solicitação.
            const { status } = req.body;

            // Chama o serviço para atualizar o status do carrinho com base no ID do carrinho e no novo status fornecido.
            const response = await cart_services.updateCartStatus(cartId, status);

            // Retorna o resultado da atualização do status do carrinho como uma resposta JSON.
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
     * Exclui um carrinho com base em seu ID.
     * 
     * @param req - Objeto de solicitação do Express contendo o ID do carrinho nos parâmetros.
     * @param res - Objeto de resposta do Express para enviar o resultado da exclusão como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com o resultado da exclusão do carrinho ou uma resposta de erro interno do servidor.
     */
    async deleteCart(req: Request, res: Response, next: NextFunction) {
        try {
            // Obtém o ID do carrinho a ser excluído dos parâmetros da solicitação.
            const cartId = req.params.cartId;

            // Chama o serviço para excluir o carrinho com base no ID do carrinho.
            const response = await cart_services.deleteCart(cartId);

            // Retorna o resultado da exclusão do carrinho como uma resposta JSON.
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