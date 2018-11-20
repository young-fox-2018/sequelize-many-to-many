'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
    Subject.hasMany(models.Teacher, {foreignKey: "subject_id"})
    Subject.belongsToMany(models.Student, {
      through: 'StudentsSubjects',
      foreignKey: 'SubjectsId'
    })
  };
  return Subject;
};