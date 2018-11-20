'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SubjectsStudents', 
    [
      {
        SubjectId: 1,
        StudentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 1,
        StudentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 1,
        StudentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 1,
        StudentId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 1,
        StudentId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 1,
        StudentId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 2,
        StudentId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 2,
        StudentId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 2,
        StudentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 2,
        StudentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 2,
        StudentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 3,
        StudentId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 3,
        StudentId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 5,
        StudentId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SubjectId: 5,
        StudentId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SubjectsStudents', null, {});
  }
};
