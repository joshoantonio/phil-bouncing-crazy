var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bouncing Crazy' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About' })
});
router.get('/disco-dome-hire-plymouth', function(req, res) {
  res.render('allage', { title: 'All Age' })
});
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact Us' })
});
router.get('/generator-hire-plymouth', function(req, res) {
  res.render('extras', { title: 'Extras' })
});
router.get('/faqs', function(req, res) {
  res.render('faqs', { title: 'FAQs' })
});
router.get('/assault-course-hire-plymouth', function(req, res) {
  res.render('funrun', { title: 'Funrun' })
});
router.get('/games', function(req, res) {
  res.render('games', { title: 'Games' })
});
router.get('/bouncy-castle-hire-plymouth', function(req, res) {
  res.render('kids', { title: 'Kids Only' })
});
router.get('/party-package-hire', function(req, res) {
  res.render('pdeals', { title: 'Package Deals' })
});
router.get('/slides', function(req, res) {
  res.render('slides', { title: 'Slides' })
});
router.get('/venues', function(req, res) {
  res.render('venues', { title: 'Venues' })
});
router.get('/admin', function(req, res) {
    res.render('admin', { title: 'Admin' })
});

module.exports = router;
