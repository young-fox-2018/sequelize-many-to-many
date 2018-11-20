'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubjectsStudent = sequelize.define('SubjectsStudent', {
    SubjectId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  SubjectsStudent.associate = function(models) {
    // associations can be defined here
    SubjectsStudent.belongsTo(models.Student);
    SubjectsStudent.belongsTo(models.Subject);
  };
  return SubjectsStudent;
};