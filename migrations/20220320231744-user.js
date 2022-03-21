"use strict";

const sequelize = require("../newdb");

const { DataTypes, DATE } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable(
      "User",
      {
        cne: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
        },
        login: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        fullname: {
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
  },

  async down(queryInterface, Sequelize) {
    sequelize.drop();
  },
};
