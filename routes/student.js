const route = require('express').Router()
const Model = require('../models/index')

route.get('/' , (req,res) => {
  Model.Student.findAll()
    .then(data =>{
      res.render('student.ejs' , {data:data})
    })
    .catch(err => {
      res.render('error.ejs' , {data:'Error in displaying data in student routes'})
    })
})

route.get('/add' , (req,res) => {
  res.render('add.ejs')
})

route.post('/add' , (req,res) => {
  let obj = req.body 
  Model.Student.create({
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email
  })
  .then(data => {
    res.redirect('/student')
  })
  .catch(err => {
    res.render('error.ejs' , {data: `Error in adding student section: routes post`})
  })
})

route.get('/edit/:id', (req,res)=> {
  res.render('edit.ejs')
})

route.post('/edit/:id', (req,res) => {
  let obj = req.body
    if(obj.first_name == '' || obj.first_name == undefined){
    res.redirect('error.ejs',{data: `Please fill first name!`})
  } else if (obj.last_name == '' || obj.last_name == undefined) {
    res.redirect('error.ejs',{data:`Please fill last name!` })
  } else if(obj.email == '' || obj.email == undefined) {
    res.redirect('error.ejs',{data:`Please fill email!` })
  } else {
    Model.Student.update({
      first_name : obj.first_name, 
      last_name : obj.last_name,
      email : obj.email,
    }, {
        where:{
          id: req.params.id
        }
    })
    .then(data => {
      res.redirect('/student')
    })
    .catch(err => {
      res.render('error.ejs' , {data:`Error in editting student in route`})
    })
  }
})

route.get('/delete/:id', (req,res)=>{
  Model.Student.destroy({where:{id:req.params.id}})
  .then(data =>{
    res.redirect('/student')
  })
  .catch(err=> {
    res.render('error.ejs' , {data:`Error in deleting student in routes`})
  })
})

route.get('/addSubject/:id' , (req,res) => {
  Model.Student.findOne({where:{id:req.params.id}})
    .then(data => {
      let input ={
        data: data
      }
      Model.Subject.findAll()
      .then(subject => {
        let subjectName = subject.map(element =>{
          return element.subject_name
        })
        let subjectId = subject.map(element =>{
          return element.id
        })
        input.subject = subjectName
        input.subjectId = subjectId
        // res.send(subjectName)
        res.render('addSubject' , {data:input})
      })
    })
    .catch(err => {
      res.render('error.ejs' , {data:`Error in add Subject in routes subject`})
    })
})

route.post('/addSubject/:id' , (req,res) =>{
  res.send(req.body)
  Model.StudentSubject.create({
    SubjectId : req.body.subject,
    StudentId : req.params.id
  })
  
})

module.exports = route