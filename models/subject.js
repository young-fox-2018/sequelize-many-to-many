'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
      Subject.hasMany(models.Teacher)
      Subject.belongsToMany(models.Student, {through : 'StudentSubject', foreignKey : 'subject_id'})
  };
  return Subject;
};