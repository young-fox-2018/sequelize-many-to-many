const Model = require('../models')

class StudentSubjectController {
    static findAll(req, res) {
        Model.StudentSubject.findAll({
            where: {
                SubjectId: req.params.id
            },
            include: {
                model: Model.Subject,
                include: {
                    model: Model.Student
                }
            }
        })
            .then(function (data) {
                // res.send(data)
                res.render('subject-enrolled.ejs', { data: data[0] })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static renderGiveScore(req, res) {
        Model.StudentSubject.findOne({
            where: {
                StudentId: req.params.id
            }
        })
            .then(function (student) {
                res.render('subject-give-score.ejs', { data: student })
                // res.send(student)
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static giveScore(req, res) {
        let addScore = {
            score: req.body.score
        }
        Model.StudentSubject.update(addScore, {
            where: {
                SubjectId: req.body.SubjectId,
                StudentId: req.body.StudentId
            }
        })

            .then(function (data) {
                // res.redirect('/subject/:id/enrolled-students')
                console.log(req.params.id, req.body.StudentId)
                res.send(data)
            })
            .catch(function (err) {
                res.send(err)
            })
    }
}

module.exports = StudentSubjectController