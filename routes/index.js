var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/index', { title: 'Bouncing Crazy' });
});

router.get('/about', function(req, res) {
    res.render('pages/about', { title: 'About' })
});
router.get('/disco-dome-hire-plymouth', function(req, res) {
    res.render('pages/allage', { title: 'All Age' })
});
router.get('/contact', function(req, res) {
    res.render('pages/contact', { title: 'Contact Us', enquiredProduct: req.query.enquiredProduct })
});
router.get('/mobile-stage-hire-plymouth', function(req, res) {
    res.render('pages/extras', { title: 'Extras' })
});
router.get('/faqs', function(req, res) {
    res.render('pages/faqs', { title: 'FAQs' })
});
router.get('/assault-course-hire-plymouth', function(req, res) {
    res.render('pages/funrun', { title: 'Funrun' })
});
router.get('/games', function(req, res) {
    res.render('pages/games', { title: 'Games' })
});
router.get('/bouncy-castle-hire-plymouth', function(req, res) {
    res.render('pages/kids', { title: 'Kids Only' })
});
router.get('/party-package-hire', function(req, res) {
    res.render('pages/pdeals', { title: 'Package Deals' })
});
router.get('/slides', function(req, res) {
    res.render('pages/slides', { title: 'Slides' })
});
router.get('/admin', function(req, res) {
    res.render('pages/admin', { title: 'Admin' })
});

module.exports = router;
