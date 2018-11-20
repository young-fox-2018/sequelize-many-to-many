"use strict"

const routes = require('express').Router()
const Model = require('../models/index')

routes.get('/', (req, res) => {
    Model.Student.findAll()
    .then(data => {
        let obj = {
            title: 'Students',
            data: data
        }

        res.render('../views/student/index.ejs', obj)
    })
    .catch(err => {
        res.send(err)
    })
})

routes.get('/:id/add-subject', (req, res) => {
    Model.Student.findOne({
        where: {
            id: req.params.id
        }
    })   
    .then((data) => {
       let student = data.dataValues

       Model.Subject.findAll()
       .then((data) => {
            let subjects = data.map(element => element.dataValues)
            let obj = {
                title: 'Add Student Subject',
                student: student,
                subject: subjects
            }

            res.render('../views/student/add.ejs', obj)
       })
    })
    .catch((err) => {
        console.log(err)
    })
})

routes.post('/:id/add-subject', (req, res) => {
    Model.StudentsSubject.create({
        studentId: req.params.id,
        subjectId: req.body.subjectId
    })   
    .then((data) => {
        res.redirect('/student')
    })
    .catch((err) => {
        console.log(err)
        res.redirect('/student')
    })
})

routes.get('/delete/:id', (req, res) => {
    Model.Student.destroy({
        where: {
            id: req.params.id
        }
    })   
    .then((data) => {
        res.redirect('/student?result=success')
    })
    .catch((err) => {
        res.redirect('/student?result=failed')
    })
})


module.exports = routes