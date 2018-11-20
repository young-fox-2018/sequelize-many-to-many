'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
      firstName: 'Bambang',
      lastName: 'Sapi',
      subjectId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Kuda',
      lastName: 'Terbang',
      subjectId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Lamen',
      lastName: 'Nien',
      subjectId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Kambing',
      lastName: 'Guling',
      subjectId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Sate',
      lastName:  'Kambing',
      subjectId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Super',
      lastName: 'Saiya',
      subjectId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    firstName: 'Goku',
    lastName: 'Ball',
    subjectId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    firstName: 'Sret',
    lastName: 'Srot',
    subjectId: 5,
    createdAt: new Date(),
    updatedAt: new Date() 
  }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
