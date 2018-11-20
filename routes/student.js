let route = require(`express`).Router()
let bodyParser = require(`body-parser`)
let Model = require(`../models`)
let Student = Model.Student

//GET ALL DATA
route.get(`/`, function (req, res) {
    Student.findAll({
        include: [{
            model: Model.Subject
        }]
    }).then((result) => {
        res.render(`student`, {
            result: result
        })

    }).catch((err) => {
        res.send(err)
    });
})

//EDIT
route.get(`/edit/:id`, function (req, res) {
    res.render(`./edit/editStudent.ejs`, {
        id: req.params.id
    })
})

route.post(`/executeEditStudent/:id`, function (req, res) {
    Student.update({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email
    }, {
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.redirect(`/student`)
        }).catch((err) => {
            res.send(err)
        });
})

//DELETE
route.get(`/delete/:id`, function(req, res) {
    Student.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.redirect(`/student`)
    }).catch((err) => {
        res.send(err)
    });
})

//ADD
route.get(`/add`, function(req, res) {
    res.render(`./add/addStudent`)
})

route.post(`/add`, function(req, res) {
    Student.create({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date(),
    }).then((result) => {
        res.redirect(`/student`)
    }).catch((err) => {
        res.send(err)
    });
})

//ADD SUBJECT
route.get(`/:id/addSubject`, function(req, res) {
    Student.findOne({
        where:{
            id: req.params.id
        }
    }).then((result) => {
        res.render(`./add/addStudentSubject`, {
            result: result
        })
        
    }).catch((err) => {
        res.send(err)
    });
})



module.exports = route