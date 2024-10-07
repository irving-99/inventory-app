const {Sequelize, DataTypes} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

const Item = sequelize.define("items", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.INTEGER,
  category: DataTypes.STRING,
  image: DataTypes.STRING
})
module.exports = {
  db: sequelize,
  Sauce,
  Item
};
