const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db/connection");
// const Director = require("./directorTable");

const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  actor: {
    type: DataTypes.STRING,
    defaultValue: "Not specified",
  },
  year: {
       type: DataTypes.INTEGER,
       allowNull: false,
   },
  //  directorId: {
  //      type: DataTypes.INTEGER,
  //      references: { model: Director, key: "id" },
  //   }
  // genre: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // }
});

module.exports = Movie;