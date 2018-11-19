const express = require('express')
const routerIndex = require('./routers/')
const routerStudent = require('./routers/studentRoute')

const app = express()

const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.use('/student', routerStudent)

app.use('/', routerIndex)

app.listen(PORT, () => {console.log('app is running in pot ', PORT)})