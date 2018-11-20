'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
      first_name: 'Bulet',
      last_name: 'Naga',
      email: 'Buneal@mail.com',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Akbar',
      last_name: 'Armen',
      email: 'Akmenl@mail.com',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Wika',
      last_name: 'Silo',
      email: 'Wikaasil@mail.com',
      createdAt : new Date(),
      updatedAt: new Date()
    }
  ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
