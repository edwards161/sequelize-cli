const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Director = sequelize.define("Director", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
},
director: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Director;