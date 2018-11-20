'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentsSubjects = sequelize.define('StudentsSubjects', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  StudentsSubjects.associate = function(models) {
    StudentsSubjects.belongsTo(models.subject, {foreignKey: 'SubjectId'});
    StudentsSubjects.belongsTo(models.student, {foreignKey: 'StudentId'});
  };
  return StudentsSubjects;
};