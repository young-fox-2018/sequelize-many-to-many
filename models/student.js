'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:{
      type: DataTypes.STRING,
      validate: {
        isUnique: function () {
          return Student.findOne({where: {email: this.email}})
            .then(data=> {
              if(data) throw ('Email already in use!');
            })
            .catch(err=>{
              throw new Error(err)
            })
        },
        isEmail: {
          args: true, msg:"email is not valid"
        }
      }
    }
  }, {});
  Student.associate = function(models) {
      Student.belongsToMany(models.Subject, {through : 'StudentSubject', foreignKey : 'student_id'})
  };
  return Student;
};