//proxy.js

var http = require('http'),
	httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
	proxyReq.setHeader('X-Special-Proxy-Header', 'todo');
});

var server = http.createServer(function(req, res) {
	//res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end();

	proxy.web(req, res, {
		target: 'http://127.0.0.1:3000'
	});

  //response.end('Hello World\n');
}); //.listen(8080);

console.log('listening on port 5050');
server.listen(5050);