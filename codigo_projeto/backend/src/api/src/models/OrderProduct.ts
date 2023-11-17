import { IOrderProduct } from "../interfaces/IOrderProduct";
import { sequelize } from '../connections/pg';
import { DataTypes } from "sequelize";

/**
 * Define o modelo Sequelize para a tabela "OrderProduct".
 * @param {string} id - Identificador único do registro de pedido de produto.
 * @param {string} order_id - Identificador único do pedido associado.
 * @param {string} product_id - Identificador único do produto associado.
 * @param {number} quantity - Quantidade do produto no pedido.
 * @returns {IOrderProduct} - Modelo Sequelize para a tabela "OrderProduct".
 */
export const OrderProduct = sequelize.define<IOrderProduct>("OrderProduct", {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    order_id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        references: {
            model: "Order"
        }
    },
    product_id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        references: {
            model: "Product"
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "order_product",
    timestamps: false
});