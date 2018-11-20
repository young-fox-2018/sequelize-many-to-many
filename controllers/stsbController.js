const Model = require('../models')
const stsb = Model.SubjectsStudent


class stsbController{

    static allData(){
        return new Promise((resolve, reject) =>{
            stsb.findAll(
                {
                    include:[
                        {model: Model.Student},
                        {model: Model.Subject}
                    ]
                }
            )
             .then(dataList => {
                 resolve(dataList)
             })
             .catch(err => {
                 reject(err)
             })
        })
    }

    static allDataPerSubject(id){
        return new Promise((resolve,reject) => {
            stsb.findAll(
            {
                where: {
                    subjectId: id
                },
                include: [
                    {model: Model.Student},
                    {model: Model.Subject}
                ]
            }
        )
         .then(dataList => {
             resolve(dataList)
         })
          .catch( err => {
              reject(err)
         })
        })
    }


    static addSubject(input, id){
        return new Promise((resolve, reject) => {
            stsb.create({
                studentId: id,
                subjectId: input.subjectId
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static updateScore(input, subId, id){
        return new Promise((resolve, reject) => {
            stsb.update(
                {score: input.score},
                {where: 
                    [
                        {subjectId: subId},
                        {studentId: id}
                    ]
                }
            )
            .then( () => {
                resolve(input.score)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static studentScore(subId, id){
        return new Promise((resolve,reject) => {
            stsb.findAll(
            {
                where: {
                    subjectId: subId,
                    studentId: id
                },
                include: [
                    {model: Model.Student},
                    {model: Model.Subject}
                ]
            }
        )
         .then(dataList => {
             resolve(dataList)
         })
          .catch( err => {
              reject(err)
         })
        })
    }




}
module.exports= stsbController
