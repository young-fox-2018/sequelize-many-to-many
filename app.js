"use strict"
const express = require('express')
const app = express()
const studentRoutes = require('./routes/student.js')
const subjectRoutes = require('./routes/subject.js')
const ROUTE = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/student', studentRoutes)
app.use('/subject', subjectRoutes)


app.listen(ROUTE, function() {
    console.log(`Server is running on port: ${ROUTE}`)
})