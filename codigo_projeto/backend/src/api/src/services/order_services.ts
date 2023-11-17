import { errors } from '../constants/errors';
import { success } from '../constants/success';
import { Order } from "../models/Order";
import { IOrder } from "../interfaces/IOrder";
import { v4 as uuidv4 } from 'uuid';
import { sequelize } from '../connections/pg';
import { QueryTypes } from 'sequelize';

export const order_services = {
    
    /**
     * Filtra e retorna todos os pedidos de um usuário com base no ID do usuário.
     * 
     * @param {string} user_id - O ID do usuário para o qual os pedidos são filtrados.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async filterMyOrders(user_id: string) {
        try {
            const orders = await sequelize.query(
                `
                SELECT
                    o.id AS order_id,
                    o.purchase_date,
                    p.name,
                    p.unit_price,
                    a.street,
                    a.number
                FROM
                    "order" o
                INNER JOIN
                    product p
                ON
                    o.product_id = p.id
                INNER JOIN 
                    address a
                ON 
                    a.id = o.address_id
                WHERE
                    o.user_id = :user_id
                `,
                {
                    replacements: { user_id },
                    type: QueryTypes.SELECT,
                }
            );

            return {
                status: 200,
                success: {
                    title: success.ORDER.orders_found_successfully,
                    data: orders
                }
            }
        } catch (error) {
            return {
                status: 400,
                error: {
                    title: errors.INVALID_DATA.title,
                    description: errors.INVALID_DATA.description,
                    failure: error
                }
            }
        }
    },

    /**
     * Filtra e retorna um pedido com base no ID do pedido.
     * 
     * @param {string} id - O ID do pedido a ser filtrado.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async filterById(id: string) {
        try {
            const order = await sequelize.query(
                `
                SELECT
                    o.id AS order_id,
                    o.purchase_date,
                    p.name,
                    p.unit_price
                FROM
                    "order" o
                INNER JOIN
                    product p
                ON
                    o.product_id = p.id
                WHERE
                    o.id = :id
                `,
                {
                    replacements: { id },
                    type: QueryTypes.SELECT,
                }
            );

            return {
                status: 201,
                success: {
                    title: success.ORDER.order_found_successfully,
                    data: order
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
     * Cria um novo pedido com os dados fornecidos.
     * 
     * @param {IOrder} data - Os dados do pedido a serem criados.
     * @param {string} user_id - O ID do usuário que está criando o pedido.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async store(data: IOrder, user_id: string) {
        try {
            const order = await Order.create({
                id: uuidv4(),
                user_id: user_id,
                purchase_date: new Date(),
                address_id: data.address_id,
                plan_id: data.plan_id,
                product_id: data.product_id,
                status: "Pendente"
            });

            return {
                status: 201,
                success: {
                    title: success.ORDER.order_created_successfully,
                    data: order
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
     * Exclui um pedido com base no seu ID.
     * 
     * @param {string} id - O ID do pedido a ser excluído.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async delete(id: string) {
        await Order.destroy({ where: { id: id } });
        return {
            status: 204
        };
    }
}