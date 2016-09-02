var http = require('http'),
  fs = require('fs');

  // store the contents of 'test.txt' to a buffer
  var text = fs.readFileSync('./files/test.txt');

  // Create the http server.
  var app = http.createServer(function (request, response) {
      // for GET requests, serve up the contents in 'index.html'
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end(text);

  });

module.exports = app;
