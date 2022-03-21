"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("Admin", [
      { id: 1, fullname: "taha", password: "1234", login: "taha" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
