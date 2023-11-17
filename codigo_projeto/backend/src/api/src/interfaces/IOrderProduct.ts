import { Model } from 'sequelize';

/**
 * Interface que define a estrutura de um modelo de dados para itens de pedido de produtos.
 */
export interface IOrderProduct extends Model {
    /**
     * Identificador único do item de pedido.
     */
    id: string;

    /**
     * Identificador único do pedido ao qual o item pertence.
     */
    order_id: string;

    /**
     * Identificador único do produto associado ao item de pedido.
     */
    product_id: string;

    /**
     * Quantidade do produto presente no item de pedido.
     */
    quantity: number;
}