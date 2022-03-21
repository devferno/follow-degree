"use strict";
const data = require("./data-jW7R6r4qcBPG-ZurGeU-8.json");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("User", data);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("User", null, {});
  },
};
