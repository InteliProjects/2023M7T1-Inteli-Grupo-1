import { Model } from "sequelize";

/**
 * Interface que define a estrutura de um modelo de dados para um endereço.
 */
export interface IAddress extends Model {
    /**
     * Identificador único do endereço.
     */
    id: string;

    /**
     * Nome da rua ou logradouro do endereço.
     */
    street: string;

    /**
     * Número do endereço.
     */
    number: number;

    /**
     * Bairro ou localidade do endereço.
     */
    neighborhood: string;

    /**
     * Código postal do endereço.
     */
    zip_code: string;

    /**
     * Cidade do endereço.
     */
    city: string;

    /**
     * Estado do endereço.
     */
    state: string;
}