var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '128.199.229.29');
console.log('Server running at http://128.199.229.29/:1337/');