import { v4 as uuidv4 } from 'uuid';
import { sequelize } from '../connections/pg';
import { errors } from '../constants/errors';
import { success } from '../constants/success';
import { Inventory } from '../models/Inventory';
import { OrderProduct } from "../models/OrderProduct";
import { IOrderProduct } from "../interfaces/IOrderProduct";

export const order_product_services = {
    
    /**
     * Cria um novo produto do pedido e atualiza o inventário correspondente.
     * 
     * @param {IOrderProduct} data - Os dados do produto do pedido a serem criados.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async store(data: IOrderProduct) {
        const transaction = await sequelize.transaction();

        try {
            // Cria um novo produto do pedido no banco de dados.
            const order_product = await OrderProduct.create({
                id: uuidv4(),
                order_id: data.order_id,
                product_id: data.product_id,
                quantity: data.quantity
            }, { transaction });

            // Encontra o registro de inventário correspondente ao produto.
            const product_inventory = await Inventory.findByPk(data.product_id, { transaction });

            // Verifica se o inventário existe.
            if (!product_inventory) {
                // Se não existir, reverte a transação e retorna um erro.
                transaction.rollback();
                return {
                    status: 400,
                    error: {
                        title: "Inventário não existe"
                    } 
                };
            }

            // Verifica se há estoque suficiente para a quantidade solicitada.
            if (product_inventory.amount < data.quantity) {
                // Se não houver estoque suficiente, reverte a transação e retorna um erro.
                transaction.rollback();
                return {
                    status: 400,
                    error: {
                        title: "Estoque insuficiente."
                    }
                };
            }

            // Calcula a nova quantidade no inventário após a venda.
            const new_amount = product_inventory.amount - data.quantity;

            // Atualiza o inventário com a nova quantidade.
            await product_inventory.update(
                { amount: new_amount },
                { transaction }
            );

            // Confirma a transação.
            await transaction.commit();

            return {
                status: 201,
                success: {
                    title: success.ORDER_PRODUCT.order_product_created_successfully,
                    data: order_product
                }
            };

        } catch (error) {
            // Em caso de erro, reverte a transação e retorna um erro.
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
};