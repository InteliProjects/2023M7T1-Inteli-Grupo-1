import { DataTypes, Model } from 'sequelize';
import {Connection, data} from '../config/connection';
import dotenv from "dotenv";

dotenv.config();

const User = data.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }, 
  name: {
      type: DataTypes.STRING(50),
      allowNull: true
  },
  last_name: {
      type: DataTypes.STRING(150),
      allowNull: true
  }
})

export default User;