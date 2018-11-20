const Model = require('../models')

class StudentController {
    static findAll(req, res) {
        Model.Student.findAll()
            .then(function (students) {
                res.render('student.ejs', { data: students })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static renderAddStudent(req, res) {
        res.render('student-add.ejs', { errors: req.query.errors || null })
    }
    static addStudent(req, res) {
        let dataStudent = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        Model.Student.create(dataStudent)
            .then(function (student) {
                res.redirect('/student')
            })
            .catch(function (err) {
                res.redirect('/student/add' + '?errors=' + JSON.stringify(err))
            })
    }
    static deleteStudent(req, res) {
        Model.Student.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                res.redirect('/student')
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static renderEditStudent(req, res) {
        Model.Student.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                res.render('student-edit.ejs')
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static editStudent(req, res) {
        let dataStudent = {
            first_name: req.body.first_name,
            last_name: req.body.last_name
        }
        Model.Student.update(dataStudent, {
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                res.redirect('/student')
            })
            .catch(function (err) {
                res.send(err)
            })
    }
}

module.exports = StudentController