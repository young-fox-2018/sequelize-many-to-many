'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentsSubject = sequelize.define('StudentsSubject', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  }, {});
  StudentsSubject.associate = function(models) {
    // associations can be defined here
  };
  return StudentsSubject;
};