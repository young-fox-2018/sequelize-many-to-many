'use strict';
module.exports = (sequelize, DataTypes) => {
  const subject = sequelize.define('subject', {
    subjectName: DataTypes.STRING
  }, {});
  subject.associate = function(models) {
    subject.belongsToMany(models.student, {through: 'StudentsSubjects', foreignKey: 'SubjectId'});
  };
  return subject;
};