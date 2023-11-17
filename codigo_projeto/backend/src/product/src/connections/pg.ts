import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Cria uma instância do Sequelize para se conectar ao banco de dados PostgreSQL.
export const sequelize = new Sequelize(
    process.env.PG_DB as string,    // Nome do banco de dados
    process.env.PG_USER as string,  // Nome de usuário
    process.env.PG_PW as string,    // Senha
    {
        host: process.env.PG_HOST,       // Host do banco de dados
        port: parseInt(process.env.PG_PORT || "5432"), // Porta do banco de dados (padrão: 5432)
        dialect: 'postgres',  // Dialeto do banco de dados (PostgreSQL)

        // Opções adicionais podem ser configuradas aqui, como SSL para conexões seguras.

        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

// Função para conectar ao banco de dados e verificar se a conexão foi estabelecida com sucesso.
const connectToDB = async () => {
    try {
        // Tenta autenticar-se no banco de dados.
        await sequelize.authenticate();
        console.log('Connection has been established successfully.'); // Exibe uma mensagem se a conexão for bem-sucedida.
    } catch (err) {
        console.error('Unable to connect to the database:', err); // Exibe uma mensagem de erro se a conexão falhar.
    }
};

// Chama a função para conectar ao banco de dados assim que o módulo é carregado.
connectToDB();