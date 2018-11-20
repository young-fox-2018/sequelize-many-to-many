'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubjectsStudent = sequelize.define('SubjectsStudent', {
    studentId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  SubjectsStudent.associate = function(models) {
    SubjectsStudent.belongsTo(models.Subject, {foreignKey: "subjectId"})
    SubjectsStudent.belongsTo(models.Student, {foreignKey: "studentId"})
  };
  return SubjectsStudent;
};