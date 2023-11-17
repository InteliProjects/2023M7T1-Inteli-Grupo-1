import { Model } from "sequelize";

// Definindo a interface IProduct que estende o Model do Sequelize
export interface IProduct extends Model {
    id: string; // Identificador único do produto (geralmente UUID)
    name: string; // Nome do produto
    description: string; // Descrição do produto
    discount_price: number; // Preço com desconto do produto
    installments_price: number; // Preço em parcelas do produto
    unit_price: number; // Preço unitário do produto
    image_url: string; // URL da imagem do produto
}