const routes = require('express').Router()
const Model = require('../models/index')

routes.get('/', (req, res) => {
    Model.Subject.findAll({
       include: [{
           model: Model.Teacher
       }]
    })
    .then((data) => {
        let result = data.map(element =>  {
            let obj = {}
            obj.id = element.dataValues.id
            obj.subjectName = element.dataValues.subjectName
            
            for (let i = 0; i < element.dataValues.Teachers.length ; i++) {
                if (obj.teacher == null) {
                    obj.teacher = [`${element.dataValues.Teachers[i].firstName} ${element.dataValues.Teachers[i].lastName}`]
                } else {
                    obj.teacher.push(`${element.dataValues.Teachers[i].firstName} ${element.dataValues.Teachers[i].lastName}`)
                }
            }
                
           return obj
         })

         console.log(result)

         let object= {
            title : 'All Subjects',
            data: result
        }

        res.render('../views/subject/index.ejs', object)
    })
    .catch((err) => {
        console.log(err)
        res.send(err)
    })
})


routes.get('/:id/enrolled-students', (req, res) => {
    Model.Subject.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Model.Student
        }]
    })
    .then((data) => {
        let obj = {
            title: 'Edit Student Scores',
            data: data.dataValues.Students
        }
      
        res.render('../views/subject/edit.ejs', obj)
    })
    .catch((err) => {
        res.send(err)
    })
})

routes.get('/:id/:studentId/give-score', (req, res) => {
    let obj = {
        title: 'Add score',
        studentId: req.params.studentId,
        subjectId: req.params.id 
    }

    res.render('../views/subject/addScore.ejs', obj)
})

routes.post('/:id/:studentId/give-score', (req, res) => {
    let obj = {
        score: req.body.score,
        updatedAt: new Date()
    }
    Model.StudentsSubject.update(obj, {
        where: {
            studentId: req.params.studentId
        }
    })
    .then((data) => {
        res.redirect('/subject?result=success')
    })
})

module.exports= routes