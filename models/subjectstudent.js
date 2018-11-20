'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubjectStudent = sequelize.define('SubjectStudent', {
    SubjectId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER
  }, {});
  SubjectStudent.associate = function(models) {
    // SubjectStudent.belongsTo(models.Subject)
    // SubjectStudent.belongsTo(models.Student)
  };
  return SubjectStudent;
};

// ,{foreignKey:'StudentId'}