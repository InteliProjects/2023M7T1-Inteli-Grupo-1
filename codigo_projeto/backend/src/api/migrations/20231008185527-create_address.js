'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('address', [{
      id: '1',
      street: 'Rua Avarenga',
      number: 358,
      complement: '',
      district: 'Vila Maria',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brasil',
      zipcode: '02127-000',
      user_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('address', null, {});    
  }
};
