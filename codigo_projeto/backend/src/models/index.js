'use strict';

// Importações de módulos e dependências necessárias
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process'); // Evite usar "process" como nome de variável, pois é uma palavra-chave reservada.
const basename = path.basename(__filename);

// Determine o ambiente (development, test, production) com base na variável de ambiente NODE_ENV.
const env = process.env.NODE_ENV || 'development';

// Carregue as configurações do banco de dados do arquivo config.json com base no ambiente.
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;

// Crie uma instância do Sequelize com base na configuração do ambiente.
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Leitura de arquivos de modelo no diretório atual (models) e carregamento de cada modelo.
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1 // Evite carregar arquivos de teste.
    );
  })
  .forEach(file => {
    // Importe cada modelo e associe-o ao Sequelize.
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Associe os modelos se tiverem associações definidas.
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Exponha a instância do Sequelize e o próprio Sequelize.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Exporte o objeto "db" para uso em outras partes do aplicativo.
module.exports = db;