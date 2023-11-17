import { sign } from "jsonwebtoken";

export const jwt_utils = {

    /**
     * Gera um token JWT (JSON Web Token) com base nas informações do usuário.
     * @param {Object} user - Um objeto contendo informações do usuário.
     * @param {string} user.id - O ID do usuário.
     * @param {string} user.email - O email do usuário.
     * @param {boolean} user.active - Um indicador se a conta do usuário está ativa.
     * @returns {string} - O token JWT gerado.
     */
    async generateToken({ id, email, active }: any): Promise<string> {

        // Gera um token JWT com base nas informações do usuário e na chave secreta.
		const token = sign({ id: id, email: email, active: active }, process.env.JWT_SECRET as string, { expiresIn: "1d" });

		return token;
	}
};