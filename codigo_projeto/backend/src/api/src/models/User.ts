import { IUser } from "../interfaces/IUser";
import { sequelize } from '../connections/pg';
import { DataTypes } from "sequelize";

/**
 * Define o modelo Sequelize para a tabela "User".
 * @param {string} id - Identificador único do usuário.
 * @param {string} name - Nome do usuário.
 * @param {Date} birthdate - Data de nascimento do usuário.
 * @param {string} email - Endereço de e-mail do usuário.
 * @param {string} password - Senha do usuário.
 * @param {boolean} active - Indica se o usuário está ativo.
 * @returns {IUser} - Modelo Sequelize para a tabela "User".
 */
export const User = sequelize.define<IUser>("User", {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "user"
});