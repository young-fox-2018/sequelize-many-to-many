const routes = require('express').Router()
const sbController = require('../controllers/sbController')
const stsbController = require('../controllers/stsbController')
const View = require('../views/view')

routes.get("/", function(req, res){
    sbController.allSubjects()
    .then(subjectList =>{
        let all = subjectList.map(subjects => subjects.dataValues)
        // res.send(all)
        res.render("allSubjects.ejs", {sbAll: all})
    })
    .catch(err => {
        View.displayError(
            {
                Message: "Errornya di routes.get allSubjects",
                Details: err
            }
        )
    })
})

routes.get("/:id/enrolled-students", function(req, res){
    let params = req.params
    let id = params.id
    
    stsbController.allDataPerSubject(id)
    .then( (data) => {
        // res.send(data)
        res.render("enrolledStu.ejs", {dataConj: data} )
    })
    .catch(err =>{
        res.redirect(`/teachers/edit/${id}?errInfo=${err.errors[0].message}`
        )
    })
})

routes.get("/:subid/:id/give-score", function(req, res){
    let params = req.params
    let id = params.id
    let subId = params.subid
    
    stsbController.studentScore(subId,id)
    .then( (data) => {
        // res.send(data)
        res.render("giveScore.ejs", {dataConj: data} )
    })
    .catch(err =>{
        res.redirect(`/teachers/edit/${id}?errInfo=${err.errors[0].message}`
        )
    })
})

routes.post("/:subid/:id/give-score", function(req, res){
    let params = req.params
    let id = params.id
    let subId = params.subid
    
    stsbController.updateScore(req.body, subId ,id)
    .then( (data) => {
        // res.send(data)
        res.redirect(`/subjects/${subId}/enrolled-students` )
    })
    .catch(err =>{
        res.redirect(`/teachers/edit/${id}?errInfo=${err.errors[0].message}`
        )
    })
})




module.exports = routes