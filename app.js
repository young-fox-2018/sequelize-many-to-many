const express = require('express')
const StudentRouter = require('./routes/student')
const SubjectRouter = require('./routes/subject')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/student', StudentRouter)

app.use('/subject', SubjectRouter)

app.listen(3000, () => {console.log('running...')})