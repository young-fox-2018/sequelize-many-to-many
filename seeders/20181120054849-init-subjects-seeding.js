'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [
      {
      name: 'Chemistry',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Economy',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Physics',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};
