import { Model } from "sequelize";

/**
 * Interface que define a estrutura de um modelo de dados para usuários.
 */
export interface IUser extends Model {
    /**
     * Identificador único do usuário (opcional).
     */
    id?: string;

    /**
     * Nome do usuário.
     */
    name: string;

    /**
     * Data de nascimento do usuário (como uma string).
     */
    birthdate: string;

    /**
     * Endereço de e-mail do usuário.
     */
    email: string;

    /**
     * Senha do usuário.
     */
    password: string;

    /**
     * Um valor numérico representando o estado de ativação do usuário.
     */
    active: number;
}