'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CinemaMovies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Movies',
          key: 'id',
          as: 'movieId'
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE",
        allowNull : false
      },
      cinemaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cinemas',
          key: 'id',
          as: 'cinemaId'
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE",
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
    await queryInterface.addConstraint('CinemaMovies', {
      fields: ['movieId', 'cinemaId'],
      type: 'unique',
      name: 'cinemaId_movieId'
    });
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CinemaMovies');
  }
};