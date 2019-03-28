'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    Subject.belongsToMany(models.Student,{through: 'StudentSubject'})
  };
  return Subject;
};