'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StudentsSubjects', [{
      subjectId: 1,
      studentId: 1,
      score: 80,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectId: 2,
      studentId: 1,
      score:70,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectId: 2,
      studentId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectId: 3,
      studentId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectId: 3,
      studentId: 3,
      score: 120,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectId: 3,
      studentId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StudentsSubjects', null, {});
  }
};
