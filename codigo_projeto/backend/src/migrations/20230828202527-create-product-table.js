'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product', {
      id: {
        type: Sequelize.TEXT,
        primaryKey: true
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      discount_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      unit_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      installments_price: {
        type: Sequelize.DECIMAL,
        allowNull: false  
      },
      image_url: {
        type: Sequelize.TEXT
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product');
  }
};