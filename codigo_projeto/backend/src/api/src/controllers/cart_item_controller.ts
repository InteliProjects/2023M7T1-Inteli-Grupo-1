import { Request, Response, NextFunction } from "express";
import { cart_item_services } from "../services/cart_item_services";
import { errors } from "../constants/errors";
import getCurrentLine from "get-current-line";

/**
 * Controlador de itens de carrinho que lida com operações relacionadas a itens de carrinho.
 */
export const cart_item_controller = {

    /**
     * Adiciona um novo item ao carrinho.
     * 
     * @param req - Objeto de solicitação do Express contendo os detalhes do item a ser adicionado no corpo.
     * @param res - Objeto de resposta do Express para enviar o resultado da adição como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com o resultado da adição do item ou uma resposta de erro interno do servidor.
     */
    async store(req: Request, res: Response, next: NextFunction) {
        try {
            // Chama o serviço para adicionar um novo item ao carrinho com base nos detalhes fornecidos.
            const response = await cart_item_services.store(req.body);
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
     * Lista todos os itens de um carrinho específico.
     * 
     * @param req - Objeto de solicitação do Express contendo o ID do carrinho nos parâmetros.
     * @param res - Objeto de resposta do Express para enviar a lista de itens como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com a lista de itens do carrinho ou uma resposta de erro interno do servidor.
     */
    async list(req: Request, res: Response, next: NextFunction) {
        try {
            // Obtém o ID do carrinho dos parâmetros da solicitação.
            const cartId = req.params.cartId;

            // Chama o serviço para listar todos os itens do carrinho com base no ID do carrinho.
            const response = await cart_item_services.list(cartId);

            // Retorna a lista de itens do carrinho como uma resposta JSON.
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
     * Exclui um item específico do carrinho.
     * 
     * @param req - Objeto de solicitação do Express contendo o ID do item a ser excluído nos parâmetros.
     * @param res - Objeto de resposta do Express para enviar o resultado da exclusão como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com o resultado da exclusão do item ou uma resposta de erro interno do servidor.
     */
    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            // Obtém o ID do item a ser excluído dos parâmetros da solicitação.
            const itemId = req.params.itemId;

            // Chama o serviço para excluir o item específico do carrinho com base no ID do item.
            const response = await cart_item_services.delete(itemId);

            // Retorna o resultado da exclusão como uma resposta JSON.
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
     * Atualiza os detalhes de um item específico no carrinho.
     * 
     * @param req - Objeto de solicitação do Express contendo o ID do item a ser atualizado nos parâmetros e os novos detalhes no corpo.
     * @param res - Objeto de resposta do Express para enviar o resultado da atualização como JSON.
     * @param next - Callback opcional para passar o controle ao próximo middleware.
     * @returns Uma resposta JSON com o resultado da atualização do item ou uma resposta de erro interno do servidor.
     */
    async update(req: Request, res: Response, next: NextFunction) {
        try {
            // Obtém o ID do item a ser atualizado dos parâmetros da solicitação.
            const itemId = req.params.itemId;

            // Chama o serviço para atualizar os detalhes do item específico no carrinho com base no ID do item e nos novos detalhes fornecidos.
            const response = await cart_item_services.update(itemId, req.body);

            // Retorna o resultado da atualização como uma resposta JSON.
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

}