import { Model } from "sequelize";

/**
 * Interface que define a estrutura de um modelo de dados para planos de pagamento.
 */
export interface IPlan extends Model {
    /**
     * Identificador único do plano.
     */
    id: string;

    /**
     * Nome do plano de pagamento.
     */
    name: string;

    /**
     * Descrição detalhada do plano.
     */
    description: string;

    /**
     * Taxa para pagamento com débito associada ao plano.
     */
    debit_fee: number;

    /**
     * Taxa para pagamento com crédito associada ao plano.
     */
    credit_fee: number;

    /**
     * Taxa de parcelamento associada ao plano.
     */
    installments_fee: number;
}