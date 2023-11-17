import { Model } from "sequelize";

/**
 * Interface que define a estrutura de um modelo de dados para pedidos de produtos.
 */
export interface IOrder extends Model {
    /**
     * Identificador único do pedido.
     */
    id: string;

    /**
     * Identificador único do usuário que fez o pedido.
     */
    user_id: string;

    /**
     * Identificador único do produto associado ao pedido.
     */
    product_id: string;

    /**
     * Data de compra do pedido.
     */
    purchase_date: Date;

    /**
     * Identificador único do plano associado ao pedido.
     */
    plan_id: string;

    /**
     * Identificador único do endereço de entrega do pedido.
     */
    address_id: string;

    /**
     * Status do pedido, que pode ser um dos seguintes: "Pendente", "Confirmado", "Enviado" ou "Entregue".
     */
    status: "Pendente" | "Confirmado" | "Enviado" | "Entregue";
}