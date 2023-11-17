import dotenv from 'dotenv';
import app from "./app";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Inicia o servidor Express e o faz ouvir na porta especificada nas variáveis de ambiente.
app.listen(process.env.PLAN_PORT, () => {
    console.clear(); // Limpa o console
    // Exibe uma mensagem informando que o servidor está em execução e a URL em que ele está sendo executado.
    console.log(`Server running at url ${process.env.SERVER_HOST || "127.0.0.1:"}${process.env.PLAN_PORT || 8001}`)
});