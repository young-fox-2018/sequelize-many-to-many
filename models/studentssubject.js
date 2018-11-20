'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentsSubject = sequelize.define('StudentsSubject', {
    subjectId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  StudentsSubject.associate = function(models) {
  };
  return StudentsSubject;
};