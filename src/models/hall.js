'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Seat, {
        foreignKey : "hallId",
      });
      this.belongsTo(models.Cinema, {
        foreignKey : "cinemaId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      this.hasMany(models.Show, {
        foreignKey : "hallId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      this.hasMany(models.Show_seat, {
        foreignKey : "hallId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
    }
  }
  Hall.init({
    cinemaId: {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    HallName: {
      type : DataTypes.STRING,
      allowNull : false
    },
    seatCount: {
      type : DataTypes.INTEGER,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'Hall',
  });
  return Hall;
};