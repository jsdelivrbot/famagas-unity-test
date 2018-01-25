const pageRoutes = require('express').Router();

pageRoutes.get('/typography', (req, res) => {
    res.render('pages/typography');
});

module.exports = pageRoutes;