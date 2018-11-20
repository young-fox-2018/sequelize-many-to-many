const express = require(`express`)
const app = express()
const bodyParser = require(`body-parser`)
const PORT = 3000

let student = require(`./routes/student`)
let subject = require(`./routes/subject`)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set(`view engine`, `ejs`)

app.use(express.static(__dirname + '/public'));

app.get(`/`, function(req, res) {
    res.render(`index.ejs`)
})

app.use(`/student`, student)
app.use(`/subject`, subject)



app.listen(PORT, function() {
    console.log(`Listening to port ${PORT}`);
})