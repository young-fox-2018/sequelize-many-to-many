'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentsSubjects = sequelize.define('StudentsSubjects', {
    StudentId: DataTypes.INTEGER,
    SubjectsId: DataTypes.INTEGER
  }, {});
  StudentsSubjects.associate = function(models) {
    // associations can be defined here
    StudentsSubjects.belongsTo(models.Subject)
    StudentsSubjects.belongsTo(models.Student)
  };
  return StudentsSubjects;
};