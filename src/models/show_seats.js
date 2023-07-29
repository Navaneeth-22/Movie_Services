'use strict';
const {
  Model
} = require('sequelize');
const { ENUMS } = require('../utils/common');
const {AVAILABLE,LOCKED,BOOKED} = ENUMS.SEAT_STATUS;
module.exports = (sequelize, DataTypes) => {
  class Show_seats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Show, {
        foreignKey : "showId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      this.belongsTo(models.Seat, {
        foreignKey : "seatId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      this.belongsTo(models.Hall, {
        foreignKey : "hallId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
    }
  }
  Show_seats.init({
    showId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seatId: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
    hallId: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull : false,
      defaultValue : 180
    },
    status:{
      type : DataTypes.ENUM,
      values : [AVAILABLE,LOCKED,BOOKED],
      defaultValue : AVAILABLE
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull : false,
      defaultValue : new Date()
    }
  }, {
    sequelize,
    modelName: 'Show_seats',
  });
  return Show_seats;
};