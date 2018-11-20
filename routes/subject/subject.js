const router = require("express").Router()
const Controller = require("../../controller/subjectController")
const ControllerConjunction = require("../../controller/conjungtion")

router.get("/", (req, res) => {
    Controller.allData()
        .then((result) => {
            res.render("subject.ejs", { subjectData: result })
        })
})

router.get("/:id/enrolled-student", (req, res) => {
    ControllerConjunction.EnrolledStudent(req.params.id)
        .then((data) => {
            res.render("addScore.ejs", { data: data[data.length - 1] })
        })

})
router.get("/:id/score/:student", (req, res) => {
    res.render("score.ejs", { subject: req.params.id, student: req.params.student })
})

router.post("/:id/enrolled-student/:student", (req, res) => {
    console.log(req.body);
    console.log(req.params.id, req.params.student);
    let data = {
        score: Number(req.body.score)
    }
    ControllerConjunction.addScore(req.params.id, req.params.student, data)
        .then(() => {
            res.redirect(`/subject/${req.params.id}/enrolled-student`)
        })
})
module.exports = router