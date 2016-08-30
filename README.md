# JQuery UI
https://jqueryui.com/
http://learn.jquery.com/jquery-ui/getting-started/
http://jqueryui.com/themeroller/

jQuery UI представляет собой группу плагинов jQuery облегчающих создание интерфейса веб-приложений.

Подключение jQuery UI
================
Для того, чтобы воспользоваться возможностями плагинов jQuery UI их необходимо вначале подключить к странице, на которой они будут использоваться.

Существуют два варианта подключения jQuery UI:
-----------------------------------------------------------
- Локальное подключение. Данный способ требует скачивание специального файла с официального сайта;
- Удаленное подключение. Данный способ не требует скачивание файла, а вместо этого использует его удаленно (данная услуга предоставляется компанией Google).

Локальное подключение jQuery UI
======================
На официальном сайте Вы можете или скачать стандартную комплектацию jQuery UI или собрать свою собственную.

Стандартная комплектация jQuery UI включает в себя все существующие плагины и имеет стандартную тему оформления. Для того, чтобы скачать стандартную комплектацию просто перейдите на сайт jQuery UI и нажмите кнопку Download.

Если Вы хотите собрать собственную комплектацию jQuery UI Вам необходимо перейти на сайт jQuery UI и выполнить шаги перечисленные ниже (пропустите эти шаги если Вы скачали стандартную комплектацию):

## Шаг 1: Выбрать необходимые компоненты

По умолчанию в файл для скачивания включены все существующие плагины. Если какие-то из них не нужны Вы можете убрать галочку напротив их названия и сократить тем самым размер итогового файла (стандартная комплектация jQuery UI имеет размер ~1мб).

Обратите внимание: размер файла библиотеки влияет на скорость загрузки страницы, поэтому меньший размер всегда предпочтителен.

## Шаг 2: Выбрать оформление

Выберите одну из стандартных тем оформления плагинов jQuery UI в поле Theme или создайте свою тему с помощью themeroller'а.

## Шаг 3: Выбрать версию

Выберите версию jQuery UI в поле Version.

Обратите внимание: рекомендуем всегда выбирать последнюю доступную версию т.к. как более новые версии всегда содержат интересные нововведения.

## Шаг 4: Скачать jQuery UI

Нажмите кнопку Download и сохраните файл в удобное для Вас место на жестком диске.


Теперь (вне зависимости скачали ли Вы стандартную комплектацию или собрали свою собственную) необходимо подключить jQuery UI к скрипту. Для этого необходимо распаковать скаченный файл и указать пути к файлам jquery-ui-версия.custom.css и jquery-ui-версия.custom.min.js в секции head скрипта.

## Синтаксис:

        <!-- 1. Подключим библиотеку jQuery (без нее jQuery UI не будет работать) -->
        <script src="js/jquery.min.js"></script>
        <!-- 2. Подключим jQuery UI -->
        <link type="text/css" href="css/jquery-ui.min.css" rel="stylesheet" />
        <link type="text/css" href="css/theme.css" rel="stylesheet" />
        <script type="text/javascript" src="js/jquery-ui.min.js"></script>

Удаленное подключение jQuery UI
=======================
В этом варианте подключения Вы не можете настраивать комплектацию jQuery UI и можете использовать только ее стандартную версию.

Для того, чтобы подключить библиотеку удаленно необходимо добавить следующие строчки в секцию head Вашей страницы:

Code Integration
===========
https://code.jquery.com/ui/

        <link href="https://code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>

        <script  src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"
			  integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E="
			  crossorigin="anonymous"></script>

The integrity and crossorigin attributes are used for Subresource Integrity (SRI) checking. This allows browsers to ensure that resources hosted on third-party servers have not been tampered with. Use of SRI is recommended as a best-practice, whenever libraries are loaded from a third-party source. Read more at srihash.org

1.html
====

        <script>
        $( function() {
          $( "#accordion" ).accordion();
        } );
        </script>

        <div id="accordion">
        <h3>Section 1</h3>
        <div>
          <p>
          Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
          ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
          amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
          odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
          </p>
        </div>

 2.html
 =====

         <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css">
         <link rel="stylesheet" href="css/main.css">
         <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
         <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
         <script>
         $( function() {
           $( "#accordion" ).accordion({
             collapsible: true
           });
         } );
         </script>

main.css
======

        body {
        	font-family: Arial, Helvetica, sans-serif;
        }

        table {
        	font-size: 1em;
        }

        .ui-draggable, .ui-droppable {
        	background-position: top;
        }

Виджеты jQuery UI
============
jQuery UI предоставляет набор готовых виджетов предназначенных для создания пользовательского интерфейса веб-приложений.

Поведение виджетов может настраиваться с помощью передаваемых им опций.

Внешний вид виджетов может быть настроен:

- С помощью выбора одной из стандартных тем доступных при скачивании библиотеки;
- С помощью themeroller'a;
- Вручную путем редактирования файла jquery-ui-1.8.12.custom.css.

Виджет accordion
===========
Виджет accordion представляет собой группу объединенных выпадающих меню из которых только одно может быть отрыто одновременно.

Данный виджет используется для группировки информации на странице с целью экономии места.

Синтаксис:

1. Группируем элементы:
        <div id="accordion">

1.1. Определяем заголовок элемента
        <h2><a href="#head1">Заголовок 1</a></h2>

1.2. Определяем содержимое элемента (значение атрибута id содержимого должно
        совпадать со значением href заголовка)

        <div id="head1">Содержимое 1</div>
        </div>

2. Применяем метод к сгруппированным элементам:

        $("#accordion").accordion({опция1:значение1,опцияN:значениеN});

с помощью опций, передающихся методу, Вы можете настраивать дополнительные аспекты поведения виджетов. Виджетам может быть передано сразу несколько опций.

        Пример
        $(document).ready(function() {
           $("#accordion").accordion();
        });


Виджет autocomplete
==============
Виджет autocomplete позволяет ускорить ввод данных в поле, отображая по мере введения определенные предположения. Выбрав одно из предположений пользователь может автоматически завершить ввод.

Предположения выводится в случае, если данные введенные пользователем совпадают со значением одного из элементов из списка данных.

Вы можете подключать к виджету как локальные (т.е. определенные в скрипте на этой же странице) так и удаленные списки (т.е. находящиеся на удаленном сервере).

Локальные списки удобны для хранения небольших наборов данных (например список улиц города), а удаленные списки подходят для хранения больших наборов данных (например база данных всех городов мира).

Синтаксис:

1. Определяем элемент input, в который будет производиться ввод информации

        <input id='auto' />
2. Превращаем input в виджет autocomplete

        $('#auto').autocomplete({опция1:значение1,опцияN:значениеN})

Подключить к виджету список данных можно с помощью опции source.

С помощью опции minLength Вы можете указать минимальное количество символов, которое должно содержать поле ввода прежде, чем поиск совпадений начнет выполнятся.

Пример

        <script>
        $( function() {
         var availableTags = [
           "ActionScript",
           "AppleScript",
           "Asp",
           "BASIC",
           "C",
           "C++",
           "Clojure",
           "COBOL",
           "ColdFusion",
           "Erlang",
           "Fortran",
           "Groovy",
           "Haskell",
           "Java",
           "JavaScript",
           "Lisp",
           "Perl",
           "PHP",
           "Python",
           "Ruby",
           "Scala",
           "Scheme"
         ];
         $( "#tags" ).autocomplete({
           source: availableTags
         });
        } );
        </script>


        <div class="ui-widget">
        <label for="tags">Tags: </label>
        <input id="tags">
        </div>


Виджет datepicker
============
Виджет datepicker привязывает к текстовому полю интерактивный календарь, который отображается когда поле становится активным.

Если пользователь щелкнет на какую-либо дату в календаре она будет автоматически введена в текстовое поле как будто он ввел ее вручную.

Синтаксис:

1. Создадим текстовое поле
        <input type='text' id='datepicker' />

2. Привяжем к нему виджет datepicker
        $('#datepicker').datepicker({опция1:значение1, опцияN:значениеN});


Пример 4
======
        $(document).ready(function() {
           $("#datepicker").datepicker();
           $("#datepicker1").datepicker({
              monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
              dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
              firstDay:1,
              dateFormat:"dd.mm.yy"
           });
        });

Оформление кнопок
==============
С помощью метода button Вы можете стилизовать:

- обычные кнопки (определяемые тэгами button и input type='button')
- кнопки отправления форм
- радио кнопки
- флажки
- ссылки

Синтаксис:

Если Вы хотите оформить только один элемент, необходимо выбрать его с помощью  селектора и вызвать метод button:

        $("селектор").button({опция1:значение1, опцияN:значениеN});

Если Вы оформляете группу элементов, необходимо вначале сгруппировать элементы  следующим образом:

        <div id="groupradio">
        <input type="radio" name="radio" id="value1" />
        <label for="value1">Радио кнопка 1</label>
        <input type="radio" name="radio" id="value2" />
        <label for="value2">Радио кнопка 2</label>
        <input type="radio" name="radio" id="value3" />
        <label for="value3">Радио кнопка 3</label>
        </div>

И затем вызвать метод buttonset:

        $("#groupradio").buttonset({опция1:значение1, опцияN:значениеN});


Пример 5
======
        $(document).ready(function() {
           $("#but1,#but2,#but3,#but4").button();
           $("#group1,#group2").buttonset();
        });

Виджет tabs
========
        Виджет tabs как и виджет accordion используется для группировки информации на странице с целью экономии места.

Синтаксис:

1. Создаем шаблон:

     <div id="tabs">

1.1. Определяем заголовки вкладок

        <ul>
        <li><a href="#tabs-1">Вкладка 1</a></li>
        <li><a href="#tabs-2">Вкладка 2</a></li>
        <li><a href="#tabs-3">Вкладка 3</a></li>
        </ul>

1.2. Определяем содержимое вкладок (значение атрибута href заголовков        и значение атрибута id содержимого должно совпадать)

        <div id="tabs-1">
        <p>Содержимое вкладки 1</p>
        </div>
        <div id="tabs-2">
        <p>Содержимое вкладки 2.</p>
        </div>
        <div id="tabs-3">
        <p>Содержимое вкладки 3.</p>
        </div>
        </div>

2. Превращаем шаблон в группу вкладок:

        $("#tabs").tabs({опция1:значение1, опцияN:значениеN});


Пример 6
======
        <script>
        $( function() {
        $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
        $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
        } );
        </script>
        <style>
        .ui-tabs-vertical { width: 55em; }
        .ui-tabs-vertical .ui-tabs-nav { padding: .2em .1em .2em .2em; float: left; width: 12em; }
        .ui-tabs-vertical .ui-tabs-nav li { clear: left; width: 100%; border-bottom-width: 1px !important; border-right-width: 0 !important; margin: 0 -1px .2em 0; }
        .ui-tabs-vertical .ui-tabs-nav li a { display:block; }
        .ui-tabs-vertical .ui-tabs-nav li.ui-tabs-active { padding-bottom: 0; padding-right: .1em; border-right-width: 1px; }
        .ui-tabs-vertical .ui-tabs-panel { padding: 1em; float: right; width: 40em;}
        </style>

        <div id="tabs">
        <ul>
        <li><a href="#tabs-1">Nunc tincidunt</a></li>
        <li><a href="#tabs-2">Proin dolor</a></li>
        <li><a href="#tabs-3">Aenean lacinia</a></li>
        </ul>
        <div id="tabs-1">
        <h2>Content heading 1</h2>
        <p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>
        </div>

Диалоговые окна
===========
С помощью метода dialog Вы можете превратить выбранный элемент в диалоговое окно.

Диалоговое окно отображается поверх текста страницы и содержит заголовок и поле с содержимым.

Диалоговое окно можно перетаскивать, растягивать и закрывать с помощью иконки "х" в верхнем правом углу окна. Если содержимое превышает размеры диалогового окна, то полоса прокрутки будет автоматически отображена.

Синтаксис:

1. Сгруппируем элементы:

        <div id="dialog" title="Заголовок диалогового окна">
        <p>Содержимое окна.</p>
        </div>
2. Превратим сгруппированные элементы в диалоговое окно:

     $( "#dialog" ).dialog({опция1:значение1, опцияN:значениеN});

Пример 7
======
        $(document).ready(function() {
           $("#dialog1").dialog();
        });

С помощью опции width и height Вы можете устанавливать высоту и ширину диалоговых окон.

Пример
=====
        $(document).ready(function() {
           $("#dialog1").dialog({width:400,height:300});
        });

Опция modal позволяет сделать диалоговое окно модальным.

Модальные окна используются для привлечения дополнительного внимания со стороны пользователей. Пока открыто модальное окно пользователь не может взаимодействовать с другими элементами страницы.

Пример

        $(document).ready(function() {
           $("#dialog1").dialog({modal:true,height:200,width:330});
        });

Опция autoOpen устанавливает должно ли окно быть открыто автоматически после создания (значение true) или нет (значение false).

С помощью метода open Вы можете открыть, а с помощью метода close закрыть модальное диалоговое окно.

С помощью опции buttons Вы можете добавлять кнопки в диалоговые окна. Кнопки определяются в следующем формате: {Название_Кнопки : function(){Код который выполниться после нажатия на кнопку}}.

в одно диалоговое окно может быть добавлено несколько кнопок.

Пример
        $(document).ready(function() {
           $("#dialog1").dialog({autoOpen:false,buttons:{
              OK:function(){
                 $(this).dialog("close");
                 alert("Вы нажали ОК");}}
           });
           $("#dialog2").dialog({autoOpen:false,buttons:{
              OK:function(){
                 $(this).dialog("close");
                 alert("Вы нажали ОК");},
              Отмена:function(){
                 $(this).dialog("close");
                 alert("Вы нажали Отмена");}}
           });
           $("#but1").click(function(){
              $("#dialog1").dialog("open");
           });
           $("#but2").click(function(){
              $("#dialog2").dialog("open");
           });
        });


Виджет progressbar
=============
С помощью виджета progressbar Вы можете отобразить полосу загрузки, которая будет информировать пользователя о состоянии выполнения какого-либо процесса.

Синтаксис:

1. Создадим элемент:

        <div id="progressbar" ></div>
2. Превратим созданный элемент в полосу загрузки:
        $("#progressbar" ).progressbar();
С помощью опции value Вы можете установить процент заполнения виджета progressbar.

Пример
        $(document).ready(function() {
           $("#progressbar").progressbar({value:40});
        });

Виджет slider
=========
С помощью виджета slider Вы можете превратить выбранный элемент в ползунок.

Синтаксис:

1. Создадим элемент:
        <div id="slider" ></div>
2. Превратим созданный элемент в ползунок:
        $("#slider").slider();

Пример
        $(document).ready(function() {
           $("#slider").slider();
        });

Эффекты jQuery UI
=============

В анимации Вы можете использовать свойства изменения цвета фона, текста и границ элементов.

jQuery UI также расширяет базовую функциональность jQuery для манипулирования классами оформления.

Скрытие и отображение элементов с помощью эффектов jQuery UI

В jQuery UI можно использовать 15 различных эффектов для скрытия и отображения элементов на страницах.

Эффекты в jQuery UI могут использоваться со следующими методами:

        effect - позволяет применяет указанный эффект к элементу
        hide - позволяет скрыть элемент с указанным эффектом
        show - позволяет отобразить элемент с указанным эффектом
Синтаксис:

        effect(эффект,опции,скорость,функция)
        hide(эффект,опции,скорость,функция)
        show(эффект,опции,скорость,функция)

эффект указывает название эффекта, который будет применен. Некоторые эффекты (такие как scale, transfer и size) для своего вызова требуют задания дополнительных опций.

скорость указывает скорость применения эффекта в миллисекундах (1000 миллисекунд = 1 секунда).

функция задает функцию, код которой будет выполнен после завершения применения эффекта.

        Эффекты jQuery UI:

        Blind	Эффект "Ослепление".
        Bounce	Эффект "Отскок".
        Clip	Эффект "Отсекание".
        Drop	Эффект "Падение".
        Explode	Эффект "Взрыв".
        Fade	Эффект "Выцветание".
        Fold	Эффект "Складка".
        Highlight	Эффект "Освещение".
        Puff	Эффект "Рассеивание".
        Pulsate	Эффект "Пульсирование".
        Scale	Эффект "Масштабирование". С помощью опции percent:проценты Вы можете задать на сколько процентов от текущего размера необходимо уменьшить или увеличить элемент.
        Shake	Эффект "Тряска".
        Slide	Эффект "Скольжение".
        Size	Эффект "Калибровка". С помощью опции to: и включенных в нее опций width:ширина_в_пикселях и height:высота_в_пикселях Вы можете задать размеры, до которых необходимо "откалибровать" текущий элемент.
        Transfer	Эффект "Переход". С помощью опции to:id_или_class_элемента Вы можете указать элемент, в который перейдет текущий элемент. С помощью опции className:имя_класса Вы можете оформить эффект перехода с помощью CSS.


Пример
        $(document).ready(function() {
           $("#but1").click(function(){
              $("#testcontainer").hide($("#effect1").val(),{},1000 );
           });
           $("#but2").click(function(){
              $("#testcontainer").show($("#effect1").val(),{},1000 );
           });
        });

В следующем примере Вы можете увидеть использование эффектов требующих для вызова дополнительных опций.

Пример
        $(document).ready(function() {
           $("#effect1").change(function(){
              if ($("#effect1").val()==="scale"){
                 $("#scalecont").css("display","block");
                 $("#transfercont").css("display","none");
                 $("#sizecont").css("display","none");}
              else if ($("#effect1").val()==="transfer"){
                 $("#transfercont").css("display","block");
                 $("#scalecont").css("display","none");
                 $("#sizecont").css("display","none");}
              else if ($("#effect1").val()==="size"){
                 $("#sizecont").css("display","block");
                 $("#transfercont").css("display","none");
                 $("#scalecont").css("display","none");}
           });
           $("#but1").click(function(){
              var options={};
              if ($("#effect1").val()==="scale"){
                 var options={percent:50};
                 options.percent=$("#scalepercent").val();}        
              else if ($("#effect1").val()==="transfer"){
                 var options={to:"#but1", className:"transfer-effect"}
                 options.to=$("#trans1").val();
                 options.className=$("#trans2").val();}       
              else if ($("#effect1").val()==="size"){
                 var options={to:{width:200,height:200}};
                 options.to.width=$("#size1").val();
                 options.to.height=$("#size2").val();}
              $("#testcontainer").effect($("#effect1").val(), options ,1000);
           });
        });

jQuery UI анимация
=============
jQuery UI расширяет возможности jQuery анимации. Теперь Вы можете создавать анимацию, которая может манипулировать цветом.

В анимации теперь могут быть использованы следующие CSS свойств:

        backgroundColor
        borderColor
        borderBottomColor
        borderLeftColor
        borderRightColor
        borderTopColor
        color
        outlineColor

Пример 7
        $(document).ready(function() {
           $("#but1").click(function(){
              $("#testcontainer").animate({
                 borderColor:"#EA3B53",
                 borderWidth:3,
                 backgroundColor:"#97D400",
                 width:500,
                 height:160},1500);
           });
        });

Манипуляции с CSS оформлением
======================
Эффекты jQuery UI расширяют базовую функциональность jQuery для манипулирования с классами.

Теперь переключение между различными оформлениями элемента будет происходить анимировано.

Синтаксис:

Добавит новый класс элементу с анимированным переходом между        различными состояниями оформления

    addClass(имя_класса, продолжительность_перехода)

 Удалит указанный класс у элемента с анимированным переходом между        различными состояниями оформления

        removeClass(имя_класса, продолжительность_перехода)

Удалит указанный класс если он присутствует и добавит его если он         отсутствует с анимированным переходом между различными состояниями оформления

        toggleClass(имя_класса, продолжительсть_перехода)

Переключится с класса указанного в первом параметре на второй с        анимированным переходом между различными состояниями оформления

        switchClass(класс, новый_класс, продолжительность_перехода)

Пример
        $(document).ready(function(){
           $("#but1").click(function(){
              $(".el1").addClass("newclass",1000);
           });
           $("#but2").click(function(){
              $(".el1").removeClass("newclass",1000);
           });
           $("#but3").click(function(){
              $(".el1").toggleClass("newclass",1000);
           });
           $("#but4").click(function(){
              $(".el1").switchClass("el1","newclass");
           });
        });

jQuery UI классы оформления
====================
jQuery UI содержит набор предопределенных классов для создания оформления сайтов.

Используя готовые классы Вы можете сэкономить время при создании оформления веб-страниц. Использование готовых классов также поможет стандартизировать оформление Вашего сайта.

С помощью настройщика тем Вы можете настроить оформление предопределенных классов на Ваш вкус.

Виджет themeswitcher
==============
Виджет themeswitcher позволяет переключатся между различными темами оформления не покидая страницы.

Это бывает особенно полезно при подборе подходящего класса оформления.

Синтаксис:

Добавляем ссылку на плагин (данный код должен располагаться в секции body)

        <script type="text/javascript"
          src="http://jqueryui.com/themeroller/themeswitchertool/">
        </script>

Создаем элемент который будет превращен в виджет

        <div id="switcher"></div>

 В тэге script задаем код, который превратит элемент в виджет
           (данный код должен располагаться в head)

        $("#switcher").themeswitcher();

Пример
        $(document).ready(function(){
           $("#switcher").themeswitcher({
              initialText:"Выбрать тему",
              buttonPreText:"Тема: "
           });
        });

Оформление виджетов
===============
С помощью класса .ui-widget Вы можете оформить внешний вид виджетов. Данный класс устанавливает одинаковый шрифт всем вложенным элементам тем самым стандартизируя вид содержимого виджета.

С помощью класса .ui-widget-header Вы можете оформить заголовок, а с помощью .ui-widget-content содержимое виджетов.

Пример

        <div id="widget1" class="ui-widget">
        <h2 style="text-align:center" class="ui-widget-header">....
        <p style="text-align:center" class="ui-widget-content" >....
        </div>

Добавление сглаженных углов
====================
С помощью предопределенных классов jQuery UI Вы можете сделать углы элементов сглаженными.

        .ui-corner-all	Позволяет сделать все углы элемента сглаженными.
        .ui-corner-tr	Делает сглаженным верхний правый угол элемента.
        .ui-corner-tl	Делает сглаженным верхний левый угол элемента.
        .ui-corner-top	Делает сглаженными верхний левый и верхний правый углы элемента.
        .ui-corner-bl	Делает сглаженным нижний левый угол элемента.
        .ui-corner-br	Делает сглаженным нижний правый угол элемента.
        .ui-corner-bottom	Делает сглаженными нижний правый и нижний левый углы элемента.
        .ui-corner-left	Делает сглаженными верхний левый и нижний левый углы элемента.
        .ui-corner-right	Делает сглаженными верхний правый и нижний правый углы элемента.

Пример

        <div id="container" class="ui-widget ui-corner-all">....
        <div id="container" class="ui-widget ui-corner-top">....
        <div id="container" class="ui-widget ui-corner-tr">....

jQuery UI иконки
===========
Иконки помогают создать интуитивно понятный пользовательский интерфейс. К примеру Вы можете добавить иконку в форме знака вопроса на кнопку, которая вызывает окно со справочной информацией, или добавить иконку в форме конверта на кнопку отправляющую письмо по электронной почте.

jQuery UI предлагает для использования более 170 "встроенных" иконок.

Для того, чтобы вставить иконку необходимо:

Создать элемент, в котором будет отображена иконка;
Добавить этому элементу класс ui-icon;
Добавить элементу класс соответствующий желаемой иконке.
Названия классов иконок в jQuery UI имеют следующий стандартный вид: .ui-icon-[название]-[дополнительное описание]-[направление].

К примеру, иконка жирной стрелки направленной направо, имеет следующий класс: .ui-icon-arrowthick-1-e (arrowthick - "жирная стрелка", e = east - "восток").

Пример
        <span class="ui-icon ui-icon-carat-1-n"></span>
        <span class="ui-icon ui-icon-carat-1-ne"></span>
        <span class="ui-icon ui-icon-carat-1-e"></span>
        <span class="ui-icon ui-icon-carat-1-se"></span>
        <span class="ui-icon ui-icon-carat-1-s"></span>
        <span class="ui-icon ui-icon-grip-solid-horizontal"></span>
        <span class="ui-icon ui-icon-gripsmall-diagonal-se"></span>
        <span class="ui-icon ui-icon-grip-diagonal-se"></span>

Таблица предопределенных классов
========================
Таблица ниже содержит описание всех остальных существующих в jQuery UI предопределенных классов:

        .ui-helper-hidden	Применяет display:none к элементу.
        .ui-helper-reset	Сбрасывает значения таких свойства как margin, padding, text-decoration и list-style.
        .ui-state-default	Данный класс применяется к кнопкам, на которые не был наведен курсор мыши.
        .ui-state-hover	Данный класс применяется к кнопкам, на которые был наведен курсор мыши.
        .ui-state-active	Данный класс применяется к кнопкам во время щелчка мыши.
        .ui-state-highlight	Данный класс применяется к элементам, на которые необходимо обратить внимание.
        .ui-state-error	Данный класс применяется к элементам содержащим сообщения об ошибках.
        .ui-state-disabled	Данный класс применяется к недоступным для использования элементам.
        .ui-priority-primary	С помощью данного класса Вы можете выделить кнопку из группы кнопок как наиболее важную.
        .ui-priority-secondary	С помощью данного класса Вы можете выделить кнопку из группы кнопок как наименее важную.


Пример
        <ul class="ui-helper-reset">....
        <button id="but1" class="ui-state-default">....
        <p class="ui-state-highlight">....
        <p class="ui-state-error">....
        <button id="but2" class="ui-state-disabled">....
        <button class="ui-priority-secondary">....
        <button class="ui-priority-primary">....

Методы взаимодействия
================
С помощью методов взаимодействия Вы можете создавать элементы, которые можно перетаскивать мышкой, которые могут изменять размер, которые можно сортировать и которые можно выделять мышкой.

Перетаскиваемые элементы
===================
С помощью метода draggable Вы можете сделать выбранный элемент перетаскиваемым.

Синтаксис

        $("селектор").draggable({опция1:значение1, опцияN:значениеN})
С помощью опций, которые передаются методу draggable Вы можете настраивать дополнительные аспекты поведения перетаскиваемых элементов.

Всем перетаскиваемым элементам назначается класс ui-draggable и дополнительно класс ui-draggable-dragging во время перетаскивания.

Пример
        $(document).ready(function() {
           $("div").draggable();
        });

С помощью опции axis Вы можете определить направление оси, по которой можно перетаскивать элемент.

Пример
        $(document).ready(function() {
           $("#drag1").draggable({axis:"x"});
           $("#drag2").draggable({axis:"y"});
        });

С помощью опции cursor Вы можете задать вид, который будет принимать указатель мыши во время перетаскивания элемента.

Пример
        $(document).ready(function() {
           $("#drag1").draggable({cursor:"move"});
           $("#drag2").draggable({cursor:"help"});
        });

С помощью опции helper Вы можете определить вид элемента-помощника. Элемент-помощник отображается во время перетаскивания элемента. По умолчанию во время перетаскивания отображается сам перетаскиваемый элемент.

Пример
        $(document).ready(function() {
           $("#drag1").draggable({helper:"clone"});
           $("#drag2").draggable({helper:function(event){return $("<div>Я элемент
           помощник.</div>")}});
        });

Опция revert определяет будет ли элемент возвращаться на изначальную позицию после завершения перетаскивания.

Пример
        $(document).ready(function() {
           $("#drag1").draggable({revert:true});
        });


Области для перетаскиваемых элементов
===========================
С помощью метода droppable Вы можете определить область, в которую можно переместить перетаскиваемый элемент.

Синтаксис

        $("селектор").droppable({опция1:значение1, опцияN:значениеN})
С помощью опций, которые передаются методу droppable Вы можете настраивать дополнительные аспекты поведения области для перетаскиваемых элементов.

Код функции переданный, в опции drop выполнится, когда перетаскиваемый элемент будет перетащен в область и отпущен.

Код функции переданный, в опции over выполнится, когда перетаскиваемый элемент будет заведен в границы области.

Пример
        $(document).ready(function(){
           $("#drag1").draggable({stack:"#drop1"});
           $("#drop1").droppable({
              over:function(){
                 $("#drag1").css("background-color","#d7fa99");
                 $("#drop1").css("background-color","#d7fa99");
              },
              drop:function(){
                 $("#drag1").css("display","none");
                 $("#drop1").css("background-color","#c4f66f");
                 $("#drop1").html("Перемещение завершено успешно.");
                 alert("Вы перетащили элемент с id=drag1 в область с id=drop1.");
              }
           });
        });

С помощью опции accept Вы можете указать элементы, которые будут приниматься областью.

Пример
        $(document).ready(function(){
           $("#drag1").draggable({stack:"#drop1"});
           $("#drag2").draggable({stack:"#drop1",revert:true});
           $("#drop1").droppable({
              accept:"#drag1",
              over:function(){
                 $("#drag1").css("background-color","#d7fa99");
                 $("#drop1").css("background-color","#d7fa99");
              },
              drop:function(){
                 $("#drag1").css("display","none");
                 $("#drop1").css("background-color","#c4f66f");
                 $("#drop1").html("Перемещение завершено успешно.");
              }
           });
        });


Растягиваемые элементы
================
С помощью метода resizable Вы можете сделать элементы растягиваемыми.

Синтаксис

        $("селектор").resizable({опция1:значение1, опцияN:значениеN})
С помощью опций, которые передаются методу resizable Вы можете настраивать дополнительные аспекты поведения растягиваемых элементов.

Пример
        $(document).ready(function(){
           $("#resize1").resizable();
        });

Если опция animate имеет значение true размер элемента будет изменятся анимировано.

С помощью опции helper Вы можете задать вид помощника, с помощью которого пользователь будет узнавать о текущем размере окна во время растягивания.

Пример
        $(document).ready(function(){
           $("#resize1").resizable({animate:true,helper:"ui-state-highlight"});
        });

Выделяемые элементы
===============
С помощью метода selectable Вы можете превратить группу элементов в список выбора.

Синтаксис

        $("селектор").selectable({опция1:значение1, опцияN:значениеN})
С помощью опций, которые передаются методу selectable Вы можете настраивать дополнительные аспекты поведения выделяемых элементов.

С помощью классов .ui-selecting и .ui-selected Вы можете настроить оформление выбираемых и выбранных элементы.

Пример
        $(document).ready(function(){
           $("#select1").selectable();
        });
Сортируемые элементы
================
С помощью метода sortable Вы можете сделать элементы списка сортируемыми.

Синтаксис

        $("селектор").sortable({опция1:значение1, опцияN:значениеN})
С помощью опций, которые передаются методу sortable Вы можете настраивать дополнительные аспекты поведения сортируемых списков.

Пример
        $(document).ready(function(){
           $("#sort1").sortable();
        });
Вы можете связать два сортируемых списка. Элементы одного связанного списка можно перемещать в другой связанный список.

Для того, чтобы воспользоваться этой возможностью необходимо задать связываемым спискам одинаковый класс и указать его в опции connectWith.

Пример
        $(document).ready(function(){
           $("#sort1,#sort2").sortable({connectWith:".connect"});
        });
Обратите внимание: узнать больше о методах взаимодействия Вы можете в нашем jQuery UI справочнике.


8 The HTML for the products
==================

    <section id="product">
        <ul class="clear">
            <li data-id="1">
                <a href="#">
                    <img src="1.jpg" alt="">
                    <h3>Product name</h3>
                    <p>Product detail</p>
                </a>
            </li>
            <li data-id="2">...</li>
            <li data-id="3">...</li>
        </ul>
    </section>


        <aside id="sidebar">
            <div class="basket">
                <div class="basket_list">
                    <div class="head">
                        <span class="name">Product name</span>
                        <span class="count">Quantity</span>
                    </div>
                    <ul>
                    </ul>
                </div>
            </div>
        </aside>

Let’s start dragging
============
        $(function() {
            // jQuery UI Draggable
            $("#product li").draggable({

                // brings the item back to its place when dragging is over
                revert:true,

                // once the dragging starts, we decrease the opactiy of other items
                // Appending a class as we do that with CSS
                drag:function () {
                    $(this).addClass("active");
                    $(this).closest("#product").addClass("active");
                },

                // removing the CSS classes once dragging is over.
                stop:function () {
                    $(this).removeClass("active").closest("#product").removeClass("active");
                }
            });
        });

9 And, time for dropping
===============
        // jQuery Ui Droppable
        $(".basket").droppable({

            // The class that will be appended to the to-be-dropped-element (basket)
            activeClass:"active",

            // The class that will be appended once we are hovering the to-be-dropped-element (basket)
            hoverClass:"hover",

            // The acceptance of the item once it touches the to-be-dropped-element basket
            // For different values http://api.jqueryui.com/droppable/#option-tolerance
            tolerance:"touch",
            drop:function (event, ui) {

                var basket = $(this),
                        move = ui.draggable,
                        itemId = basket.find("ul li[data-id='" + move.attr("data-id") + "']");

                // To increase the value by +1 if the same item is already in the basket
                if (itemId.html() != null) {
                    itemId.find("input").val(parseInt(itemId.find("input").val()) + 1);
                }
                else {
                    // Add the dragged item to the basket
                    addBasket(basket, move);
                    // Updating the quantity by +1" rather than adding it to the basket
                    move.find("input").val(parseInt(move.find("input").val()) + 1);
                }
            }
        });

 10 Adding the dropped item to the basket
=========================
        // This function runs onc ean item is added to the basket
        function addBasket(basket, move) {
            basket.find("ul").append('<li data-id="' + move.attr("data-id") + '">'
                    + '<span class="name">' + move.find("h3").html() + '</span>'
                    + '<input class="count" value="1" type="text">'
                    + '<button class="delete">&#10005;</button>');

        }
11 Deleting an item for the basket
====================

        // jQuery Ui Droppable
        $(".basket").droppable({

            // The class that will be appended to the to-be-dropped-element (basket)
            activeClass:"active",

            // The class that will be appended once we are hovering the to-be-dropped-element (basket)
            hoverClass:"hover",

            // The acceptance of the item once it touches the to-be-dropped-element basket
            // For different values http://api.jqueryui.com/droppable/#option-tolerance
            tolerance:"touch",
            drop:function (event, ui) {

                var basket = $(this),
                        move = ui.draggable,
                        itemId = basket.find("ul li[data-id='" + move.attr("data-id") + "']");

                // To increase the value by +1 if the same item is already in the basket
                if (itemId.html() != null) {
                    itemId.find("input").val(parseInt(itemId.find("input").val()) + 1);
                }
                else {
                    // Add the dragged item to the basket
                    addBasket(basket, move);


                    // Deleting an item for the basket

                    $(".basket ul li").on("click",'button.delete', function (event) {
                        event.preventDefault();
                        $(this).closest('li').remove();
                    });

                    // Updating the quantity by +1" rather than adding it to the basket
                    move.find("input").val(parseInt(move.find("input").val()) + 1);
                }
            }
        });

cart.html
======

        <!doctype html>
        <html lang="en">
        <head>
        <meta charset="utf-8"/>
        <title>Drag and drop shopping cart with jQuery UI</title>
        <script src="js/jquery.min.js"></script>
        <!-- 2. Подключим jQuery UI -->
        <link type="text/css" href="css/jquery-ui.min.css" rel="stylesheet" />
        <link type="text/css" href="css/theme.css" rel="stylesheet" />
        <script type="text/javascript" src="js/jquery-ui.min.js"></script>
        <link rel="stylesheet" href="css/cart.css">
        </head>

        <body>
        <div class="container">
        <section id="header" style="margin-bottom: 50px;">
            <h3>Drag ‘n’ Drop Shopping Cart With jQuery UI<h3></section>

        <section id="product">
        <ul class="clear">
            <li data-id="1">
            <a href="#">
            <img src="images/1.jpg" alt="">
            <h3>iPad 32gb retina screen</h3>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
            </a>
            </li>
            <li data-id="2">
            <a href="#">
            <img src="images/2.jpg" alt="">
            <h3>Turntable mixer</h3>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
            </a>
            </li>
            <li data-id="3">
            <a href="#">
            <img src="images/3.jpg" alt="">
            <h3>IBM 15" super-fast computer</h3>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
            </a>
            </li>
            <li data-id="4">
            <a href="#">
            <img src="images/4.jpg" alt="">
            <h3>Some crazy circuit</h3>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
            </a>
            </li>
            <li data-id="5">
            <a href="#">
            <img src="images/1.jpg" alt="">
            <h3>White earpieces</h3>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
            </a>
            </li>
            <li data-id="6">
            <a href="#">
            <img src="images/2.jpg" alt="">
            <h3>Headphones with free keyboard</h3>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
            </a>
            </li>
            <li data-id="7">
            <a href="#">
            <img src="images/3.jpg" alt="">
            <h3>iPhone 4S</h3>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
            </a>
            </li>
            <li data-id="8">
            <a href="#">
            <img src="images/4.jpg" alt="">
            <h3>Another crazy circuit or..</h3>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
            </a>
            </li>
        </ul>
        </section>

        <aside id="sidebar">
        <div class="basket">
        <div class="basket_list">
        <div class="head">
        <span class="name">Product name</span>
        <span class="count">Quantity</span>
        </div>
        <ul>

        </ul>
        </div>
        </div>
        </aside>
        </div>
        <script>
            $(function() {
        		// jQuery UI Draggable
        		$("#product li").draggable({

        			// brings the item back to its place when dragging is over
        			revert:true,

        			// once the dragging starts, we decrease the opactiy of other items
        			// Appending a class as we do that with CSS
        			drag:function () {
        				$(this).addClass("active");
        				$(this).closest("#product").addClass("active");
        			},

        			// removing the CSS classes once dragging is over.
        			stop:function () {
        				$(this).removeClass("active").closest("#product").removeClass("active");
        			}
        		});

                // jQuery Ui Droppable
        		$(".basket").droppable({

        			// The class that will be appended to the to-be-dropped-element (basket)
        			activeClass:"active",

        			// The class that will be appended once we are hovering the to-be-dropped-element (basket)
        			hoverClass:"hover",

        			// The acceptance of the item once it touches the to-be-dropped-element basket
        			// For different values http://api.jqueryui.com/droppable/#option-tolerance
        			tolerance:"touch",
        			drop:function (event, ui) {

        				var basket = $(this),
        						move = ui.draggable,
        						itemId = basket.find("ul li[data-id='" + move.attr("data-id") + "']");

        				// To increase the value by +1 if the same item is already in the basket
        				if (itemId.html() != null) {
        					itemId.find("input").val(parseInt(itemId.find("input").val()) + 1);
        				}
        				else {
        					// Add the dragged item to the basket
        					addBasket(basket, move);

                            $(".basket ul li").on("click",'button.delete', function (event) {
                                event.preventDefault();
                                $(this).closest('li').remove();
                    		});

        					// Updating the quantity by +1" rather than adding it to the basket
        					move.find("input").val(parseInt(move.find("input").val()) + 1);
        				}
        			}
        		});

                // This function runs onc ean item is added to the basket
                function addBasket(basket, move) {
        			basket.find("ul").append('<li data-id="' + move.attr("data-id") + '">'
        					+ '<span class="name">' + move.find("h3").html() + '</span>'
        					+ '<input class="count" value="1" type="text">'
        					+ '<button class="delete">&#10005;</button>');

        		}

            });
        </script>
        </body>
        </html>


cart.css
=====

            * {
                margin: 0;
                padding: 0;
            }
            .clear:before, .clear:after {
                content: " ";
                display: table;
            }
            .clear:after {
                clear: both;
            }
            .clear {
                * zoom: 1;
            }
            body {
                font: normal 12px/1.3 arial, sans - serif;
                background-color: #eee;
            }
            li {
                list-style: none;
            }
            a {
                text-decoration: none;
            }
            .container {
                position: relative;
                width: 920px;
                margin: 30px auto;
            }
            .container #product {
                position: relative;
                z-index: 2;
                float: left;
                width: 670px;
            }
            .container #sidebar {
                position: relative;
                z-index: 1;
                float: right;
                width: 224px;
            }
            #product ul {
                width: 680px;
                margin-left: -10px;
            }
            #product ul li {
                position: relative;
                float: left;
                width: 150px;
                margin: 0 0 10px 10px;
                padding: 5px;
                background-color: #fff;
                border-radius: 4px;
                -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
                box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
                -webkit-transition: -webkit-transform .1s ease;
                -moz-transition: -webkit-transform .1s ease;
                -o-transition: -webkit-transform .1s ease;
                -ms-transition: -webkit-transform .1s ease;
                transition: transform .1s ease;
            }
            #product ul li:hover {
                background-color: #fff8c1;
            }
            #product.active ul li {
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
                filter: alpha(opacity = 40);
                opacity: .4;
            }
            #product.active ul li.active {
                z-index: 2;
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                filter: alpha(opacity = 100);
                opacity: 1; - webkit-transform-origin: 50% 50% ;
                -moz-transform-origin: 50% 50% ;
                -o-transform-origin: 50% 50%;
                -ms-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
                -webkit-transform: scale(.6);
                -moz-transform: scale(.6);
                -o-transform: scale(.6);
                -ms-transform: scale(.6);
                transform: scale(.6);
            }
            #product ul li a {
                display: block;
                color: #000}
            #product ul li a h3 {
                    margin - top: 5 px;
                }
            #product ul li a h3,
                #product ul li a p {
                    white - space: nowrap;
                    overflow: hidden;
                    -o-text-overflow: ellipsis;
                    -ms-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                }
            #product ul li a img {
                    display: block
                }
            .basket {
                    position: relative;
                }
            .basket.basket_list {
                    width: 220px;
                    background-color: #fff;
                    border: 2px dashed transparent;
                    border-radius: 4px;
                    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
                    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
                }
            .basket.active.basket_list,
                .basket.hover.basket_list {
                    border-color: #ffa0a3;
                }
            .basket.active.basket_list {
                    background-color: #fff8c1;
                }
            .basket.hover.basket_list {
                    background-color: #ffa0a3;
                }
            .basket.head {
                    overflow: hidden;
                    margin: 0 10px;
                    height: 26px;
                    line-height: 26px;
                    color: #666;
                    border-bottom:1px solid #ddd;
                }
            .basket.head.name {
                    float: left;
                }
            .basket.head.count {
                    float: right;
                }
            .basket ul {
                    padding-bottom: 10px;
                }
            .basket ul li {
                    position: relative;
                    clear: both;
                    overflow: hidden;
                    margin: 0 10px;
                    height: 26px;
                    line-height: 32px;
                    border-bottom: 1px dashed #eee;
                }
            .basket ul li:hover {
                    border-bottom-color: #ccc
                }
            .basket ul li span.name {
                    display: block;
                    float: left;
                    width: 165px;
                    font-weight: bold;
                    white-space: nowrap;
                    overflow: hidden;
                    -o-text-overflow: ellipsis;
                    -ms-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                    -webkit-transition: width .2s ease;
                    -moz-transition: width .2s ease;
                    -o-transition: width .2s ease;
                    -ms-transition: width .2s ease;
                    transition: width .2s ease;
                }
            .basket ul li:hover span.name {
                    width: 146px;
                }
            .basket ul li input.count {
                    float: right;
                    margin: 3px 2px 0 0;
                    width: 25px;
                    line-height: 20px;
                    text-align: center;
                    border: 0;
                    border-radius: 3px;
                    background-color: #ddd;
                }
            .basket ul li button.delete {
                    position: absolute;
                    right: 30px;
                    top: 3px;
                    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
                    filter: alpha(opacity = 0);
                    opacity: 0;
                    width: 20px;
                    line-height: 20px;
                    height: 20px;
                    text-align: center;
                    font-size: 11px;
                    border: 0;
                    color: #EE5757;
                    background-color: #eee;
                    border-radius: 3px;
                    cursor: pointer;
                    -webkit-transition: opacity .2s ease;
                    -moz-transition: opacity .2s ease;
                    -o-transition: opacity .2s ease;
                    -ms-transition: opacity .2s ease;
                    transition: opacity .2s ease;
                }
            .basket ul li:hover button.delete {
                    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                    filter: alpha(opacity = 100);
                    opacity: 1;
                }
            .basket ul li button.delete:hover {
                    color: #fff;
                    background-color: #ffa0a3;
                }
            .basket ul li button.delete:active {
                    color: #fff;
                    background-color: #EE5757;
                }
