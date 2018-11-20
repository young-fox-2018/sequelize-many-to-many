const { Student } = require("../models/index")
const { Subject } = require("../models/index")

class StudentController {
    static allData() {
        return Student.findAll()
    }
    static findById(id) {
        return Student.findById(id)
    }
}
module.exports = StudentController