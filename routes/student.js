const routes = require('express').Router();
const bodyParser = require('body-parser');
const Model = require('../models')
const Student = Model.student
const StudentsSubjects = Model.StudentsSubjects

routes.get('/', function(req, res) {
  Student.findAll()
    .then(function(dataStudent) {
      res.render('student',{data: dataStudent})
    })
    .catch(function(err) {
      res.send(err)
    })
})

routes.get('/add', function(req, res) {
  res.render('add-student')
})

routes.post('/add', function(req, res) {
  let obj = {
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    createdAt: new Date,
    updatedAt: new Date
  }
  Student.create(obj)
    .then(function() {
      res.redirect('/student')
    })
    .catch(function(err) {
      res.send(err.message)
    })
})

routes.get('/edit/:id', function(req, res) {
  Student.findOne({where: {id: req.params.id}})
    .then(function(dataStudent) {
      res.render('edit-student',{data: dataStudent})
    })
    .catch(function(err) {
      res.send(err)
    })
})

routes.post('/edit/:id', function(req, res) {
  Student.findOne({where: {id: req.params.id}})
    .then(function(data) {
      let obj = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        createdAt: new Date,
        updatedAt: new Date
      }
      if (data.dataValues.email === req.body.email) {
        delete obj.email
      }
      Student.update(obj, {where: {id: req.params.id}})
      .then(function() {
        res.redirect('/student')
      })
      .catch(function(err) {
        res.send(err)
      })
    })
})

routes.get('/delete/:id', function(req, res) {
  Student.destroy({where: {id: req.params.id}})
    .then(function() {
      res.redirect('/student')
    })
    .catch(function(err) {
      res.send(err)
    })
})

routes.get('/:id/add-subject', function(req, res) {
  Student.findOne({where: {id: req.params.id}})
    .then(function(dataStudent) {
      res.render('student-add-subject',{data: dataStudent})
    })
    .catch(function(err) {
      res.send(err)
    })
})

routes.post('/:id/add-subject', function(req, res) {
  let obj = {
    SubjectId: req.body.subject,
    StudentId: req.params.id,
    score: 0,
    createdAt: new Date,
    updatedAt: new Date
  }
  StudentsSubjects.create(obj)
    .then(function() {
      res.redirect('/student')
    })
    .catch(function(err) {
      res.send(err.message)
    })
})

module.exports = routes;