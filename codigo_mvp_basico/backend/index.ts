import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
import {Connection, data} from './config/connection';
import {User, Contacts, Address, createTables} from './models/index';
import express from 'express';
import showUser from'./routes/userRoutes';
import showAdress from'./routes/addressRoutes';
import showContact from'./routes/contactRoutes';
import cors from 'cors';

// Acessando as credenciais do banco de dados
dotenv.config();

// Realizando conexão com o banco de dados
Connection.connectToDB();

// Instanciando o app express
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Configurando as rotas do app
app.use("/user", showUser)
app.use("/adress", showAdress)
app.use("/contact", showContact)

// Inicializando o server e rodando na porta 3000
const server: any = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
})

createTables();
