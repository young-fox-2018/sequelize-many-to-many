'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args:true,
          msg: "format email salah"
        }
      }
    },
    score: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    Student.belongsToMany(models.Subject,{through:'SubjectStudent'})
  };
  return Student;
};

// ,foreignKey:'StudentId'