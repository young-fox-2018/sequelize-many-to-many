'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SubjectsStudents', [
      {
        studentId: 1,
        subjectId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 1,
        subjectId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 2,
        subjectId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 3,
        subjectId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 4,
        subjectId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 5,
        subjectId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 6,
        subjectId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 6,
        subjectId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
