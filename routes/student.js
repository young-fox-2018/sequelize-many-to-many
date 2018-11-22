const routes = require('express').Router()
const model = require('../models/')
const student = model.Student
const helper = require('../helpers/')

routes.get('/', function(req, res){
    student.findAll({
        include: [{
            model: model.Subject,
                }],
        order: [ ['id', 'ASC'] ]
    })
    .then(success=>{
        res.render('./student.ejs',{
            dataStudent: success
        });
    })
    .catch((err) => {
        res.send(err)
    })
});

routes.get('/edit/:id', function(req, res){
    const id = req.params.id
    student.findById(id)
    .then(success=>{
        res.render('./editStudent',{
            detailStudent : success
      });
    })
    .catch(err => {
        res.send(err)
    })
})

routes.post('/edit/:id', function(req, res){
    const id = req.params.id
    student.findOne({where: {
        email: req.body.email
    }})
    .then(newData => {  
    const input = {
          first_name : req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          updatedATt: new Date()
    }
    
    if(newData.email === input.email) { 
        delete input.email
    }
      
    student.update(input,{where: {id}})
        .then(success=>{
            res.redirect('/student')
        })
    })
  .catch(err=>{
      res.send(err)
  })
});

routes.get('/add', function(req,res){
  let input = {
      info: req.query.info
  }
//   res.send(input)
  res.render('./addStudent', input)
})

routes.post('/add', function(req,res){
    student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })
    .then(success => {
        res.redirect('/student')
    })
    .catch(err => {
        // res.send(err)
        res.redirect(`./add?info=${err.errors[0].message}`)
    })
})

routes.get('/:id/add-subject', function(req,res){
    const id = req.params.id
    student.findById(id)
    .then(dataStudent=>{
        model.Subject.findAll()
        .then(dataSubject =>{
            res.render('./addStudentSubject',{
                detailStudent : dataStudent,
                dataSubject : dataSubject
            });
        })
    })
    .catch(err => {
        res.send(err)
    })
})

routes.post('/:id/add-subject', function(req,res){
    const id = req.params.id
    model.Subject.findOne({
        where: {
            subject_name : req.body.subject_name
        }
    })
    .then(dataSubject =>{
        model.StudentSubject.create({
            student_id  : id,
            subject_id : dataSubject.id
        })
        .then(success =>{
            res.redirect('/student')
        })

    })
    .catch(err => {
        res.send(err)
    })
})



routes.get('/delete/:id', function(req,res){
    const id = req.params.id
    student.destroy({
        where:{id}
    })
    .then(success=> {
        res.redirect('/student')
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = routes