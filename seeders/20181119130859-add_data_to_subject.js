'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [{
      subjectName : 'Biology',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectName : 'Physics',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectName : 'Chemistry',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectName : 'Maths',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectName : 'National',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};
