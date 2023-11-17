import { createTransport } from "nodemailer";
import { IVerificationCode } from "../interfaces/IVerificationCode";
import { User } from "../models/User";

// Configuração do transporte de email usando o serviço Gmail.
const transporter = createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_EMAIL, // Email de autenticação obtido de variáveis de ambiente.
        pass: process.env.NODEMAILER_PW,    // Senha de autenticação obtida de variáveis de ambiente.
    },
    inReplyTo: "noreply@gmail.com",
    replyTo: "noreply@gmail.com"
});

export const mail_services = {
    
    /**
     * Envia um email de verificação para um usuário.
     * 
     * @param {IVerificationCode} verification_code - Os dados do código de verificação e do usuário.
     * @returns {Object} - Um objeto com informações sobre o resultado da operação.
     */
    async sendVerificationCode(verification_code: IVerificationCode) {
        try {
            // Encontra o usuário com base no ID fornecido no código de verificação.
            const user = await User.findByPk(verification_code.user_id);

            // Configuração do email a ser enviado.
            const email = {
                from: "grupojade@oauth2.com", // Email remetente.
                to: user?.email as string,     // Email destinatário (do usuário).
                subject: 'Bem-vindo à Jade Store®', // Assunto do email.
                text: `Seja bem-vindo(a) à Jade Store®!\n\n`
                    + `Agradecemos por nos escolher como sua opção preferida. Use o seguinte código de verificação quando necessário: ${verification_code.code}.\n\n`
                    + `Lembramos que este código é válido por 5 minutos. Se expirar, fique à vontade para solicitar um novo na página de verificação.\n\n`
                    + `Atenciosamente,\n`
                    + `Grupo Jade®`
            };

            // Envio efetivo do email usando o transporter configurado.
            await transporter.sendMail(email);

            return {
                status: 200,
                success: {
                    title: "Email enviado com sucesso!",
                    description: "O email de verificação foi enviado com sucesso.",
                }
            };

        } catch (error) {
            // Em caso de erro, retorna uma resposta de erro com detalhes.
            return {
                status: 500,
                error: {
                    title: "Erro ao enviar o email",
                    description: "Houve um erro ao tentar enviar o email de verificação.",
                    failure: error
                }
            };
        }
    }
};