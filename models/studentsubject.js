'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentSubject = sequelize.define('StudentSubject', {
    SubjectId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER
  }, {});
  StudentSubject.associate = function(models) {
    // associations can be defined here
  };
  return StudentSubject;
};