const express= require("express")
const routes = express.Router()
const Model = require("../models")
const Teacher = Model.Teacher


routes.get("/",function(req,res){
    let info = req.query.info
    Teacher.findAll({
        include: [{
            model: Model.Subject
        }],
        order:[['id','ASC']]
    })
    .then(data=>{
        // res.send(data)
        res.render("teacher.ejs",{data:data, info:info})
    })
    .catch(err=>{
        res.redirect(`?info=${err.errors[0].message}`)
    })
})

routes.post("/",function(req,res){
    let data = req.body
    
    Teacher.create(data)
    .then(()=>{
        res.redirect(`?info=success%20add%20data%20Teacher`)
    })
    .catch(err=>{
        res.redirect(`?info=${err.errors[0].message}`)
    })
})

routes.get("/edit/:id",function(req,res){
    let id = req.params.id
    let info = req.query.info
    Teacher.findOne({
        where:{
            id
        }
    })
    .then(data=>{
        res.render('editTeacher.ejs',{id:id,data:data,info:info})
    })
    .catch(err=>{
        res.redirect(`?info=${err.errors[0].message}`)
    })
})

routes.post("/edit/:id",function(req,res){
    let id = req.params.id
    let body = req.body
    let obj = {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        SubjectId: Number(body.SubjectId)
    }
    Teacher.update(obj, 
        {
            where:{ id }
        }
    )
    .then(()=>{
        res.redirect(`?info=success%20update%20data%20Teacher`)
    })
    .catch(err=>{
        res.redirect(`?info=${err.errors[0].message}`)
    })
})

routes.get("/delete/:id",function(req,res){
    let id = req.params.id
    Teacher.destroy({
        where:{
            id
        }
    })
    .then(()=>{
        res.redirect(`/teacher?info=success%20delete%20data%20Teacher`)
    })
    .catch(err=>{
        res.redirect(`/teacher?info=${err.errors[0].message}`)
    })
})

module.exports = routes