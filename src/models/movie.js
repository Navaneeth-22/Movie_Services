'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.CinemaMovie , {
        through : "CinemaMovie",
        uniqueKey : "cinemaId_movieId"
      })
      
    }
  }
  Movie.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    language: {
      type : DataTypes.STRING,
      allowNull : false
    },
    rating: {
      type : DataTypes.FLOAT,
      defaultValue : 0,
    },
    genre: {
      type : DataTypes.STRING,
      allowNull : false
    },
    releasedDate: {
      type : DataTypes.DATE,
      allowNull : false
    },
    poster:{
      type : DataTypes.STRING,
      defaultValue : ""
    },
    
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};