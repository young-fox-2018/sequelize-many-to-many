const routes = require('express').Router()

routes.get('/', function(req,res){
    res.send("Ini Loh")
})



module.exports = routes