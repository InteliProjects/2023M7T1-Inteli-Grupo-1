import dotenv from 'dotenv';

// Importa o aplicativo Express definido anteriormente em "app.ts"
import app from "./app";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Inicia o servidor Express na porta especificada no arquivo .env (process.env.API_PORT)
app.listen(process.env.API_PORT, () => {

    // Limpa a saída do console
    console.clear();

    // Exibe uma mensagem indicando que o servidor está em execução, incluindo a URL e porta
    console.log(`Server running at url ${process.env.SERVER_HOST || "127.0.0.1:"}${process.env.API_PORT}`);
});