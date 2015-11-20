//test_request.js

var express = require('express');
var request = require('request');

var paths='/rss';
//this var needs to be dynamic and probably more like an array or immutable list...
//depending on user preferences
//works
//var apiServerHost = 'http://www.npr.org/rss/rss.php?id=1001';
//doesn't work, xsl missing err
var apiServerHost = 'http://feeds.bbci.co.uk/news/rss.xml?edition=int';
//var apiServerHost = 'http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml';

var app = express();
app.use(paths, function(req, res) {
	var url = apiServerHost;
	console.log('piped: ' + req.baseUrl + req.url);

//TODO the main difference is I don't want to display the rss/xml in the browser,
//I want to get the xml contents in a file and be able to parse it
	req.pipe(request(url)).pipe(res);
});

app.use(express.static('public'));

app.listen(process.env.PORT || 8080);