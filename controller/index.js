var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gurkirat Singh',
  message: 'Portfolio'});
});
//get about
router.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About Me',
      message:'hello'
  });
});
//get about
router.get('/project', (req, res, next) => {
    res.render('project', {
        title: 'Projects',
        message:'hello'
    });
});
module.exports = router;
