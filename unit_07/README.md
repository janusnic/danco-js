# danco-js

# AJAX («Asynchronous Javascript And Xml») — 
технология обращения к серверу без перезагрузки страницы.

## XML (eXtensible Markup Language) — расширяемый язык разметки;
## JSON (JavaScript Object Notation) —текстовый формат основанный на JavaScript.

##  AJAX пример №1
<pre>
function startAjax(url){
 var request;
 if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
  } else if(window.ActiveXObject){
    request = new ActiveXObject("Microsoft.XMLHTTP");
  } else { 
      return;
  }

  request.onreadystatechange = function(){
    switch (request.readyState) {
       case 1: print_console("&lt;br/&gt;&lt;em&gt;1: Подготовка к отправке...&lt;/em&gt;"); break
 	case 2: print_console("&lt;br/&gt;&lt;em&gt;2: Отправлен...&lt;/em&gt;"); break
	case 3: print_console("&lt;br/&gt;&lt;em&gt;3: Идет обмен..&lt;/em&gt;"); break
	case 4:{
 		if(request.status==200){
 			 print_console("&lt;br/&gt;&lt;em&gt;4: Обмен завершен.&lt;/em&gt;");
 document.getElementById("printResult").innerHTML = "&lt;b&gt;"+request.responseText+"&lt;/b&gt;"; 
 		}else if(request.status==404){
 			alert("Ошибка: запрашиваемый скрипт не найден!");
 			}
 			else alert("Ошибка: сервер вернул статус: "+ request.status);
		 	break
	 	}
	}
   }
	 request.open ('GET', url, true);
  request.send ('');
  } 
  function print_console(text){
  document.getElementById("console").innerHTML += text; 
}
</pre>
## index.html
<pre>
&lt;a href="#" onclick="startAjax('handler_script.php');"&gt;Запустить php скрипт&lt;/a&gt; 
&lt;div id="console" style="border: 1px solid gray; width:250px; height: 110px; padding: 10px; background:lightgray;"&gt;
Консоль выполнения запроса:
&lt;/div&gt;
&lt;br/&gt;
&lt;div id="printResult"&gt;
После нажатия на ссылку, тут будет сообщение с сервера!
&lt;/div&gt;
</pre>
## AJAX пример №2 – отправка POST запроса на сервер

любой из запросов, отправляющийся на сервер, может иметь один из таких типов данных:
### GET – передаёт пользовательских данные заданному ресурсу по URI.
### POST – передаёт пользовательских данные заданному ресурсу по протоколу.
### HEAD – аналогичен методу GET, за исключением того, что сервер ничего не посылает в информационной части ответа.
### TRACE – возвращает всё, что было введено при запросе, включая HTTP-заголовки.
### DELETE – Удаляет указанный ресурс.
### PUT – загружает содержимого запроса на указанный в запросе URI.

### XmlHttp() – функция которая создает объект XMLHttpRequest(), она написана максимально компактно и кроссбраузерно.
### ajax(param) – наш обработчик при вызове событий (onclick), принимает в массиве paramнеобходимые данные:
### url – куда отсылать данные, причем он может быть в таком виде page.php?parameter=value, то есть информация может передаваться по методу GET.
### statbox – ид html блока который будет принимать результаты работы ajax + php приложения.
### method – метод отправки данных, может быть POST или GET. В нашем примере мы используем POST метод, но в то же время через url можно передавать информацию GET методом.
### data – массив передаваемых данных. В нашем примере, данные автоматически берутся из поля 1 и 2, хотя можно просто писать data: {name: "value"}.
### success – имя функции или сама функция, которая будет обрабатывать полученные данные (текст).

## Технология AJAX, пример №3
### data.xml :
<pre>
&lt;user login="root" pass=""&gt;
&lt;name&gt;Janus&lt;/name&gt;
&lt;famaly&gt;Nicon&lt;/famaly&gt;
&lt;status&gt;Администратор блога janusnic.io&lt;/status&gt;
&lt;/user&gt;
</pre>
### В файл handler_script.php поместите такой код:
<pre>
header('Content-Type: text/xml; charset=utf-8');
echo file_get_contents('data.xml');
</pre>
Данные будут сначала считаны из фала data.xml, а затем возвращены в ajax запрос в формате XML.

## Example04 Прогноз погоды
<pre>
&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"&gt;&lt;/script&gt;
 
&lt;script&gt;
 
  $( function() {
 
   $('#getForecast').click( function() {
      var data = { city: "Васюки", date: "20150613" };
      $.get( "getForecast.txt", data, success, "json" );
    } );
 function success( forecastData ) {
      var forecast = forecastData.city + " прогноз на " + forecastData.date;
      forecast += ": " + forecastData.forecast + ". Максимальная температура: " + forecastData.maxTemp + "C";
      alert( forecast );
    }
 
  } );
 
&lt;/script&gt;&lt;/head&gt;
&lt;body&gt;
&lt;button id="getForecast"&gt;Получить прогноз погоды&lt;/button&gt;
</pre>
## Example05 jQuery Sortable, Ajax & MYSQL
<pre>
&lt;script type="text/javascript"&gt; 
    // When the document is ready set up our sortable with it's inherant function(s) 
    $(document).ready(function() { 
        $("#test-list").sortable({ 
            handle : '.handle', 
            update : function () { 
                var order = $('#test-list').sortable('serialize'); 
                $("#info").load("process-sortable.php?"+order); 
            } 
        }); 
    }); 
&lt;/script&gt;
Now here’s the HTML to output the list etc. Etc:
&lt;pre&gt; 
    &lt;div id="info"&gt;Waiting for update&lt;/div&gt; 
&lt;/pre&gt; 

&lt;ul id="test-list"&gt; 
    &lt;li id="listItem_1"&gt; 
        &lt;img src="arrow.png" alt="move" width="16" height="16" class="handle" /&gt; 
        &lt;strong&gt;Item 1 &lt;/strong&gt;with a link to &lt;a href="http://www.google.co.uk/" rel="nofollow"&gt;Google&lt;/a&gt; 
    &lt;/li&gt; 
    &lt;li id="listItem_2"&gt; 
        &lt;img src="arrow.png" alt="move" width="16" height="16" class="handle" /&gt; 
        &lt;strong&gt;Item 2&lt;/strong&gt; 
    &lt;/li&gt; 
    &lt;li id="listItem_3"&gt; 
        &lt;img src="arrow.png" alt="move" width="16" height="16" class="handle" /&gt; 
        &lt;strong&gt;Item 3&lt;/strong&gt; 
    &lt;/li&gt; 
    &lt;li id="listItem_4"&gt; 
&lt;img src="arrow.png" alt="move" width="16" height="16" class="handle" /&gt; 
        &lt;strong&gt;Item 4&lt;/strong&gt; 
    &lt;/li&gt; 
&lt;/ul&gt; 

&lt;form action="process-sortable.php" method="post" name="sortables"&gt; 
    &lt;input type="hidden" name="test-log" id="test-log" /&gt; 
&lt;/form&gt;
</pre>
### process-sortable.php
<pre>
&lt;?php 
/**
 * This is where you would inject your sql into the database 
 * but we're just going to format it and send it back 
 */ 
foreach ($_GET['listItem'] as $position =&gt; $item)
{
$sql[] = "UPDATE `table` SET `position` = $position WHERE `id` = $item"; 
}
print_r ($sql); 
?&gt;
</pre>
##  Example06 Ajax + PHP: пример работы - комментарии

## Example08 Drag and drop images
<pre>
CREATE TABLE `images`(
`id`int(11) NOT NULL AUTO_INCREMENT,
`image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
`order` int(5) NOT NULL DEFAULT '0',
`created` datetime NOT NULL,
`modified` datetime NOT NULL,
`status` tinyint(1) NOT NULL DEFAULT '1',
PRIMARY KEY (`id`)
)  ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

</pre>
## Example09 WEBSOCKET
<pre>
&lt;!-- форма для отправки сообщений --&gt;
&lt;form name="publish"&gt;
  &lt;input type="text" name="message"/&gt;
  &lt;input type="submit" value="Отправить"/&gt;
&lt;/form&gt;

&lt;!-- здесь будут появляться входящие сообщения --&gt;
&lt;div id="subscribe"&gt;&lt;/div&gt;

&lt;script src="browser.js"&gt;&lt;/script&gt;

browser.js
if (!window.WebSocket) {
	document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
}

// создать подключение
var socket = new WebSocket("ws://localhost:8081");

// отправить сообщение из формы publish
document.forms.publish.onsubmit = function() {
  var outgoingMessage = this.message.value;

  socket.send(outgoingMessage);
  return false;
};

// обработчик входящих сообщений
socket.onmessage = function(event) {
  var incomingMessage = event.data;
  showMessage(incomingMessage); 
};

// показать сообщение в div#subscribe
function showMessage(message) {
  var messageElem = document.createElement('div');
  messageElem.appendChild(document.createTextNode(message));
document.getElementById('subscribe').appendChild(messageElem);
}
server.js
var http = require('http');
var Static = require('node-static');
var WebSocketServer = new require('ws');

// подключенные клиенты
var clients = {};

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({port: 8081});
webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  console.log("новое соединение " + id);

  ws.on('message', function(message) {
    console.log('получено сообщение ' + message);

    for(var key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', function() {
    console.log('соединение закрыто ' + id);
    delete clients[id];
  });

});


// обычный сервер (статика) на порту 8080
var fileServer = new Static.Server('.');
http.createServer(function (req, res) {

  fileServer.serve(req, res);

}).listen(8080);

console.log("Сервер запущен на портах 8080, 8081");
</pre>
# canvas
<pre>
&lt;!doctype html&gt; 
&lt;html&gt; 
    &lt;head&gt; 
        &lt;title&gt;canvas&lt;/title&gt; 
        &lt;meta charset='utf-8' /&gt; 
    &lt;/head&gt; 
    &lt;body&gt; 
</pre>
## Прямоугольники

Самой элементарной фигурой которую можно рисовать является прямоугольник. Предусмотрено три функции для отрисовки прямоугольников.
<pre>

strokeRect(x, y, ширина, высота) // Рисует прямоугольник
fillRect(x, y, ширина, высота)   // Рисует закрашенный прямоугольник
clearRect(x, y, ширина, высота)  // Очищает область на холсте размер с прямоугольник заданного размера
</pre>
## canvas1.html
<pre>

&lt;canvas id="a" width="300" height="225"&gt;&lt;/canvas&gt;
Теперь легко можно обнаружить элемент &lt;canvas&gt; в DOM.
var a_canvas = document.getElementById("a");

&lt;script&gt;
/ / Теперь легко можно обнаружить элемент canvas в DOM. 
            var ex1 = document.getElementById('ex1'); 
            
// Каждый холст изначально пустой. 

            var example = document.getElementById("example"), 
                ctx     = example.getContext('2d'); 
                
                ctx.fillRect(0, 0, example.width, example.height); 
                ctx.fillStyle = "#FF0000"; 
                ctx.fillRect(30, 40, 300, 200);


function draw_ex1() { 
         // Первая строка функции находит элемент canvas в DOM. 
         var b_canvas = document.getElementById("ex1"); 
/* Каждый холст имеет контекст рисования. Как только вы нашли элемент canvas в DOM (с помощью document.getElementById() или любым другим способом), вызываете метод getContext(). Необходимо указать строку "2D" в методе getContext(). В спецификации HTML5 отмечено: «в будущих версиях данной спецификации, вероятно, будет определен 3D-контекст». */ 

         var b_context = b_canvas.getContext("2d"); 
         b_context.fillRect(50, 25, 150, 100); 
        } 

            var example = document.getElementById("example"), 
                ctx     = example.getContext('2d'); 
                
                ctx.fillRect(0, 0, example.width, example.height); 
                ctx.fillStyle = "#FF0000"; 
                ctx.fillRect(30, 40, 300, 200); 
</pre>

Свойство fillStyle может быть цветом, рисунком или градиентом (подробнее о градиентах чуть ниже). По умолчанию fillStyle заливает сплошным черным цветом, но вы можете установить что угодно. Каждый контекст рисунка помнит свои собственные свойства при открытии страницы, пока вы ее не обновите.
<pre>
fillRect(x, y, width, height) рисует прямоугольник, заполненный текущим стилем заливки.

Свойство strokeStyle как и fillStyle может быть цветом, рисунком или градиентом.

strokeRect(x, y, width, height) рисует прямоугольник с текущим стилем линии. StrokeRect не заливается внутри, он просто рисует границы.

clearRect(x, y, width, height) удаляет пиксели в указанном прямоугольнике.
function clear_ex1() { 
         // Первая строка функции находит элемент canvas в DOM. 
              var b_canvas = document.getElementById("ex1"); 
/* clearRect(x, y, width, height) удаляет пиксели в указанном прямоугольнике.  */ 
              var b_context = b_canvas.getContext("2d"); 
              b_context.clearRect(50, 25, 150, 100); 
            }
</pre>
## Canvas2.html
### Координаты холста
Холст это двумерная сетка. Координата 0,0 находится в левом верхнем углу холста. Вдоль оси X значения растут к правому краю холста. По оси Y значения растут к нижнему краю холста.
Координатная сетка была нарисована с помощью &lt;canvas&gt; и включает в себя:
<pre>
набор серых вертикальных линий;
набор серых горизонтальных линий;
две черные горизонтальные линии;
две черные вертикальные линии;
две маленькие черные диагональные линии, которые образуют стрелки;
две черные вертикальные линии;
две маленькие черные диагональные линии, которые образуют вторую стрелу;
букву «х»;
букву «у»;
текст «(0, 0)» вблизи левого верхнего угла;
текст «(500, 375)» в нижнем правом углу;
точку в левом верхнем углу и другую в нижнем правом углу.
</pre>
Во-первых, нам необходимо определить сам элемент &lt;canvas&gt;, задать ему ширину и высоту, а также id, чтобы мы могли найти его позже.
&lt;canvas id="c" width="500" height="375"&gt;&lt;/canvas&gt;
Тогда мы должны найти сценарий &lt;canvas&gt; элемент в DOM и получить его в контекст рисования.
<pre>
var c_canvas = document.getElementById("c");
var context = c_canvas.getContext("2d");
</pre>
### Теперь мы можем рисовать линии.

Чтобы рисовать прямые линии карандашом, можно использовать следующие два метода:
<pre>
1. moveTo(х, у) перемещает карандаш к указанной начальной точке.
2. lineTo(х, у) рисует линии до указанной конечной точки.
</pre>
Чем чаще вы вызываете moveTo() и lineTo(), тем длиннее получается контур. Это «карандашные» методы — вы можете обращаться к ним так часто, насколько хотите, но вы ничего не увидите на холсте, пока не обратитесь к одному из «чернильных» методов.
### Рисование вертикальных линий
<pre>
for (var x = 0.5; x &lt; 500; x += 10) {
context.moveTo(x, 0);
context.lineTo(x, 375);
}
Рисование горизонтальных линий
for (var y = 0.5; y &lt; 375; y += 10) {
context.moveTo(0, y);
context.lineTo(500, y);
}
</pre>
### «чернильные» методы, чтобы сделать рисунок видимым.
<pre>
context.strokeStyle = "#eee";
context.stroke();
stroke() является одним из «чернильных» методов. Он принимает сложный контур, заданный всеми вызовами moveTo() и lineTo(), и рисует его на холсте. StrokeStyle управляет цветом линии. Вот результат.
            ctx.moveTo(0,0); 
            ctx.lineTo(200,100); 
            ctx.stroke(); 
</pre>
### Следующие атрибуты шрифта доступны в контексте рисования.
#### Font может содержать все, что вы бы добавили в свойство CSS font. Включает стиль шрифта, насыщенность, размер, межстрочное расстояние и семейство гарнитур.
#### TextAlign управляет выравниванием текста. Похоже на свойство CSS text-align, но не идентично ему. Возможные значения: start, end, left, right и center.
#### TextBaseline говорит где рисуется текст относительно начальной точки. Возможные значения: top, hanging, middle, alphabetic, ideographic и bottom.


### Контекст рисования холста поддерживает два типа градиента:
#### 1. createLinearGradient(x0, y0, x1, y1) рисует вдоль линии от (x0, y0) до (x1, y1).
#### 2. createRadialGradient(x0, y0, r0, x1, y1, r1) рисует по конусу между двумя окружностями. Первые три параметра определяют начальную окружность с центром (x0, y0) и радиусом r0. Последние три параметра представляют последнюю окружность с центром (x1, y1) и радиусом r1.
<pre>
градиент от черного цвета к белому.
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");

Стиль заполнения градиентом
context.fillStyle = my_gradient;
context.fillRect(0, 0, 300, 225);

градиент по диагонали.
Оба значения x и y меняются
var my_gradient = context.createLinearGradient(0, 0, 300, 225);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
context.fillStyle = my_gradient;
context.fillRect(0, 0, 300, 225);

Draw Circular Gradient 
// Create gradient 
function rad_gradient() { 
         var my_gradient = context.createRadialGradient(175,50,50,190,60,100); 
                my_gradient.addColorStop(0, "red"); 
                my_gradient.addColorStop(1, "green"); 
                //Стиль заполнения градиентом 
                context.fillStyle = my_gradient; 
                context.fillRect(10, 10, 300, 300); 
         } 

</pre>
### Контекст рисования холста определяет метод drawImage() для вывода изображений. Этот метод может иметь три, пять или девять аргументов.
#### drawImage(image, dx, dy) принимает изображение и выводит его на холст. Заданные координаты (dx, dy) соответствуют левому верхнему углу изображения, координаты (0, 0) выводят изображения в левом верхнем углу холста.
#### drawImage(image, dx, dy, dw, dh) принимает изображение, масштабирует его до ширины dw и высоты dh и выводит в точке с координатами (dx, dy).
#### drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) принимает изображение, обрезает его до прямоугольника (sx, sy, sw, sh), масштабирует до размеров (dw, dh) и выводит в точке с координатами (dx, dy).


## Спецификация HTML5 поясняет параметры drawImage():
Исходный прямоугольник это прямоугольник (в пределах исходного изображения), чьи углы это четыре точки (sx, sy), (sx+sw, sy), (sx+sw, sy+sh), (sx, sy+sh).
Прямоугольник назначения это прямоугольник (в холсте), чьи углы в четырех точках (dx, dy), (dx+dw, dy), (dx+dw, dy+dh), (dx, dy+dh).

<pre>
Использование &lt;img&gt;
&lt;img id="cat" src="images/cat.png" alt="Спящий кот" width="177" height="113"&gt;
&lt;canvas id="e" width="177" height="113"&gt;&lt;/canvas&gt;
&lt;script&gt;
window.onload = function() {
var canvas = document.getElementById("e");
var context = canvas.getContext("2d");
var cat = document.getElementById("cat");
context.drawImage(cat, 0, 0);
};
&lt;/script&gt;

Использование объекта Image()
&lt;canvas id="e" width="177" height="113"&gt;&lt;/canvas&gt;
&lt;script&gt;
var canvas = document.getElementById("e");
var context = canvas.getContext("2d");
var cat = new Image();
cat.src = "images/cat.png";
cat.onload = function() {
context.drawImage(cat, 0, 0);
};
&lt;/script&gt;
</pre>

### Добавление изображения условно можно разделить на два шага: создание JavaScript объекта Image, а второй и заключительный шаг это отрисовка изображения на холсте при помощи функции drawImage. Рассмотрим оба шага подробнее.
<pre>
Создание нового графического объекта: 
var img = new Image();  // Создание нового объекта изображения
img.src = 'image.png';  // Путь к изображению которое необходимо нанести на холст

drawImage(image, x, y) // Где x и y это координаты левого верхнего угла изображения, а первый параметр это изображение
</pre>
## Линии и дуги

### Рисование фигур составленных из линий выполняется последовательно в несколько шагов:
<pre>
beginPath()
closePath()
stroke()
fill()

&lt;canvas id='example'&gt;Обновите браузер&lt;/canvas&gt; 
&lt;script&gt; 
var example = document.getElementById("example"), ctx = example.getContext('2d'); 
example.height = 480; 
example.width = 640; 
ctx.beginPath(); 
ctx.arc(80, 100, 56, 3/4 * Math.PI, 1/4 * Math.PI, true); ctx.fill(); // *14 
ctx.moveTo(40, 140); 
ctx.lineTo(20, 40); 
ctx.lineTo(60, 100); 
ctx.lineTo(80, 20); 
ctx.lineTo(100, 100); 
ctx.lineTo(140, 40); 
ctx.lineTo(120, 140); 
ctx.stroke(); // *22 
&lt;/script&gt;
</pre>
## Добавим цвета
<pre>

fillStyle = color   // определяет цвет заливки 
strokeStyle = color // цвет линий цвет задается точно так же как и css, на примере все четыре способа задания цвета

Цвет задается точно так же как и css, на примере все четыре способа задания цвета
// все четыре строки задают оранжевый цвет заливки 
ctx.fillStyle = "orange"; 
ctx.fillStyle = "#FFA500"; 
ctx.fillStyle = "rgb(255,165,0)"; 
ctx.fillStyle = "rgba(255,165,0,1)"

</pre>
## Аналогично задаётся и цвет для линий.
Возьмём пример с шахматной доской и добавим в него немного цвета:
<pre>
&lt;canvas id='example'&gt;Обновите браузер&lt;/canvas&gt; 
&lt;script&gt; 
var example = document.getElementById("example"), ctx = example.getContext('2d'); 
example.height = 480; 
example.width = 640; 
ctx.strokeStyle = '#B70A02'; // меняем цвет рамки ctx.strokeRect(15, 15, 266, 266); 
ctx.strokeRect(18, 18, 260, 260); 
ctx.fillStyle = '#AF5200'; // меняем цвет клеток 
ctx.fillRect(20, 20, 256, 256); 
for (i = 0; i &lt; 8; i += 2) for (j = 0; j &lt; 8; j += 2) { 
ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32); 
ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32); } &lt;/script&gt;


canvas {
    border: 1px solid #ccc;
}

&lt;canvas id='example'&gt;Обновите браузер&lt;/canvas&gt;

var example = document.getElementById('example'),
        ctx     = example.getContext('2d'),
        pic     = new Image();
    example.height = 300;
    example.height = 450;
    pic.src = 'http://habrahabr.ru/i/nocopypast.png';
    pic.onload = function () {
        // Иллюстрация для пример №1
        ctx.drawImage(pic, 0, 0);
        // Иллюстрация для пример №2
        ctx.drawImage(pic, 0, 130, 300, 150);
        // Иллюстрация для пример №3
        ctx.drawImage(pic, 25, 42, 85, 55, 0, 300, 170, 110);
    }


</pre>
