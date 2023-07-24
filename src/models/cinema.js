// cinema model
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey : "cityName",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      this.hasMany(models.Hall, {
        foreignKey : "cinemaId",
      });
      this.hasMany(models.Address, {
        foreignKey : "cinemaId",
      });
      this.belongsToMany(models.cinemaMovie, {
        through : "CinemaMovie",
        uniqueKey : "cinemaId_movieId",
      })
    }
  }
  Cinema.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cityName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Cinema',
  });
  return Cinema;
};
