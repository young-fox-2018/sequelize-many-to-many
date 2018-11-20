let route = require(`express`).Router()
let Model = require(`../models`)
let Subject = Model.Subject

//VIEW ALL
route.get(`/`, function (req, res) {
    Subject.findAll({
        include: {
            model: Model.Teacher
        }
    }).then((result) => {
        res.render(`subject`, {
            result:result
        })
    }).catch((err) => {
        res.send(err)
    });
})

//ENROLLED STUDENT
route.get(`/:id/enrolled-students`, function(req, res) {
    Subject.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Model.Student
        }]
    }).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    });
})

module.exports = route