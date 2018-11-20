const { SubjectStudent } = require("../models/index")
const { Subject } = require("../models/index")
const { Student } = require("../models/index")

class SubjectStudents {
    static addData(data) {
        console.log(data);
        return SubjectStudent.create(data)
    }
    static EnrolledStudent(id) {
        return SubjectStudent.findAll({
            where: { SubjectId: id },
            include: {
                model: Subject,
                include: Student
            }
        }
        )
    }
    static addScore(SubjectId, StudentId, data) {
        return SubjectStudent.update(
            data, { where: { SubjectId: SubjectId, StudentId: StudentId } }
        )
    }

}
module.exports = SubjectStudents