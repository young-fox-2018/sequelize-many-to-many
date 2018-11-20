const routes = require('express').Router();
const StudentsController = require('../controllers/StudentController');
const SubjectStudentController = require('../controllers/SubjectStudentController');
const Model = require('../models');
const Subject = Model.Subject;

routes.get('/', (req, res) => {
    StudentsController.getAllStudents()
    .then(students => {
        // res.send(students);
        res.render('./pages/students.ejs', {data: students});
    })
    .catch(err => {
        res.send(err);
    })
});

routes.get('/:id/add-subject', (req, res) => {
    let id = req.params.id;
    StudentsController.findStudent(id)
    .then(student => {
        Subject.findAll()
        .then(subjects => {
            let arrSubjects = subjects.map(element => element.subjectName);
            res.render('./pages/add-subject.ejs', {data: student, subjects: arrSubjects});
        })
    })
    .catch(err => {
        res.send(err);
    })
});

routes.post('/:id/add-subject', (req, res) => {
    let obj = {StudentId: req.params.id, SubjectId: req.body.SubjectId};
    SubjectStudentController.add(obj)
    .then(data => {
        res.redirect('/students');
    })
    .catch(err => {
        res.send(err);
    });
});

routes.get('/:id/enrolled-students', (req, res) => {    
    SubjectStudentController.getAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.send(err);
    })
});

module.exports = routes;