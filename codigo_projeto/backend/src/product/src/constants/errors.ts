export const errors = {
    // Erros relacionados a JSON Web Tokens (JWT)
    JWT: {
        no_token_provided: {
            title: "Token não fornecido.",
            description: "Nenhum token de autenticação foi fornecido."
        },
        invalid_token_format: {
            title: "Formato de token inválido.",
            description: "O formato do token fornecido é inválido."
        },
        invalid_token_schema: {
            title: "Esquema de token inválido.",
            description: "O esquema do token fornecido é inválido."
        },
        invalid_or_expired_token: {
            title: "Token inválido ou expirado.",
            description: "Token inválido ou expirado fornecido."
        },
    },
    // Erros internos do servidor
    internal_server_error: {
        title: "Erro Interno do Servidor.",
        description: "A ação solicitada não pôde ser executada devido a um mau funcionamento no servidor. Pode haver alguma inconsistência na conexão com o banco de dados ou em algum outro recurso externo."
    },
    // Erros relacionados a dados inválidos
    invalid_data: { 
        title: "Dados fornecidos inválidos.",
        description: "Os dados fornecidos não são válidos. Por favor, verifique novamente e tente novamente."
    },
    // Erros relacionados a URLs de imagem inválidas
    invalid_image_url: {
        title: "URL da imagem inválida fornecida.",
        description: "Por favor, verifique a URL fornecida e tente novamente."
    },
    // Erros relacionados a produtos não encontrados
    product_not_found: {
        title: "Produto não encontrado.",
        description: "Não foi possível encontrar um produto com os dados fornecidos."
    }
};