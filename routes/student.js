const express= require("express")
const routes = express.Router()
const Model = require("../models")
const Student = Model.Student
const SubjectStudent = Model.SubjectStudent

routes.get("/",function(req,res){
    // res.send("masuk teacher")
    let info = req.query.info
    Student.findAll({
        order:[['id','ASC']]
    })
    .then(data=>{
        res.render("student.ejs",{data:data, info:info})
    })
    .catch(err=>{
        res.send(err)
    })
})

routes.post("/",function(req,res){
    let id = req.params.id
    let data = req.body
    Student.create(data)
    .then(()=>{
        res.redirect(`?info=success%20add%20data%20student`)
    })
    .catch(err=>{
        res.redirect(`?info=${err.errors[0].message}`)
    })
})

routes.get("/edit/:id",function(req,res){
    let id = req.params.id
    let info = req.query.info
    Student.findOne({
        where:{
            id
        }
    })
    .then(data=>{
        res.render('editStudent.ejs',{id:id,data:data,info:info})
    })
    .catch(err=>{
        res.redirect(`?info=${err.errors[0].message}`)
    })
})

routes.post("/edit/:id",function(req,res){
    let id = req.params.id
    let data = req.body
    Student.update(data, 
        {
            where:{ id }
        }
    )
    .then(()=>{
        res.redirect(`?info=success%20update%20data%20student`)
    })
    .catch(err=>{
        res.redirect(`?info=${err.errors[0].message}`)
    })
})

routes.get("/delete/:id",function(req,res){
    let id = req.params.id
    Student.destroy({
        where:{
            id
        }
    })
    .then(()=>{
        res.redirect(`/student?info=success%20delete%20data%20student`)
    })
    .catch(err=>{
        res.redirect(`/student?info=${err.errors[0].message}`)
    })
})

routes.get("/:id/add-subject",function(req,res){
    let id = req.params.id
    let info = req.query.info
    Student.findOne({
            attributes: [['first_name',"First Name"],['last_name',"Last Name"],["email","Email"]],
            where:{id:id}
    })
    .then(data=>{
        // res.send(data)
        res.render("addSubjectStudent",{id:id,data:data.dataValues,info:info})
    })
    .catch(err=>{
        res.redirect(`?info=${err.errors[0].message}`)
    })
})

routes.post("/:id/add-subject",function(req,res){
    let id = req.params.id
    let data = req.body
    // res.send(data)
    let obj = {
        SubjectId:data.SubjectId,
        StudentId: id
    }
    SubjectStudent.create(obj)
    .then(()=>{
        res.redirect(`/student?info=success%20enroll%20class`)
    })
    .catch(err=>{
        res.redirect(`/student?info=${err.errors[0].message}`)
    })
})



module.exports = routes