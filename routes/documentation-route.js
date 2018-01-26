const documentationRoutes = require('express').Router();

documentationRoutes.get('/alerts', (req, res) => {
    res.render('documentation/ui/alerts');
});

documentationRoutes.get('/animations', (req, res) => {
    res.render('documentation/ui/animations');
});

documentationRoutes.get('/badges', (req, res) => {
    res.render('documentation/ui/badges');
});

documentationRoutes.get('/breadcrumbs', (req, res) => {
    res.render('documentation/ui/breadcrumbs');
});

documentationRoutes.get('/buttons', (req, res) => {
    res.render('documentation/ui/buttons');
});

documentationRoutes.get('/collapse', (req, res) => {
    res.render('documentation/ui/collapse');
});

documentationRoutes.get('/colors', (req, res) => {
    res.render('documentation/ui/colors');
});

documentationRoutes.get('/dialogs', (req, res) => {
    res.render('documentation/ui/dialogs');
});

documentationRoutes.get('/icons', (req, res) => {
    res.render('documentation/ui/icons');
});

documentationRoutes.get('/labels', (req, res) => {
    res.render('documentation/ui/labels');
});

documentationRoutes.get('/list-group', (req, res) => {
    res.render('documentation/ui/list-group');
});

documentationRoutes.get('/media-object', (req, res) => {
    res.render('documentation/ui/media-object');
});

documentationRoutes.get('/modals', (req, res) => {
    res.render('documentation/ui/modals');
});

documentationRoutes.get('/notifications', (req, res) => {
    res.render('documentation/ui/notifications');
});

documentationRoutes.get('/pagination', (req, res) => {
    res.render('documentation/ui/pagination');
});

documentationRoutes.get('/pre-loaders', (req, res) => {
    res.render('documentation/ui/pre-loaders');
});

documentationRoutes.get('/progress-bars', (req, res) => {
    res.render('documentation/ui/progress-bars');
});

documentationRoutes.get('/range-sliders', (req, res) => {
    res.render('documentation/ui/range-sliders');
});

documentationRoutes.get('/sortable-nestable', (req, res) => {
    res.render('documentation/ui/sortable-nestable');
});

documentationRoutes.get('/tabs', (req, res) => {
    res.render('documentation/ui/tabs');
});

documentationRoutes.get('/thumbnails', (req, res) => {
    res.render('documentation/ui/thumbnails');
});

documentationRoutes.get('/tooltips-popovers', (req, res) => {
    res.render('documentation/ui/tooltips-popovers');
});

documentationRoutes.get('/typography', (req, res) => {
    res.render('documentation/typography');
});

documentationRoutes.get('/waves', (req, res) => {
    res.render('documentation/ui/waves');
});

documentationRoutes.get('/helper-classes', (req, res) => {
    res.render('documentation/helper-classes');
});

documentationRoutes.get('/change-logs', (req, res) => {
    res.render('documentation/change-logs');
});

module.exports = documentationRoutes;