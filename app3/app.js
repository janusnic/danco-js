var http = require('http'),
  fs = require('fs'),
  url = require('url');

  function render(path, contentType, fn) {
    fs.readFile(__dirname + '/' + path, 'utf-8', function (err, str) {
      fn(err, str, contentType);
    });
  }

  // Create the http server.
  var app = http.createServer(function (request, response) {

      var httpHandler = function (err, str, contentType) {
       if (err) {
         response.writeHead(500, { 'Content-Type': 'text/plain' });
         response.end('An error has occured: ' + err.message);
       } else {
         response.writeHead(200, { 'Content-Type': contentType });
         response.end(str);
       }
   };

  if (request.url == '/') {
       render('views/index.html', 'text/html', httpHandler);
       }
 else if(request.url.indexOf('/scripts/') >= 0) {
         render(request.url.slice(1), 'application/javascript', httpHandler);
       } else if (request.headers['x-requested-with'] === 'XMLHttpRequest' && request.headers['x-vanillaajaxwithoutjquery-version'] === '1.0') {
         response.writeHead(200, { 'Content-Type': 'application/json' });
         response.end(JSON.stringify({ message: 'Hello World!' }));
     }

else {
   // Indicate that requested file was not found.
  response.writeHead(404);
  // And end request without sending any data.
  response.end();
 }

  });

module.exports = app;
