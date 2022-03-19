const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER,
  process.env.PASS,
  {
    host: process.env.HOST,
    dialect: "postgres",
  }
);

module.exports = sequelize;
