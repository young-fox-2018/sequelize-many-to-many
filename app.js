const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 3000
const indexRoutes = require("./routes/index")

app.set("view engine", "ejs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({}))
app.use("/", indexRoutes)

app.listen(port, () => {
    console.log("listen on port" + port);

})