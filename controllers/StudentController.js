const Model = require('../models/');
const Student = Model.Student;

class StudentController {
    static getAllStudents() {
        return new Promise( (resolve, reject) => {
            Student.findAll()
            .then(students => {
                resolve(students);
            })
            .catch(err => {
                reject({msg:`Error getting students data`, err: err});
            })
        });
    }

    static findStudent(id) {
        return new Promise( (resolve, reject) => {
            Student.findByPk(id)
            .then( student => {
                resolve(student);
            })
            .catch(err => {
                reject({msg: `Error finding a student`, err: err});
            })
        });
    }
}

module.exports = StudentController;