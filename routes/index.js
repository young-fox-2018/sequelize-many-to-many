const router = require('express').Router()
const teacher = require('./teacher')
const subject = require('./subject')
const student = require('./student')

router.get('/', function (req, res) {
    res.render('index.ejs')
})

router.use('/teacher', teacher)
router.use('/subject', subject)
router.use('/student', student)

module.exports = router