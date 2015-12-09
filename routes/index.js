var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var request = require('request');
var Book = mongoose.model('Book');
var Comment = mongoose.model('Comment');

router.get('/books/:query', function(req, res, next) {
	console.log('/books/:query is called');
	var url = "https://www.googleapis.com/books/v1/volumes?q=" + req.query;
	request(url, function(err, res, body){
    	if(err){
    		console.log('error in /books/query');
    		return next(err); }
    	console.log(body.items);
    	res.json(body.items);
  	});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
