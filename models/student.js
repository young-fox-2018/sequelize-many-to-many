'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `First Name must be filled!`
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Last Name must be filled!`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Email must be filled!`
        },
        isEmail: {
          args: true,
          msg: `Missing @ or . when create email!`
        },
        isUnique(email) {
          return Student.findOne({
            where: {
              email: email
            }
          })
            .then(function (found) {
              if (found) {
                throw new Error(`Email already exists!`)
              }
            })
            .catch(function (err) {
              throw new Error(err)
            })
        }
      }
    }
  }, {});
  Student.associate = function (models) {
    Student.belongsToMany(models.Subject, { through: models.StudentSubject })
    Student.hasMany(models.StudentSubject)
  };
  return Student;
};