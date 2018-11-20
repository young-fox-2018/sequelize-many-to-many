'use strict'

const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes');
const student = require('./routes/student.js');
const subject = require('./routes/subject.js');

// app.get('/', function (req, res) {
//   res.send("I love Hacktiv8!")
// })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.use('/', routes);
app.use('/student', student);
app.use('/subject', subject);

app.listen(3000, function() {
  console.log('App listening on port 3000');
})