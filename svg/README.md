# 21v-js

SVG (Scalable Vector Graphics
==============================
 масштабируемая векторная графика) — язык разметки масштабируемой векторной графики, созданный Консорциумом Всемирной паутины (W3C) и входящий в подмножество расширяемого языка разметки XML, предназначен для описания двумерной векторной и смешанной векторно/растровой графики в формате XML. Поддерживает как неподвижную, так и анимированную интерактивную графику — или, в иных терминах, декларативную и скриптовую. Не поддерживает описание трёхмерных объектов. Это открытый стандарт, который является рекомендацией консорциума W3C — организации, разработавшей такие стандарты, как HTML и XHTML. В основу SVG легли языки разметки VML и PGML. Разрабатывается с 1999 года. В 2001 году вышла версия 1.0, в 2011 - версия 1.1, которая остается актуальной до сегодняшнего дня. В настоящее время в активной разработке находится версия 2.

https://developer.mozilla.org/ru/docs/Web/SVG

Описание основных геометрических фигур (многоугольники, прямоугольники, окружности и т. п.).
--------------------------------------------------------------------------------------------
Широкий спектр визуальных свойств, которые можно применить к фигурам и путям: окраска, прозрачность, скругление углов и т. д.

1.html circle
--------------
```
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40"
  stroke="green" stroke-width="4" fill="yellow" />
Sorry, your browser does not support inline SVG.
</svg>
```
2 rect
-------
```
<svg width="400" height="100">
  <rect width="400" height="100" 
  style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" />
Sorry, your browser does not support inline SVG.
</svg>

```
3 fill
-------
```
<svg width="400" height="180">
  <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
  style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
Sorry, your browser does not support inline SVG.
</svg>

```
4 polygon
----------
```
<svg width="300" height="200">
  <polygon points="100,10 40,198 190,78 10,78 160,198"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
Sorry, your browser does not support inline SVG.
</svg>

```
5 linearGradient
-----------------
```
<svg height="130" width="500">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"
      style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%"
      style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
  <text fill="#ffffff" font-size="45" font-family="Verdana"
  x="50" y="86">SVG</text>
Sorry, your browser does not support inline SVG.
</svg>

```

8 text
-------
```
<svg height="60" width="200">
  <text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
  Sorry, your browser does not support inline SVG.
</svg>

```

Интерактивность. На каждый отдельный элемент и на целое изображение можно повесить обработчик событий (клик, перемещение, нажатие клавиши и т.д), таким образом, пользователь может управлять рисунком (например — перемещать мышкой некоторые элементы[1]).
    
Анимация и сценарии. С помощью ECMAScript или JavaScript можно описывать даже самые сложные сценарии, связанные с математическими вычислениями координат и пропорций фигур. Вместе с интерактивностью и SMIL анимацией это дает очень широкие возможности для разработчиков веб-графики.

7 animateTransform
-------------------
```
<style>
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

body {
  background: #FC0;
}

svg {
  position: fixed;
  top: 20%;
  height: 60%;
  left: 20%;
  width: 60%;
}</style>
<svg viewBox="0 0 160 160" width="160" height="160">
  <circle cx="80" cy="80" r="50" />
  <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
    <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#FFF">
      <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="1s" repeatCount="indefinite" />
    </path>
  </g>
  <path d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" />
</svg>

```

9 animateMotion
----------------
```
<svg width="500" height="500">
  <g transform="translate(100,100)">
    <text id="TextElement" x="0" y="0" style="font-family:Verdana;font-size:24"> It's SVG!
      <animateMotion path="M 0 0 L 100 100" dur="10s" fill="freeze" />
    </text>
  </g>
  Sorry, your browser does not support inline SVG.  
</svg>

```
10 animateTransform
--------------------
```
<svg width="100%" height="300px">
<g id="R1" transform="translate(250 250)"> 
  <ellipse rx="100" ry="0" opacity=".3">
  <animateTransform attributeName="transform" type="rotate" dur="7s" from="0" to="360" repeatCount="indefinite"/>
  <animate attributeName="cx" dur="8s" values="-20; 220; -20" repeatCount="indefinite"/>
  <animate attributeName="ry" dur="3s" values="10; 60; 10" repeatCount="indefinite"/>
  </ellipse>
</g>
<use xlink:href="#R1" transform="rotate(72 390 150)"/>
<use xlink:href="#R1" transform="rotate(144 390 150)"/>
<use xlink:href="#R1" transform="rotate(216 390 150)"/>
<use xlink:href="#R1" transform="rotate(288 390 150)"/>
</svg>

```

11 animate opacity
------------------
```
<svg width="400" height="400">
  <rect x="20" y="20" width="250" height="250" style="fill:blue">
    <animate attributeType="CSS" attributeName="opacity" from="1" to="0" dur="5s" repeatCount="indefinite" />
  </rect>
  Sorry, your browser does not support inline SVG.  
</svg>

```

12 animate
----------
```
<style>
svg {
  border: 3px solid #eee;
  display: block;
  margin: 1em auto;
}</style>

<svg width="500" height="100">
  <circle id="orange-circle" r="30" cx="50" cy="50" fill="orange" />
  
  <animate 
           xlink:href="#orange-circle"
           attributeName="cx"
           from="50"
           to="450" 
           dur="1s"
           begin="click"
           fill="freeze" />
</svg>

```

Описание путей (path).
======================
 Позволяет задать любую фигуру компактной строкой, описывающей путь от начальной точки до конечной через любые промежуточные координаты. Строка с данными задаётся атрибутом d тега path и содержит команды, закодированные набором букв и чисел. Буква определяет тип команды, числа — её параметры (чаще всего — координаты). Команды позволяют описывать фигуры, состоящие из отрезков прямых (L, H, V), кривых Безье (C, S, Q, T) и дуг (A). Пример, описывающий звезду из 5 линий, содержит строку данных с командами M (moveto — переместить) и L (lineto — нарисовать линию), содержащими в качестве аргументов координаты точек по X и Y. В версиях SVG до 1.2 включительно описание путей возможно только в пикселях.

``` 
<path fill="none" 
stroke="black" d="M 227 239 L 328 90 L 346 250 L 201 124 L 410 150 L 228 238" />
```

Растровое изображение содержит в себе информацию о точках, а векторное — о фигурах.
-----------------------------------------------------------------------------------
Текстовый формат — файлы SVG можно читать и редактировать при помощи обычных текстовых редакторов. При просмотре документов, содержащих SVG графику, имеется доступ к просмотру кода просматриваемого файла и возможность сохранения всего документа. Кроме того, SVG файлы обычно получаются меньше по размеру, чем сравнимые по качеству изображения в форматах JPEG или GIF, а также хорошо поддаются сжатию.
    
Масштабируемость — SVG является векторным форматом. Существует возможность увеличить любую часть изображения SVG без потери качества. Дополнительно, к элементам SVG документа возможно применять фильтры — специальные модификаторы для создания эффектов, подобных применяемым при обработке растровых изображений (размытие, выдавливание, сложные системы трансформации и др.) В тексте SVG-кода фильтры описываются тегами, визуализацию которых обеспечивает средство просмотра, что не влияет на размер исходного файла, обеспечивая при этом необходимую иллюстративную выразительность.
    
Широко доступно использование растровой графики в SVG документах. Имеется возможность вставлять элементы с изображениями в форматах PNG, GIF или JPG.

Текст в графике SVG является текстом, а не изображением, поэтому его можно выделять и копировать, он индексируется поисковыми машинами, не нужно создавать дополнительные метафайлы для поисковых роботов.

Анимация реализована в SVG с помощью языка SMIL (Synchronized Multimedia Integration Language), разработанного также консорциумом W3C. Поддерживаются скриптовые языки на основе спецификации ECMAScript. SVG-элементами можно управлять с помощью JavaScript. Применение скриптов и анимации в SVG позволяет создавать динамичную и интерактивную графику. В SVG обеспечивается событийная модель, отслеживаются события (загрузка страницы, изменение ее параметров, события мыши, клавиатуры и др.) Анимация может запускаться по определенному событию (например «onmouseover» или «onclick»), что придаёт графике интерактивность. У каждого элемента есть свои собственные события, к которым можно привязывать отдельные скрипты.

SVG — открытый стандарт. В отличие от некоторых других форматов, SVG не является чьей-либо собственностью.

SVG документы легко интегрируются с HTML и XHTML документами. Внешний SVG подключаются через тег object, значение атрибута data — имя файла с расширением «.svg», содержащего разметку SVG, type — MIME-тип, то есть image/svg+xml. Атрибуты width и height определяют размеры области SVG по горизонтали и по вертикали. Элементы SVG совместимы с HTML и DHTML.

Совместимость с CSS (Cascading Style Sheets). Отображением (форматированием и декорированием) SVG элементов можно управлять с помощью таблицы стилей CSS 2.0 и её расширений, либо напрямую с помощью атрибутов SVG элементов.

Структура документа SVG
========================
Первая строка — стандартный XML-заголовок, объявление (XML declaration), указывающее версию XML (version) (обычно «1.0») и кодировку символов (encoding):
```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
```
Во второй и третьей строках должен располагаться заголовок DOCTYPE, определяющий тип документа (англ. Document Type Definitions) DTD:
```
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
    "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
```

В четвёртой строке размещается корневой элемент документа с указанием пространства имен SVG.
```
<svg version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:ev="http://www.w3.org/2001/xml-events"
     width="100%" height="100%">
```
Далее идёт остальной текст документа вложенный в корневой элемент, где собственно располагаются элементы, описывающие содержание кодируемой сцены.

Завершается документ всегда закрытием корневого тега 
```
</svg> 
```
Простой статичный SVG-документ с контуром квадрата размером 400 пикселей и тремя полупрозрачными кругами радиусом 104 пикселей, по центру квадрата, каждый круг смещается от центра квадрата примерно на полрадиуса.

6.svg
-----
```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg version = "1.1"
     baseProfile="full"
     xmlns = "http://www.w3.org/2000/svg" 
     xmlns:xlink = "http://www.w3.org/1999/xlink"
     xmlns:ev = "http://www.w3.org/2001/xml-events"
     height = "400px"  width = "400px">
     <rect x="0" y="0" width="400" height="400" 
          fill="none" stroke="black" stroke-width="5px" stroke-opacity="0.5"/>
     <g fill-opacity="0.6" stroke="black" stroke-width="0.5px">
        <circle cx="200px" cy="200px" r="104px" fill="red"   transform="translate(  0,-52)" />
        <circle cx="200px" cy="200px" r="104px" fill="blue"  transform="translate( 60, 52)" />
        <circle cx="200px" cy="200px" r="104px" fill="green" transform="translate(-60, 52)" />
     </g>
</svg>
```

7.svg прямоугольник с закруглёнными углами:
-------------------------------------------
```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
    "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:ev="http://www.w3.org/2001/xml-events"
     width="100%" height="100%">
<rect fill="white" x="0" y="0" width="100%" height="100%" />
<rect fill="silver" x="0" y="0" width="100%" height="100%" rx="1em"/>
</svg>
```

SVGZ
=====
Поскольку код SVG занимает довольно много места, была создана «обёртка» SVGZ, когда SVG сжимают с помощью gzip, а полученному файлу присваивают расширение «SVGZ».

SVG хорошо сжимается, поскольку это текстовый XML-документ, имеющий регулярную структуру.

Использование редакторов
========================
Как видно из примеров, рисование базовых SVG-фигур — это очень просто, но объекты могут быть намного сложнее. Для таких нужно использовать редакторы векторной графики, например Adobe Illustrator или Inkscape, где можно сохранять файлы в SVG-формате, а потом редактировать в текстовом редакторе.

gal.svg
```
<?xml version="1.0"?>

<svg xmlns="http://www.w3.org/2000/svg" 
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:svg="http://www.w3.org/2000/svg"
 id="canvas"
 onload="doload()">

  <script type="text/javascript"><![CDATA[
      const SVG = "http://www.w3.org/2000/svg";
      const XLINK = "http://www.w3.org/1999/xlink";
      const hotspot = "rgba(0,200,200,0.3)";

      var currentTransform = null;

      function doload() {
          var images;

          // Load a few images; some extra stuff here for make
          // testing from file:// URLs easier -- it will load
          // standard wallpapers on OSX or Vista.
          images = ["../images/1.jpg",
                        "../images/2.jpg",
                        "../images/3.jpg",
                        "../images/4.jpg",
                        "../images/5.jpg"];
        /*try {
          if (document.location.toString().indexOf("http") != -1) {
              images = [ "http://farm1.static.flickr.com/234/535566372_33c1025c7b_o.jpg",
                         "http://farm2.static.flickr.com/1159/534271166_db0f114a5d_o.jpg",
                         "http://farm1.static.flickr.com/120/313853602_d759910c1e_b.jpg",
                         "http://farm1.static.flickr.com/122/313940834_8bf97d364e_b.jpg" ];
          } else if (document.location.toString().toLowerCase().indexOf("users") != -1) {
              images = ["file:///Library/Desktop Pictures/Nature/Flowing Rock.jpg",
                        "file:///Library/Desktop Pictures/Nature/Stones.jpg",
                        "file:///Library/Desktop Pictures/Plants/Lotus.jpg",
                        "file:///Library/Desktop Pictures/Plants/Dandelion.jpg" ];
          } else {
              images = ["file:///c:/Windows/Web/Wallpaper/img9.jpg",
                        "file:///c:/Windows/Web/Wallpaper/img7.jpg",
                        "file:///c:/Windows/Web/Wallpaper/img11.jpg",
                        "file:///c:/Windows/Web/Wallpaper/img10.jpg"];
          }
        } catch (e) {
          images = [ "http://farm1.static.flickr.com/234/535566372_33c1025c7b_o.jpg",
                     "http://farm2.static.flickr.com/1159/534271166_db0f114a5d_o.jpg",
                     "http://farm1.static.flickr.com/120/313853602_d759910c1e_b.jpg",
                     "http://farm1.static.flickr.com/122/313940834_8bf97d364e_b.jpg" ];
        }*/

          // Load the images in the background, and only add them once they're
          // loaded (and, presumably, cached by the broser)
          for (var k = 0; k < images.length; k++) {
              var img = new Image();

              // do some hackyness here to get the correct variables
              // to the function
              img.onload = function(k, url) { return function() {
                      var g = addImage(url, 1.0);
                      g.style.opacity = 1.0;
                      g.vTranslate = [100 + Math.random() * 300 + (k%3) * 250,
                                      100 + Math.random() * 300 + (k/3) * 280];
                      var c = 0.25 + (Math.random() * .25);
                      g.vScale = c; // 0.25; // 0.001;
                      g.vRotate = (Math.random() * 40) - 20;
              
                      setupTransform(g.id);
                      rampOpacityUp(g);
                  }
              } (k, images[k]);

              img.src = images[k];
          }

          document.getElementById("canvas").addEventListener("mousemove", onMouseMove, false);
          document.getElementById("canvas").addEventListener("mouseup", onMouseUp, false);
          document.getElementById("background-rect").addEventListener("mousemove", onMouseMove, false);
          document.getElementById("background-rect").addEventListener("mouseup", onMouseUp, false);
      }

      // convenience function to set X, Y, width, and height attributes
      function svgSetXYWH(el, x, y, w, h) {
          el.setAttribute("x", x);
          el.setAttribute("y", y);
          el.setAttribute("width", w);
          el.setAttribute("height", h);
      }

      // create a new clickable rect [x,y,w,h] with the givenfill/stroke
      // with the given handler on mouse down
      function newClickableRect(id, x, y, w, h, fill, stroke, handler) {
          var p = document.createElementNS(SVG, "rect");
          p.setAttribute("id", id);
          svgSetXYWH(p, x, y, w, h);
          p.setAttribute("rx", 30);
          p.setAttribute("ry", 30);
          p.setAttribute("fill", fill);
          //p.setAttribute("stroke", stroke);
          //p.setAttribute("stroke-width", 10);
          p.addEventListener("mousedown", handler, false);
          return p;
      }

      // create all the elements for the given image URL.
      // this includes the toplevel group, the image itself,
      // and the clickable hotspots used for rotating the image.
      var nextImageId = 0;
      function addImage(url, initOpacity) {
          var imgw = 1000;
          var imgh = 700;

          var id = nextImageId++;
          var s = "image" + id;
          var g = document.createElementNS(SVG, "g");
          g.setAttribute("id", s);
          g.addEventListener("mouseover", onEnterImage, false);
          g.addEventListener("mouseout", onExitImage, false);
          g.addEventListener("mousedown", function(evt) { startTransform(evt, "c", "move"); evt.preventDefault(); }, false);

          if (initOpacity != null)
              g.style.opacity = initOpacity;

          var image = document.createElementNS(SVG, "image");
          image.setAttribute("id", s+"-img");
          svgSetXYWH(image, -imgw/2, -imgh/2, imgw, imgh);
          image.setAttribute("preserveAspectRatio", "xMinYMin slice");
          image.setAttributeNS(XLINK, "href", url);
          g.appendChild(image);

          var rect = document.createElementNS(SVG, "rect");
          rect.setAttribute("id", s+"-border");
          svgSetXYWH(rect, -imgw/2, -imgh/2, imgw, imgh);
          rect.setAttribute("stroke", "black");
          rect.setAttribute("rx", "10");
          rect.setAttribute("ry", "10");
          rect.setAttribute("stroke-width", "20");
          rect.setAttribute("fill", "none");

          g.appendChild(rect);

          var g2 = document.createElementNS(SVG, "g");
          g2.setAttribute("id", s+"-overlay");
          g2.setAttribute("class", "image-overlay");
          g2.setAttribute("style", "visibility: hidden");

          var rsz = 200;

          g2.appendChild(newClickableRect(s+"-tl", -imgw/2, -imgh/2, rsz, rsz,
                                          hotspot, "rgba(100,100,100,0.5)",
                                          function (evt) { return startTransform(evt, 'tl', 'rotate'); }));
          g2.appendChild(newClickableRect(s+"-tr", imgw/2-rsz, -imgh/2, rsz, rsz,
                                          hotspot, "rgba(100,100,100,0.5)",
                                          function (evt) { return startTransform(evt, 'tr', 'rotate'); }));
          g2.appendChild(newClickableRect(s+"-br", imgw/2-rsz, imgh/2-rsz, rsz, rsz,
                                          hotspot, "rgba(100,100,100,0.5)",
                                          function (evt) { return startTransform(evt, 'br', 'rotate'); }));
          g2.appendChild(newClickableRect(s+"-bl", -imgw/2, imgh/2-rsz, rsz, rsz,
                                          hotspot, "rgba(100,100,100,0.5)",
                                          function (evt) { return startTransform(evt, 'bl', 'rotate'); }));
          /*
          g2.appendChild(newClickableRect(s+"-c", -rsz/2, -rsz/2, rsz, rsz,
                                          hotspot, "rgba(100,100,100,0.5)",
                                          function (evt) { return startTransform(evt, 'c', 'scale'); }));
          */

          g.appendChild(g2);

          document.getElementById("canvas").appendChild(g);

          return g;
      }

      function bringToFront(s) {
          var el = document.getElementById(s);

          el.parentNode.removeChild(el);
          document.getElementById("canvas").appendChild(el);
      }

      // take the transforms saved on the element and turn them into
      // svg transform syntax
      function setupTransform(s) {
          var g = document.getElementById(s);
          var g2 = document.getElementById(s + "-overlay");

          g.setAttribute("transform", "translate(" + g.vTranslate[0] + "," + g.vTranslate[1] + ") " +
                         "scale(" + g.vScale + "," + g.vScale + ") " +
                         "rotate(" + g.vRotate + ") ");
      }

      function baseName(ev) {
          var id = ev.target.getAttribute("id");
          return id.substr(0, id.indexOf("-"));
      }

      function onEnterImage(ev) {
          var e = baseName(ev);
          if (!e)
              return;
          document.getElementById(e + '-overlay').style.visibility = "visible";
          ev.preventDefault();
      }

      function onExitImage(ev) {
          var e = baseName(ev);
          if (!e)
              return;
          document.getElementById(e + '-overlay').style.visibility = "hidden";
          ev.preventDefault();
      }

      function startTransform(ev, corner, what) {
          // ignore if something else is already going on
          if (currentTransform != null)
              return;

          var e = baseName(ev);
          if (!e)
              return;

          bringToFront(e);
          var g = document.getElementById(e);

          currentTransform = { what: what, el: e, corner: corner, g: g,
                               s: g.vScale, r: g.vRotate, t: g.vTranslate,
                               x: ev.clientX, y: ev.clientY };
          rampOpacityDown(currentTransform.g);
      }

      function onMouseUp(ev) {
          if (currentTransform)
              rampOpacityUp(currentTransform.g);
          currentTransform = null;
          ev.preventDefault();
      }

      function onMouseMove(ev) {
          if (!("currentTransform" in window) ||
              currentTransform == null)
              return;

          var ex = ev.clientX;
          var ey = ev.clientY;
          var pos = currentTransform.g.vTranslate;

          if (currentTransform.what == "rotate") {
              var r2d = 360.0 / (2.0 * Math.PI);

              var lastAngle = Math.atan2(currentTransform.y - pos[1],
                                         currentTransform.x - pos[0]) * r2d;
              var curAngle = Math.atan2(ey - pos[1],
                                        ex - pos[0]) * r2d;

              currentTransform.g.vRotate += (curAngle - lastAngle);

              var lastLen = Math.sqrt(Math.pow(currentTransform.y - pos[1], 2) +
                                      Math.pow(currentTransform.x - pos[0], 2));
              var curLen = Math.sqrt(Math.pow(ey - pos[1], 2) +
                                     Math.pow(ex - pos[0], 2));

              currentTransform.g.vScale = currentTransform.g.vScale * (curLen / lastLen);

          } else if (currentTransform.what == "move") {
              var xd = ev.clientX - currentTransform.x;
              var yd = ev.clientY - currentTransform.y;

              currentTransform.g.vTranslate = [ pos[0] + xd, pos[1] + yd ];
          }

          currentTransform.x = ex;
          currentTransform.y = ey;

          setupTransform(currentTransform.el);

          ev.preventDefault();
      }

      function rampOpacityDown(g) {
          g.style.opacity = 1.0;
          var rampFunc = function () {
              var o = parseFloat(g.style.opacity) - 0.05;
              g.style.opacity = o;
              if (o > 0.7)
                  setTimeout(rampFunc, 10);
          }
          rampFunc();
      }

      function rampOpacityUp(g) {
          g.style.opacity = 0.7;
          var rampFunc = function () {
              var o = parseFloat(g.style.opacity) + 0.05;
              g.style.opacity = o;
              if (o < 1.0)
                  setTimeout(rampFunc, 10);
          }
          rampFunc();
      }
  ]]></script>

  <rect id="background-rect" x="0%" y="0%" width="100%" height="100%" fill="#aaaaaa"/>

</svg>

```

gallery.html
-------------
```
<?xml version="1.0"?>

<svg  width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" 
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:svg="http://www.w3.org/2000/svg"
 id="canvas"
 onload="doload()">

  <script type="text/javascript"><![CDATA[
      const SVG = "http://www.w3.org/2000/svg";
      const XLINK = "http://www.w3.org/1999/xlink";
      const hotspot = "rgba(0,200,200,0.3)";

      var currentTransform = null;

      function doload() {
          var images;

          // Load a few images; some extra stuff here for make
          // testing from file:// URLs easier -- it will load
          // standard wallpapers on OSX or Vista.
        
              images = ["../images/1.jpg",
                        "../images/2.jpg",
                        "../images/3.jpg",
                        "../images/4.jpg",
                        "../images/5.jpg"];

          // Load the images in the background, and only add them once they're
          // loaded (and, presumably, cached by the broser)
          for (var k = 0; k < images.length; k++) {
              var img = new Image();

              // do some hackyness here to get the correct variables
              // to the function
              img.onload = function(k, url) { return function() {
                      var g = addImage(url, 1.0);
                      g.style.opacity = 1.0;
                      g.vTranslate = [100 + Math.random() * 300 + (k%3) * 250,
                                      100 + Math.random() * 300 + (k/3) * 280];
                      var c = 0.25 + (Math.random() * .25);
                      g.vScale = c; // 0.25; // 0.001;
                      g.vRotate = (Math.random() * 40) - 20;
              
                      setupTransform(g.id);
                      rampOpacityUp(g);
                  }
              } (k, images[k]);

              img.src = images[k];
          }

          document.getElementById("canvas").addEventListener("mousemove", onMouseMove, false);
          document.getElementById("canvas").addEventListener("mouseup", onMouseUp, false);
          document.getElementById("background-rect").addEventListener("mousemove", onMouseMove, false);
          document.getElementById("background-rect").addEventListener("mouseup", onMouseUp, false);
      }

      // convenience function to set X, Y, width, and height attributes
      function svgSetXYWH(el, x, y, w, h) {
          el.setAttribute("x", x);
          el.setAttribute("y", y);
          el.setAttribute("width", w);
          el.setAttribute("height", h);
      }

      // create a new clickable rect [x,y,w,h] with the givenfill/stroke
      // with the given handler on mouse down
      function newClickableRect(id, x, y, w, h, fill, stroke, handler) {
          var p = document.createElementNS(SVG, "rect");
          p.setAttribute("id", id);
          svgSetXYWH(p, x, y, w, h);
          p.setAttribute("rx", 30);
          p.setAttribute("ry", 30);
          p.setAttribute("fill", fill);
          p.addEventListener("mousedown", handler, false);
          return p;
      }

      // create all the elements for the given image URL.
      // this includes the toplevel group, the image itself,
      // and the clickable hotspots used for rotating the image.
      var nextImageId = 0;
      function addImage(url, initOpacity) {
          var imgw = 1000;
          var imgh = 700;

          var id = nextImageId++;
          var s = "image" + id;
          var g = document.createElementNS(SVG, "g");
          g.setAttribute("id", s);
          g.addEventListener("mouseover", onEnterImage, false);
          g.addEventListener("mouseout", onExitImage, false);
          g.addEventListener("mousedown", function(evt) { startTransform(evt, "c", "move"); evt.preventDefault(); }, false);

          if (initOpacity != null)
              g.style.opacity = initOpacity;

          var image = document.createElementNS(SVG, "image");
          image.setAttribute("id", s+"-img");
          svgSetXYWH(image, -imgw/2, -imgh/2, imgw, imgh);
          image.setAttribute("preserveAspectRatio", "xMinYMin slice");
          image.setAttributeNS(XLINK, "href", url);
          g.appendChild(image);

          var rect = document.createElementNS(SVG, "rect");
          rect.setAttribute("id", s+"-border");
          svgSetXYWH(rect, -imgw/2, -imgh/2, imgw, imgh);
          rect.setAttribute("stroke", "black");
          rect.setAttribute("rx", "10");
          rect.setAttribute("ry", "10");
          rect.setAttribute("stroke-width", "20");
          rect.setAttribute("fill", "none");

          g.appendChild(rect);

          var g2 = document.createElementNS(SVG, "g");
          g2.setAttribute("id", s+"-overlay");
          g2.setAttribute("class", "image-overlay");
          g2.setAttribute("style", "visibility: hidden");

          var rsz = 200;

          g2.appendChild(newClickableRect(s+"-tl", -imgw/2, -imgh/2, rsz, rsz,
                                          hotspot, "rgba(100,100,100,0.5)",
                                          function (evt) { return startTransform(evt, 'tl', 'rotate'); }));
          g2.appendChild(newClickableRect(s+"-tr", imgw/2-rsz, -imgh/2, rsz, rsz,
                                          hotspot, "rgba(100,100,100,0.5)",
                                          function (evt) { return startTransform(evt, 'tr', 'rotate'); }));
          g2.appendChild(newClickableRect(s+"-br", imgw/2-rsz, imgh/2-rsz, rsz, rsz,
                                          hotspot, "rgba(100,100,100,0.5)",
                                          function (evt) { return startTransform(evt, 'br', 'rotate'); }));
          g2.appendChild(newClickableRect(s+"-bl", -imgw/2, imgh/2-rsz, rsz, rsz,
                                          hotspot, "rgba(100,100,100,0.5)",
                                          function (evt) { return startTransform(evt, 'bl', 'rotate'); }));


          g.appendChild(g2);

          document.getElementById("canvas").appendChild(g);

          return g;
      }

      function bringToFront(s) {
          var el = document.getElementById(s);

          el.parentNode.removeChild(el);
          document.getElementById("canvas").appendChild(el);
      }

      // take the transforms saved on the element and turn them into
      // svg transform syntax
      function setupTransform(s) {
          var g = document.getElementById(s);
          var g2 = document.getElementById(s + "-overlay");

          g.setAttribute("transform", "translate(" + g.vTranslate[0] + "," + g.vTranslate[1] + ") " +
                         "scale(" + g.vScale + "," + g.vScale + ") " +
                         "rotate(" + g.vRotate + ") ");
      }

      function baseName(ev) {
          var id = ev.target.getAttribute("id");
          return id.substr(0, id.indexOf("-"));
      }

      function onEnterImage(ev) {
          var e = baseName(ev);
          if (!e)
              return;
          document.getElementById(e + '-overlay').style.visibility = "visible";
          ev.preventDefault();
      }

      function onExitImage(ev) {
          var e = baseName(ev);
          if (!e)
              return;
          document.getElementById(e + '-overlay').style.visibility = "hidden";
          ev.preventDefault();
      }

      function startTransform(ev, corner, what) {
          // ignore if something else is already going on
          if (currentTransform != null)
              return;

          var e = baseName(ev);
          if (!e)
              return;

          bringToFront(e);
          var g = document.getElementById(e);

          currentTransform = { what: what, el: e, corner: corner, g: g,
                               s: g.vScale, r: g.vRotate, t: g.vTranslate,
                               x: ev.clientX, y: ev.clientY };
          rampOpacityDown(currentTransform.g);
      }

      function onMouseUp(ev) {
          if (currentTransform)
              rampOpacityUp(currentTransform.g);
          currentTransform = null;
          ev.preventDefault();
      }

      function onMouseMove(ev) {
          if (!("currentTransform" in window) ||
              currentTransform == null)
              return;

          var ex = ev.clientX;
          var ey = ev.clientY;
          var pos = currentTransform.g.vTranslate;

          if (currentTransform.what == "rotate") {
              var r2d = 360.0 / (2.0 * Math.PI);

              var lastAngle = Math.atan2(currentTransform.y - pos[1],
                                         currentTransform.x - pos[0]) * r2d;
              var curAngle = Math.atan2(ey - pos[1],
                                        ex - pos[0]) * r2d;

              currentTransform.g.vRotate += (curAngle - lastAngle);

              var lastLen = Math.sqrt(Math.pow(currentTransform.y - pos[1], 2) +
                                      Math.pow(currentTransform.x - pos[0], 2));
              var curLen = Math.sqrt(Math.pow(ey - pos[1], 2) +
                                     Math.pow(ex - pos[0], 2));

              currentTransform.g.vScale = currentTransform.g.vScale * (curLen / lastLen);

          } else if (currentTransform.what == "move") {
              var xd = ev.clientX - currentTransform.x;
              var yd = ev.clientY - currentTransform.y;

              currentTransform.g.vTranslate = [ pos[0] + xd, pos[1] + yd ];
          }

          currentTransform.x = ex;
          currentTransform.y = ey;

          setupTransform(currentTransform.el);

          ev.preventDefault();
      }

      function rampOpacityDown(g) {
          g.style.opacity = 1.0;
          var rampFunc = function () {
              var o = parseFloat(g.style.opacity) - 0.05;
              g.style.opacity = o;
              if (o > 0.7)
                  setTimeout(rampFunc, 10);
          }
          rampFunc();
      }

      function rampOpacityUp(g) {
          g.style.opacity = 0.7;
          var rampFunc = function () {
              var o = parseFloat(g.style.opacity) + 0.05;
              g.style.opacity = o;
              if (o < 1.0)
                  setTimeout(rampFunc, 10);
          }
          rampFunc();
      }
  ]]></script>

  <rect id="background-rect" x="0%" y="0%" width="100%" height="100%" fill="#aaaaaa"/>

</svg>

```

vivus.html
----------
https://github.com/maxwellito/vivus
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>vivus.js - svg animation</title>
        <meta name="description" content="SVG Drawing Animation" />

        <style type="text/css">

            /* Base style */
            html {
                font-size: 24px;
            }
            body {
                margin: 0 0 40px;
                font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
                font-weight: 200;
                color: #666666;
                background-color: #FFFFFF;
                word-break: break-word;
            }
            a, a:visited, a:hover, a:link {
                color: inherit;
                outline: 0;
            }
            small {
                font-weight: 100;
            }
            p {
                font-size: 1rem;
                line-height: 1.4rem;
            }
            button, .button {
                margin: 0; padding: 3px 6px;
                border-radius: 6px;
                border: 1px solid currentColor;
                color: inherit;
                background-color: rgba(0,0,0,0);
                font-size: 0.6rem;
                font-weight: 300;
                text-decoration: none;
                cursor: pointer;
                outline: 0;
            }
            button.active, .button.active {
                background-color: currentColor;
            }
            button.active span, .button.active span {
                color: #FFFFFF;
            }
            i {
                background-color: rgba(0, 0, 0, 0.05);
                border-radius: 4px;
            }
            svg * {
                fill: none;
                stroke: currentColor;
            }

            /* Common components */
            .bloc {
                color: #f9f9f9;
                padding: 1px 0 30px;
                clear: both;
            }
            .content {
                margin: auto;
                max-width: 960px;
                padding: 0 20px;
            }
            .col3 {
                width: 33.33%;
                float: left;
                text-align: center;
                border-bottom-color: currentColor;
                border-bottom-style: solid;
            }
            .col-container {
                padding: 0 12px;
            }
            .col3 p {
                font-size: 0.75rem;
                line-height: 1.05rem;
            }

            /* Text */
            .bigger {
                font-size: 1rem;
                font-weight: 100;
                line-height: 1.4rem;
            }
            .center {
                text-align: center;
            }
            .clearer {
                clear: both;
            }
            .striked {
                text-decoration: line-through;
            }
            .italic {
                font-style: italic;
            }

            /* Blocs */
            .bloc-head     { color: #5aa8c5; padding: 30px; }
            .bloc-demo     { color: #FF495F; }
            .bloc-timing   { color: #F7A800; }
            .bloc-scenario { color: #4fe084; }
            .bloc-doc      { color: #69B0CA; }

            /* Custom */
            #hi-there {
                width: 100%;
                stroke-width:4;
            }
            .intro-links {
                text-align: right;
            }
            .example-description {
                margin-left: 440px;
            }
            .timing-description {
                min-height: 200px;
                margin-right: 240px;
            }
            .obturateur {
                stroke-width: 3;
                stroke-miterlimit: 10;
            }
            #polaroid {
                float: left;
                width: 400px; height: 320px;
                stroke: #f9f9f9;
                stroke-width: 3;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 10;
            }
            #timing-example {
                float: right;
                width: 175px; height: 175px;
            }
            .goodbye-head {
                font-size: 1.5rem;
                text-align: center;
                margin-bottom: 0;
            }
            .goodbye-sub {
                font-size: 0.875rem;
                text-align: center;
                margin: 0 0 20px;
            }

            /* Media queries */
            @media (max-width: 960px) {
                .button-group { display: block; line-height: 1.8em; }
            }

            @media (min-width: 768px) {
                .col3 { border-bottom: none; }
            }

            @media (max-width: 767px) {
                #polaroid { width: 100%; max-height: 300px; }
                .example-description { margin-left: 0; }
                .timing-description { margin-right: 0; }
                #timing-example { float: none; width: 100%; }

                .col3 { width: 100%; float: none; margin-bottom: 25px; padding-bottom: 25px; border-bottom-width: 1px; min-height: 200px; }
                .col3:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom-width: 0px; }
            }

            @media (min-width: 481px) and (max-width: 767px) {
                #polaroid { width: 100%; max-height: 300px; }
                .example-description { margin-left: 0; }
                .timing-description { margin-right: 0; }

                .col3:nth-child(2n) svg {
                    width: 200px;
                    float: right;
                }
                .col3:nth-child(2n) .col-container {
                    text-align: right;
                    margin-right: 200px;
                }
                .col3:nth-child(2n+1) svg {
                    width: 200px;
                    float: left;
                }
                .col3:nth-child(2n+1) .col-container {
                    text-align: left;
                    margin-left: 200px;
                }
            }

            @media (max-width: 480px) {
                .col-container { padding: 0px; }
                #polaroid { width: 100%; max-height: 260px; }
            }

        </style>
    </head>
    <body>

        <!-- Head: HI THERE -->
        <div class="bloc bloc-head">
            <svg height="300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 404.7 354" enable-background="new 0 0 404.7 354" id="hi-there" onclick="hi.reset().play();">

                <!-- HI -->
                <path data-duration="10" d="M324.6,61.2c16.6,0,29.5-12.9,29.5-29.5c0-16.6-12.9-29.5-29.5-29.5c-16.6,0-29.5,12.9-29.5,29.5C295.1,48.4,308,61.2,324.6,61.2z"/>
        <path data-duration="130" d="M366.2,204.2c-9.8,0-15-5.6-15-15.1V77.2h-85v28h19.5c9.8,0,8.5,2.1,8.5,11.6v72.4c0,9.5,0.5,15.1-9.3,15.1H277h-20.7c-8.5,0-14.2-4.1-14.2-12.9V52.4c0-8.5,5.7-12.3,14.2-12.3h18.8v-28h-127v28h18.1c8.5,0,9.9,2.1,9.9,8.9v56.1h-75V53.4c0-11.5,8.6-13.3,17-13.3h11v-28H2.2v28h26c8.5,0,12,2.1,12,7.9v142.2c0,8.5-3.6,13.9-12,13.9h-21v33h122v-33h-11c-8.5,0-17-4.1-17-12.2v-57.8h75v58.4c0,9.1-1.4,11.6-9.9,11.6h-18.1v33h122.9h5.9h102.2v-33H366.2z"/>

        <path data-async data-delay="20" d="M358.8,82.8c11.1-4.2,18.8-14.7,18.8-27.5c0-8.5-3.4-16-8.9-21.3"/>
                <path data-async d="M124.2,105.7V77c0-11.5,9.1-13.8,17.5-13.8h10.5V44.7"/>
                <polyline data-async points="147.9,40.2 171.2,63.2 175.7,63.2"/>
                <line data-async x1="295.1" y1="32.1" x2="275.2" y2="12.2"/>
                <path data-async d="M266.2,204.7V75.9c0-8.5,5.2-12.8,13.7-12.8h18.3V44.7"/>
                <polyline data-async points="265.9,105.2 289.2,129.2 293.7,129.2"/>
                <polyline data-async points="374.2,204.7 374.2,94.2 358.8,82.8 351.2,77.2"/>
                <polyline data-async points="148.2,237.2 171.2,261.2 294.6,261.2 300.5,261.2 402.2,261.2 402.2,228.2 379.2,204.2"/>
                <polyline data-async points="124.2,204.7 124.2,157.2 175.7,157.2"/>
                <line data-async x1="147.7" y1="228.2" x2="129.2" y2="204.2"/>
                <polyline data-async points="7.2,237.3 30.2,261.2 152.2,261.2 152.2,241.7"/>
                <polyline data-async points="1.9,40.2 26,63.2 39.7,63.2"/>
                <line data-async x1="129.2" y1="12.2" x2="148.2" y2="33.2"/>
                <line data-async x1="303.9" y1="53" x2="328.1" y2="77.2"/>

                <line x1="345.1" y1="10.5" x2="368.7" y2="34"/>

                <!-- there -->
                <path data-delay="30" data-duration="60" stroke-linecap="round" stroke-linejoin="round" d="M76.8,337.3c0,0,1.9,12.2,13.1,12.2c22.1,0,23.8-1.8,59-66.4c-19.7,35.7-36.4,66.2-19.3,66.2c15.2,0,22.9-14.2,28.3-23.7c3.3-0.5,24-3.2,35-25.5c4-8.1,4.1-17.8-8.1-15.2c-5.6,1.2-13.1,14.8-15.7,19.2c-7.6,12.7-22.4,45.2-22.4,45.2s10.3-22.4,21.5-22.4c15.5,0-9.4,22.4,4.7,22.4c4.9,0,11.7-11.4,16.6-20.9c7.5,4.7,19.7,1.7,24.5-8.1c10.1-20.4-14.4-12.8-24.5,8.1c-5.5,11.3-2.2,21.1,11.2,21.1c16.4,0,26.1-28.3,30.5-37.5c9.9,2.5,14,2.5,22.7-1.1c-3.5,5.1-24,38.1-8.3,38.1c6.7,0,11.7-11.4,16.6-20.9c7.5,4.7,19.7,1.7,24.5-8.1c10.1-20.4-14.4-12.8-24.5,8.1c-5.5,11.3-2.2,21.1,11.2,21.1c16.4,0,20.6-4,24.7-10.5"/>

                <path stroke-linecap="round" stroke-linejoin="round" d="M157.3,300.8c3.8-2.3-29,0.8-35.6,3.2"/>
            </svg>
        </div>

        <!-- Intro -->
        <div class="content">
            <h1>vivus<small>, bringing your SVGs to life</small></h1>
            <p>Vivus is a lightweight JavaScript class (with no dependencies) that allows you to animate SVGs, giving them the appearence of being drawn. There are a variety of different animations available, as well as the option to create a custom script to draw your SVG in whatever way you like.</p>
            <p class="intro-links">
                <a href="//github.com/maxwellito/vivus" class="button bigger">View on GitHub</a>
            </p>

        </div>

        <!-- Animation examples/demo -->
        <div class="bloc bloc-demo">
            <div class="content">

                <h2>Animation types</h2>
                <div>
                    <div class="col3">
                        <svg id="obturateur1" class="obturateur" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="100%" height="200px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" onclick="obt1.reset().play();">
                            <circle cx="100" cy="100" r="90"/>
                            <circle cx="100" cy="100" r="85.74"/>
                            <circle cx="100" cy="100" r="72.947"/>
                            <circle cx="100" cy="100" r="39.74"/>
                            <line x1="34.042" y1="131.189" x2="67.047" y2="77.781"/>
                            <line x1="31.306" y1="75.416" x2="92.41" y2="60.987"/>
                            <line x1="68.81" y1="34.042" x2="122.219" y2="67.046"/>
                            <line x1="124.584" y1="31.305" x2="139.013" y2="92.409"/>
                            <line x1="165.957" y1="68.809" x2="132.953" y2="122.219"/>
                            <line x1="168.693" y1="124.584" x2="107.59" y2="139.012"/>
                            <line x1="131.19" y1="165.957" x2="77.781" y2="132.953"/>
                            <line x1="75.417" y1="168.693" x2="60.987" y2="107.59"/>
                        </svg>
                        <div class="col-container">
                            <h3>Delayed</h3>
                            <p>Every path element is drawn at the same time with a small delay at the start. This is currently the default animation.</p>
                            <button onclick="obt1.reset().play();">replay</button>
                        </div>
                    </div>

                    <div class="col3">
                        <svg id="obturateur2" class="obturateur" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="100%" height="200px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" onclick="obt2.reset().play();">
                            <circle cx="100" cy="100" r="90"/>
                            <circle cx="100" cy="100" r="85.74"/>
                            <circle cx="100" cy="100" r="72.947"/>
                            <circle cx="100" cy="100" r="39.74"/>
                            <line x1="34.042" y1="131.189" x2="67.047" y2="77.781"/>
                            <line x1="31.306" y1="75.416" x2="92.41" y2="60.987"/>
                            <line x1="68.81" y1="34.042" x2="122.219" y2="67.046"/>
                            <line x1="124.584" y1="31.305" x2="139.013" y2="92.409"/>
                            <line x1="165.957" y1="68.809" x2="132.953" y2="122.219"/>
                            <line x1="168.693" y1="124.584" x2="107.59" y2="139.012"/>
                            <line x1="131.19" y1="165.957" x2="77.781" y2="132.953"/>
                            <line x1="75.417" y1="168.693" x2="60.987" y2="107.59"/>
                        </svg>
                        <div class="col-container">
                            <h3>Async</h3>
                            <p>Each line is drawn asynchronously. They all start and finish at the same time, hence the name `async`.</p>
                            <button onclick="obt2.reset().play();">replay</button>
                        </div>
                    </div>

                    <div class="col3">
                        <svg id="obturateur3" class="obturateur" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="100%" height="200px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" onclick="obt3.reset().play();">
                            <circle cx="100" cy="100" r="90"/>
                            <circle cx="100" cy="100" r="85.74"/>
                            <circle cx="100" cy="100" r="72.947"/>
                            <circle cx="100" cy="100" r="39.74"/>
                            <line x1="34.042" y1="131.189" x2="67.047" y2="77.781"/>
                            <line x1="31.306" y1="75.416" x2="92.41" y2="60.987"/>
                            <line x1="68.81" y1="34.042" x2="122.219" y2="67.046"/>
                            <line x1="124.584" y1="31.305" x2="139.013" y2="92.409"/>
                            <line x1="165.957" y1="68.809" x2="132.953" y2="122.219"/>
                            <line x1="168.693" y1="124.584" x2="107.59" y2="139.012"/>
                            <line x1="131.19" y1="165.957" x2="77.781" y2="132.953"/>
                            <line x1="75.417" y1="168.693" x2="60.987" y2="107.59"/>
                        </svg>
                        <div class="col-container">
                            <h3>OneByOne</h3>
                            <p>Each path element is drawn one after the other. This animation gives the best impression of live drawing.</p>
                            <button onclick="obt3.reset().play();">replay</button>
                        </div>
                    </div>
                </div>
                <div class="clearer"></div>
            </div>
        </div>

        <!-- Scripting -->
        <div class="bloc bloc-timing">
            <div class="content">

                <h2>Timing function</h2>
                <p>To give more freedom, it's possible to override the animation of each path and/or the entire SVG. It works a bit like the CSS animation timing function. But instead of using a cubic-bezier function, it use a simple JavaScript function. It must accept a number as parameter (between 0 to 1), then return a number (also between 0 and 1). It's a hook.</p>
                <p>Here an example test to play around with the different properties available.</p>

                <div>
                    <svg id="timing-example" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve" onclick="timing&&timing.reset().play();">
                        <g stroke-width="4" stroke-linecap="round" stroke-miterlimit="10">
                            <line x1="68.18066" y1="68.18066" x2="131.81934" y2="131.81934"/>
                            <line x1="68.18066" y1="131.82031" x2="131.81934" y2="68.17969"/>
                            <circle cx="100" cy="100" r="65"/>
                            <circle cx="100" cy="100" r="75"/>
                            <circle cx="100" cy="100" r="85"/>
                            <circle cx="100" cy="100" r="95"/>
                        </g>
                    </svg>
                    <div class="timing-description">
                        <p>Type
                            <span class="button-group">
                                <button onclick="timingTest(this,'type','delayed');" class="active"><span>delayed</span></button>
                                <button onclick="timingTest(this,'type','async');"><span>async</span></button>
                                <button onclick="timingTest(this,'type','oneByOne');"><span>oneByOne</span></button>
                            </span>
                        </p>
                        <p>Path timing function
                            <span class="button-group">
                                <button onclick="timingTest(this,'path','LINEAR');" class="active"><span>linear</span></button>
                                <button onclick="timingTest(this,'path','EASE');"><span>ease</span></button>
                                <button onclick="timingTest(this,'path','EASE_IN');"><span>ease-in</span></button>
                                <button onclick="timingTest(this,'path','EASE_OUT');"><span>ease-out</span></button>
                                <button onclick="timingTest(this,'path','EASE_OUT_BOUNCE');"><span>ease-out bounce</span></button>
                            </span>
                        </p>
                        <p>Anim timing function
                            <span class="button-group">
                                <button onclick="timingTest(this,'anim','LINEAR');" class="active"><span>linear</span></button>
                                <button onclick="timingTest(this,'anim','EASE');"><span>ease</span></button>
                                <button onclick="timingTest(this,'anim','EASE_IN');"><span>ease-in</span></button>
                                <button onclick="timingTest(this,'anim','EASE_OUT');"><span>ease-out</span></button>
                                <button onclick="timingTest(this,'anim','EASE_OUT_BOUNCE');"><span>ease-out bounce</span></button>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scripting example -->
        <div class="bloc bloc-scenario">
            <div class="content">

                <div class="script-example">
                    <svg id="polaroid" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 200 160" enable-background="new 0 0 200 160" onclick="pola.reset().play();">

                        <!-- Case -->
                        <!-- The case items will be drawn at the same time (attribute `data-async` on each tag) with a custom duration of 40 frames (attribute `data-duration`). WARNING: When you want to draw a bloc asynchronously (like here), the last item need to be `data-async` free. Otherwise the following tags will also start at the same time. I know it's a bit confusing, play a bit with it and you'll see. -->
                        <path data-async data-duration="40" d="
                            M106.725,104.742c-0.773,2.498-3.586,4.229-6.285,3.867L12.473,96.802c-2.699-0.363-4.262-2.682-3.49-5.18l25.164-81.436
                            c0.771-2.496,3.584-4.229,6.283-3.866l87.966,11.808c2.699,0.362,4.264,2.68,3.49,5.179L106.725,104.742z"/>
                        <path data-async data-duration="40" d="
                            M101.02,123.207c-0.773,2.5-3.587,4.23-6.286,3.867L6.766,115.27c-2.699-0.363-4.26-2.682-3.488-5.182l2.91-9.417
                            c0.771-2.499,3.585-4.23,6.285-3.87l87.967,11.809c2.699,0.361,4.261,2.682,3.49,5.18L101.02,123.207z"/>
                        <line data-async data-duration="40" x1="103.377" y1="128.225" x2="154.768" y2="155.32"/>
                        <line data-async data-duration="40" x1="109.852" y1="112.684" x2="155.035" y2="136.906"/>
                        <path data-async data-duration="40" d="
                            M9.096,120.207l47.932,21.994c0,0,98.06,12.414,97.74,13.119c-0.318,0.709,5.426-16.205,5.426-16.205l-2.646-96.842
                            c-1.098-7.587-2.467-11.8-8.559-15.024l-12.635-6.604"/>
                        <path data-async data-duration="40" d="
                            M161.586,38.135l30.717,16.085c0,0,5.295,2.323,4.543,6.504l-3.215,10.527c-0.648,2.621-2.939,4.988-8.229,2.798l-9.154-4.701
                            l-11.834,56.441"/>
                        <path data-duration="40" d="
                            M183.148,49.518c0,0,5.295,2.324,4.543,6.506l-3.215,10.526c-0.648,2.622-2.938,4.988-8.229,2.798"/>

                        <!-- Lens -->
                        <!-- All item will be drawn line by line, with an exception for the first one, a little delay (attribute `data-delay) to make a break between the drawing of the case and the start of the lens part -->
                        <path data-delay="20" d="
                            M87.176,56.143C83.274,68.78,69.043,77.538,55.395,75.706S33.846,62.146,37.75,49.511c3.903-12.637,18.135-21.392,31.783-19.562
                            C83.181,31.782,91.081,43.51,87.176,56.143z"/>
                        <path d="
                            M92.745,56.891c-4.785,15.48-22.219,26.213-38.942,23.969C37.079,78.615,27.4,64.245,32.184,48.763
                            c4.783-15.48,22.218-26.211,38.94-23.968C87.848,27.041,97.528,41.411,92.745,56.891z"/>
                        <path d="
                            M78.99,26.933c16.169,7.426,19.398,10.989,22.026,20.105c1.283,4.449,1.271,9.411-0.3,14.489
                            c-4.783,15.479-22.217,26.213-38.941,23.969c-8.68-1.165-21.171-7.963-25.613-14.055"/>
                        <path d="
                            M42.602,50.162c3.137-10.157,14.573-17.193,25.543-15.722"/>

                        <!-- Flash -->
                        <!-- This tag does not have any extra attribute. So it will start when the previous tag is finished. His duration and delay will be the one given in the options. -->
                        <path d="
                            M103.789,29.275c-0.568,1.841,0.582,3.549,2.57,3.818l12.807,1.72c1.988,0.266,4.062-1.012,4.633-2.851l1.66-5.38
                            c0.568-1.843-0.582-3.551-2.57-3.816l-12.807-1.72c-1.988-0.268-4.062,1.01-4.633,2.85L103.789,29.275z"/>

                        <!-- Output -->
                        <!-- Same case as Flash -->
                        <path d="
                            M11.129,105.791c-0.297,0.965,0.305,1.855,1.346,1.994l81.446,10.932c1.038,0.141,2.123-0.527,2.42-1.49l0,0
                            c0.298-0.961-0.304-1.855-1.343-1.996l-81.447-10.93C12.51,104.16,11.426,104.828,11.129,105.791L11.129,105.791z"/>

                        <!-- Design (color lines on the front) -->
                        <!-- All the lines will start at the same time, because they all have the attribute `data-async` -->
                        <line data-async x1="47.583" y1="101.505" x2="51.561" y2="88.267"/>
                        <line data-async x1="53.391" y1="102.326" x2="57.047" y2="90.125"/>
                        <line data-async x1="59.224" y1="103.068" x2="62.749" y2="91.295"/>
                        <line data-async x1="65.057" y1="103.814" x2="69.015" y2="90.637"/>
                        <line data-async x1="72.87" y1="19.969" x2="75.497" y2="11.082"/>
                        <line data-async x1="78.512" y1="21.325" x2="81.317" y2="11.868"/>
                        <line data-async x1="83.833" y1="23.718" x2="87.16" y2="12.582"/>
                        <line data-async x1="89.145" y1="26.141" x2="92.939" y2="13.498"/>

                    </svg>
                    <div class="example-description">
                        <h2>Scenarize</h2>
                        <p>This feature allows you to script the animation of your SVG. To do this, the custom values will be set directly in the DOM of the SVG.</p>
                        <p>Here is an example using <i>scenario-sync</i>.<br>I would recommend you look at the source code and the readme file for more information.</p>
                        <button onclick="pola.reset().play();">replay</button>
                        <button onclick="pola.play(-3);">rewind</button>
                    </div>
                    <div class="clearer"></div>

                </div>
            </div>
        </div>

        <!-- Info and documentation link -->
        <div class="bloc bloc-doc">
            <div class="content">
                <p class="center">More information and documentation on <a href="https://github.com/maxwellito/vivus#vivusjs">GitHub</a>.</p>
            </div>
        </div>

        <!-- Goodbye -->
        <div class="content">
            <p class="goodbye-head">Thanks for watching.</p>
            <p class="goodbye-sub">Made with <span class="striked">love</span> <span class="italic">a keyboard</span></p>
        </div>

        <!-- Le scripts -->
        <script src="vivus.js"></script>
        <script>
            function easeOutBounce (x) {
                var base = -Math.cos(x * (0.5 * Math.PI)) + 1;
                var rate = Math.pow(base,1.5);
                var rateR = Math.pow(1 - x, 2);
                var progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI) )) + 1;
                return (1- rateR) + (progress * rateR);
            }
            
            var timing,
                timingProps = {
                    type: 'delayed',
                    duration: 150,
                    start: 'autostart',
                    pathTimingFunction: Vivus.LINEAR,
                    animTimingFunction: Vivus.LINEAR
                };

            function timingTest (buttonEl, property, type) {
                var activeSibling = buttonEl.parentNode.querySelector('button.active');
                activeSibling.classList.remove('active');
                buttonEl.classList.add('active');

                timingProps.type = (property === 'type') ? type : timingProps.type;
                timingProps.pathTimingFunction = (property === 'path') ? Vivus[type] : timingProps.pathTimingFunction;
                timingProps.animTimingFunction = (property === 'anim') ? Vivus[type] : timingProps.animTimingFunction;

                timing && timing.stop().destroy();
                timing = new Vivus('timing-example', timingProps);
            }

            var hi = new Vivus('hi-there', {type: 'scenario-sync', duration: 20, start: 'autostart', dashGap: 20, forceRender: false},
                function () {
                    if (window.console) {
                        console.log('Animation finished. [log triggered from callback]');
                    }
                }),
                obt1 = new Vivus('obturateur1', {type: 'delayed', duration: 150}),
                obt2 = new Vivus('obturateur2', {type: 'async', duration: 150}),
                obt3 = new Vivus('obturateur3', {type: 'oneByOne', duration: 150}),
                pola = new Vivus('polaroid', {type: 'scenario-sync', duration: 20, forceRender: false});
        </script>
    </body>
</html>

```
