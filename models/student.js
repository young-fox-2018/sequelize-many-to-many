'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  },{});
  Student.associate = function(models) {
   Student.belongsToMany(models.Subject, {onDelete: 'cascade', hooks: true, foreignKey:'studentId',through: models.StudentsSubject},  {onDelete: 'CASCADE', hooks: true})
  };
  return Student;
};