'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `First Name must be filled`
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Last name must be filled`
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
          return Teacher.findOne({
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
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function (models) {
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};