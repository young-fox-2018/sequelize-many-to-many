'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      firstName: 'Akbar',
      lastName: 'Sahata',
      email: 'akbarsahata@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Agindo',
      lastName: 'Rahmat',
      email: 'agindorahmat@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Dul',
      lastName: 'Sumbang',
      email: 'dulsumbang@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
