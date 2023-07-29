'use strict';
/** @type {import('sequelize-cli').Migration} */
const { ENUMS } = require('../utils/common');
const { REGULAR, PREMIUM, VVIP } = ENUMS.SEAT_TYPE;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seatNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique : true
      },
      seatType: {
        type: Sequelize.ENUM,
        values: [REGULAR, PREMIUM, VVIP],
        defaultValue: REGULAR,
      },
      row: {
        type: Sequelize.STRING,
        allowNull : false
      },
      columnNo: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};