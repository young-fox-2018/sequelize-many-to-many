const {Student, Subject, StudentsSubjects} = require("../models/index")

class studentController {
    static add(req,res) {
        let newStudent = new Student({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        })
        newStudent.save()
            .then(function(data) {
                console.log(`Successfully add new data`)
                res.redirect("/")
            })
            .catch(function(err) {
                throw err
            })
    }
    static getAllStudent(req, res) {
        Student.findAll()
            .then(function(data) {
                res.render("listStudents.ejs",{students:data})
            })
            .catch(function(err) {
                throw err
            })
    } 
    static viewEditStudent(req, res) {
        Student.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(data) {
            res.render("editStudent.ejs", {student: data.dataValues})
        })
        .catch(function(err) {
            throw err
        })
    }
    static editStudentPost(req, res) {
        Student.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(student) {
                student.first_name = req.body.first_name
                student.last_name = req.body.last_name
                student.email = req.body.email
                student.save()
                res.redirect("/students")
            })
            .catch(function(err) {
                throw err
            })
    }
    static delete(req, res) {
        Student.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.redirect("/students")
        })
        .catch(function(err) {
            res.send(err)
        })
    }
    static viewAddSubject(req, res) {
            Student.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(student) {
                res.render("addStudentSubject.ejs", {student:student})
            })
            .catch(function(err) {
                res.send(err)
            })
    }

    static postAddSubject(req, res) {
        let subject_id = null
        if (req.body.subject == 'Physics') {
             subject_id = 1 
        }
        else if (req.body.subject == 'Math') {
             subject_id = 2
        }
        else if (req.body.subject == 'Biology') {
             subject_id = 3
        }
        else {
             subject_id = 4
        }

        StudentsSubjects.findOne({
                where: {
                    StudentId: req.params.id,
                    SubjectsId: subject_id
                }
            })
            .then(function(data) {
                if (data) {
                    res.redirect("/students")
                } else {
                    StudentsSubjects.create({
                        StudentId: req.params.id,
                        SubjectsId: subject_id
                    })
                    .then(function() {
                        res.redirect("/students")
                    })
                    .catch(function(err) {
                        res.send(err)
                    })
                }
            })
            .catch(function(err) {
                res.send(err)
            })
        
    
    
    
    
    }
}



module.exports = studentController