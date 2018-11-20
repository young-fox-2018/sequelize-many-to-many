const router = require("express").Router()
const Controller = require("../../controller/studentController")
const ControllerSubject = require("../../controller/subjectController")
const Conjungtion = require("../../controller/conjungtion")

router.get("/", (req, res) => {
    Controller.allData()
        .then((studentData) => {
            res.render("student.ejs", { studentData })
        })

})
router.get("/:id/add-subject", (req, res) => {
    Controller.findById(req.params.id)
        .then((data) => {
            ControllerSubject.allDataOne()
                .then((subject) => {
                    // res.send({ data: data, subject: subject })
                    res.render("addSubject.ejs", { data: data, subject: subject })
                })
        })

})
router.post("/:id/add-subject", (req, res) => {
    let data = {
        SubjectId: Number(req.body.subject),
        StudentId: Number(req.params.id)
    }
    Conjungtion.addData(data)
        .then(() => {
            res.redirect("/student")
        })
})

module.exports = router