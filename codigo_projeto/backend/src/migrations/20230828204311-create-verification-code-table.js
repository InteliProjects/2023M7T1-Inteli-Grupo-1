'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('verification_code', {
            id: {
                type: Sequelize.UUID,
                primaryKey: true
            },
            code: {
                type: Sequelize.TEXT,
                allowNull: false,
                unique: true
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            valid: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            user_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "user",
                    key: "id"
                }
            }
        });
        
    },

    async down(queryInterface, Sequelize) {
    
        await queryInterface.dropTable('verification_code');
    
    }

}