'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cart_item', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      cart_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'cart',
          key: 'user_id'
        }
      },
      product_id: {
        type: Sequelize.TEXT,
        allowNull: false,
        references: {
          model: "product",
          key: "id"
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 1
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cart_item');
  }
};