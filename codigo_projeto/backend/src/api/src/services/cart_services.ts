import { errors } from '../constants/errors';
import { success } from '../constants/success';
import { Cart } from "../models/Cart";
import { ICart } from "../interfaces/ICart";
import { v4 as uuidv4 } from 'uuid';

export const cart_services = {

    /**
     * Cria um novo carrinho para um usuário com o ID especificado.
     * 
     * @param {string} user_id - O ID do usuário para o qual o carrinho será criado.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async createCart(user_id: string) {
        try {
            // Cria um novo carrinho no banco de dados.
            const cart = await Cart.create({
                id: uuidv4(),
                user_id: user_id,
                status: "Ativo" // Adicione o status padrão apropriado
            });

            return {
                status: 201,
                success: {
                    title: success.CART.cart_created_successfully,
                    data: cart
                }
            };
        } catch (error) {
            return {
                status: 400,
                error: {
                    title: errors.INVALID_DATA.title,
                    description: errors.INVALID_DATA.description,
                    failure: error
                }
            };
        }
    },

    /**
     * Obtém um carrinho pelo seu ID.
     * 
     * @param {string} cartId - O ID do carrinho a ser obtido.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async getCartById(cartId: string) {
        try {
            // Busca um carrinho pelo seu ID.
            const cart = await Cart.findByPk(cartId);

            if (!cart) {
                return {
                    status: 404,
                    error: {
                        title: errors.NOT_FOUND.title,
                        description: errors.NOT_FOUND.description
                    }
                };
            }

            return {
                status: 200,
                success: {
                    title: success.CART.cart_found_successfully,
                    data: cart
                }
            };
        } catch (error) {
            return {
                status: 400,
                error: {
                    title: errors.INVALID_DATA.title,
                    description: errors.INVALID_DATA.description,
                    failure: error
                }
            };
        }
    },

    /**
     * Atualiza o status de um carrinho pelo seu ID.
     * 
     * @param {string} cartId - O ID do carrinho a ser atualizado.
     * @param {string} status - O novo status a ser atribuído ao carrinho.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async updateCartStatus(cartId: string, status: string) {
        try {
            // Busca um carrinho pelo seu ID.
            const cart = await Cart.findByPk(cartId);

            if (!cart) {
                return {
                    status: 404,
                    error: {
                        title: errors.NOT_FOUND.title,
                        description: errors.NOT_FOUND.description
                    }
                };
            }

            // Atualiza o status do carrinho e salva no banco de dados.
            cart.status = status;
            await cart.save();

            return {
                status: 200,
                success: {
                    title: success.CART.cart_updated_successfully,
                    data: cart
                }
            };
        } catch (error) {
            return {
                status: 400,
                error: {
                    title: errors.INVALID_DATA.title,
                    description: errors.INVALID_DATA.description,
                    failure: error
                }
            };
        }
    },

    /**
     * Exclui um carrinho pelo seu ID.
     * 
     * @param {string} cartId - O ID do carrinho a ser excluído.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async deleteCart(cartId: string) {
        try {
            // Busca um carrinho pelo seu ID.
            const cart = await Cart.findByPk(cartId);

            if (!cart) {
                return {
                    status: 404,
                    error: {
                        title: errors.NOT_FOUND.title,
                        description: errors.NOT_FOUND.description
                    }
                };
            }

            // Exclui o carrinho do banco de dados.
            await cart.destroy();

            return {
                status: 204
            };
        } catch (error) {
            return {
                status: 400,
                error: {
                    title: errors.INVALID_DATA.title,
                    description: errors.INVALID_DATA.description,
                    failure: error
                }
            };
        }
    }
}