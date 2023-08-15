'use strict';
/** @type {import('sequelize-cli').Migration} */

const { ENUMS } = require('../utils/common');
const {UPCOMING,RUNNING,FINISHED,CANCELLED} = ENUMS.SHOW_STATUS;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull : false
      },
      cinemaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cinemas',
          key: 'id',
          as: 'cinemaId'
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE",
      },
      hallId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Halls',
          key: 'id',
          as: 'hallId'
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE",
      },
      cityName: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Cities',
          key: 'name',
          as: 'cityName'
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE",
      },
      movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Movies',
          key: 'id',
          as: 'movieId'
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE",
      },
      showStatus: {
        type: Sequelize.ENUM,
        values: [UPCOMING,RUNNING,FINISHED,CANCELLED],
        defaultValue: UPCOMING
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
    await queryInterface.dropTable('Shows');
  }
};