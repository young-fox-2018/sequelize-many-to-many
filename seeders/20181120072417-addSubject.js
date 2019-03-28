'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [{
      subject_name: 'Chem',
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      subject_name: 'Art',
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      subject_name: 'English',
      createdAt:new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null);
  }
};
