const router = require("express").Router()
const student = require("../routes/student/student")
const subject = require("../routes/subject/subject")
router.get("/", (req, res) => {
    res.render("index.ejs")
})

router.use("/student", student)
router.use("/subject", subject)
module.exports = router