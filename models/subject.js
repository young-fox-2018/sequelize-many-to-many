'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    Subject.belongsToMany(models.Student, { through: `StudentSubjects`})
    Subject.hasMany(models.Teacher)
  };
  return Subject;
};

