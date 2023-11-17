import { DataTypes, Model } from 'sequelize';
import {Connection, data} from '../config/connection';
import dotenv from "dotenv";
import User from './user';

dotenv.config();

const Contacts = data.define('Contacts', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }, 
  cellphone: {
      type: DataTypes.STRING(16),
      allowNull: true
  },
  phone: {
      type: DataTypes.STRING(16),
      allowNull: true
  },
  email: {
      type: DataTypes.STRING(150),
      allowNull: true
  },
  id_user: {
      type: DataTypes.INTEGER,    
      references: {
          model: User, // Modelo referenciado
          key: 'id',   // Coluna referenciada
        },
  }

})

export default Contacts;