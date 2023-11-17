'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product', [
      {
        id: 't1',
        name: 'T1',
        discount_price: 198.80,
        unit_price: 106.80,
        installments_price: 8.90,
        image_url: "https://res.cloudinary.com/dunz5zfpt/site-ton/t1-1"
      },
      {
        id: 't1_chip',
        name: 'T1 Chip',
        discount_price: 318.80,
        unit_price: 286.80,
        installments_price: 23.90,
        image_url: "https://www.idinheiro.com.br/wp-content/uploads/2021/12/T1-Chip.png"
      },
      {
        id: 't2',
        name: 'T2+',
        discount_price: 478.80,
        unit_price: 190.80,
        installments_price: 15.90,
        image_url: "https://ton.melhormaquininha.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fhl-solu-es-digitais%2Fimage%2Fupload%2Fv1689268552%2Fwww.hugomaquininhas.com%2Fton%2Fmaquininhas%2Ft2%2Fmachine-t2-3_droyrd.webp&w=750&q=75"
      },
      {
        id: 't3',
        name: 'T3',
        discount_price: 958.80,
        unit_price: 394.80,
        installments_price: 32.90,
        image_url: "https://ton.melhormaquininha.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fhl-solu-es-digitais%2Fimage%2Fupload%2Fv1689268272%2Fwww.hugomaquininhas.com%2Fton%2Fmaquininhas%2Ft3%2Fmachine-t3-1_munw1r.webp&w=750&q=75"
      },
      {
        id: 't3_smart',
        name: 'T3 Smart',
        discount_price: 958.80,
        unit_price: 478.80,
        installments_price: 39.90,
        image_url: "https://res.cloudinary.com/dunz5zfpt/site-ton/t3-smart-1"
      },
    ]);
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
