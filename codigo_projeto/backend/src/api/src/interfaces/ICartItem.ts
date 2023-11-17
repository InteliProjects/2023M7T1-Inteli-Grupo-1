import { Model } from 'sequelize';

/**
 * Interface que define a estrutura de um modelo de dados para um item em um carrinho de compras.
 */
export interface ICartItem extends Model {
    /**
     * Identificador único do item no carrinho.
     */
    id: string;

    /**
     * Identificador único do carrinho ao qual o item pertence.
     */
    cart_id: string;

    /**
     * Identificador único do produto associado ao item.
     */
    product_id: string;

    /**
     * Quantidade do produto presente no item.
     */
    quantity: number;
}