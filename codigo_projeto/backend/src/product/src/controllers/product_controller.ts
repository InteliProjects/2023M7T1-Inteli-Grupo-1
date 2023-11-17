import { Request, Response, NextFunction } from "express";
import getCurrentLine from "get-current-line";

import { errors } from "../constants/errors";
import { product_services } from "../services/product_services";

export const product_controller = {
    /**
     * Função de controlador para armazenar um novo produto.
     *
     * @param {Request} req - Objeto de solicitação Express.
     * @param {Response} res - Objeto de resposta Express.
     * @param {NextFunction} next - Próxima função do middleware.
     * @returns {Promise<Response>} - Resposta JSON com status e dados.
     */
    async store(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await product_services.store(req.body);
            return res.status(response.status).json(response);
        } catch (error) {
            return res.status(500).json({
                title: errors.internal_server_error.title,
                description: errors.internal_server_error.description,
                source: {
                    line: getCurrentLine(),
                    pointer: __filename
                }
            });
        }
    },

    /**
     * Função de controlador para atualizar um produto existente.
     *
     * @param {Request} req - Objeto de solicitação Express.
     * @param {Response} res - Objeto de resposta Express.
     * @param {NextFunction} next - Próxima função do middleware.
     * @returns {Promise<Response>} - Resposta JSON com status e dados.
     */
    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await product_services.update(req.body);
            return res.status(response.status).json(response);
        } catch (error) {
            return res.status(500).json({
                title: errors.internal_server_error.title,
                description: errors.internal_server_error.description,
                source: {
                    line: getCurrentLine(),
                    pointer: __filename
                }
            });
        }
    },

    /**
     * Função de controlador para listar todos os produtos.
     *
     * @param {Request} req - Objeto de solicitação Express.
     * @param {Response} res - Objeto de resposta Express.
     * @param {NextFunction} next - Próxima função do middleware.
     * @returns {Promise<Response>} - Resposta JSON com status e dados.
     */
    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await product_services.findAll();
            return res.status(response.status).json(response);
        } catch (error) {
            return res.status(500).json({
                title: errors.internal_server_error.title,
                description: errors.internal_server_error.description,
                source: {
                    line: getCurrentLine(),
                    pointer: __filename,
                    failure: error
                }
            });
        }
    },

    /**
     * Função de controlador para encontrar um produto por ID.
     *
     * @param {Request} req - Objeto de solicitação Express.
     * @param {Response} res - Objeto de resposta Express.
     * @param {NextFunction} next - Próxima função do middleware.
     * @returns {Promise<Response>} - Resposta JSON com status e dados.
     */
    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await product_services.findById(req.params.id);
            return res.status(response.status).json(response);
        } catch (error) {
            return res.status(500).json({
                title: errors.internal_server_error.title,
                description: errors.internal_server_error.description,
                source: {
                    line: getCurrentLine(),
                    pointer: __filename
                }
            });
        }
    },

    /**
     * Função de controlador para filtrar produtos por categoria.
     *
     * @param {Request} req - Objeto de solicitação Express.
     * @param {Response} res - Objeto de resposta Express.
     * @param {NextFunction} next - Próxima função do middleware.
     * @returns {Promise<Response>} - Resposta JSON com status e dados.
     */
    async filterByCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await product_services.filterByCategory(req.params.category);
            return res.status(response.status).json(response);
        } catch (error) {
            return res.status(500).json({
                title: errors.internal_server_error.title,
                description: errors.internal_server_error.description,
                source: {
                    line: getCurrentLine(),
                    pointer: __filename
                }
            });
        }
    },

    /**
     * Função de controlador para filtrar produtos por consulta.
     *
     * @param {Request} req - Objeto de solicitação Express.
     * @param {Response} res - Objeto de resposta Express.
     * @param {NextFunction} next - Próxima função do middleware.
     * @returns {Promise<Response>} - Resposta JSON com status e dados.
     */
    async filter(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await product_services.filter(req.params.query);
            return res.status(response.status).json(response);
        } catch (error) {
            return res.status(500).json({
                title: errors.internal_server_error.title,
                description: errors.internal_server_error.description,
                source: {
                    line: getCurrentLine(),
                    pointer: __filename
                }
            });
        }
    }
};