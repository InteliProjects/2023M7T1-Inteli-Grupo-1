import { errors } from '../constants/errors';
import { success } from '../constants/success';
import { Inventory } from "../models/Inventory";
import { IInventory } from '../interfaces/IInventory';

export const inventory_services = {

    /**
     * Cria um novo registro de inventário com os dados fornecidos.
     * 
     * @param {IInventory} data - Os dados do inventário a serem criados.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async store(data: IInventory) {
        try {
            // Cria um novo registro de inventário no banco de dados.
            const inventory = await Inventory.create({
                product_id: data.product_id,
                amount: data.amount,
            });

            return {
                status: 201,
                success: {
                    title: success.INVENTORY.inventory_created_successfully,
                    data: inventory
                }
            };

        } catch (error) {
            // Em caso de erro, retorna uma resposta de erro com detalhes.
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
     * Atualiza a quantidade de um registro de inventário com base no ID do produto.
     * 
     * @param {IInventory} data - Os dados do inventário a serem atualizados, incluindo o ID do produto e a nova quantidade.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async update(data: IInventory) {
        try {
            // Atualiza a quantidade de um registro de inventário com base no ID do produto.
            await Inventory.update({ amount: data.amount }, {
                where: {
                    product_id: data.product_id
                }
            });

            return {
                status: 204
            };
        } catch (error) {
            // Em caso de erro, retorna uma resposta de erro com detalhes.
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