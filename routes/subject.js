const routes = require('express').Router();
const Model = require("../models/index");

routes.get("/", (req,res) =>{
    Model.Subject.findAll(
        {
        include:[{
            model: Model.Teacher
        }]
        }
    )
    .then(data => {
        let input = {
            data:data
        }
        res.render("./pages/subject.ejs", input)
        // res.send(data)
    })
    .catch(err => res.send(err))
})

routes.get("/:id/enrolled-student", (req,res) =>{
    Model.Subject.findByPk(req.params.id,{
        include:[{
            model: Model.Student
        }]
    })
    .then(data =>{
        let input= {
            data:data
        }

        res.render("./pages/subject-enrolled-students", input)
    })
})

module.exports = routes;