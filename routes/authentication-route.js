const authRoutes = require('express').Router();

authRoutes.get('/sign-up', (req, res) => {
    res.render('authentication/sign-up');
});

module.exports = authRoutes;