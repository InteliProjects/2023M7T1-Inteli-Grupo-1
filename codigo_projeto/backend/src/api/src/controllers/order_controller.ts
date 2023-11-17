import { Request, Response, NextFunction } from "express";
import getCurrentLine from "get-current-line";

import { errors } from "../constants/errors";
import { order_services } from "../services/order_services";
import { order_product_services } from '../services/order_product_services';
import { IAuthRequest } from "../middlewares/middlewares";

export const order_controller = {
    
    /**
     * Cria um novo pedido.
     *
     * @param {IAuthRequest} req - O objeto de solicitação (Request) contendo os dados do pedido.
     * @param {Response} res - O objeto de resposta (Response) para enviar a resposta HTTP.
     * @param {NextFunction} next - A próxima função de middleware.
     * @returns {Promise<Response>} - Uma resposta HTTP com o resultado da criação do pedido.
     */
    async store(req: IAuthRequest, res: Response, next: NextFunction) {

        try {

            const response = await order_services.store(req.body, req.user?.id as string);

            return res.status(response.status).json(response);
                            
        } catch (error) {

            return res.status(500).json({
                title: errors.SERVER.internal_server_error.title,
                description: errors.SERVER.internal_server_error.description,
                source: {
                    line: getCurrentLine(),
                    pointer: __filename
                }
            })
        }
            
    },

    /**
     * Encontra pedidos associados ao ID do usuário.
     *
     * @param {IAuthRequest} req - O objeto de solicitação (Request) contendo o ID do usuário.
     * @param {Response} res - O objeto de resposta (Response) para enviar a resposta HTTP.
     * @param {NextFunction} next - A próxima função de middleware.
     * @returns {Promise<Response>} - Uma resposta HTTP com os pedidos encontrados.
     */
    async findByUserId(req: IAuthRequest, res: Response, next: NextFunction) {

        try {

            const response = await order_services.filterMyOrders(req.user?.id as string);

            return res.status(200).json(response);
                            
        } catch (error) {

            return res.status(500).json({
                title: errors.SERVER.internal_server_error.title,
                description: errors.SERVER.internal_server_error.description,
                source: {
                    line: getCurrentLine(),
                    pointer: __filename
                }
            })
        }

    },

    /**
     * Exclui um pedido com base no ID fornecido.
     *
     * @param {Request} req - O objeto de solicitação (Request) contendo o ID do pedido a ser excluído.
     * @param {Response} res - O objeto de resposta (Response) para enviar a resposta HTTP.
     * @param {NextFunction} next - A próxima função de middleware.
     * @returns {Promise<Response>} - Uma resposta HTTP com o resultado da exclusão do pedido.
     */
    async delete(req: Request, res: Response, next: NextFunction) {

        try {

            const response = await order_services.delete(req.params.id);

            return res.status(response.status).json(response)
                            
        } catch (error) {

            return res.status(500).json({
                title: errors.SERVER.internal_server_error.title,
                description: errors.SERVER.internal_server_error.description,
                source: {
                    line: getCurrentLine(),
                    pointer: __filename
                }
            })
        }
            
    },

    /**
     * Encontra um pedido com base no ID fornecido.
     *
     * @param {IAuthRequest} req - O objeto de solicitação (Request) contendo o ID do pedido a ser encontrado.
     * @param {Response} res - O objeto de resposta (Response) para enviar a resposta HTTP.
     * @param {NextFunction} next - A próxima função de middleware.
     * @returns {Promise<Response>} - Uma resposta HTTP com o pedido encontrado.
     */
    async filterById(req: IAuthRequest, res: Response, next: NextFunction) {

        try {

            const response = await order_services.filterById(req.params.order_id as string);

            return res.status(200).json(response);
                            
        } catch (error) {

            return res.status(500).json({
                title: errors.SERVER.internal_server_error.title,
                description: errors.SERVER.internal_server_error.description,
                source: {
                    line: getCurrentLine(),
                    pointer: __filename
                }
            })
        }

    }

}