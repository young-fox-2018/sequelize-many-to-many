'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
      first_name: 'Kevin',
      last_name: 'Wijaya',
      email: 'kevinwij1501@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      first_name: 'Desy',
      last_name: 'Rachmawati',
      email: 'desyR@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      first_name: 'Arnold',
      last_name: 'Herod',
      email: 'arnoldh@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      first_name: 'Venecia',
      last_name: 'Calista',
      email: 'vencal@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      first_name: 'Rangga',
      last_name: 'Kusuma',
      email: 'rangkus@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      first_name: 'Januar',
      last_name: 'Smad',
      email: 'arc_clinton@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      first_name: 'Abed',
      last_name: 'Nego',
      email: 'abednego@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      first_name: 'Kevin',
      last_name: 'tanuhardi',
      email: 'kevin.tanuhardi@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
