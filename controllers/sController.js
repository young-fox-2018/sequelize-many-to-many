const Model = require('../models')
const Student = Model.Student

class sController{

    static allStudent(){
        return new Promise((resolve, reject) =>{
            Student.findAll()
             .then(dataList => {
                 resolve(dataList)
             })
             .catch(err => {
                 reject(err)
             })
        })
    }

    static addStudent(input){
        return new Promise((resolve, reject) => {
            Student.create({
                firstname: input.firstname,
                lastname: input.lastname,
                email: input.email
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static findStudent(id){
        return new Promise((resolve, reject) => {
            Student.findByPk(String(id))
            .then(student =>{
                resolve(student)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static updateStudent(input, id){
        return new Promise( (resolve, reject) => {
            Student.update({
                first_name: input.firstname,
                last_name: input.lastname,
                email: input.email
            },
            {where: {id: id}}
            )
            .then(data => resolve(data) )
            .catch(err => reject(err) )
        })
    }

    static deleteStudent(idInput){
        return new Promise( (resolve, reject) => {
            Student.destroy({
                where: {
                    id: idInput
                }
            })
            .then( data => resolve(data) )
            .catch(err => reject(err.dataValues) )
        })
    }

}

module.exports = sController