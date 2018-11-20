'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Students', [
          {
            first_name: 'A',
            last_name: 'AB',
            email:'aab@sekolah.id',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            first_name: 'B',
            last_name: 'BC',
            email:'bbc@sekolah.id',
            createdAt: new Date(),
            updatedAt: new Date()
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Students', null, {});
  }
};
