import { DataTypes } from "sequelize";

import { sequelize } from "../connections/pg";
import { IAddress } from "../interfaces/IAddress";

/**
 * Define o modelo Sequelize para a tabela "Address".
 * @param {string} id - Identificador único do endereço.
 * @param {string} street - Nome da rua.
 * @param {number} number - Número do endereço.
 * @param {string} neighborhood - Bairro do endereço.
 * @param {string} zip_code - Código postal do endereço.
 * @param {string} city - Cidade do endereço.
 * @param {string} state - Estado do endereço.
 * @param {string} user_id - Identificador único do usuário ao qual o endereço pertence.
 * @returns {IAddress} - Modelo Sequelize para a tabela "Address".
 */
export const Address = sequelize.define<IAddress>("Address", {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    street: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    neighborhood: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    zip_code: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    city: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    state: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.UUIDV4,
        allowNull: false
    }
},
{
    tableName: "address",
    timestamps: false
});