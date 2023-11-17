import { IVerificationCode } from "../interfaces/IVerificationCode";
import { v4 as uuidv4 } from 'uuid';
import { errors } from '../constants/errors';
import { VerificationCode } from "../models/VerificationCode";

export const verification_code_services = {

    /**
     * Cria e armazena um novo código de verificação para um usuário.
     * 
     * @param {string} user_id - O ID do usuário para o qual o código de verificação será gerado.
     * @returns {Promise<VerificationCode>} - Uma promessa que resolve com o objeto VerificationCode criado.
     */
    async store(user_id: string) {
        try {
            // Gera um código de verificação aleatório de 6 caracteres em maiúsculas.
            let code = uuidv4().slice(0, 6).toUpperCase();

            // Verifica se já existe um código de verificação ativo para o usuário.
            const active_code = await VerificationCode.findOne({
                where: {
                    user_id: user_id,
                    valid: true
                }
            });

            // Se um código ativo existir, torna-o inválido.
            if (active_code) {
                await active_code.update({
                    valid: false
                });
                active_code.save();
            }

            // Cria um novo código de verificação.
            const verification_code = await VerificationCode.create({
                id: uuidv4(),
                code: code,
                valid: true,
                created_at: Date.now(),
                user_id: user_id
            });

            // Define um temporizador para tornar o código inválido após 5 minutos (300.000 ms).
            setTimeout(() => {
                verification_code.update({
                    valid: false
                });
            }, 300000);

            return verification_code;
        } catch (error) {
            // Em caso de erro, retorna um objeto de erro.
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