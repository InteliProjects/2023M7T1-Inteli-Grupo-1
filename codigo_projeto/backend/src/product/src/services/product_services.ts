import { errors } from '../constants/errors';
import { success } from '../constants/success';
import { IProduct } from '../interfaces/IProduct';
import { Product } from '../models/Product';

import { v4 as uuidv4 } from 'uuid';

import validator from 'validator';
import { Op } from 'sequelize';

export const product_services = {

    /**
     * Cria um novo produto.
     *
     * @param {IProduct} data - Os dados do produto a serem criados.
     * @returns {Object} - Um objeto com informações sobre a criação do produto.
     */
    async store(data: IProduct) {

        try {

            const valid_url = validator.isURL(data.image_url);

            if (!valid_url) {

                return {
                    status: 400,
                    error: {
                        title: errors.invalid_image_url.title,
                        description: errors.invalid_image_url.description
                    }
                };

            }

            const product = await Product.create({
                id: uuidv4(), // Gere um novo ID único para o produto
                name: data.name,
                description: data.description,
                discount_price: data.discount_price,
                unit_price: data.unit_price,
                installments_price: data.installments_price,
                image_url: data.image_url,
            });

            return {
                status: 201,
                success: {
                    title: success.product_created_successfully,
                    data: product
                }
            };

        } catch (error) {

            return {
                status: 400,
                error: {
                    title: errors.invalid_data.title,
                    description: errors.invalid_data.description,
                    failure: error
                }
            };

        }

    },

    /**
     * Atualiza um produto existente.
     *
     * @param {IProduct} data - Os dados do produto a serem atualizados.
     * @returns {Object} - Um objeto com informações sobre a atualização do produto.
     */
    async update(data: IProduct) {

        await Product.update({
            name: data.name,
            description: data.description,
            unit_price: data.unit_price,
            image_url: data.image_url
        }, {
            where: {
                id: data.id
            }
        });

        return {
            status: 204
        };

    },

    /**
     * Retorna todos os produtos.
     *
     * @returns {Object} - Um objeto com informações sobre os produtos encontrados.
     */
    async findAll() {

        const products = await Product.findAll();

        return {
            status: 200,
            success: {
                title: success.products_found_successfully,
                data: products
            }
        }

    },

    /**
     * Retorna um produto pelo ID.
     *
     * @param {string} id - O ID do produto a ser encontrado.
     * @returns {Object} - Um objeto com informações sobre o produto encontrado.
     */
    async findById(id: string) {

        try {

            const product = await Product.findByPk(id);

            if (!product) {

                return {
                    status: 404,
                    error: {
                        title: errors.product_not_found.title,
                        description: errors.product_not_found.description
                    }
                }

            };

            return {
                status: 200,
                success: {
                    title: success.product_found_successfully,
                    data: product
                }
            };

        } catch (error) {

            return {
                status: 400,
                error: {
                    title: errors.invalid_data.title,
                    description: errors.invalid_data.description,
                    failure: error
                }
            };

        }

    },

    /**
     * Filtra produtos por categoria.
     *
     * @param {string} category - A categoria pela qual os produtos devem ser filtrados.
     * @returns {Object} - Um objeto com informações sobre os produtos encontrados.
     */
    async filterByCategory(category: string) {

        try {

            const products = await Product.findAll({
                where: {
                    category: category
                }
            });

            return {
                status: 200,
                success: { 
                    title: success.products_found_successfully,
                    data: products
                }
            };

        } catch (error) {

            return {
                status: 400,
                error: {
                    title: errors.invalid_data.title,
                    description: errors.invalid_data.description,
                    failure: error
                }
            };

        }        

    },

    /**
     * Filtra produtos por consulta.
     *
     * @param {string} query - A consulta usada para filtrar produtos por nome, categoria ou descrição.
     * @returns {Object} - Um objeto com informações sobre os produtos encontrados.
     */
    async filter(query: string) {

        try {

            const products = await Product.findAll({
                where: {
                    [Op.or]: [
                        { name: { [Op.iLike]: `%${query}%` } },
                        { category: { [Op.iLike]: `%${query}%` } },
                        { description: { [Op.iLike]: `%${query}%` } }
                    ]
                }
            });

            return {
                status: 200,
                success: {
                    title: success.products_found_successfully,
                    data: products
                }
            };

        } catch (error) {

            return {
                status: 400,
                error: {
                    title: errors.invalid_data.title,
                    description: errors.invalid_data.description,
                    failure: error
                }
            };

        }

    }

}