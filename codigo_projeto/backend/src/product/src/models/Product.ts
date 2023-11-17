import { IProduct } from "../interfaces/IProduct";
import { sequelize } from '../connections/pg';
import { DataTypes } from "sequelize";

// Define o modelo de dados para a tabela "product" usando Sequelize
const Product = sequelize.define<IProduct>("product", {
    id: {
        type: DataTypes.TEXT,          // Tipo de dado para a coluna "id"
        primaryKey: true              // Indica que esta coluna é a chave primária da tabela
    },
    name: {
        type: DataTypes.TEXT,          // Tipo de dado para a coluna "name"
        allowNull: false              // Impede valores nulos nesta coluna
    },
    discount_price: {
        type: DataTypes.DECIMAL,      // Tipo de dado para a coluna "discount_price"
        allowNull: false              // Impede valores nulos nesta coluna
    },
    unit_price: {
        type: DataTypes.DECIMAL,      // Tipo de dado para a coluna "unit_price"
        allowNull: false              // Impede valores nulos nesta coluna
    },
    installments_price: {
        type: DataTypes.DECIMAL,      // Tipo de dado para a coluna "installments_price"
        allowNull: false              // Impede valores nulos nesta coluna    
    },
    image_url: {
        type: DataTypes.TEXT          // Tipo de dado para a coluna "image_url"
    }
}, {
    tableName: "product",             // Nome da tabela no banco de dados
    timestamps: false                 // Indica que não há colunas de timestamp (created_at, updated_at)
});

export { Product };                   // Exporta o modelo de dados "Product" para uso em outros módulos