const routes = require('express').Router()
const sController = require('../controllers/sController')
const sbController = require('../controllers/sbController')
const stsbController = require('../controllers/stsbController')
const View = require('../views/view')



routes.get("/", function(req, res){
    sController.allStudent()
    .then(studentList =>{
        let all = studentList.map(students => students.dataValues)
        // res.send(all)
        res.render("allStudents.ejs", {studentsAll: all})
    })
    .catch(err => {
        View.displayError(
            {
                Message: "Errornya di routes.get allStudents",
                Details: err
            }
        )
    })
})



routes.get("/:id/add-subject",function(req,res){
    let params = req.params
    let id = params.id

    sbController.allSubjects()
        .then(data => {
            let subjects = data.map(subject => subject.subjectName)
        //  res.send(subjects)
            sController.findStudent(id)
            .then(student => {
                // res.send(student)
                res.render("oneStudentSub.ejs", {sbData: subjects, students: student.dataValues, errDeets: req.query.errInfo})
            })
        })
        .catch(err => {
            res.render("oneStudent.ejs", {errDeets: err})
        })
})

routes.post("/:id/add-subject",function(req, res){
    let params = req.params
    let id = params.id

    stsbController.addSubject(req.body, id)
    .then( () => {
        // res.send(req.body)
        res.redirect(`/students`)
    })
    .catch(err =>{
        res.redirect(`/teachers/edit/${id}?errInfo=${err.errors[0].message}`
        )
    })

})


module.exports = routes