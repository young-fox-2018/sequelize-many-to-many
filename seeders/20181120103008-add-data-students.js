'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('Students', [{
      first_name: 'Abed',
      last_name: 'Lubis',
      email: 'abed@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Uci',
      last_name: 'Lubis',
      email: 'uci@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

},

down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Students', null, {});
}
};
