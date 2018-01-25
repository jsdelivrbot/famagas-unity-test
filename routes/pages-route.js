const routes = require('express').Router();

routes.get('/typography', (req, res) => {
    res.render('pages/typography');
});

module.exports = routes;