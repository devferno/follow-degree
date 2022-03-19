const { DataTypes } = require("sequelize");
const sequelize = require("../newdb");
const Admin = sequelize.define(
  "Admin",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: { defaultValue: "admin", type: DataTypes.STRING },
    login: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: "Admin" }
);

module.exports = Admin;
