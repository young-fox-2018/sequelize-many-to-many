'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [
      {
        subject_name: 'Java script',
        createdAt: new Date(),
        updatedAt : new Date()
      },{
        subject_name: 'Java',
        createdAt: new Date(),
        updatedAt : new Date()
      },{
        subject_name: 'C#',
        createdAt: new Date(),
        updatedAt : new Date()
      },{
        subject_name: 'CPP',
        createdAt: new Date(),
        updatedAt : new Date()
      },{
        subject_name: 'Golang',
        createdAt: new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};
