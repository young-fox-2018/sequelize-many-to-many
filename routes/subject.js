const express= require("express")
const routes = express.Router()
const Model = require("../models")
const Subject = Model.Subject

routes.get("/",function(req,res){
    // res.send("masuk subject")
    let info = req.query.info
    Subject.findAll({
        include:[{
            model: Model.Teacher
        }],
        order:[['id','ASC']]
    })
    .then(data=>{
        res.render("subject.ejs",{data:data, info:info})
        // res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
})

routes.get("/:id/enrolled-students",function(req,res){
    let id = req.params.id
    let info = req.query.info
    Subject.findAll({
	    include: [{
		    model: Model.Student
	  }], where:{id}
    })
    .then(data=>{
        // res.send(data[0].dataValues)
        res.render("enrolledSubject.ejs",{id:id,data:data[0].dataValues,info:info})
    })
    .catch(err=>{
        res.send(err)
    })
})

routes.get("/:id/give-score", function(req,res){
    let id = req.params.id
    let info = req.query.info

    Model.Student.findOne({
	    include: [{
		    model: Model.Subject
	  }], where:{id}
    })
    .then(data=>{
        // res.send(data[0].dataValues)
        res.render("giveScore.ejs",{id:id,data:data,info:info})
    })
    .catch(err=>{
        res.send(err)
    })
    
})

routes.post("/:id/give-score", function(req,res){
    let id = req.params.id
    let data = req.body

    Model.Student.update(data,{
        where:{
            id
        }
    })
    .then(()=>{
        res.redirect("/subject?info=success%20update%20score")
    })
    .catch(err=>{
        res.redirect(`/subject?info=${err.errors[0].message}`)
    })
    
})

module.exports = routes