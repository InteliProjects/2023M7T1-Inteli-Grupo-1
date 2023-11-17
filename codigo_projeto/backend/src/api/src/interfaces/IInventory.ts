import { Model } from "sequelize";

/**
 * Interface que define a estrutura de um modelo de dados para o inventário de produtos.
 */
export interface IInventory extends Model {
    /**
     * Identificador único do produto no inventário.
     */
    product_id: string;

    /**
     * Quantidade disponível em estoque para o produto.
     */
    amount: number;
}


