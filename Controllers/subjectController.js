const {Subject, Teacher, Student, StudentsSubjects} = require("../models/index")

class subjectController {
    static add(req,res) {
        let newSubject = new Subject({
            subject_name: req.body.subject_name
        })
        newSubject.save()
            .then(function(data) {
                console.log(`Successfully add new data`)
                res.redirect("/subjects")
            })
            .catch(function(err) {
                throw err
            })
    }
    static getAllSubject(req, res) {
            Subject.findAll({
                include: [{
                    model: Teacher
                }]
            })
            .then(function(data) {
                // res.send(data)
                res.render("listSubjects.ejs",{subjects:data})
            })
            .catch(function(err) {
                res.send(err)
            })
    } 
    static getSubjectDetail(req, res) {
            // paramsId = req.params.id
            return StudentsSubjects.findAll(
                {
                    where: {
                        SubjectsId: req.params.id
                    }
                }
                ,
                {
                    include: [{
                        model: Student
                    }]
                }
                )
                .then(function(subjects) {
                    res.send(subjects)
                    // for (let i = 0; i < subjects.length; i++) {
                    //     if (subjects[i].id == req.params.id) {
                    //         return subjects[i]
                    //     }
                    // }
                })
                // .then(function(subject) {
                //     // res.send(subject)
                //     res.render("subjectScore.ejs", {subject: subject})
                // })
                .catch(function(err) {
                    res.send(err)
                })
    }
    
}

module.exports = subjectController