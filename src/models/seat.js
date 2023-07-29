'use strict';
const {
  Model
} = require('sequelize');
const { ENUMS } = require('../utils/common');
const {REGULAR,PREMIUM,VVIP} = ENUMS.SEAT_TYPE;
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Hall, {
        foreignKey : "hallId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });

    }
  }
  Seat.init({
    hallId: {
      type : DataTypes.INTEGER,
      allowNull : false,
    },
    seatNumber: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    seatType: {
      type : DataTypes.STRING,
      allowNull : false,
      values : [REGULAR,PREMIUM,VVIP],
      defaultValue : REGULAR
    },
    row: {
      type : DataTypes.STRING,
      allowNull : false
    },
    columnNo: {
      type : DataTypes.INTEGER,
      allowNull : false
    },

  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};