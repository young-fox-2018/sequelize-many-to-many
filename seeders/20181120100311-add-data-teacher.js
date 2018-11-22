'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [
    {
      first_name: 'Abed',
      last_name: "Nego",
      email: "abednego@sekolah.id" ,
      SubjectId: 3,
      createdAt: new Date(),
      updatedAt : new Date() 
    },{
      first_name: 'Tatang',
      last_name: "Suprapto",
      email: "tatangsuprapto@sekolah.id" ,
      SubjectId: 1,
      createdAt: new Date(),
      updatedAt : new Date() 
    },{
      first_name: 'Andrey',
      last_name: "Cls",
      email: "andreycls@sekolah.id" ,
      SubjectId: 2,
      createdAt: new Date(),
      updatedAt : new Date() 
    },{
      first_name: 'Ariansyah',
      last_name: "nugroho",
      email: "syong@sekolah.id" ,
      SubjectId: 3,
      createdAt: new Date(),
      updatedAt : new Date() 
    },{
      first_name: 'Pilip',
      last_name: "Pians",
      email: "pilipians@sekolah.id" ,
      SubjectId: 2,
      createdAt: new Date(),
      updatedAt : new Date() 
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Teachers', null, {});

  }
};
