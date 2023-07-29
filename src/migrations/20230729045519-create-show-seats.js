'use strict';
/** @type {import('sequelize-cli').Migration} */
const { ENUMS } = require('../utils/common');
const {AVAILABLE,LOCKED,BOOKED} = ENUMS.SEAT_STATUS;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Show_seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      showId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Shows',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull : false
      },
      seatId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Seats',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull : false
      },
      hallId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Halls',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull : false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull : false,
        defaultValue : 180
      },
      status: {
        type: Sequelize.ENUM,
        values: [AVAILABLE,LOCKED,BOOKED],
        defaultValue: AVAILABLE
      },
      timestamp: {
        type: Sequelize.DATE,
        allowNull : false,
        defaultValue : new Date()
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
    await queryInterface.dropTable('Show_seats');
  }
};