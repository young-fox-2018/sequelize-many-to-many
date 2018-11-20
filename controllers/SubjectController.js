const Model = require('../models');
const Subject = Model.Subject;

class SubjectController {
    static getTeacher() {
        return new Promise( (resolve, reject) => {
            Subject.findAll({include: {model: Model.Teacher}})
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject({msg: `Error getting subjects data`, err:err});
            });
        });        
    }
}

module.exports = SubjectController;