'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class continent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.continent.hasMany(models.country)
    }
  };
  continent.init({
    name: DataTypes.TEXT,
    size: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'continent',
  });
  return continent;
};