import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
import {User, Contacts, Address} from '../models/index'

dotenv.config();

const data = new Sequelize(
    process.env.PG_DB as string,
    process.env.PG_USER as string,
    process.env.PG_PW as string,
    {
        host: process.env.HOST,
        port: parseInt("5432"),
        dialect: 'postgres',
        logging: false
    })
class Connection {

    static sequelize = data;
    static connectToDB = async () => {
        try {
            await Connection.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (err) {
            console.error('Unable to connect to the database:', err);
        }
    }
}

export {Connection, data};
