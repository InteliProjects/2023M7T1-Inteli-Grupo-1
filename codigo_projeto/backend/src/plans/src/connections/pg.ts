import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

// Cria uma instância do Sequelize para se conectar ao banco de dados PostgreSQL
export const sequelize = new Sequelize(
    process.env.PG_DB as string, // Nome do banco de dados
    process.env.PG_USER as string, // Nome de usuário
    process.env.PG_PW as string, // Senha do usuário
    {
        host: process.env.PG_HOST, // Host do banco de dados
        port: parseInt(process.env.PG_PORT || "5432"), // Porta do banco de dados (5432 por padrão)
        dialect: 'postgres', // Tipo de banco de dados (PostgreSQL)
        dialectOptions: {
            ssl: {
                require: true, // Requer conexão SSL
                rejectUnauthorized: false // Não rejeita conexões não autorizadas
            }
        }
    }
);

// Função para conectar ao banco de dados
const connectToDB = async () => {
    try {
        // Tenta autenticar a conexão com o banco de dados
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        // Se houver um erro durante a autenticação, exibe uma mensagem de erro
        console.error('Unable to connect to the database:', err);
    }
};

// Chama a função de conexão ao banco de dados para estabelecer a conexão
connectToDB();