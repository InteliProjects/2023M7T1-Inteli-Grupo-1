import { IOrder } from "../interfaces/IOrder";
import { sequelize } from '../connections/pg';
import { DataTypes } from "sequelize";
import { OrderProduct } from "./OrderProduct";

/**
 * Define o modelo Sequelize para a tabela "Order".
 * @param {string} id - Identificador único do pedido.
 * @param {string} user_id - Identificador único do usuário que fez o pedido.
 * @param {Date} purchase_date - Data da compra do pedido.
 * @param {string} product_id - Identificador único do produto associado ao pedido.
 * @param {string} plan_id - Identificador único do plano associado ao pedido.
 * @param {string} address_id - Identificador único do endereço de entrega do pedido.
 * @param {"Pendente" | "Confirmado" | "Enviado" | "Entregue"} status - Status do pedido (padrão: "Pendente").
 * @returns {IOrder} - Modelo Sequelize para a tabela "Order".
 */
const Order = sequelize.define<IOrder>("Order", {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    purchase_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    product_id: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
            model: "product",
            key: "id"
        }
    },
    plan_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "plan",
            key: "id"
        }
    },
    address_id: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    status: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "Pendente"
    }
}, {
    tableName: "order",
    timestamps: false
});

/**
 * Estabelece a relação "hasMany" entre o modelo "Order" e "OrderProduct".
 */
Order.hasMany(OrderProduct, {
    foreignKey: "order_id",
    as: "order_products"
});

export { Order };