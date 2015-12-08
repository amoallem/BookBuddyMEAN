var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = mongoose.model('Book');
var Comment = mongoose.model('Comment');

router.get('/books', function(req, res, next) {
  Book.find(function(err, posts){
    if(err){ return next(err); }

    res.json(books);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
