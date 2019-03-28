const express = require('express')
const app = express()
const port = 3000

const route = require('./routes/index')
const student = require('./routes/student')

app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended:true}))
app.use('/', route)
app.use('/student', student)

app.get('/*' , (req,res) => {
  res.render('error.ejs' , {data:`Page not found`})
})

app.listen(port , () => {
  console.log(`App listening to port ${port}`)
})