const express = require('express')
const Model = require('../models')
const Route = express.Router()

Route.get('/', (req, res) => {
    Model.Student.findAll()
        .then(data => {
            res.render('studentTable', {data: data,
            info: req.query.info})
        })
        .catch(err => {
            res.redirect(`/student?info='${err}'`)
        })
})

Route.get('/add', (req, res) => {
    res.render('formStudent')
})

Route.post('/add', (req, res) => {
    let data = req.body
    Model.Student.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
    })
        .then(data => {
            res.redirect(`/student?info='success add student'`)
        })
        .catch(err => {
            res.redirect(`/student?info='${err}'`)
        })
})

Route.get('/:id/add-subject', (req, res) => {
    let id = req.params.id
    Model.Student.findOne({
        where: {
            id: id
        }
    })
        .then(data => {
            res.render('addSubject', {data})
        })
        .catch(err => {
            res.redirect(`/student?info='${err}'`)
        })
})  

Route.post('/:id/add-subject', (req, res) => {
    let data = req.body
    let id = req.params.id
    Model.StudentSubject.create({
        StudentId: id,
        SubjectId: data.subject
    })
        .then(data => {
            res.redirect(`/student?info='success add subject'`)
        })
        .catch(err => {
            res.redirect(`/student?info='${err}'`)
        })
})



module.exports = Route