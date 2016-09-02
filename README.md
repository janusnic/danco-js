# Ajax 01

HTTP Server
========
Let's move on to a more advanced application; it's not as complicated as you may think. Lets start with the following code. Read the comments and then the explanation below:

        // Include http module.
        var http = require("http");

        // Create the server. Function passed as parameter is called on every request made.
        // request variable holds all request parameters
        // response variable allows you to do anything with response sent to the client.
        http.createServer(function (request, response) {
        	// Attach listener on end event.
        	// This event is called when client sent all data and is waiting for response.
        	request.on("end", function () {
        		// Write headers to the response.
        		// 200 is HTTP status code (this one means success)
        		// Second parameter holds header fields in object
        		// We are sending plain text, so Content-Type should be text/plain
        		response.writeHead(200, {
        			'Content-Type': 'text/plain'
        		});
        		// Send data and end response.
        		response.end('Hello HTTP!');
        	});
        // Listen on the 8080 port.
        }).listen(8080);

This code is very simple. You can send more data to the client by using the response.write() method, but you have to call it before calling response.end(). Save this code as http.js and type this into your console:

    node http.js

Open up your browser and navigate to http://localhost:8080. You should see the text "Hello HTTP!" in the page.

AJAX расшифровывается Asynchronous JavaScript And XML (Асинхронный JavaScript и XML).

AJAX - это эффективный способ совместного использования HTML, CSS, JavaScript и DOM.

С помощью AJAX Вы можете заметно увеличить скорость реакции интерфейса и значительно уменьшить нагрузку на сервер. Это возможно благодаря асинхронному обмену информацией и способностью перезагружать только обновленную часть страницы без необходимости перезагрузки страницы целиком.

AJAX используется многими известными веб-приложениями такими как: Facebook, Flickr, Gmail, Google Maps и Youtube.

AJAX - это набор технологий, которые поддерживаются веб-браузерами.

AJAX использует:

- HTML в качестве "каркаса";
- CSS для оформления;
- DOM для извлечения или изменения информации на странице;
- Объект XMLHttpRequest для асинхронного обмена данными с сервером;
- JavaScript для связи перечисленных выше технологий между собой.

Создание объекта XMLHttpRequest
=======================
Синтаксис для создания экземпляра объекта XMLHttpRequest:

    переменная=new XMLHttpRequest();

IE6 использует ActiveXObject вместо XMLHttpRequest, поэтому синтаксис для создания экземпляра объекта для него будет отличатся от приведенного выше.

Синтаксис для создания экземпляра XMLHttpRequest в IE6:

    переменная=new ActiveXObject("Microsoft.XMLHTTP");

Если Вы хотите, чтобы Ваш код работал во всех браузерах используйте следующую конструкцию:

        var xhttp;
        // Если объект XMLHttpRequest существует, значит мы имеем дело с
        // современным браузером Chrome, Firefox, Safari, Opera или IE7 и выше.

        if (window.XMLHttpRequest){
           xhttp=new XMLHttpRequest();
        }

        // Если же объект XMLHttpRequest не существует значит
        // мы имеем дело с IE6 и нам придется воспользоваться специальным синтаксисом
        else {
           xhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }


Свойства объекта XMLHttpRequest
======================

- onreadystatechange	Функция, код которой будет исполнен при изменении состояния готовности сервера.
- readyState	Позволяет узнать состояние готовности сервера.
- responseText	Хранит ответ сервера как строку символов.
- responseXML	Хранит ответ сервера как XML файл.
- status	Хранит код ответа сервера.

Методы объекта XMLHttpRequest
=====================
Создает запрос.
-------------------
        open(тип_запроса,url,способ)

        тип_запроса устанавливает тип запроса (GET или POST).
        url устанавливает путь к запрашиваемому файлу.
        способ устанавливает способ выполнения запроса. При значении true запрос будет выполнен асинхронно, при false синхронно.

Передать данные на сервер.
---------------------------------
    send('данные')

добавить HTTP заголовок к запросу.
------------------------------------------
    setRequestHeader(заголовок,значение)

    заголовок содержит имя заголовка
    значение содержит значение заголовка

Отправление запроса на сервер
=====================
С помощью методов open() и send() объекта XMLHttpRequest Вы можете отправлять AJAX запросы.

Синтаксис запроса:

        // Создаем объект XMLHttpRequest
        var xhttp=new XMLHttpRequest();
        // Запросим содержимое файла testfile.txt
        xhttp.open('GET',testfile.txt,true);
        xhttp.send();


Создает AJAX запрос.
-------------------------
        open(тип_запроса,url,способ)

        тип_запроса устанавливает тип запроса (GET или POST).
        url устанавливает путь к запрашиваемому файлу.
        способ устанавливает способ выполнения запроса. При значение true запрос будет выполнен асинхронно, при false синхронно.
        send('данные')	Позволяет передать данные на сервер.

npm init
=====
        This utility will walk you through creating a package.json file.
        It only covers the most common items, and tries to guess sensible defaults.

        See `npm help json` for definitive documentation on these fields
        and exactly what they do.

        Use `npm install <pkg> --save` afterwards to install a package and
        save it as a dependency in the package.json file.

        Press ^C at any time to quit.
        name: (app1)
        version: (1.0.0)
        description: Vanilla Ajax NodeJS
        entry point: (app.js)
        test command:
        git repository:
        keywords: nodejs javascript ajax
        author: Janus Nicon
        license: (ISC)
        About to write to /home/janus/github/danco-js/app1/package.json:

        {
          "name": "app1",
          "version": "1.0.0",
          "description": "Vanilla Ajax NodeJS",
          "main": "app.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "keywords": [
            "nodejs",
            "javascript",
            "ajax"
          ],
          "author": "Janus Nicon",
          "license": "ISC"
        }


        Is this ok? (yes) yes

bin/www
======

        #!/usr/bin/env node

        var app = require('../app');
        app.listen(process.env.port || 3000);

npm install fs
=========
       app1@1.0.0 /home/janus/github/danco-js/app1
       └── fs@0.0.1-security

app.js
====
        var http = require('http'),
          fs = require('fs');

          // store the contents of 'test.txt' to a buffer
          var text = fs.readFileSync('./files/test.txt');

          // Create the http server.
          var app = http.createServer(function (request, response) {
          // for GET requests, serve up the contents in 'test.txt'
           response.writeHead(200, {'Content-Type': 'text/plain'});
           response.end(text);

          });

        module.exports = app;

 app1 $ node bin/www

app2/app.js
========

        var http = require('http'),
          fs = require('fs');

          // store the contents of 'test.txt' to a buffer
          var html = fs.readFileSync('./views/index.html');

          // Create the http server.
          var app = http.createServer(function (request, response) {
              // for GET requests, serve up the contents in 'index.html'
           response.writeHead(200, {'Content-Type': 'text/html'});
           response.end(html);

          });

        module.exports = app;

 Запрос GET
 ========

 Пример простого GET запроса, который запрашивает содержимое файла test.txt и выводит его на страницу:

         xhttp=new XMLHttpRequest();
         xhttp.onreadystatechange=function(){
            if (xhttp.readyState==4 && xhttp.status==200)
               document.getElementById("result").innerHTML=xhttp.responseText;
            }
         xhttp.open("GET","/files",true);
         xhttp.send();

app2/app.js
========
        var http = require('http'),
          fs = require('fs');

          // Create the http server.
          var app = http.createServer(function (request, response) {
           // for GET requests, serve up the contents in 'index.html'

                       // Check if user requests /
                       if (request.url == '/') {
                           // store the contents of 'test.txt' to a buffer
                           var html = fs.readFileSync('./views/index.html');
                           response.writeHead(200, {'Content-Type': 'text/html'});
                           response.end(html);
                           }
                      else if (request.url == '/files') {
                           // Read the file.
                           var text = fs.readFileSync('./files/test.txt');
                           response.writeHead(200, {'Content-Type': 'text/plain'});
                           response.end(text);
                           } else {
                               // Indicate that requested file was not found.
                               response.writeHead(404);
                               // And end request without sending any data.
                               response.end();
                            }
          });

        module.exports = app;

Передача данных
============
Вместе с AJAX запросом на сервер могут быть переданы различные данные.

Рассмотрим передачу информации на примере простого калькулятора, который складывает числа.

        var x=document.getElementById('tf1').value;
        var y=document.getElementById('tf2').value;
        xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
          if (xhttp.readyState==4 && xhttp.status==200)
             document.getElementById("ajax").innerHTML=xhttp.responseText;
          }
        xhttp.open("GET","/calc?x="+x+"&y="+y,true);
        xhttp.send();


Запрос POST
========
Приведем пример простого POST запроса, который запрашивает содержимое файла testfile.txt и выводит его на страницу:
        <input id="v1"/>
        <input id="v2"/>
        <button onclick="calc();">Calculate</button>

        function calc(){
            var x=document.getElementById('v1').value;
            var y=document.getElementById('v2').value;
            xhttp=new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
              if (xhttp.readyState==4 && xhttp.status==200)
                 document.getElementById("result").innerHTML=xhttp.responseText;
              }
            var chunk = "x="+x+"&y="+y;
            xhttp.open("POST","/calc",true);
            xhttp.send(chunk);
        }


Метод POST как и метод GET позволяет передавать вместе с AJAX запросами различные данные.

Данные, которые будут переданы на сервер должны быть указаны в качестве параметров метода send().

Обратите внимание: чтобы отправить данные в формате, в котором передаются данные с HTML форм необходимо задать соответствующий HTTP заголовок с помощью setRequestHeader.

Добавляет к запросу HTTP заголовок.
========================
        setRequestHeader(заголовок,значение)

        заголовок имя HTTP заголовка.
        значение значение HTTP заголовка.

Пример
        var x=document.getElementById('tf1').value;
        var y=document.getElementById('tf2').value;

        xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
           if (xhttp.readyState==4 && xhttp.status==200)
              document.getElementById('ajax').innerHTML=xhttp.responseText;
           }
        xhttp.open('POST','addpost.php',true);
        xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        var str='x='+x+'&y='+y;
        xhttp.send(str);

Состояния готовности сервера
====================
С помощью свойства readyState Вы можете узнать состояние готовности сервера.

Сервер может находится в 5 состояниях готовности:

- Запрос не инициализирован;
- Установлено подключение к серверу;
- Запрос получен;
- Обработка запроса;
- Обработка запроса закончена и ответ готов.
Во время обработки запроса свойство readyState поочередно принимает значения от 0 до 4.

Пример
        var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
           if (xhttp.readyState==0)
              document.getElementById('rs0').style.display='block';
           if (xhttp.readyState==1)
              document.getElementById('rs1').style.display='block';
           if (xhttp.readyState==2)
              document.getElementById('rs2').style.display='block';
           if (xhttp.readyState==3)
              document.getElementById('rs3').style.display='block';
           if (xhttp.readyState==4){
              document.getElementById('rs4').style.display='block';
              document.getElementById('result').innerHTML=xhttp.responseText;
           }
        }
        xhttp.open('GET','state.php',true);
        xhttp.send();

app3/scripts/index.js
=============
        (function () {
            var retrieve = document.getElementById('retrieve'),
                results = document.getElementById('results'),
                toReadyStateDescription = function (state) {
                    switch (state) {
                    case 0:
                        return 'UNSENT';
                    case 1:
                        return 'OPENED';
                    case 2:
                        return 'HEADERS_RECEIVED';
                    case 3:
                        return 'LOADING';
                    case 4:
                        return 'DONE';
                    default:
                        return '';
                    }
                };
            retrieve.addEventListener('click', function (e) {
                var bustCache = '?' + new Date().getTime(),
                    oReq = new XMLHttpRequest();
                oReq.onload = function (e) {
                    var xhr = e.target;
                    console.log('Inside the onload event');
                    if (xhr.responseType === 'json') {
                        results.innerHTML = xhr.response.message;
                    } else {
                        results.innerHTML = JSON.parse(xhr.responseText).message;
                    }
                };
                oReq.onreadystatechange = function () {
                    console.log('Inside the onreadystatechange event with readyState: ' + toReadyStateDescription(oReq.readyState));
                };
                oReq.open('GET', e.target.dataset.url + bustCache, true);
                oReq.responseType = 'json';
                oReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                oReq.setRequestHeader('x-vanillaAjaxWithoutjQuery-version', '1.0');
                oReq.send();
            });
        }());

views/index.html
===========

        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>Vanilla Ajax without jQuery</title>
        </head>
        <body>
            <h1>Vanilla Ajax without jQuery</h1>
            <button id="retrieve" data-url="/">Retrieve</button>
            <p id="results"></p>
            <script src="/scripts/index.js" async></script>
        </body>
        </html>

app.js
====

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

Свойство status
===========
С помощью свойства status Вы можете узнать код ответа на Ваш запрос.

Код 200 означает - запрос обработан успешно, код 404 означает - страница не существует.

Пример
        function requestBad(){
           var xhttp=new XMLHttpRequest();
           xhttp.onreadystatechange=function(){
              document.getElementById('result').innerHTML=xhttp.status;
           }
           xhttp.open('GET','nepage',true);
           xhttp.send();
        }
        function requestGood(){
           var xhttp=new XMLHttpRequest();
           xhttp.onreadystatechange=function(){
              document.getElementById('result').innerHTML=xhttp.status;
           }
           xhttp.open('GET','test.xml',true);
           xhttp.send();
        }

содержимое данного свойства доступно только для чтения.

Событие onreadystatechange
===================
Событие onreadystatechange выполняет код при изменении содержимого свойства readyState (т.е. во время успешного запроса код функции выполняется 4 раза).

Для того, чтобы корректно обработать ответ сервера необходимо добавить проверку условия if (XMLHttpRequest.readyState==4 && XMLHttpRequest.status==200) и только после этого получать и обрабатывать соответствующие данные.

Пример
        var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
           if (xhttp.readyState==0){
              document.getElementById('rs0').style.display='block';
              document.getElementById('res0').innerHTML=responseText;
           }  
           if (xhttp.readyState==1){
              document.getElementById('rs1').style.display='block';
              document.getElementById('res1').innerHTML=responseText;
           }
           if (xhttp.readyState==2){
              document.getElementById('rs2').style.display='block';
              document.getElementById('res2').innerHTML=responseText;
           }
           if (xhttp.readyState==3){
              document.getElementById('rs3').style.display='block';
              document.getElementById('res3').innerHTML=responseText;
           }
           if (xhttp.readyState==4){
              document.getElementById('rs4').style.display='block';
              document.getElementById('res4').innerHTML=xhttp.responseText;
           }
        }
        xhttp.open('GET','state.php',true);
        xhttp.send();

Принятие ответа сервера
=================
Для того, чтобы принять ответ сервера используйте свойства объекта XMLHttpRequest responseText и responseXML.

- responseText	Хранит ответ сервера как строку символов.
- responseXML	Хранит ответ сервера как XML файл.

Свойство responseText
===============
Если запрошенные у сервера данные не являются XML данными, то для считывания ответа сервера используйте свойство responseText.

Пример
        xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
          if (xhttp.readyState==4 && xhttp.status==200)
          document.getElementById("ajax").innerHTML=xhttp.responseText;
          }
        xhttp.open("GET","testfile.txt",true);
        xhttp.send();

Свойство responseXML
==============
Если Вы ожидаете получить от сервера XML данные используйте для считывания ответа сервера свойство responseXML.

Пример
        xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
           if (xhttp.readyState==4 && xhttp.status==200){
              var r=xhttp.responseXML;
              document.getElementById('ajax').innerHTML="Содержимое первого тэга name
              в XML файле: "+ r.getElementsByTagName('name')[0].childNodes[0].nodeValue;
              var dep=r.getElementsByTagName('dept');
              var cont="Содержимое всех тэгов dept в XML файле: <br />";
              for (var i=0;i<dep.length;i++){
                 cont+=(i+1)+". "+dep[i].childNodes[0].nodeValue+" руб.<br />";
              }
           document.getElementById('ajax1').innerHTML=cont;
           }
        }
        xhttp.open("GET","test.xml",true);
        xhttp.send();


app4

    install dependencies:
     $ cd app4 && npm install

   run the app:
     $ DEBUG=app4:* npm start

layout.jade
========
        doctype html
        html
          head
            title= title
            link(rel='stylesheet', href='/stylesheets/foundation.min.css')
            link(rel='stylesheet', href='/stylesheets/style.css')
          body
            header
              div.top-bar
                div.top-bar-left
                  ul.menu
                    li
                      a(href="/") Home
                    li
                      a(href="/state") Ready State
                    li
                      a(href="#") Three
                    li
                      a(href="#") Four
            block content

index.jade
=======
    extends layout

    block content
      h1= title
      p Welcome to #{title}

state.jade
=======

        extends layout

        block content

          div.row
            div(class="small-12 columns")
              h1= title

              button#start Print Result

              div#console  Cosole log panel

              div#result Print Result

          script(src="/javascripts/state.js")

index.js
=====

        var express = require('express');
        var router = express.Router();

        /* GET home page. */
        router.get('/', function(req, res, next) {
          res.render('index', { title: 'Express' });
        });
        router.get('/state', function(req, res, next) {
          res.render('state', { title: 'Ajax [ Ready State ] Sample' });
        });
        module.exports = router;


state.js
=====

        function print_console(text){
          document.getElementById("console").innerHTML += text;
        }

        function startAjax(){
          var request;

          if(window.XMLHttpRequest){
              request = new XMLHttpRequest();
          } else if(window.ActiveXObject){
              request = new ActiveXObject("Microsoft.XMLHTTP");
          } else {
              return;
          }

          document.getElementById("start").addEventListener('click',function(){

          request.onreadystatechange = function(){
            switch (request.readyState) {
              case 1: print_console("<br/><em>1: вызван open...</em>"); break
              case 2: print_console("<br/><em>2: получены заголовки...</em>"); break
              case 3: print_console("<br/><em>3: загружается тело..</em>"); break
              case 4:{
               if(request.status==200){
                    print_console("<br/><em>4: запрос завершён</em>");
                    document.getElementById("result").innerHTML = "<b>"+request.responseText+"</b>";
                   }else if(request.status==404){
                    console.log("HTTP Status: 404 : NOT FOUND!");
                   }
                    else console.log("текущее состояние запроса: "+ request.status);

              break
              }
            }
            }
            request.open("GET",'#',true);
            request.send();
            });

        }

        window.onload = startAjax();
