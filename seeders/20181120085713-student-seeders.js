'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      firstName: 'John Doe',
      lastName: 'Lowrance',
      email: 'taqi_sting@hotmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Jonathan',
      lastName: 'Kemberly',
      email: 'svx.annexiv@mgail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Paul',
      lastName: 'Jones',
      email: 'pauljones@yahoo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
