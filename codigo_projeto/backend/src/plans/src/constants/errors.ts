// Este é um objeto chamado 'errors' que contém definições de erros para a aplicação.
export const errors = {
    // Este é um erro específico chamado 'internal_server_error', que é usado para representar erros internos do servidor.
    internal_server_error: {
        // A propriedade 'title' fornece uma descrição curta do erro.
        title: "Erro Interno do Servidor.",
        // A propriedade 'description' fornece uma descrição mais detalhada do erro, explicando suas causas potenciais.
        description: "A ação solicitada não pôde ser executada devido a um mau funcionamento no servidor. Pode haver alguma inconsistência na conexão com o banco de dados ou em algum outro recurso externo."
    }
};