'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
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
      plan_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "plan",
          key: "id"
        }
      },
      status: {
        type: Sequelize.TEXT,
        allowNull: false,
        default: "Pendente"
      },
      purchase_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      address_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'address',
          key: 'id'
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order');
  }
};