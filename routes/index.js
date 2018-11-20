const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('.',{ message: `Latihan Sequelize Many to Many` })
});

module.exports = routes;