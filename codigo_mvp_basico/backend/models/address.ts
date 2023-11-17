import { DataTypes, Model } from 'sequelize';
import {Connection, data} from '../config/connection';
import dotenv from "dotenv";
import User from './user';

dotenv.config();

const Address = data.define('Address', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }, 
      cep: {
          type: DataTypes.STRING(16),
          allowNull: true
      },
      state: {
          type: DataTypes.STRING(150),
          allowNull: true
      },
      city: {
          type: DataTypes.STRING(150),
          allowNull: true
      },
      district: {
          type: DataTypes.STRING(150),
          allowNull: true
      },
      street: {
          type: DataTypes.STRING(150),
          allowNull: true
      },
      number: {
          type: DataTypes.BIGINT,
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


export default Address;