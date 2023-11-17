import { ICartItem } from "../interfaces/ICartItem";
import { sequelize } from '../connections/pg';
import { DataTypes } from "sequelize";

/**
 * Define o modelo Sequelize para a tabela "CartItem".
 * @param {string} id - Identificador único do item do carrinho.
 * @param {string} cart_id - Identificador único do carrinho ao qual o item pertence.
 * @param {string} product_id - Identificador único do produto associado ao item.
 * @param {number} quantity - Quantidade do produto no carrinho (padrão: 1).
 * @returns {ICartItem} - Modelo Sequelize para a tabela "CartItem".
 */
export const CartItem = sequelize.define<ICartItem>("CartItem", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    cart_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Cart",
            key: "id"
        }
    },
    product_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Product",
            key: "id"
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {
    tableName: "cart_item",
    timestamps: false
});