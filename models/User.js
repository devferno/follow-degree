const { DataTypes, DATE } = require("sequelize");
const sequelize = require("../newdb");
const User = sequelize.define(
  "User",
  {
    cne: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stateOfDegree: {
      type: DataTypes.STRING,
      defaultValue: "en traitment",
      allowNull: false,
    },
    reasonOfDegree: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: DATE,
    },
    updatedAt: {
      type: DATE,
    },
  },
  { tableName: "User" }
);

module.exports = User;
