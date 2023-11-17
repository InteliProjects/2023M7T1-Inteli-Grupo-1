import { Model } from 'sequelize';
import { ICartItem } from './ICartItem';

/**
 * Interface que define a estrutura de um modelo de dados para um carrinho de compras.
 */
export interface ICart extends Model {
    /**
     * Identificador único do carrinho.
     */
    id: string;

    /**
     * Identificador único do usuário associado ao carrinho.
     */
    user_id: string;

    /**
     * Array de objetos representando itens no carrinho.
     */
    cart_items: ICartItem[];
}
