const express= require("express")
const routes = express.Router()
const port = 3000
const routesTeacher = require("./teacher.js")
const routesSubject = require("./subject.js")
const routesStudent = require("./student.js")

routes.get("/",function(req,res){
    res.send("masuk index / home")
})

routes.use("/teacher",routesTeacher)
routes.use("/subject",routesSubject)
routes.use("/student",routesStudent)

module.exports = routes
