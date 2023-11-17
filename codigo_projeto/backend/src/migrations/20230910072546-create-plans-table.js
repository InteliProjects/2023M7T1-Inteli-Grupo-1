'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('plan', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      name: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false 
      },
      debit_fee: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      credit_fee: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      installments_fee: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('plan')
  }
};
