'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    student.belongsToMany(models.subject, {through: 'StudentsSubjects', foreignKey: 'StudentId'});
  };
  return student;
};