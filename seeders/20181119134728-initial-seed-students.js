'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert("Students",[
     {
       firstName: "Nikolas",
       lastName: "Friesen",
       email: "agustina_braun@wintheiser.info",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      firstName: "Randi",
      lastName: "Halvorson",
      email: "heber.upton@bechtelarwisozk.biz",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Sally",
      lastName: "Buckridge",
      email: "nora@treutel.name",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Morris",
      lastName: "Swift",
      email: "cordell@sandfordkuhlman.org",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Reid",
      lastName: "Skiles",
      email: "mike_harvey@nikolaus.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Violet",
      lastName: "Dickens",
      email: "rubye_olson@collins.biz",
      createdAt: new Date(),
      updatedAt: new Date()
    }]
   )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
