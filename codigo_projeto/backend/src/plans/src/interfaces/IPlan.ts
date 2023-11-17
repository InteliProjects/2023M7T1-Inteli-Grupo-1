import { Model } from "sequelize";

/**
 * Interface que descreve a estrutura de dados de um plano.
 * Extende o modelo (Model) do Sequelize.
 */
export interface IPlan extends Model {
    /** O identificador único do plano. */
    id: string;
    
    /** O nome do plano. */
    name: string;
    
    /** A descrição do plano. */
    description: string;
    
    /** A taxa de débito associada ao plano. */
    debit_fee: number;
    
    /** A taxa de crédito associada ao plano. */
    credit_fee: number;
    
    /** A taxa de parcelamento associada ao plano. */
    installments_fee: number;
}