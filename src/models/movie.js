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
      this.belongsToMany(models.Cinema , {
        through : "CinemaMovie",
        uniqueKey : "cinemaId_movieId"
      })
      this.belongsToMany(models.City , {
        through : "CityMovie",
        uniqueKey : "cityId_movieId"
      })
      this.hasMany(models.Show,{
        foreignKey : "movieId"
      });
      
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
    duration:{
      type : DataTypes.INTEGER,
      allowNull : false
    },
    director :{
      type : DataTypes.STRING,
      allowNull : false
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