var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var request = require('request');
var Book = mongoose.model('Book');
var Comment = mongoose.model('Comment');

router.get('/books/:query', function(req, res, next) {
	console.log('/books/:query is called : '+ req.params.query);
	var url = "https://www.googleapis.com/books/v1/volumes?q=" + req.params.query;
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200){
			//console.log(body);
			res.json(body);
		}else{
			console.log('error in /books/query');
    		return next(err); 
    	}
  	});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
