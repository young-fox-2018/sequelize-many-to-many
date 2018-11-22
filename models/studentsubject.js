'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentSubject = sequelize.define('StudentSubject', {
    student_id: DataTypes.INTEGER,
    subject_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  StudentSubject.associate = function(models) {
    
  };
  return StudentSubject;
};