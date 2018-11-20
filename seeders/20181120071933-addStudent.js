'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      first_name: 'Arnold',
      last_name: 'Herold',
      email: 'arhel@mail.com',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Desy',
      last_name: 'Armen',
      email: 'desArml@mail.com',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Kevin',
      last_name: 'Wija',
      email: 'KEvinsjsd@mail.com',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Zia',
      last_name: 'Nabi',
      email: 'Zianab@mail.com',
      createdAt : new Date(),
      updatedAt: new Date()
    }
  ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});

  }
};
