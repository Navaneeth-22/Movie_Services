'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cityMovies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'id',
          as: 'cityId'
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE",
        allowNull : false
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint('cityMovies', {
      fields: ['cityId', 'movieId'],
      type: 'unique',
      name: 'cityId_movieId'
    });
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cityMovies');
  }
};