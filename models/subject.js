'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    Subject.hasMany(models.Teacher, {foreignKey: "subjectId"})
    Subject.belongsToMany(models.Student, {through: "SubjectsStudent", foreignKey: "subjectId"})
  };
  return Subject;
};