import { ICart } from "../interfaces/ICart";
import { sequelize } from '../connections/pg';
import { DataTypes } from "sequelize";
import { CartItem } from "./CartItem";

/**
 * Define o modelo Sequelize para a tabela "Cart".
 * @param {string} id - Identificador único do carrinho.
 * @param {string} user_id - Identificador único do usuário associado ao carrinho.
 * @param {string} status - Status do carrinho (padrão: "Ativo").
 * @returns {ICart} - Modelo Sequelize para a tabela "Cart".
 */
const Cart = sequelize.define<ICart>("Cart", {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    status: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "Ativo"
    }
}, {
    tableName: "cart",
    timestamps: false
});

// Define uma relação entre o modelo "Cart" e o modelo "CartItem" (um carrinho pode ter muitos itens).
Cart.hasMany(CartItem, {
    foreignKey: "cart_id",
    as: "cart_items" // Alias para a relação, permitindo acesso a partir do modelo "Cart".
});

export { Cart };