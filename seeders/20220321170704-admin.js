"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("Admin", [
      { id: 1, fullname: "taha", password: "1234", login: "taha" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Admin", null, {});
  },
};
