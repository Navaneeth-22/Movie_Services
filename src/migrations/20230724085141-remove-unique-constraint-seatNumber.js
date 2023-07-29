'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Seats', 'seatNumber');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Seats', {
      fields: ['seatNumber'],
      type: 'unique',
      name: 'seatNumber'
    });
  }
};
