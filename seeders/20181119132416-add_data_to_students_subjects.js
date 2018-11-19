'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StudentsSubjects', [{
      subjectId: 1,
      studentId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectId: 2,
      studentId: 1,
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
