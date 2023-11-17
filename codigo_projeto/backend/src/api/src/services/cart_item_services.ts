import { v4 as uuidv4 } from 'uuid';
import { sequelize } from '../connections/pg';
import { errors } from '../constants/errors';
import { success } from '../constants/success';
import { CartItem } from '../models/CartItem';
import { ICartItem } from '../interfaces/ICartItem';

export const cart_item_services = {
    
    /**
     * Cria um novo item de carrinho.
     * 
     * @param {ICartItem} data - Os dados do item do carrinho a serem criados.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async store(data: ICartItem) {
        const transaction = await sequelize.transaction();

        try {
            // Cria um novo item de carrinho no banco de dados.
            const cart_item = await CartItem.create({
                id: uuidv4(),
                cart_id: data.cart_id,
                product_id: data.product_id,
                quantity: data.quantity
            }, { transaction });

            // Confirma a transação.
            await transaction.commit();

            return {
                status: 201,
                success: {
                    title: success.CART_ITEM.cart_item_created_successfully,
                    data: cart_item
                }
            };
        } catch (error) {
            // Em caso de erro, reverte a transação.
            await transaction.rollback();

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
     * Lista os itens de carrinho com base no ID do carrinho.
     * 
     * @param {string} cartId - O ID do carrinho a ser usado para buscar os itens.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async list(cartId: string) {
        try {
            // Busca todos os itens de carrinho associados ao carrinho com o ID fornecido.
            const cartItems = await CartItem.findAll({
                where: { cart_id: cartId }
            });
    
            return {
                status: 200,
                success: {
                    title: success.CART_ITEM.cart_items_listed_successfully,
                    data: cartItems
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
     * Exclui um item de carrinho com base no seu ID.
     * 
     * @param {string} itemId - O ID do item de carrinho a ser excluído.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async delete(itemId: string) {
        try {
            // Exclui o item de carrinho com o ID fornecido.
            const deletedItem = await CartItem.destroy({
                where: { id: itemId }
            });
    
            if (deletedItem > 0) {
                return {
                    status: 200,
                    success: {
                        title: success.CART_ITEM.cart_item_deleted_successfully
                    }
                };
            } else {
                return {
                    status: 404,
                    error: {
                        title: errors.NOT_FOUND.title,
                        description: errors.NOT_FOUND.description
                    }
                };
            }
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
     * Atualiza um item de carrinho com base no seu ID.
     * 
     * @param {string} itemId - O ID do item de carrinho a ser atualizado.
     * @param {ICartItem} data - Os novos dados a serem atribuídos ao item de carrinho.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async update(itemId: string, data: ICartItem) {
        try {
            // Atualiza o item de carrinho com o ID fornecido com os novos dados.
            const updatedItem = await CartItem.update(data, {
                where: { id: itemId }
            });
    
            if (updatedItem[0] > 0) {
                return {
                    status: 200,
                    success: {
                        title: success.CART_ITEM.cart_item_updated_successfully
                    }
                };
            } else {
                return {
                    status: 404,
                    error: {
                        title: errors.NOT_FOUND.title,
                        description: errors.NOT_FOUND.description
                    }
                };
            }
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
}