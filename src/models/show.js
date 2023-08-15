'use strict';
const {
  Model
} = require('sequelize');
const { ENUMS } = require('../utils/common');
const {UPCOMING,RUNNING,FINISHED,CANCELLED} = ENUMS.SHOW_STATUS;
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Cinema, {
        foreignKey : "cinemaId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      this.belongsTo(models.Hall, {
        foreignKey : "hallId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      this.belongsTo(models.City, {
        foreignKey : "cityName",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      this.belongsTo(models.Movie, {
        foreignKey : "movieId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      this.hasMany(models.Show_seats, {
        foreignKey : "showId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });

    }
  }
  Show.init({
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cinemaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cityName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hallId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    showStatus: {
      type : DataTypes.STRING,
      allowNull : false,
      values  : [UPCOMING,RUNNING,FINISHED,CANCELLED],
      defaultValue : UPCOMING
    },
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};