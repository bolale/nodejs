/*
 * Homework Assignment #1
 *
 */

var http = require('http');
var url = require('url');
var config = require('./config');

var server = http.createServer(function(req,res){
	var parsedUrl = url.parse(req.url,true);
	var path = parsedUrl.pathname;
	var trimmedPath = path.replace(/^\/*|\/+$/g,'');
	var data = {
		'Homework' : 'Assignment 1'
	};
  req.on('data', function(){});
	req.on('end',function(){
		var chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;
	  chosenHandler(data,function(statusCode){
      data = (statusCode) !== 404 ? data : {};
			var dataString = JSON.stringify(data);
			res.setHeader('Content-Type','application/json');
			res.writeHead(statusCode);
			res.end(dataString);
		});
	});
})


server.listen(config.port);

var handlers = {};

handlers.hello = function(data,callback){
	callback(200);
};

handlers.notFound = function(data,callback){
	callback(404);
};

var router = {
	'hello' : handlers.hello
}
