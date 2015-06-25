'use strict';

var os = require('os');
var ifaces = os.networkInterfaces();
var ip ;

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0
    ;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
	ip = iface.address;
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
	ip = iface.address;
      console.log(ifname, iface.address);
    }
  });
});

var http = require('http');
var server = http.createServer(function (request, response) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});
server.listen(1337);
console.log('Server running at http://'+ip+':1337/');

