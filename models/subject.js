'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING,
  }, {});
  Subject.associate = function(models) {
    Subject.belongsToMany(models.Student, {foreignKey:'subjectId',through: models.StudentsSubject}, {onDelete: 'CASCADE', hooks: true})
    Subject.hasMany(models.Teacher, {foreignKey: 'subjectId'})
  };
  return Subject;
};