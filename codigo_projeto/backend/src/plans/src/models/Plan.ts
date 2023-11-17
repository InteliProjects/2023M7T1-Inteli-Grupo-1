import { IPlan } from "../interfaces/IPlan";
import { sequelize } from '../connections/pg';
import { DataTypes } from "sequelize";

/**
 * Define o modelo da tabela Plan usando o método 'define' do Sequelize.
 * @param {string} name - Nome da tabela no banco de dados.
 * @param {object} attributes - Define as colunas da tabela e seus tipos de dados.
 * @param {object} options - Configurações adicionais para o modelo.
 * @returns {Model} - Retorna o modelo da tabela Plan.
 */
export const Plan = sequelize.define<IPlan>("Plan", {
    id: {
        type: DataTypes.UUIDV4, // Define o tipo de dados da coluna como UUID.
        primaryKey: true // Define a coluna como chave primária.
    },
    name: {
        type: DataTypes.TEXT, // Define o tipo de dados da coluna como texto.
        allowNull: false // Define que a coluna não pode ter valores nulos.
    },
    description: {
        type: DataTypes.TEXT, // Define o tipo de dados da coluna como texto.
        allowNull: false // Define que a coluna não pode ter valores nulos.
    },
    debit_fee: {
        type: DataTypes.FLOAT, // Define o tipo de dados da coluna como número decimal de ponto flutuante.
        allowNull: false // Define que a coluna não pode ter valores nulos.
    },
    credit_fee: {
        type: DataTypes.FLOAT, // Define o tipo de dados da coluna como número decimal de ponto flutuante.
        allowNull: false // Define que a coluna não pode ter valores nulos.
    },
    installments_fee: {
        type: DataTypes.FLOAT, // Define o tipo de dados da coluna como número decimal de ponto flutuante.
        allowNull: false // Define que a coluna não pode ter valores nulos.
    }
}, {
    tableName: "plan", // Define o nome da tabela no banco de dados.
    timestamps: false // Desativa a criação automática de colunas 'createdAt' e 'updatedAt'.
});