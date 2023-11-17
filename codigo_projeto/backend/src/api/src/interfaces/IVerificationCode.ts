import { Model } from "sequelize";

/**
 * Interface que define a estrutura de um modelo de dados para códigos de verificação.
 */
export interface IVerificationCode extends Model {
    /**
     * Identificador único do código de verificação.
     */
    id: string;

    /**
     * O código de verificação em si.
     */
    code: string;

    /**
     * Um indicador booleano que indica se o código é válido ou não.
     */
    valid: boolean;

    /**
     * Data de criação do código de verificação.
     */
    created_at: Date;

    /**
     * Identificador único do usuário associado ao código de verificação.
     */
    user_id: string;
}