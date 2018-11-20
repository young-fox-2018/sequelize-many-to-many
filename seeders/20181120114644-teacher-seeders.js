'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
      firstName: 'Budi',
      lastName: 'Santoso',
      email: 'busan@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Siti',
      lastName: 'Nurbaya',
      email: 'sinur@yahoo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Joko',
      lastName: 'Anwar',
      email: 'jowar@yahoo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
