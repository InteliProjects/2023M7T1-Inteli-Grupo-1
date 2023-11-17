import { NextFunction, Request, Response } from "express";
import { inventory_services } from "../services/inventory_services"
import { errors } from "../constants/errors";
import getCurrentLine from "get-current-line";

export const inventory_controller = {

    /**
     * Armazena informações de inventário.
     *
     * @param {Request} req - O objeto de solicitação (Request) contendo os dados de inventário a serem armazenados.
     * @param {Response} res - O objeto de resposta (Response) para enviar a resposta HTTP.
     * @param {NextFunction} next - A próxima função de middleware (não utilizado neste caso).
     * @returns {Promise<Response>} - Uma resposta HTTP com o resultado do armazenamento das informações de inventário.
     */
    async store(req: Request, res: Response, next: NextFunction) {
        
        try {
            // Chama o serviço de inventário para armazenar as informações de inventário.
            const response = await inventory_services.store(req.body);
    
            // Retorna uma resposta HTTP com o resultado do armazenamento das informações de inventário.
            return res.status(response.status).json(response);

        } catch (error) {
            // Em caso de erro, retorna uma resposta de erro com status 500.
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
     * Atualiza informações de inventário.
     *
     * @param {Request} req - O objeto de solicitação (Request) contendo os dados de inventário a serem atualizados.
     * @param {Response} res - O objeto de resposta (Response) para enviar a resposta HTTP.
     * @returns {Promise<Response>} - Uma resposta HTTP com o resultado da atualização das informações de inventário.
     */
    async update(req: Request, res: Response) {
        
        try {
            // Chama o serviço de inventário para atualizar as informações de inventário.
            const response = await inventory_services.update(req.body);
    
            // Retorna uma resposta HTTP com o resultado da atualização das informações de inventário.
            return res.status(response.status).json(response);

        } catch (error) {
            // Em caso de erro, retorna uma resposta de erro com status 500.
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