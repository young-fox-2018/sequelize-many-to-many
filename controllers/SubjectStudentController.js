const Model = require('../models');
const SubjectStudent = Model.SubjectsStudent;

class SubjectStudentController {
    static getAll() {
        return new Promise( (resolve, reject) => {
            SubjectStudent.findAll({include: 
                [
                    {model: Model.Student}, 
                    {model: Model.Subject}
                ]})
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject({msg:`Error getting all subject student data`, err: err});
            })
        });
    }

    static add(data) {
        return new Promise( (resolve, reject) => {
            SubjectStudent.create(
                {
                    SubjectId: data.SubjectId,
                    StudentId: data.StudentId,
                    updatedAt: new Date()
                }
            )
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject({msg:`Error adding data to SubjectStudent`, err: err});
            })
        });
    }

    static findSubject(id) {
        return new Promise( (resolve, reject) => {
            SubjectStudent.findAll( 
                {
                    where: {SubjectId: id}, 
                    include: [{model: Model.Student}, {model: Model.Subject}]} )
            .then(data => {
                resolve(data);            
            })
            .catch(err => {
                reject({msg: `Error finding subject`, err:err});
            });
        });
    }

    static giveScore(data) {
        return new Promise( (resolve, reject) => {
            SubjectStudent.update(                               
                    {score: data.score},
                    {where: 
                        [
                            {SubjectId: data.SubjectId},
                            {StudentId: data.StudentId}
                        ]}
            )
            .then( data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            })
        });
    }
}

module.exports = SubjectStudentController;