const routes = require('express').Router();
const SubjectController = require('../controllers/SubjectController');
const SubjectStudent = require('../controllers/SubjectStudentController');
const Student = require('../controllers/StudentController');

routes.get('/', (req, res) => {
    SubjectController.getTeacher()
    .then(data => {
        res.render('./pages/subjects.ejs', {data});
        // res.send(data);
    })
    .catch(err => {
        res.send(err);
    });    
});

routes.get('/:id/enrolled-students', (req, res) => {
    let id = req.params.id;

    SubjectStudent.findSubject(id)
    .then(data => {
        res.render('./pages/subject-detail.ejs', {data: data});
    })
    .catch(err => {
        res.send(err);
    });
});

routes.get('/:subject/:id/give-score', (req, res) => {
    let studentId = req.params.id;
    let subjectId = req.params.subject;
    Student.findStudent(studentId)
    .then(student => {
        let data = {
            subjectId: subjectId,
            student: student
        };
        // res.send(data.student);
        res.render('./pages/score.ejs', data);
    })
    .catch(err => {
        res.render(err);
    })
});

routes.post('/:subject/:id/give-score', (req, res) => {

    let obj = {
        score: req.body.score,
        SubjectId: req.params.subject,
        StudentId: req.params.id
    }
    // res.send(req.params);
    SubjectStudent.giveScore(obj)
    .then(data => {
        res.redirect(`/subjects/${req.params.subject}/enrolled-students`);
        res.send(req.params.subject);
    })
    .catch(err => {
        res.send(err);
    })
});

module.exports = routes;