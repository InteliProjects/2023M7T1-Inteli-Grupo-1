'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('plan', [
      {
        id: uuidv4(),
        name: "PromoTon",
        description: "As melhores taxas pra você",
        debit_fee: 0.83,
        credit_fee: 0.83,
        installments_fee: 9.88
      },
      {
        id: uuidv4(),
        name: "GigaTon",
        description: "Pra quem vende muito à vista",
        debit_fee: 1.69,
        credit_fee: 3.49,
        installments_fee: 17.99
      },
      {
        id: uuidv4(),
        name: "MegaTon",
        description: "Pra quem vende mais no parcelado",
        debit_fee: 1.79,
        credit_fee: 3.69,
        installments_fee: 13.49
      },
      {
        id: uuidv4(),
        name: "Ton Básico",
        description: "Máquinas com os menores preços",
        debit_fee: 1.99,
        credit_fee: 4.99,
        installments_fee: 22.59
      },

    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
