'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [{
      subjectName: 'Sequelize',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      subjectName: 'OOP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      subjectName: 'ExpressJS',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};
