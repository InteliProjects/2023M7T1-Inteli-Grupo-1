import { Request, Response, NextFunction } from "express";
import getCurrentLine from "get-current-line";
import { verify } from "jsonwebtoken";
import { errors } from '../constants/errors';

/**
 * Interface personalizada para estender a interface 'Request' do Express.
 * @interface IAuthRequest
 */
export interface IAuthRequest extends Request {
	user?: {
		id: string,
		email: string,
		active: boolean
	}
}

/**
 * Middleware de autenticação.
 * Verifica se um token JWT é válido e autentica a solicitação.
 * @function
 * @async
 * @param {IAuthRequest} req - Objeto de solicitação do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @param {NextFunction} next - Função para chamar o próximo middleware/rota.
 * @returns {Promise<void>}
 */
export const auth = async (req: IAuthRequest, res: Response, next: NextFunction): Promise<void> => {
	const auth_header = req.headers.authorization;

	if (!auth_header) {
		// Se não houver token de autenticação no cabeçalho, retorna um erro de autorização
		return res.status(401).json({
			status: 401,
			error: {
				title: errors.JWT.no_token_provided.title,
				description: errors.JWT.no_token_provided.description,
				source: {
					pointer: __filename,
					line: getCurrentLine().line
				}
			}
		});
	}

	// Divide o cabeçalho 'Authorization' em duas partes: o esquema ("Bearer") e o token
	const parts = auth_header.split(" ");

	if (parts.length != 2) {
		// Se o cabeçalho não tiver exatamente duas partes, retorna um erro de formato de token inválido
		return res.status(401).json({
			status: 401,
			error: {
				title: errors.JWT.invalid_token_format.title,
				description: errors.JWT.invalid_token_format.description,
				source: {
					pointer: __filename,
					line: getCurrentLine().line
				}
			}
		});
	}

	const [schema, token] = parts;

	if (schema != "Bearer") {
		// Se o esquema não for "Bearer", retorna um erro de esquema de token inválido
		return res.status(401).json({
			status: 401,
			error: {
				title: errors.JWT.invalid_token_schema.title,
				description: errors.JWT.invalid_token_schema.description,
				source: {
					pointer: __filename,
					line: getCurrentLine().line
				}
			}
		});
	}

	// Verifica o token usando a chave secreta do JWT
	verify(token, process.env.JWT_SECRET as string, (err, decoded: any) => {
		if (err) {
			// Se a verificação falhar, retorna um erro de token inválido ou expirado
			return res.status(401).json({
				status: 401,
				error: {
					title: errors.JWT.invalid_or_expired_token.title,
					description: errors.JWT.invalid_or_expired_token.description,
					source: {
						pointer: __filename,
						line: getCurrentLine().line
					}
				}
			});
		}

		// Se o token for válido, adiciona as informações do usuário decodificado ao objeto 'req'
		req.user = {
			id: decoded.id,
			email: decoded.email,
			active: decoded.active
		};

		// Chama o próximo middleware ou rota
		next();
	});
};

/**
 * Middleware para verificar se o usuário está ativo.
 * Verifica se o usuário associado ao token JWT está ativo antes de permitir a solicitação.
 * @function
 * @async
 * @param {IAuthRequest} req - Objeto de solicitação do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @param {NextFunction} next - Função para chamar o próximo middleware/rota.
 * @returns {Promise<void>}
 */
export const isUserActive = async (req: IAuthRequest, res: Response, next: NextFunction): Promise<void> => {
	const active = req.user?.active;

	if (!active) {
		// Se o usuário não estiver ativo, retorna um erro de conta não verificada
		return res.status(401).json({
			status: 401,
			error: {
				title: "Conta não verificada",
				description: "Você precisa ter uma conta verificada para executar esta ação."
			}
		});
	}

	// Se o usuário estiver ativo, chama o próximo middleware ou rota
	next();
}