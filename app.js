const express = require('express');
const app = express();
const port = 3000;

const home = require('./routes');
const students = require('./routes/students');
const subjects = require('./routes/subjects');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.use('/', home);
app.use('/students', students);
app.use('/subjects', subjects);
app.use(express.static(__dirname + '/views'));

app.listen(port, () => {
    console.log(`The server running on port ${port}`);
});