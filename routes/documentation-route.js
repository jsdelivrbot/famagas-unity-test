const documentationRoutes = require('express').Router();

documentationRoutes.get('/typography', (req, res) => {
    res.render('documentation/typography');
});

module.exports = documentationRoutes;