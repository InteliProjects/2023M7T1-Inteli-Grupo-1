import { errors } from "../constants/errors";
import { IAddress } from "../interfaces/IAddress";
import { Address } from "../models/Address";

import { v4 as uuidv4 } from 'uuid';
import validator from "validator";
import { User } from "../models/User";
import { success } from "../constants/success";

/**
 * Serviço para manipular operações relacionadas a endereços.
 */
export const address_services = {

    /**
     * Cria um novo endereço para um usuário.
     * @param {IAddress} data - Dados do endereço a serem criados.
     * @param {string} user_id - Identificador único do usuário associado ao endereço.
     * @returns {Promise<object>} - Um objeto com informações sobre o resultado da operação.
     * @throws {object} - Retorna um objeto de erro se ocorrer um problema durante a operação.
     */
    async store(data: IAddress, user_id: string) {

        try {
            // Verifica se o usuário com o ID fornecido existe.
            const existing_user = await User.findByPk(user_id);

            if (!existing_user) {
                return {
                    status: 400,
                    error: {
                        title: errors.USER.no_user_found.title,
                        description: errors.USER.no_user_found.description
                    }
                };
            }

            // Cria um novo registro de endereço com os dados fornecidos.
            const address = await Address.create({
                id: uuidv4(),
                street: data.street,
                number: data.number,
                city: data.city,
                neighborhood: data.neighborhood,
                state: data.state,
                zip_code: data.zip_code,
                user_id: user_id
            });

            return {
                status: 201,
                success: {
                    title: success.ADDRESS.address_created_successfully,
                    data: address
                }
            };

        } catch (error) {
            return {
                status: 400,
                error: {
                    title: errors.INVALID_DATA.title,
                    description: errors.INVALID_DATA.description,
                    failure: error
                }
            };
        }
    },

    /**
     * Retorna todos os endereços cadastrados.
     * @returns {Promise<object>} - Um objeto com informações sobre o resultado da operação.
     * @throws {object} - Retorna um objeto de erro se ocorrer um problema durante a operação.
     */
    async findAll() {
        const addresses = await Address.findAll();

        return {
            status: 200,
            success: {
                title: success.ADDRESS.addresses_found_successfully,
                data: addresses
            }
        };
    },

    /**
     * Retorna todos os endereços associados a um usuário específico.
     * @param {string} user_id - Identificador único do usuário.
     * @returns {Promise<object>} - Um objeto com informações sobre o resultado da operação.
     * @throws {object} - Retorna um objeto de erro se ocorrer um problema durante a operação.
     */
    async findByUser(user_id: string) {
        const addresses = await Address.findAll({
            where: {
                user_id: user_id
            }
        });

        return {
            status: 200,
            success: {
                title: success.ADDRESS.addresses_found_successfully,
                data: addresses
            }
        };
    }
};