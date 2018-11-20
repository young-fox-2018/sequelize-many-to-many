const routes = require('express').Router();
const Model = require("../models/index");

routes.get("/", (req,res) =>{

    Model.Student.findAll({
        include:[{
            model: Model.Subject
        }]
    })
    .then(data =>{
        obj = data.map(element =>{
            let row ={
                id: element.id,
                first_name: element.first_name,
                last_name: element.last_name,
                email: element.email,

            }

            return row
        })
        let input = {
            data: obj,
            msg: req.query.info
        }
        res.render("./pages/student.ejs",input)
        // res.send(input)
        // console.log("oet")
    })
    .catch(err =>{
        // console.log(err)
        res.send(err)
    })
})

routes.get("/:id/add-subject",(req,res) =>{

    Model.Student.findByPk(req.params.id)
    .then(data => {
        let input ={
            data: data
        }
        Model.Subject.findAll()
        .then(data => {
            subjects = data.map(element => element.name)
            input.data.subjects = subjects

            res.render("./pages/student-add-subject",input)
        })
        .catch(err => res.send(err))
    })
    .catch(err => res.send(err))
})

routes.post("/:id/add-subject", (req,res) =>{
    Model.Subject.findAll({
        where:{
            name: req.body.subject
        }
    })
    .then(data =>{
        Model.StudentsSubject.create({
            StudentId: req.params.id,
            SubjectId: data[0].id
        })
        .then(res.redirect("/student?info=Successfully%20Enrolled%20to%the%20subjects" ))
    } )
    .catch(err => res.redirect(`/student?info=${err}` ))
})

routes.get("/:id/delete", (req,res) =>{
    Model.Student.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(() =>{
        res.redirect("/student?info=Successfully%20Deleted%20Student")
    })
})


module.exports = routes;


