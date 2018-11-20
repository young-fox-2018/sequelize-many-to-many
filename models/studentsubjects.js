'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentSubjects = sequelize.define('StudentSubjects', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  }, {});
  StudentSubjects.associate = function(models) {
    StudentSubjects.belongsTo(models.Student)
    StudentSubjects.belongsTo(models.Subject)
  };
  return StudentSubjects;
};