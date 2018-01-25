const pageRoutes = require('express').Router();

pageRoutes.get('/teste', (req, res) => {
    res.render('pages/index');
});

module.exports = pageRoutes;