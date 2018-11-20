const { Teacher } = require("../models/index.js")
const { Subject } = require("../models/index.js")

class SubjectController {
    static allData() {
        return Subject.findAll({
            include: Teacher
        })
    }
    static allDataOne() {
        return Subject.findAll()
    }
}
module.exports = SubjectController