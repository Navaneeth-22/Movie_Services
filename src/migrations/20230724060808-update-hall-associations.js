'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Halls', 'cinemaId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cinemas',
        key: 'id',
        as: 'cinemaId'
      },
      allowNull : false,
      onUpdate : "CASCADE",
      onDelete : "CASCADE"
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Halls', 'cinemaId');
  }
};
