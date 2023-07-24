'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Seats', 'hallId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Halls',
        key: 'id',
        as: 'hallId'
      },
      onUpdate : "CASCADE",
      onDelete : "CASCADE"
    });

      
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Seats', 'hallId');
  }
};
