'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Geiz',
      lastName: 'Akmen',
      email: 'geix@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Zio',
      lastName: 'Oma',
      email: 'zio@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Tsuko',
      lastName: 'Yomi',
      email: 'tsuko@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Sento',
      lastName: 'Kiryu',
      email: 'sento@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
