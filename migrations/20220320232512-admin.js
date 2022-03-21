"use strict";

const { DataTypes, DATE } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable(
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
        createdAt: { type: DATE },
        updatedAt: { type: DATE },
      },
      { tableName: "Admin" }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
