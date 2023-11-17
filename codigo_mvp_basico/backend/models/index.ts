import User from "./user";
import Contacts from "./contacts";
import Address from "./address";
import { Connection, data } from "../config/connection";

const createTables = async () => {
 
    try {
        const resultado = await data.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

    // User.hasMany(Contacts)
    // User.belongsTo(Address)
}

export {User, Contacts, Address, createTables};