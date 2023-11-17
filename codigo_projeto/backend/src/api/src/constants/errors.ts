export const errors = {
    // Mensagens relacionadas a dados inválidos ou incorretos
    INVALID_DATA: {
        title: "Dados fornecidos inválidos.",
        description: "Os dados fornecidos não são válidos. Por favor, verifique novamente e tente novamente."
    },
    // Mensagens relacionadas a erros no servidor
    SERVER: {
        // Erro interno do servidor
        internal_server_error: {
            title: "Erro Interno do Servidor.",
            description: "A ação solicitada não pôde ser executada devido a um mau funcionamento no servidor. Pode haver alguma inconsistência na conexão com o banco de dados ou em algum outro recurso externo."
        }
    },
    // Mensagens relacionadas a erros de usuário
    USER: {
        // Mensagem para indicar que o email já está em uso
        email_already_exists: {
            title: "O email já está em uso.",
            description: "O email fornecido já está em uso."
        },
        // Mensagem para indicar que o CPF já está em uso
        cpf_already_in_use: {
            title: "Este cpf já está em uso.",
            description: "O cpf fornecido já está em uso."
        },
        // Mensagem para indicar que o CPF é inválido
        invalid_cpf: {
            title: "CPF inválido.",
            description: "O cpf fornecido é inválido."
        },
        // Mensagem para indicar que o email é inválido
        invalid_email: {
            title: "Email inválido fornecido.",
            description: "O email fornecido não possui um formato válido."
        },
        // Mensagem para indicar que a senha é inválida
        invalid_password: {
            title: "Senha inválida fornecida.",
            description: "Verifique sua senha e tente novamente."
        },
        // Mensagem para indicar que nenhum usuário foi encontrado com as informações fornecidas
        no_user_found: {
            title: "Nenhum usuário encontrado.",
            description: "Nenhum usuário foi encontrado com as informações fornecidas."
        },
        // Mensagem para indicar que a ação não pode ser executada devido à falta de permissão
        unauthorized: {
            title: "Não autorizado.",
            description: "A ação solicitada não pôde ser executada por falta de permissão."
        },
        // Mensagem para indicar que a conta do usuário já foi verificada
        user_already_verified: {
            title: "Conta já verificada",
            description: "A conta informada já foi verificada."
        }
    },
    // Mensagens relacionadas a erros de token JWT
    JWT: {
        // Mensagem para indicar que nenhum token de autenticação foi fornecido
        no_token_provided: {
            title: "Token não fornecido.",
            description: "Nenhum token de autenticação foi fornecido."
        },
        // Mensagem para indicar que o formato do token é inválido
        invalid_token_format: {
            title: "Formato de token inválido.",
            description: "O formato do token fornecido é inválido."
        },
        // Mensagem para indicar que o esquema do token é inválido
        invalid_token_schema: {
            title: "Esquema de token inválido.",
            description: "O esquema do token fornecido é inválido."
        },
        // Mensagem para indicar que o token é inválido ou expirado
        invalid_or_expired_token: {
            title: "Token inválido ou expirado.",
            description: "Token inválido ou expirado fornecido."
        },
    },
    // Mensagens que não foram fornecidas
    NOT_FOUND: {
        title: "",
        description: ""
    }
};