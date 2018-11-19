'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentsSubject = sequelize.define('StudentsSubject', {
    subjectId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {});
  StudentsSubject.associate = function(models) {
    // associations can be defined here
  };
  return StudentsSubject;
};