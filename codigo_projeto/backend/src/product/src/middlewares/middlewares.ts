import { Request, Response, NextFunction } from "express";
import getCurrentLine from "get-current-line";
import { verify } from "jsonwebtoken";
import { errors } from '../constants/errors';

// Define uma interface estendida do Express Request para incluir informações de autenticação
export interface IAuthRequest extends Request {
	user?: {
		id: string,
		email: string,
		active: boolean
	}
}

/**
 * Middleware de autenticação.
 *
 * @param req - O objeto Request da Express.
 * @param res - O objeto Response da Express.
 * @param next - Função para chamar o próximo middleware.
 * @returns Um JSON de erro ou chama o próximo middleware.
 */
export const auth = async (req: IAuthRequest, res: Response, next: NextFunction) => {

	// Obtém o cabeçalho de autenticação da requisição
	const auth_header = req.headers.authorization;

	// Verifica se o cabeçalho de autenticação está presente
	if (!auth_header) {
		
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

	// Divide o cabeçalho de autenticação em duas partes (esquema e token)
	const parts = auth_header.split(" ");

	// Verifica se o formato do cabeçalho de autenticação é válido
	if (parts.length != 2) {

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

	// Obtém o esquema e o token do cabeçalho de autenticação
	const [schema, token] = parts;

	// Verifica se o esquema de autenticação é do tipo "Bearer"
	if (schema != "Bearer") {

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

	// Verifica e decodifica o token usando a chave secreta JWT
	verify(token, process.env.JWT_SECRET as string, (err, decoded: any) => {

		// Se houver um erro ao verificar o token, retorna um erro de autenticação
		if (err) {

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

		// Se o token for válido, adiciona informações do usuário decodificado à requisição
		req.user = {
			id: decoded.id,
			email: decoded.email,
			active: decoded.active
		};

		next(); // Chama a próxima função de middleware
	
	});
};

/**
 * Middleware para verificar se o usuário está ativo.
 *
 * @param req - O objeto Request da Express com informações de autenticação.
 * @param res - O objeto Response da Express.
 * @param next - Função para chamar o próximo middleware.
 * @returns Um JSON de erro ou chama o próximo middleware.
 */
export const isUserActive = async (req: IAuthRequest, res: Response, next: NextFunction) => {

	const active = req.user?.active;

	// Se o usuário não estiver ativo, retorna um erro indicando que a conta não está verificada
	if (!active) {

		return res.status(401).json({
			status: 401,
			error: {
				title: "Conta não verificada",
				description: "Você precisa ter uma conta verificada para executar esta ação."
			}
		});

	};

	next(); // Chama a próxima função de middleware se o usuário estiver ativo
}