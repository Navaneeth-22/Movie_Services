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
        foreignKey : "cityId",
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      });
      this.hasMany(models.Hall, {
        foreignKey : "cinemaId",
      });
      this.hasOne(models.Address, {
        foreignKey : "cinemaId",
      });
      this.belongsToMany(models.Movie, {
        through : "CinemaMovie",
        uniqueKey : "cinemaId_movieId"
      })
      this.hasMany(models.Show,{
        foreignKey : "cinemaId"
      })
    }
  }
  Cinema.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    branchCode:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Cinema',
  });
  return Cinema;
};
