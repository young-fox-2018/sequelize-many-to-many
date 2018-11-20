const routes = require('express').Router();
const studentRoutes = require("./student");
const subjectRoutes = require("./subject");



routes.use("/student", studentRoutes)
routes.use("/subject", subjectRoutes)


module.exports = routes;