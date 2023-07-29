'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Movies', 'duration', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
    await queryInterface.addColumn('Movies', 'director', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Movies', 'duration');
    await queryInterface.removeColumn('Movies', 'director');
  }
};
