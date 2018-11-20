const express = require('express')
const Router = express.Router()
const Model = require('../models')

Router.get('/', (req, res) => {
    Model.Subject.findAll({
        include: {
            model: Model.Student
        },
    })
    .then(data => {
        res.render('subjectTable', {data})
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = Router