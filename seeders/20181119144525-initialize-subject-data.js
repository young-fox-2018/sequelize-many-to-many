'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [
    {
      subjectName: "Fisika",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectName: "Ekonomi",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectName: "Matematika",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subjectName: "Komputer",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {    
   return queryInterface.bulkDelete('Subjects', null, {});
  }
};
