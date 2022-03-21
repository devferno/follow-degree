const { DataTypes, DATE } = require("sequelize");
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
    createAt: { type: DATE },
    updatedAt: { type: DATE },
  },
  { tableName: "Admin" }
);

module.exports = Admin;
