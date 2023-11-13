'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('courses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            courseName: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            image: {
                type: Sequelize.STRING,
            },
            level: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.INTEGER,
            },
            slug: {
                type: Sequelize.STRING,
            },
            content: {
                type: Sequelize.TEXT,
            },
            categoryId: {
                type: Sequelize.INTEGER,
            },
            teacherId: {
                type: Sequelize.INTEGER,
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            deletedAt: {
                allowNull: true,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('courses');
    },
};
