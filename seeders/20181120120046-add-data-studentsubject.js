'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('StudentSubjects', [{
        student_id: 1,
        subject_id: 1,
        score: 100,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        student_id: 2,
        subject_id: 1,
        score: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('StudentSubjects', null, {});

  }
};
