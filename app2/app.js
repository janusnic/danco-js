var http = require('http'),
  fs = require('fs'),
  url = require('url');

  function render(path, contentType, fn) {
    fs.readFile(__dirname + '/' + path, 'utf-8', function (err, str) {
      fn(err, str, contentType);
    });
  }

  //js functions running only in Node.JS
  function calc(a,b){
    return  Number(a)+Number(b);;
  }

  // Create the http server.
  var app = http.createServer(function (request, response) {
   // for GET requests, serve up the contents in 'index.html'

               // Check if user requests /
               if (request.url == '/') {
                   // store the contents of 'test.txt' to a buffer
                   var html = fs.readFileSync('./views/index.html');
                   response.writeHead(200, {'Content-Type': 'text/html'});
                   response.end(html);
                   //render('views/index.html', 'text/html');
                   }

              else if (request.url == '/files') {
                   // Read the file.
                   var text = fs.readFileSync('./files/test.txt');
                   response.writeHead(200, {'Content-Type': 'text/plain'});

                   response.end(text);
              } else if (request.url == '/calc') {
                  request.on('data', function(chunk) {

                    //grab form data as string
                    var formdata = chunk.toString();

                    //grab A and B values
                    var a = eval(formdata.split("&")[0]);
                    var b = eval(formdata.split("&")[1])

                    var result = calc(a,b);

                    //fill in the result and form values
                    form = result.toString();

                    //respond
                    response.setHeader('Content-Type', 'text/html');
                    response.writeHead(200);
                    response.end(form);
                });

              } else {
                       // Indicate that requested file was not found.
                       response.writeHead(404);
                       // And end request without sending any data.
                       response.end();
                    }

  });

module.exports = app;
