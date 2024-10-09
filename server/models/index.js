const {Sequelize, DataTypes} = require('sequelize')
const {sequelize} = require('../db')


const Item = sequelize.define("items", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.INTEGER,
  category: DataTypes.STRING,
  image: DataTypes.STRING
})
module.exports = {
  db: sequelize,
  Item
};
