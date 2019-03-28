const route = require('express').Router()

route.get('/' , (req,res) => {
  res.render('teacher.ejs')
})

module.exports = route