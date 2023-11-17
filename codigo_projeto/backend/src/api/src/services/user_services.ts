import validator from "validator";
import { v4 as uuidv4 } from 'uuid';
import { parse, format } from "date-fns";
import getCurrentLine from "get-current-line";
import { compareSync, hashSync } from 'bcrypt';

import { errors } from "../constants/errors";
import { IUser } from "../interfaces/IUser";
import { User } from "../models/User";
import { success } from "../constants/success";
import { jwt_utils } from "../utils/jwt_utils";
import { Op } from "sequelize";

export const user_services = {

    /**
     * Verifica se um número de CPF já está em uso por outro usuário.
     * 
     * @param {string} cpf - O número de CPF a ser verificado.
     * @returns {Object} - Um objeto com informações sobre o resultado da verificação.
     */
    async checkCpfInUse(cpf: string) {
        const valid_cpf = validator.isNumeric(cpf);

        if (!valid_cpf) {
            return {
                status: 400,
                error: {
                    title: errors.USER.invalid_cpf.title,
                    description: errors.USER.invalid_cpf.description
                }
            };
        }

        const existing_user = await User.findOne({
            where: {
                cpf: cpf
            }
        });

        if (existing_user) {
            return {
                status: 400,
                error: {
                    title: errors.USER.cpf_already_in_use.title,
                    description: errors.USER.cpf_already_in_use.description
                }
            };
        }

        return {
            status: 200
        }
    },

    /**
     * Verifica se um endereço de email já está em uso por outro usuário.
     * 
     * @param {string} email - O endereço de email a ser verificado.
     * @returns {Object} - Um objeto com informações sobre o resultado da verificação.
     */
    async checkEmailInUse(email: string) {
        const valid_email = validator.isEmail(email);

        if (!valid_email) {
            return {
                status: 400,
                error: {
                    title: errors.USER.invalid_email.title,
                    description: errors.USER.invalid_email.description
                }
            };
        }

        const existing_user = await User.findOne({
            where: {
                email: {
                    [Op.iLike]: `%${email}%`
                }
            }
        });

        if (existing_user) {
            return {
                status: 400,
                error: {
                    title: errors.USER.email_already_exists.title,
                    description: errors.USER.email_already_exists.description
                }
            };
        }

        return {
            status: 200
        }
    },

    /**
     * Cria um novo usuário com os dados fornecidos.
     * 
     * @param {IUser} data - Os dados do usuário a serem criados.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async store(data: IUser) {
        try {
            const birthdateBR = parse(data.birthdate, "dd/MM/yyyy", new Date());
            const birthdateUS = format(birthdateBR, "MM/dd/yyyy");

            const user = await User.create({
                id: uuidv4(),
                name: data.name,
                email: data.email,
                password: hashSync(data.password, 10),
                birthdate: birthdateUS,
                active: false
            });

            return {
                status: 201,
                success: {
                    title: success.USER.user_created_successfully,
                    data: user
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
     * Realiza a autenticação do usuário com base no email e senha fornecidos.
     * 
     * @param {Object} data - Os dados de email e senha do usuário.
     * @param {string} data.email - O email do usuário.
     * @param {string} data.password - A senha do usuário.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async login(data: { email: string, password: string }) {
        try {
            const user_found = await User.findOne({
                where: { email: data.email }
            });

            if (!user_found) {
                return {
                    status: 404,
                    error: {
                        title: errors.USER.no_user_found.title,
                        description: errors.USER.no_user_found.description,
                        source: {
                            pointer: __filename,
                            line: getCurrentLine().line
                        }
                    }
                };
            }

            const valid_password = compareSync(data.password, user_found.password);

            if (!valid_password) {
                return {
                    status: 401,
                    error: {
                        title: errors.USER.unauthorized.title,
                        description: errors.USER.unauthorized.description
                    }
                }
            }

            const token = await jwt_utils.generateToken({ id: user_found.id, email: user_found.email, active: user_found.active });

            return {
                status: 200,
                success: {
                    title: success.USER.user_authenticated,
                    data: {
                        id: user_found.id,
                        email: user_found.email,
                        token: token
                    }
                }
            };
        } catch (error) {
            return {
                status: 400,
                error: {
                    title: errors.INVALID_DATA.title,
                    description: errors.INVALID_DATA.description,
                    source: {
                        pointer: __filename,
                        line: getCurrentLine().line
                    }
                }
            };
        }
    },

    /**
     * Retorna todos os usuários cadastrados.
     * 
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async findAll() {
        try {
            const users = await User.findAll();

            return {
                status: 200,
                success: {
                    title: success.USER.users_retrieved_successfully,
                    data: users
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
    }
}