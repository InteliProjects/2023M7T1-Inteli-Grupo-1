import { DataTypes } from "sequelize";
import { sequelize } from "../connections/pg";
import { IInventory } from "../interfaces/IInventory";

/**
 * Define o modelo Sequelize para a tabela "Inventory".
 * @param {string} product_id - Identificador único do produto associado ao inventário.
 * @param {number} amount - Quantidade em estoque do produto (padrão: 0).
 * @returns {IInventory} - Modelo Sequelize para a tabela "Inventory".
 */
export const Inventory = sequelize.define<IInventory>("Inventory", {
    product_id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: "inventory",
    timestamps: false
});