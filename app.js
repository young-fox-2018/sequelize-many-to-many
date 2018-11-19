const express = require('express')
const StudentRouter = require('./routes/student')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/student', StudentRouter)

app.listen(3000, () => {console.log('running...')})