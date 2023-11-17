import { Request, Response, NextFunction } from "express";
import getCurrentLine from "get-current-line";
import { verify } from "jsonwebtoken";
import { errors } from '../constants/errors';


/**
 * Interface que estende a interface Request do Express para incluir informações de usuário autenticado.
 * @interface IAuthRequest
 * @extends Request
 * @property {object} user - Informações do usuário autenticado.
 * @property {string} user.id - Identificador único do usuário.
 * @property {string} user.email - Endereço de e-mail do usuário.
 * @property {boolean} user.active - Indica se o usuário está ativo.
 */

/**
 * Middleware de autenticação JWT.
 * Verifica a presença e validade do token JWT nas requisições.
 * @function auth
 * @param {IAuthRequest} req - Objeto de requisição.
 * @param {Response} res - Objeto de resposta.
 * @param {NextFunction} next - Função para chamar o próximo middleware.
 * @returns {void}
 */
export const auth = async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const auth_header = req.headers.authorization;

    if (!auth_header) {
        // Se não houver cabeçalho de autenticação, retorne um erro 401 (Não Autorizado)
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

    const parts = auth_header.split(" ");

    if (parts.length != 2) {
        // Se o cabeçalho de autenticação não tiver o formato correto, retorne um erro 401
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
        // Se o esquema do token não for 'Bearer', retorne um erro 401
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

    verify(token, process.env.JWT_SECRET as string, (err, decoded: any) => {
        if (err) {
            // Se a verificação do token falhar, retorne um erro 401
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

        // Se o token for válido, adicione informações do usuário ao objeto de requisição 'req.user'
        req.user = {
            id: decoded.id,
            email: decoded.email,
            active: decoded.active
        };

        next(); // Chame o próximo middleware ou rota.
    });
};

/**
 * Middleware para verificar se o usuário está ativo.
 * Verifica se o usuário possui status ativo antes de permitir que uma ação seja executada.
 * @function isUserActive
 * @param {IAuthRequest} req - Objeto de requisição.
 * @param {Response} res - Objeto de resposta.
 * @param {NextFunction} next - Função para chamar o próximo middleware.
 * @returns {void}
 */
export const isUserActive = async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const active = req.user?.active;

    if (!active) {
        // Se o usuário não estiver ativo, retorne um erro 401
        return res.status(401).json({
            status: 401,
            error: {
                title: "Conta não verificada",
                description: "Você precisa ter uma conta verificada para executar esta ação."
            }
        });
    }

    next(); // Chame o próximo middleware ou rota se o usuário estiver ativo.
};