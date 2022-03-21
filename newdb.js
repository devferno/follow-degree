const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.USER,
//   process.env.PASS,
//   {
//     host: process.env.HOST,
//     dialect: "postgres",
//   }
// );

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
