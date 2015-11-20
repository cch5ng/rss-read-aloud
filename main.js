//main.js

var http = require('http');
var router = require('./router');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end();
  //response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');



//app.use('/', router);