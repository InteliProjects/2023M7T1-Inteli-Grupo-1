import { IVerificationCode } from "../interfaces/IVerificationCode";
import { sequelize } from '../connections/pg';
import { DataTypes } from "sequelize";

/**
 * Define o modelo Sequelize para a tabela "VerificationCode".
 * @param {string} id - Identificador único do código de verificação.
 * @param {string} code - Código de verificação.
 * @param {boolean} valid - Indica se o código de verificação é válido.
 * @param {Date} created_at - Data de criação do código de verificação.
 * @param {string} user_id - Identificador único do usuário associado ao código de verificação.
 * @returns {IVerificationCode} - Modelo Sequelize para a tabela "VerificationCode".
 */
export const VerificationCode = sequelize.define<IVerificationCode>("VerificationCode", {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    code: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    valid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    user_id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        references: {
            model: "user",
            key: "id"
        }
    }
}, {
    tableName: "verification_code",
    timestamps: false
});