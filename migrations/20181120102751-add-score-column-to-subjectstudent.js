'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
   return queryInterface.addColumn('SubjectsStudents', 'score', {type: Sequelize.INTEGER});
  },

  down: (queryInterface, Sequelize) => {    
   return queryInterface.removeColumn('SubjectsStudents', 'score');
  }
};
