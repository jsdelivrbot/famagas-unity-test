const documentationRoutes = require('express').Router();

// UI Templates
documentationRoutes.get('/alerts', (req, res) => {
    res.render('./views/documentation/alerts');
});

documentationRoutes.get('/animations', (req, res) => {
    res.render('documentation/animations');
});

documentationRoutes.get('/badges', (req, res) => {
    res.render('documentation/badges');
});

documentationRoutes.get('/breadcrumbs', (req, res) => {
    res.render('documentation/breadcrumbs');
});

documentationRoutes.get('/buttons', (req, res) => {
    res.render('documentation/buttons');
});

documentationRoutes.get('/collapse', (req, res) => {
    res.render('documentation/collapse');
});

documentationRoutes.get('/colors', (req, res) => {
    res.render('documentation/colors');
});

documentationRoutes.get('/dialogs', (req, res) => {
    res.render('documentation/dialogs');
});

documentationRoutes.get('/icons', (req, res) => {
    res.render('documentation/icons');
});

documentationRoutes.get('/labels', (req, res) => {
    res.render('documentation/labels');
});

documentationRoutes.get('/list-group', (req, res) => {
    res.render('documentation/list-group');
});

documentationRoutes.get('/media-object', (req, res) => {
    res.render('documentation/media-object');
});

documentationRoutes.get('/modals', (req, res) => {
    res.render('documentation/modals');
});

documentationRoutes.get('/notifications', (req, res) => {
    res.render('documentation/notifications');
});

documentationRoutes.get('/pagination', (req, res) => {
    res.render('documentation/pagination');
});

documentationRoutes.get('/pre-loaders', (req, res) => {
    res.render('documentation/pre-loaders');
});

documentationRoutes.get('/progress-bars', (req, res) => {
    res.render('documentation/progress-bars');
});

documentationRoutes.get('/range-sliders', (req, res) => {
    res.render('documentation/range-sliders');
});

documentationRoutes.get('/sortable-nestable', (req, res) => {
    res.render('documentation/sortable-nestable');
});

documentationRoutes.get('/tabs', (req, res) => {
    res.render('documentation/tabs');
});

documentationRoutes.get('/thumbnails', (req, res) => {
    res.render('documentation/thumbnails');
});

documentationRoutes.get('/tooltips-popovers', (req, res) => {
    res.render('documentation/tooltips-popovers');
});

documentationRoutes.get('/waves', (req, res) => {
    res.render('documentation/waves');
});

// Chart Templates
documentationRoutes.get('/chart-js', (req, res) => {
    res.render('documentation/chartjs');
});

documentationRoutes.get('/flot', (req, res) => {
    res.render('documentation/flot');
});

documentationRoutes.get('/knob', (req, res) => {
    res.render('documentation/knob');
});

documentationRoutes.get('/morris', (req, res) => {
    res.render('documentation/morris');
});

documentationRoutes.get('/spark-line', (req, res) => {
    res.render('documentation/spark-line');
});

// Quick Pages Templates
documentationRoutes.get('/typography', (req, res) => {
    res.render('documentation/typography');
});

documentationRoutes.get('/helper-classes', (req, res) => {
    res.render('documentation/helper-classes');
});

documentationRoutes.get('/change-logs', (req, res) => {
    res.render('documentation/change-logs');
});

module.exports = documentationRoutes;