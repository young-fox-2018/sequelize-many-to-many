const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes)

app.listen(port, function () {
    console.log(`Listenin on port : ${port}`)
})