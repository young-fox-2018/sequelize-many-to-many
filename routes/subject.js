const routes = require('express').Router()
const model = require('../models/')
const subject = model.Subject
const helper = require('../helpers/')

routes.get('/', function(req, res){
    subject
      .findAll({
          include: [{
                  model: model.Teacher,
                  }],
          order: [ ['id', 'ASC'] ]
      })
      .then(success=>{
          // res.send(success)    
          res.render('./subject.ejs',{
              dataSubject: success,
              helper: helper
          });
      })
      .catch((err) => {
        res.send(err)
      })
});




module.exports = routes