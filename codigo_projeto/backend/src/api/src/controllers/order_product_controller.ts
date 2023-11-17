import { Request, Response, NextFunction } from "express";
import { order_product_services } from "../services/order_product_services";
import { errors } from "../constants/errors";
import getCurrentLine from "get-current-line";

/**
 * @param req - Objeto de solicitação do Express.
 * @param res - Objeto de resposta do Express.
 * @param next - Callback opcional para passar o controle ao próximo middleware.
 * @returns Uma resposta JSON com base no resultado do serviço ou uma resposta de erro interno do servidor.
 */
export const order_product_controller = {
    async store(req: Request, res: Response, next: NextFunction) {
        try {
            // Chama o serviço "order_product_services.store" passando o corpo da requisição (req.body)
            const response = await order_product_services.store(req.body);

            // Retorna uma resposta JSON com base no resultado do serviço
            return res.status(response.status).json(response);
        } catch (error) {
            // Em caso de erro, retorna uma resposta de erro interno do servidor (código 500)
            return res.status(500).json({
                // Define o título do erro
                title: errors.SERVER.internal_server_error.title,
                // Define a descrição do erro
                description: errors.SERVER.internal_server_error.description,
                // Obtém a linha do código-fonte onde ocorreu o erro
                source: {
                    line: getCurrentLine(),
                    // Obtém o nome do arquivo onde ocorreu o erro
                    pointer: __filename
                }
            });
        }
    },
}
