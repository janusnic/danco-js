# danco-js

jQuery UI - это библиотека на основе jQuery, реализующая более 20 плагинов, среди которых плагины организующие различное поведение, восемь видов виджетов и анимационные эффекты. Кроме этого, UI обладает несколькими темами оформления, с помощью которых оформляются виджеты и которые содержат набор полезных иконок. Любая из тем оформления может быть подкорректирована прямо на сайте jQuery UI, непосредственно перед загрузкой.
<br>
Выбор компонентов и загрузка
Зайдите на страницу загрузки jQuery UI и вы увидите, что перед скачиванием можно выбрать необходимые компоненты, тему оформления и версию библиотеки
Выбрать оформление
Выберите одну из стандартных тем оформления плагинов jQuery UI в поле Theme или создайте свою тему с помощью themeroller'а.<br>
Если вы хотите использовать тему оформления, которую вы настроите самостоятельно, то в начале сделайте все необходимые настройки темы на этой странице, затем нажмите кнопку "Download theme" и вы окажетесь на странице загрузки библиотеки, где в поле Theme будет указана отредактированная вами тема.&<br>
css — содержит файлы оформления (CSS-файл и изображения).
Js — содержит файлы с jQuery и jQuery UI.
Development-bundle — Здесь много различных файлов с демонстрацией работы плагина и другими вспомогательными файлами.
Кроме этих трех папок, в корне архива лежит файл index.html, с демонстрацией скачанных плагинов.
Подключение UI к вашему сайту
<br>
<pre>
&lt;link type="text/css" href="css/themename/jquery-ui-1.8.12.custom.css" rel="Stylesheet" /&gt;
&lt;script type="text/javascript" src="js/jquery-1.4.4.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="js/jquery-ui-1.8.12.custom.min.js"&gt;&lt;/script&gt;
<pre>
<br>
Все плагины поведения и виджетов обладают схожим принципом работы. Каждый плагин jQuery UI представлен одним основным методом, который вызывается на выбранных элементах. Его имя всегда совпадает с именем плагина. С помощью этого метода можно инстанцировать (устанавливать) плагин на элементы, узнавать и изменять свойства плагина, устанавливать обработчики событий, а так же, запускать функции плагина, которые называют методами.<br>
Инстанцирование<br>
Для установки любого плагина на элементы страницы, достаточно выбрать нужные элементы средствами jQuery и затем вызвать на них метод работы с плагином (имя которого всегда совпадает с названием плагина):
$("#someId").dialog()
применит плагин Dialog к элементу с идентификатором someId, превратив его в диалоговое окно.
$("div:lt(3)").draggable()
применит плагин Draggable к первым трем div'ам на странице, сделав их перетаскиваемыми.<br>
Методы<br>
Обычно, под методом какого-то объекта в javascript, подразумевается функция, вызываемая на этом объекте следующим образом:
<pre>
obj.A(); // вызов метода A на объекте obj
obj.B(); // вызов метода B на объекте obj
</pre>
Однако в пределах работы с конкретными плагинами jQuery UI, методами называют такую форму записи:
<pre>
$("#someId").plaginName("имя метода", параметры метода);

$("#someId").dialog("close")
Метод close закроет диалоговое окно, установленное на элемент с id = someId
$("div").draggable("destroy")
Destroy удалит функциональность draggable со всех div-элементов на странице
</pre>
Свойства<br>
Каждое свойство можно задать в момент инстанцирования плагина. Для этого, при установке плагина на элемент нужно передать объект со свойствами в формате {имя_свойства_1:значение_1, имя_свойства_2:значение_2, ...}:
<pre>
// сделаем из элемента с id=someId диалоговое окно с помощью
// плагина dialog и укажем при этом заголовок для окна
$("#someId").dialog({title:"Сообщение"});

// сделаем из первого div'а на странице календарь с помощью
// плагина datepicker, и укажем минимальную и максимальную дату
$("div:first").datepicker({
  minDate:new Date(2007, 1 - 1, 1),
  maxDate:new Date(2013, 1 - 1, 1)
});</pre>
Кроме того, значение любого свойства можно узнать или изменить уже после инстанцирования плагина. Для этого необходимо использовать метод "option":
<pre>
// узнаем заголовок у диалогового окна
var dialogTitle = $("#someId").dialog("option", "title");

// изменим заголовок, добавив к нему префикс "#1 "
$("#someId").dialog("option", "title", "#1 " + dialogTitle)

// изменим минимальную дату в календаре,
// который установлен на первый div на странице
$("div:first").datepicker("option", "minDate", new Date(2008, 1 - 1, 1));
События
Обработчики событий можно устанавливать средствами основного метода плагина:
// обработка события close диалогового окна
$("selector").dialog({
   close: function(event, ui) { ... }
});
или с помощью bind стандартного метода библиотеки jQuery:
// обработка события close диалогового окна
$("selector").bind( "dialogclose", function(event, ui){ ... });
</pre>
Оформление<br>
Все плагины jQuery UI обладают общей системой оформления. Ее можно настраивать с помощью визуального редактора ThemeRoller, а так же манипулируя css напрямую.
<br>
Плагин Tabs <br>
Tabs1.html<br>
<pre>
 &lt;link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.9.custom.css"&gt;
Для того, чтобы сделать из элемента систему вкладок, нужно, чтобы он имел подобную структуру:
		&lt;div id="myTabs"&gt;
			&lt;ul&gt;
				&lt;li&gt;&lt;a href="#a"&gt;Tab 1&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#b"&gt;Tab 2&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;
&lt;div id="a"&gt;This is the content panel linked to the first tab, it is shown by default.&lt;/div&gt;
&lt;div id="b"&gt;This content is linked to the second tab and will be shown when its tab is clicked.&lt;/div&gt;
&lt;/div&gt;
        &lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
        &lt;script src="development-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
        &lt;script src="development-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
        &lt;script src="development-bundle/ui/jquery.ui.tabs.js"&gt;&lt;/script&gt;
        &lt;script&gt;
			(function($){
				$("#myTabs").tabs();
			})(jQuery);
		&lt;/script&gt;
В одном блоке, часть вкладок может быть готовой, а часть подгружаемой:
  &lt;div id="tabs"&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#tabs-1"&gt;Готовая вкладка&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="/ui/ex1.html"&gt;Подгружаемая вкладка 1&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="/ui/ex3.php"&gt;Подгружаемая вкладка 2&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;div id="tabs-1"&gt;
      &lt;p&gt;Содержимое вкладки 1&lt;/p&gt;
    &lt;/div&gt;
</pre>
Плагин Tabs использует стандартные стили jQueryUI-css для оформления вкладок. Для редактирования оформления рекомендуется использовать специальную ручную настройку на сайте jQuery UI. <br>
tabs2.html<br>
<pre>
&lt;link rel="stylesheet" href="css/tabsTheme.css"&gt;
#myTabs { width:400px; padding:5px; border:1px solid #636363; background:#c2c2c2 none; }
.ui-widget-header { border:0; background:#c2c2c2 none; font-family:Georgia; }
#myTabs .ui-widget-content { border:1px solid #aaa; background:#fff none; font-size:80%; }
.ui-state-default, .ui-widget-content .ui-state-default { border:1px solid #636363; background:#a2a2a2 none; }
.ui-state-active, .ui-widget-content .ui-state-active { border:1px solid #aaa; background:#fff none; }
</pre>
Свойства<br>
selected<br>
Определяет номер открытой вкладки (нумерация начиная с 0). Чтобы все вкладки оказались закрыты, необходимо указать значение -1.
<pre>
// ------- Работа со свойством selected ---------
// в момент установки tabs на элемент
(function($){ var tabOpts = { selected: 1}
		$("#myTabs").tabs(tabOpts);
	})(jQuery);

//получение значения selected
var selected = $("selector").tabs( "option", "selected" );
//изменение значения selected
$("selector").tabs( "option", "selected", 3 );
Disabling
В этом свойстве можно задавать массив с номерами вкладок, которые должны оказаться недоступны для выбора.
// ------- Работа со свойством disabled ---------
// в момент установки tabs на элемент
$("selector").tabs({ disabled: [1,2] });

//получение значения disabled
var disabled = $("selector").tabs( "option", "disabled" );
//изменение значения disabled
$("selector").tabs( "option", "disabled", [1,2] );

	(function($){ var tabOpts = { disabled: [1] }
		$("#myTabs").tabs(tabOpts);
	})(jQuery);
</pre>
Transition effects<br>
Это свойство определяет тип анимации, используемой при скрытии и появлении вкладок, а так же продолжительность этой анимации. В поле duration можно задать продолжительность анимации (строковым значением "slow", "normal" или "fast" или целым числом — количеством миллисекунд). По умолчанию, duration равен "normal". Тип анимации задается указанием изменяемого css-свойства и режимом его изменения (насколько я понимаю, подходит только значение toggle):
<pre>
// ------- Работа со свойством fx ---------
// в момент установки tabs на элемент
$("selector").tabs({ fx: {opacity:'toggle', duration:'fast' } });

//получение значения fx
var fx = $("selector").tabs( "option", "fx" );
//изменение значения fx
$("selector").tabs( "option", "fx", {opacity:'toggle', duration:'fast' } );

	(function($){ var tabOpts = {
					fx: {
						opacity: "toggle",
						duration: "slow" 	}
				}
				$("#myTabs").tabs(tabOpts);
			})(jQuery);
</pre>
Collapsible tabs<br>
Если установить это свойство в true, то появится возможность сворачивать все вкладки. Для этого достаточно нажать на заголовок открытой в данный момент вкладки (см. пример "закрыть все вкладки" выше).
<pre>
// ------- Работа со свойством collapsible ---------
// в момент установки tabs на элемент
$("selector").tabs({ collapsible: false });

//получение значения closeOnEscape
var collapsible = $("selector").tabs( "option", "collapsible" );
//изменение значения collapsible
$("selector").tabs( "option", "collapsible", false );

	(function($){
			var tabOpts = {
				collapsible: true
			}
				$("#myTabs").tabs(tabOpts);
			})(jQuery);
</pre>
spinner<br>
В этом свойстве можно задать текст HTML, который будет использован в качестве заголовка вкладки, пока загружается ее содержимое. Если задать в этом свойстве пустую строку, то на время загрузки содержимого, заголовок вкладки меняться не будет.
<pre>
// ------- Работа со свойством spinner ---------
// в момент установки tabs на элемент
$("selector").tabs({ spinner: 'Загрузка...' });
 
//получение значения spinner
var spinner = $("selector").tabs( "option", "spinner" );
//изменение значения spinner
$("selector").tabs( "option", "spinner", 'Загрузка...' );

Tab events
В event можно указать, событие какого типа должно произойти на элементе заголовка вкладки, чтобы она открылась.
// ------- Работа со свойством event ---------
// в момент установкиtabs на элемент
$("selector").tabs({ event: 'mouseover' });
//получение значения event
var event = $("selector").tabs( "option", "event" );
//изменение значения event
$("selector").tabs( "option", "event", 'mouseover' );

(function($){
	var handleSelect = function(e, tab) {
	   $("&lt;p&gt;&lt;/p&gt;", {
		text: "Tab at index " + tab.index + " selected",
		"class": "status-message ui-corner-all"
	}).appendTo(".ui-tabs-nav", "#myTabs").fadeOut(5000, function() {
		$(this).remove();
		});
		},
		tabOpts = {
		 	select: handleSelect
			}

		$("#myTabs").tabs(tabOpts);
			})(jQuery);

</pre>
Tabs9.html<br>
 Это событие происходит, когда вкладка становится видимой.
 <pre>
// обработка события show
$("selector").tabs({
   show: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "tabsshow", function(event, ui){ ... });

(function($){

	$("#myTabs").tabs();
  		$("#myTabs").bind("tabsselect", function(e, tab) {
   		alert("The tab at index " + tab.index + " was selected");
	});
	})(jQuery);


</pre>
create<br>
Событие create происходит в момент инициализации tabs на элементе.
<pre>
// обработка события create
$("selector").tabs({
   create: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "tabscreate", function(event, ui){ ... });

add
Это событие происходит при добавлении новой вкладки.
// обработка события add
$("selector").tabs({
   add: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "tabsadd", function(event, ui){ ... });

</pre>
destroy 		Completely remove the tabs widget.
<br>
disable<br>
Это событие происходит, когда одна из вкладок становиться активной (доступной для выбора).
<pre>
// обработка события disable
$("selector").tabs({
   tabsdisable: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "disable", function(event, ui){ ... });

</pre>
enable<br>

Это событие происходит, когда одна из вкладок становиться неактивной (недоступной для выбора).
<pre>
// обработка события enable
$("selector").tabs({
   enable: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "tabsenable", function(event, ui){ ... });
</pre>
<br>

length 		Return the number of tabs in the widget.<br>

load<br>

Это событие происходит в момент окончания ajax-загрузки удаленной вкладки.
<pre>
// обработка события load
$("selector").tabs({
   load: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "tabsload", function(event, ui){ ... });
</pre>
remove
<br>
Это событие происходит при удалении вкладки.
<pre>
// обработка события remove
$("selector").tabs({
   remove: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "tabsremove", function(event, ui){ ... });
</pre>
rotate 		Automatically changes the active tab after a specified number of milliseconds have passed, either once or repeatedly.<br>

select<br>

Это событие происходит, при клике по заголовку вкладки. Если обработчик этого события вернет значение false, то переключения между вкладками не произойдет.
<pre>
// обработка события select
$("selector").tabs({
   select: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "tabsselect", function(event, ui){ ... });

</pre>
url 			Change the URL of content given to an AJAX tab. The method expects the index number of the tab and the new URL. See also load (earlier in this table).
widget 		Return the element that the tabs() widget method is called on.
Enabling and disabling tabs<br>
Tabs10.html<br>
<pre>
		&lt;div id="myTabs"&gt;
			&lt;ul&gt;
				&lt;li&gt;&lt;a href="#a"&gt;Tab 1&lt;/a&gt;&lt;/li&gt;
				&lt;li&gt;&lt;a href="#b"&gt;Tab 2&lt;/a&gt;&lt;/li&gt;
			&lt;/ul&gt;
        &lt;button type="button" id="enable"&gt;Enable&lt;/button&gt;
	&lt;button type="button" id="disable"&gt;Disable&lt;/button&gt;
        &lt;script&gt;
			(function($){

				$("#myTabs").tabs({
					disabled: [1]
				});

				$("#enable").click(function() {
					$("#myTabs").tabs("enable", 1);
				});

				$("#disable").click(function() {
					$("#myTabs").tabs("disable", 1);
				});
			})(jQuery);
</pre>
Adding and removing tabs tabs11.html
<pre>
&lt;label for="indexNum"&gt;Enter a tab to remove:&lt;/label&gt;
        &lt;input id="indexNum"&gt;&lt;button type="button" id="remove"&gt;Remove!&lt;/button&gt;&lt;br&gt;
	&lt;button type="button" id="add"&gt;Add a new tab!&lt;/button&gt;
&lt;script&gt;
(function($){
	$("#myTabs").tabs();
	$("#remove").click(function() {
	$("#myTabs").tabs("remove", parseInt($("#indexNum").val(), 10));
	});

$("#add").click(function() {
	$("#myTabs").tabs("add", "remoteTab.txt", "A New Tab!");
	});
})(jQuery);
&lt;/script&gt;
</pre>
Simulating clicks tabs12.html
<pre>
&lt;script&gt;
			(function($){
				$("#myTabs").tabs();
				$("#remove").click(function() {
					$("#myTabs").tabs("remove", parseInt($("#indexNum").val(), 10));
				});

				$("#add").click(function() {
					$("#myTabs").tabs("add", "remoteTab.txt", "A New Tab!").tabs("select", $("#myTabs").tabs("length") - 1);
				});
			})(jQuery);
		&lt;/script&gt;
		</pre>
Now when the new tab is added, it is automatically selected. The select() method requires just one additional argument, which is the index number of the tab to select.
<br>
Creating a tab carousel yabs13.html
<pre>
&lt;script&gt;
	(function($){
		$("#myTabs").tabs().tabs("rotate", 1000, true);
	})(jQuery);
&lt;/script&gt;

tabs14.html
        &lt;script&gt;
			(function($){

				$("#myTabs").tabs();

				$("#destroy").click(function() {
					$("#myTabs").tabs("destroy");
				});
			})(jQuery);
		&lt;/script&gt;
		</pre>
Getting and setting options tabs15<br>
<pre>
&lt;button type="button" id="show"&gt;Show Selected&lt;/button&gt;
&lt;script&gt;
(function($){

	$("#myTabs").tabs();
	$("#show").click(function() {
	$("&lt;p&gt;&lt;/p&gt;", {
	text: "Tab at index " + $("#myTabs").tabs("option", "selected") + " is active"
	}).appendTo(".ui-tabs-nav").fadeOut(5000);

	});
	})(jQuery);
</pre>
tabs16.html
<pre>
&lt;label for="newIndex"&gt;Enter a tab index to select&lt;/label&gt;
        &lt;input id="newIndex" type="text"&gt;
        &lt;button type="button" id="set"&gt;Change Selected&lt;/button&gt;
&lt;script&gt;
(function($){
	$("#myTabs").tabs();
       	$("#set").click(function() {
	$("#myTabs").tabs("option", "selected", parseInt($("#newIndex").val()));
	});
	})(jQuery);
&lt;/script&gt;
</pre>
AJAX tabs tabs17
<pre>
&lt;div id="myTabs"&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;a href="#a"&gt;Tab 1&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href="#b"&gt;Tab 2&lt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a href="remoteTab.txt"&gt;AJAX Tab&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;

&lt;script&gt;
			(function($){
				$("#myTabs").tabs();
			})(jQuery);
		&lt;/script&gt;
</pre>
Changing the URL of a remote tab's content tabs18
<pre>
&lt;div id="myTabs"&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;a href="#a"&gt;Tab 1&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href="#b"&gt;Tab 2&lt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a href="remoteTab.txt"&gt;AJAX Tab&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
&lt;select id="fileChooser"&gt;
		&lt;option value="remoteTab1"&gt;remoteTab.txt&lt;/option&gt;
		&lt;option value="remoteTab2"&gt;remoteTab2.txt&lt;/option&gt;
&lt;/select&gt;
&lt;script&gt;
	(function($){
		$("#myTabs").tabs();

		$("#fileChooser").change(function() {
		$("#myTabs").tabs("url", 2, $(this).val());
		});
	})(jQuery);
&lt;/script&gt;

Reloading a remote tab tabs19
&lt;script&gt;
	(function($){
		$("#myTabs").tabs();

		$("#fileChooser").change(function() {

		$("#myTabs").tabs("url", 2, $(this).val()).tabs("load", 2);
		});
	})(jQuery);
&lt;/script&gt;

</pre>
Displaying data obtained via JSONP 20
<pre>
&lt;div id="myTabs"&gt;
&lt;ul&gt;
	&lt;li&gt;&lt;a href="#a"&gt;&lt;span&gt;Nebula Information&lt;/span&gt;&lt;/a&gt;
	&lt;/li&gt;
	&lt;li&gt;&lt;a href="#flickr"&gt;&lt;span&gt;Images&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
	&lt;div id="flickr"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
(function($){
	var img = $("&lt;img/&gt;", {
		height: 100,
		width: 100
		}),
	tabOpts = {
		select: function(event, ui) {
		if (ui.tab.toString().indexOf("flickr") != -1 ) {

		$("#flickr").empty();

$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=nebula&format=json&jsoncallback=?", function(data) {
            $.each(data.items, function(i,item){
			img.clone().attr("src", item.media.m).appendTo("#flickr");

			if (i == 5) {
				return false;
					}
					});
				});
			}
		}
	};

$("#myTabs").tabs(tabOpts);
})(jQuery);
&lt;/script&gt;
</pre>
Как узнать номер открытой вкладки?<br>
<pre>
// Если вкладки установлены на элемент с id = example:
var $tabs = $('#example').tabs();
// то получить номер открытой вкладки можно так:
var selected = $tabs.tabs('option', 'selected');
</pre>
Как открыть ссылку прямо во вкладке, не покидая страницу?
Если необходимо, чтобы при нажатии по ссылке, которая находится внутри вкладки, содержимое страницы по ссылке загрузилось в эту вкладку, вместо того, чтобы пользователь перешел на эту страницу
<pre>
// "перехватим" нажатие по ссылке и загрузим средствами jQuery
// содержимое находящееся по ссылке прямо во вкладку:
$('#example').tabs({
  load: function(event, ui) {
    $('a', ui.panel).click(function() {
      $(ui.panel).load(this.href);
      return false;
    });
  }
});
</pre>
Как открыть вкладку по нажатию на ссылку, а не заголовок вкладки?
Если необходимо, чтобы при нажатии по ссылке, которая находится внутри вкладки, содержимое страницы по ссылке загрузилось в эту вкладку, вместо того, чтобы пользователь перешел на эту страницу
<pre>
// инициализация вкладок
// (будет открыта первая вкладка)
var $tabs = $('#example').tabs();

// при нажатии на ссылку, сымитируем нажатие по нужной вкладке
$('#my-text-link').click(function() {
    $tabs.tabs('select', 2);
    return false;
});
</pre>
Как предотвратить выбор другой вкладки, пока не будет пройдена валидация формы в текущей вкладке?
Воспользуемся тем, что когда обработчик события tabsselect возвращает false, переключение вкладки не происходит:
<pre>
$('#example').tabs({
    select: function(event, ui) {
        var isValid = ... // выполним валидацию, присвоив переменной true или false
        return isValid;
    }
});
</pre>
Как незамедлительно открыть добавленную вкладку?
Воспользуемся тем, что при добавлении новой вкладки происходит событие tabsadd
<pre>
var $tabs = $('#example').tabs({
    add: function(event, ui) {
        $tabs.tabs('select', '#' + ui.panel.id);
    }
});
</pre>
Как избавиться от эффекта FOUC (Flash of Unstyled Content) пока идет инициализация вкладок?
Эффектом FOUC называют тот случай, когда браузер собирает (инициализирует) тяжелую страницу не мгновенно, а за несколько секунд, во время которых в окне браузера постоянно мельтешат элементы страницы.
Наиболее простым способом является скрыть вкладки, которые должны оказаться закрытыми, добавив их элементам специальный класс.
<pre>
&lt;div id="example" class="ui-tabs"&gt;
  ...
  &lt;div id="a-tab-panel" class="ui-tabs-hide"&gt; &lt;/div&gt;
  ...
&lt;/div&gt;
</pre>
Почему мой слайдер (или Google Map, или sIFR и т.д.) не работает, если он был в первоначально закрытой вкладке?
Многие виджеты в момент инициализации пытаются узнать свой размер, но если они находятся в закрытой вкладке, то они не смогут это сделать: элемент вкладки скрыт с помощью css-правила display:none, а значит размеры всех содержащихся в нем элементов равны 0.
Эту проблему можно исправить, изменив способ скрытия вкладок на "смещение влево". Для этого нужно переписать следующие правила:
<pre>
.ui-tabs .ui-tabs-hide {
    position: absolute;
    left: -10000px;
}
</pre>
Для Google Map подойдет и другой способ. Можно вызвать метод пересчета размеров карты, когда вкладка с ней будет открыта:
<pre>
$('#example').bind('tabsshow', function(event, ui) {
    if (ui.panel.id == "map-tab") {
        resizeMap();
    }
});
</pre>
Accordion Widget<br>
Accordion's structure 1<br>
<pre>
&lt;title&gt;Accordion&lt;/title&gt;
&lt;link rel="stylesheet" href="css/smoothness/jquery-ui.css"&gt;
		&lt;div id="myAccordion"&gt;

		&lt;/div&gt;
&lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.accordion.js"&gt;
&lt;/script&gt;
        &lt;script&gt;
			(function($){
				$("#myAccordion").accordion();
			})(jQuery);

Styling accordion 2
&lt;link rel="stylesheet" href="css/accordionTheme.css"&gt;
Configuring accordion 3
event "click" Specify the event on headers that trigger drawers to open.
 &lt;script&gt;
		(function($){
			var accOpts = {
				event: "mouseover"
			};
				$("#myAccordion").accordion(accOpts);
			})(jQuery);
		&lt;/script&gt;
		</pre>
Changing the default active header 4<br>
Это свойство отвечает за то, какая вкладка окажется открыта. Если указать в нем false, то все вкладки будут закрыты.
<pre>
// ------- Работа со свойством active ---------
// в момент установки accordion на элемент
$("selector").accordion({ active:false });

//получение значения active
var active = $(".selector").accordion( "option", "active" );
//изменение значения addClasses
$("selector").accordion( "option", "active", false );

			(function($){
				var accOpts = {
					active: 2
				};
				$("#myAccordion").accordion(accOpts);
			})(jQuery);
		&lt;/script&gt;
Change the configuration object once again 5
			(function($){
				var accOpts = {
					active: false
				};
				$("#myAccordion").accordion(accOpts);
			})(jQuery);
			</pre>
collapsible option 6<br>
По умолчанию, пользователь не может закрывать вкладки, а только переключать. Однако если свойство collapsible установлено в true, то нажатие на заголовок открытой вкладки приведет к ее закрытию (если вкладки переключаются при наведении курсора на заголовок, то и закрытие будет происходить при наведении, а не при нажатии).
<pre>
// ------- Работа со свойством collapsible ---------
// в момент установки accordion на элемент
$("selector").accordion({ collapsible:true });
 
//получение значения collapsible
var collapsible = $("selector").accordion( "option", "collapsible" );
//изменение значения collapsible
$("selector").accordion( "option", "collapsible", true );

			(function($){
				var accOpts = {
					active: false,
					collapsible: true
				};
				$("#myAccordion").accordion(accOpts);
			})(jQuery);
		&lt;/script&gt;
</pre>
Filling  7<br>
Аккордеон занимает все возможное горизонтальное пространство внутри своего родителя. Если необходимо, чтобы он занимал также и все свободное пространство по вертикали, необходимо установить свойство fillSpace в true. Однако, это не означает, что если родитель изменит свою высоту, то аккордеон изменит свою вслед за ним. Такое поведение необходимо организовывать самостоятельно.
<pre>
// ------- Работа со свойством fillSpace ---------
// в момент установки accordion на элемент
$("selector").accordion({ fillSpace:true });
 
//получение значения fillSpace
var fillSpace = $("selector").accordion( "option", "fillSpace" );
//изменение значения fillSpace
$("selector").accordion( "option", "fillSpace", true );

			#container { height:600px; width:400px; }
&lt;/style&gt;
&lt;div id="container"&gt;
			&lt;div id="myAccordion"&gt;
&lt;script&gt;
			(function($){
				var accOpts = {
					fillSpace: true
				};
				$("#myAccordion").accordion(accOpts);
			})(jQuery);
		&lt;/script&gt;
</pre>
Accordion animation 8<br>
Этот параметр определяет тип анимации. Задав false, вы отключите анимационную смену вкладок аккордеона.
<pre>
// ------- Работа со свойством animated ---------
// в момент установки accordion на элемент
$("selector").accordion({ animated:"bounceslide" });
 
//получение значения animated
var animated = $("selector").accordion( "option", "animated" );
//изменение значения animated
$("selector").accordion( "option", "animated", "bounceslide" );
Тип "bounceslide" доступен только при подключенном UI Effects Core.
			(function($){
				var accOpts = {
					animated: false
				};
 				$("#myAccordion").accordion(accOpts);
			})(jQuery);
jquery.effects.core.js 9
&lt;script src="development-bundle/ui/jquery.effects.core.js"&gt;
&lt;/script&gt;
        &lt;script&gt;
			(function($){
				var accOpts = {
					animated: "bounceslide"
				};
				$("#myAccordion").accordion(accOpts);
			})(jQuery);
		&lt;/script&gt;
jquery.effects.core.js 10 - 11
			(function($){
				var accOpts = {
					animated: "easeOutBounce"
				};
				$("#myAccordion").accordion(accOpts);
			})(jQuery);

(function($){
				var accOpts = {
					clearStyle: true,
					animated: "easeOutBounce"
				};
				</pre>
Accordion events Using the change event 12
<pre>
&lt;script&gt;
(function($){
	var accOpts = {
		change: function(e, ui) {
		$(".notify").remove();
		$("&lt;div /&gt;", {
		"class": "notify",
	       text: ([
                ui.newHeader.find("a").text(),
               "was activated,",  
               ui.oldHeader.find("a").text(),
               "was closed"].join(" "))
	}).insertAfter("#myAccordion").fadeOut(2000, function(){
	    $(this).remove();
	});
}
};
	$("#myAccordion").accordion(accOpts);
	})(jQuery);
&lt;/script&gt;
The changestart event 13
&lt;script&gt;
(function($){
	var accOpts = {
	changestart: function(e, ui) {
		$(".notify").remove();
		$("&lt;div /&gt;", {
		"class": "notify",
		text: ([ui.newHeader.find("a").text(), "was activated,", ui.oldHeader.find("a").text(), "was closed"].join(" "))
	}).insertAfter("#myAccordion").fadeOut(2000, function(){
		$(this).remove();
	});
	}
};
	$("#myAccordion").accordion(accOpts);
	})(jQuery);
&lt;/script&gt;
</pre>
Accordion navigation 14
Если этот параметр включен, то вкладки аккордеона можно будет открывать по принципу якорей. Если вы хотите самостоятельно обрабатывать ситуацию и принимать решение, о том, какая вкладка должна быть открыта, используйте параметр navigationFilter.
<pre>
// ------- Работа со свойством navigation ---------
// в момент установки accordion на элемент
$(".selector").accordion({ navigation:15 });
 
//получение значения navigation
var navigation = $(".selector").accordion( "option", "navigation" );
//изменение значения navigation
$(".selector").accordion( "option", "navigation", 15 );

&lt;link rel="stylesheet" href="css/accordionTheme2.css"&gt;
&lt;script&gt;
			(function($){
				var accOpts = {
					navigation: true
				};
				$("#myAccordion").accordion(accOpts);
			})(jQuery);
		&lt;/script&gt;
</pre>
Accordion methods<br>
Header activation 15<br>
С помощью этого свойства можно задать элементы, которые будут использоваться в качестве заголовков.
<pre>
// ------- Работа со свойством header ---------
// в момент установки accordion на элемент
$("selector").accordion({ header:'h3' });

//получение значения header
var header = $("selector").accordion( "option", "header" );
//изменение значения cursorAt
$("selector").accordion( "option", "header", 'h3' );

&lt;label for="activateChoice"&gt;Enter a header index to activate&lt;/label&gt;
		&lt;input id="activateChoice"&gt;
		&lt;button type="button" id="activate"&gt;Activate&lt;/button&gt;
&lt;script&gt;
(function($){
	$("#myAccordion").accordion();
	$("#activate").click(function() {
         	$("#myAccordion").accordion("activate", parseInt($("#activateChoice").val(), 10));
});
})(jQuery);
&lt;/script&gt;
</pre>
Resizing an accordion panel 16<br>
Событие change происходит при переключении вкладок аккордеона. Если переключение анимировано, то это событие будет происходить в течении выполнения анимации (неоднократно). Если вам нужно среагировать на переключение лишь один раз, используйте событие changestart.
<pre>
// второй параметр передаваемый в обработчик будет обладать специфическими полями:
$('.ui-accordion').bind('accordionchange', function(event, ui) {
  ui.newHeader // объект jQuery с элементом, являющимся заголовком ОТКРЫВАЮЩЕЙСЯ вкладки
  ui.oldHeader // -||-||- ЗАКРЫВАЮЩЕЙСЯ вкладки
  ui.newContent // объект jQuery с элементом, являющимся содержимым ОТКРЫВАЮЩЕЙСЯ вкладки
  ui.oldContent // -||-||- ЗАКРЫВАЮЩЕЙСЯ вкладки
});
 
// обработка события change
$("selector").accordion({
   change: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "accordionchange", function(event, ui){ ... });

Событие changestart происходит в момент начала переключения вкладок аккордеона.
// второй параметр передаваемый в обработчик будет обладать специфическими полями:
$('.ui-accordion').bind('accordionchange', function(event, ui) {
  ui.newHeader // объект jQuery с элементом, являющимся заголовком ОТКРЫВАЮЩЕЙСЯ вкладки
  ui.oldHeader // -||-||- ЗАКРЫВАЮЩЕЙСЯ вкладки
  ui.newContent // объект jQuery с элементом, являющимся содержимым ОТКРЫВАЮЩЕЙСЯ вкладки
  ui.oldContent // -||-||- ЗАКРЫВАЮЩЕЙСЯ вкладки
});
 
// обработка события changestart
$("selector").accordion({
   changestart: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "accordionchangestart", function(event, ui){ ... });
            &lt;h2 id="remote"&gt;&lt;a href="remoteAccordion.txt"&gt;Remote&lt;/a&gt;&lt;/h2&gt;
            &lt;div&gt;&lt;/div&gt;
        &lt;script&gt;
	(function($){
		var accOpts = {
		changestart: function(e, ui) {
		if (ui.newHeader.attr("id") === "remote") {
		$.get(ui.newHeader.find("a").attr("href"), function(data) {
		ui.newHeader.next().text(data);
	});
}
},
	change: function(e, ui) {
	ui.newHeader.closest("#myAccordion").accordion("resize");
	}
};
$("#myAccordion").accordion(accOpts);
})(jQuery);
&lt;/script&gt;
</pre>
Accordion interoperability 17
<pre>
&lt;div id="myAccordion"&gt;
&lt;h2&gt;&lt;a href="#"&gt;Header 1&lt;/a&gt;&lt;/h2&gt;
&lt;h2&gt;&lt;a href="#"&gt;Header 2&lt;/a&gt;&lt;/h2&gt;
&lt;h2&gt;&lt;a href="#"&gt;Header 3&lt;/a&gt;&lt;/h2&gt;
&lt;div&gt;
	&lt;div id="myTabs"&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;a href="#0"&gt;&lt;span&gt;Tab 1&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href="#1"&gt;&lt;span&gt;Tab 2&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
&lt;div id="0"&gt;This is the content panel linked to the first tab, it is shown by default.&lt;/div&gt;
&lt;div id="1"&gt;This content is linked to the second tab and will be shown when its tab is clicked.&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
	(function($){
		$("#myAccordion").accordion();
		$("#myTabs").tabs();
	})(jQuery);
&lt;/script&gt;
19
&lt;div id="container" class="ui-helper-clearfix"&gt;
	&lt;div id="myAccordion"&gt;
		&lt;h2&gt;&lt;a href="#me" title="About Me"&gt;About Me&lt;/a&gt;&lt;/h2&gt;
	&lt;div&gt;
                    &lt;a href="accordionMe.html#me" title="Bio"&gt;My Bio&lt;/a&gt;
                    &lt;a href="accordionMe.html#me" title="Contact Me"&gt;Contact Me&lt;/a&gt;
                    &lt;a href="accordionMe.html#me" title="Resume"&gt;My Resume&lt;/a&gt;
                &lt;/div&gt;
                &lt;h2&gt;&lt;a href="#js" title="JavaScript"&gt;JavaScript&lt;/a&gt;&lt;/h2&gt;
                &lt;div&gt;
                    &lt;a href="accordionJS.html#js" title="Tutorials"&gt;Tutorials&lt;/a&gt;
                    &lt;a href="accordionJS.html#js" title="AJAX"&gt;AJAX&lt;/a&gt;
                    &lt;a href="accordionJS.html#js" title="Apps"&gt;Apps&lt;/a&gt;
                &lt;/div&gt;
	&lt;/div&gt;
            &lt;div id="contentCol"&gt;
                &lt;h1&gt;JavaScript&lt;/h1&gt;
            &lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
			(function($){
				var accOpts = {
					fillSpace: true,
					navigation: true
				};
		$("#myAccordion").accordion(accOpts);
})(jQuery);
&lt;/script&gt;
</pre>
20
<pre>
&lt;link rel="stylesheet" href="css/accordionTheme2.css"&gt;
&lt;div id="container" class="ui-helper-clearfix"&gt;
			&lt;div id="myAccordion"&gt;
				&lt;h2&gt;&lt;a href="#me" title="About Me"&gt;About Me&lt;/a&gt;&lt;/h2&gt;
			&lt;div&gt;
                    &lt;a href="accordionMe.html#me" title="Bio"&gt;My Bio&lt;/a&gt;
                    &lt;a href="accordionMe.html#me" title="Contact Me"&gt;Contact Me&lt;/a&gt;
                    &lt;a href="accordionMe.html#me" title="Resume"&gt;My Resume&lt;/a&gt;
                &lt;/div&gt;
                &lt;h2&gt;&lt;a href="#js" title="JavaScript"&gt;JavaScript&lt;/a&gt;&lt;/h2&gt;
                &lt;div&gt;
                    &lt;a href="accordionJS.html#js" title="Tutorials"&gt;Tutorials&lt;/a&gt;
                    &lt;a href="accordionJS.html#js" title="AJAX"&gt;AJAX&lt;/a&gt;
                    &lt;a href="accordionJS.html#js" title="Apps"&gt;Apps&lt;/a&gt;
                &lt;/div&gt;
&lt;/div&gt;
            &lt;div id="contentCol"&gt;
                &lt;h1&gt;About Me&lt;/h1&gt;
            &lt;/div&gt;
&lt;/div&gt;
        &lt;script&gt;
			(function($){
				var accOpts = {
					fillSpace: true,
					navigation: true
				};
		$("#myAccordion").accordion(accOpts);
	})(jQuery);
&lt;/script&gt;
</pre>
The Dialog  dialog1<br>
Плагин Dialog позволяет превращать блочные элементы (обычно div'ы) в всплывающие в центре экрана диалоговые окна. Их можно перетаскивать и растягивать, каждое такое окошко состоит из заголовка и содержимого и может быть закрыто нажатием на иконку "x" в заголовке.
С помощью свойства bottons в диалоговых окнах можно задавать кнопки и самостоятельно организовывать реакцию на их нажатие. Свойство modal задает перекрытие страницы, которое закрывает доступ к сайту, пока не будет закрыто диалоговое окно.
Вызов<br>
$("#elementId").dialog();<br>
установит функциональность плагина Dialog на элемент с идентификатором elementId и сразу же выведет его в виде диалогового окна. Если вы хотите, чтобы при создании диалоговое окно не было показано сразу, создавайте диалоговое окно так:
<pre>
$("#elementId").dialog({ autoOpen: false });
для открытия окна используйте
$("#elementId").dialog('open');
а для закрытия
$("#elementId").dialog('close');
the following dependencies are required:
jquery-ui-x.x.x.custom.css
jquery-x.x.x.js
jquery.ui.core.js
jquery.ui.widget.js
jquery.ui.position.js
jquery.ui.dialog.js
&lt;link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.9.custom.css"&gt;
		&lt;div id="myDialog" title="This is the title!"&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin. Sed interdum pulvinar justo. Nam iaculis volutpat ligula. Integer vitae felis quis diam laoreet ullamcorper. Etiam tincidunt est vitae est.&lt;/div&gt;
        &lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
        &lt;script src="development-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
        &lt;script src="development-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
        &lt;script src="development-bundle/ui/jquery.ui.position.js"&gt;&lt;/script&gt;
        &lt;script src="development-bundle/ui/jquery.ui.dialog.js"&gt;&lt;/script&gt;
        &lt;script&gt;
			(function($){
				$("#myDialog").dialog();
			})(jQuery);
</pre>
dialog2 resizable.js
<pre>
Определяет, будет ли диалоговое окно растягиваемым.
// ------- Работа со свойством resizable ---------
// в момент установки dialog на элемент
$("selector").dialog({ resizable: false });
 
//получение значения resizable
var resizable = $("selector").dialog( "option", "resizable" );
//изменение значения resizable
$("selector").dialog( "option", "resizable", false );

jquery.ui.mouse.js
jquery.ui.draggable.js
jquery.ui.resizable.js

&lt;div id="myDialog" title="This is the title!"&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin. Sed interdum pulvinar justo. Nam iaculis volutpat ligula. Integer vitae felis quis diam laoreet ullamcorper. Etiam tincidunt est vitae est.&lt;/div&gt;
&lt;script src="development-bundle/ui/jquery.ui.mouse.js"&gt;&lt;/script&gt;
&lt;script src="devpment-bundle/ui/jquery.ui.draggable.js"&gt;&lt;/script&gt;
Эта настройка определяет, будет ли диалоговое окно перетаскиваемым.
// ------- Работа со свойством draggable ---------
// в момент установки dialog на элемент
$("selector").dialog({ draggable: false });
 
//получение значения draggable
var draggable = $("selector").dialog( "option", "draggable" );
//изменение значения draggable
$("selector").dialog( "option", "draggable", false );

&lt;script src="devment-bundle/ui/jquery.ui.resizable.js"&gt;&lt;/script&gt;
			(function($){
				$("#myDialog").dialog();
			})(jQuery);
			</pre>
Dialog options dialog3<br>
autoOpen Default value true<br>
Если это свойство равно true, то диалоговое окно будет автоматически открыто при установке плагина Dialog на элемент. В случае false, диалоговое окно не будет открыто до тех пор, пока не будет вызвано .dialog("open").
<pre>
// ------- Работа со свойством autoOpen ---------
// в момент установки dialog на элемент
$("selector").dialog({ autoOpen: false });
 
//получение значения autoOpen
var autoOpen = $("selector").dialog( "option", "autoOpen" );
//изменение значения autoOpen
$("selector").dialog( "option", "autoOpen", false );

Shows the dialog as soon as the dialog() method is called, when set to true.
		&lt;div id="myDialog" title="This is the title!"&gt;&lt;/div&gt;
		(function($){
			var dialogOpts = {
				autoOpen: false
			};
		$("#myDialog").dialog(dialogOpts);
		})(jQuery);
</pre>
The title of the dialog 4<br>
Определяет текст заголовка диалогового окна. Если этот параметр равен пустой строке, то для заголовка будет взято значения атрибута title, у элемента, из которого было сделано диалоговое окно.
<pre>
// ------- Работа со свойством title ---------
// в момент установки dialog на элемент
$("selector").dialog({ title: 'Сообщение' });
 
//получение значения title
var title = $("selector").dialog( "option", "title" );
//изменение значения title
$("selector").dialog( "option", "title", 'Сообщение' );

			(function($){
				var dialogOpts = {
					title: "&lt;a href='#'&gt;A link title!&lt;/a&gt;"
				};
				$("#myDialog").dialog(dialogOpts);
			})(jQuery);
			</pre>
Modality 5<br>
С помощью свойства modal можно сделать окно модальным. Это означает, что доступ ко всему содержимому сайта, кроме этого окна будет заблокирован за счет добавления полупрозрачного перекрывающего всю страницу слоя
<pre>
// ------- Работа со свойством modal ---------
// в момент установки dialog на элемент
$("selector").dialog({ modal: true });
 
//получение значения modal
var modal = $("selector").dialog( "option", "modal" );
//изменение значения modal
$("selector").dialog( "option", "modal", true );

			(function($){
				var dialogOpts = {
					modal: true
				};
				$("#myDialog").dialog(dialogOpts);
			})(jQuery);
			</pre>
Adding buttons 6<br>
В этом свойстве можно задать кнопки для диалогового окна (они будут расположены внизу окна), а так же обработчики нажатия на них . Существует два возможных формата для того, чтобы задать buttons:
<pre>
// с помощью объекта:
{
  "Имя кнопки": function(e){ //обработка нажатия кнопки },
  "Имя другой кнопки": function(e){ //обработка нажатия },
  ...
}
 
// еще можно задать buttons с помощью массива объектов:
[
  {
    text: "Имя кнопки",
    click: function(e){ //обработка нажатия }
  },
  {
    text: "Имя следующей кнопки",
    click: function(e){ //обработка нажатия }
  }
]
</pre>
В обработчиках нажатия, переменная this будет содержать элемент, представляющий диалоговое окно. Если вам нужен элемент нажатой кнопки, то он будет доступен в свойствеtarget объекта события (который обработчик будет получать в качестве первого параметра).
<pre>
// ------- Работа со свойством buttons ---------
// в момент установки dialog на элемент
$("selector").dialog({ buttons: {"Ok":okCliked} });
 
//получение значения buttons
var buttons = $("selector").dialog( "option", "buttons" );
//изменение значения buttons
$("selector").dialog( "option", "buttons", {"Ok":okCliked} );

			(function($){
				var execute = function() {},
					cancel = function() {},
					dialogOpts = {
						buttons: {
							"Ok": execute,
							"Cancel": cancel
						}
					};
				$("#myDialog").dialog(dialogOpts);
			})(jQuery);
			</pre>
Enabling dialog animations 7
Определяет эффект, который будет использоваться появлении диалогового окна. Для определения эффекта, который будет использоваться для скрытия окна используйте свойство hide.
<pre>
// ------- Работа со свойством show ---------
// в момент установки dialog на элемент
$("selector").dialog({ show: 'slide' });
 
//получение значения show
var show = $("selector").dialog( "option", "show" );
//изменение значения show
$("selector").dialog( "option", "show", 'slide' );
</pre>
Определяет эффект, который будет использоваться для скрытия диалогового окна. Для определения эффекта, который будет использоваться при всплытии окна используйте свойство show.
<pre>
// ------- Работа со свойством hide ---------
// в момент установки dialog на элемент
$("selector").dialog({ hide: 'slide' });
 
//получение значения hide
var hide = $("selector").dialog( "option", "hide" );
//изменение значения hide
$("selector").dialog( "option", "hide", 'slide' );

        &lt;script src="development-bundle/external/jquery.bgiframe-2.1.2.js"&gt;&lt;/script&gt;
			(function($){
				var dialogOpts = {
					show: true,
					hide: true
				};
				$("#myDialog").dialog(dialogOpts);
			})(jQuery);
			</pre>
Configuring the dialog's dimensions 8<br>
Определяет ширину диалогового окна (в пикселях). Если это свойство равно "auto", то окно будет занимать всю ширину экрана.
<pre>
// ------- Работа со свойством width ---------
// в момент установки dialog на элемент
$("selector").dialog({ width: 530 });
 
//получение значения width
var width = $("selector").dialog( "option", "width" );
//изменение значения width
$("selector").dialog( "option", "width", 530 );
Определяет высоту диалогового окна (в пикселях). Если это свойство равно "auto", то окно будет подстраиваться под нужную высоту самостоятельно.
// ------- Работа со свойством height ---------
// в момент установки dialog на элемент
$("selector").dialog({ height: 530 });
 
//получение значения height
var height = $("selector").dialog( "option", "height" );
//изменение значения height
$("selector").dialog( "option", "height", 530 );

Это свойство определяет максимальную высоту (в пикселях), которую может принять диалоговое окно при растягивании.
// ------- Работа со свойством maxHeight ---------
// в момент установки dialog на элемент
$("selector").dialog({ maxHeight: 700 });

//получение значения maxHeight
var maxHeight = $("selector").dialog( "option", "maxHeight" );
//изменение значения maxHeight
$("selector").dialog( "option", "maxHeight", 700 );

Это свойство определяет минимальную высоту (в пикселях), которую может принять диалоговое окно при растягивании.
// ------- Работа со свойством minHeight ---------
// в момент установки dialog на элемент
$("selector").dialog({ minHeight: 300 });

//получение значения minHeight
var minHeight = $("selector").dialog( "option", "minHeight" );
//изменение значения minHeight
$("selector").dialog( "option", "minHeight", 300 );

Это свойство определяет максимальную ширину (в пикселях), которую может принять диалоговое окно при растягивании.
// ------- Работа со свойством maxWidth ---------
// в момент установки dialog на элемент
$("selector").dialog({ maxWidth: 700 });

//получение значения maxWidth
var maxWidth = $("selector").dialog( "option", "maxWidth" );
//изменение значения maxWidth
$("selector").dialog( "option", "maxWidth", 700 );
Это свойство определяет минимальную ширину (в пикселях), которую может принять диалоговое окно при растягивании.
// ------- Работа со свойством minWidth ---------
// в момент установки dialog на элемент
$("selector").dialog({ minWidth: 300 });

//получение значения minWidth
var minWidth = $("selector").dialog( "option", "minWidth" );
//изменение значения minWidth
$("selector").dialog( "option", "minWidth", 300 );

			(function($){
				var dialogOpts = {
					width: 500,
					height: 300,
					minWidth: 150,
					minHeight: 150,
					maxWidth: 600,
					maxHeight: 450
				};
				$("#myDialog").dialog(dialogOpts);
			})(jQuery);
			</pre>
Stacking 9
<pre>
			(function($){
				$("#dialog1, #dialog2").dialog();
			})(jQuery);
			</pre>
Dialog's event model 10<br>
Это событие происходит, непосредственно перед закрытием диалогового окна. Если его обработчик вернет false, то закрытия окна не произойдет.
<pre>
// обработка события beforeClose
$("selector").dialog({
   beforeClose: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "dialogbeforeclose", function(event, ui){ ... });
    	&lt;div id="status" class="ui-widget ui-dialog ui-corner-all ui-widget-content"&gt;
            &lt;div class="ui-widget-header ui-dialog-titlebar ui-corner-all"&gt;Dialog Status&lt;/div&gt;
            &lt;div class="ui-widget-content ui-dialog-content"&gt;&lt;/div&gt; 	&lt;/div&gt;
	&lt;div id="dialog1" title="Dialog 1"&gt;Lorem ipsum dolor sit amet, &lt;/div&gt;
		(function($){
			var dialogOpts = {
				open: function() {
		$("#status").children(":last").text("The dialog is open");
				},
				close: function() {
		$("#status").children(":last").text("The dialog is closed");
				},
				beforeclose: function() {
					if ($("#dialog1").width() &gt; 300) {
						return false;
					}
				}
			};
			$("#dialog1").dialog(dialogOpts);
		})(jQuery);
		</pre>
Событие create происходит в момент инициализации dialog на элементе.
<pre>
// обработка события create
$("selector").dialog({
   create: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "dialogcreate", function(event, ui){ ... });

Это событие происходит в момент открытия диалогового окна.
// обработка события open
$("selector").dialog({
   open: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "dialogopen", function(event, ui){ ... });

Это событие происходит, когда диалоговое окно приобретает фокус.
// обработка события focus
$("selector").dialog({
   focus: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "dialogfocus", function(event, ui){ ... });

Это событие происходит в момент, когда диалоговое окно начинают перетаскивать.
// обработка события dragStart
$("selector").dialog({
   dragStart: function(event, ui) { ... }
});

// еще один способ (используя метод bind)
$("selector").bind( "dialogdragstart", function(event, ui){ ... });

Это событие происходит при каждом движении перетаскивания диалогового окна.
// обработка события drag
$("selector").dialog({
   drag: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "dialogdrag", function(event, ui){ ... });

Это событие происходит в момент завершения перетаскивания диалогового окна (а именно, в момент, когда кнопка мыши будет отпущена).
// обработка события dragStop
$("selector").dialog({
   dragStop: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "dialogdragstop", function(event, ui){ ... });

Это событие происходит в момент, когда диалоговое окно начинают растягивать.
// обработка события resizeStart
$("selector").dialog({
   resizeStart: function(event, ui) { ... }
});

// еще один способ (используя метод bind)
$("selector").bind( "dialogresizestart", function(event, ui){ ... });

Это событие происходит при каждом движении растягивания диалогового окна.
// обработка события resize
$("selector").dialog({
   resize: function(event, ui) { ... }
});

// еще один способ (используя метод bind)
$("selector").bind( "dialogresize", function(event, ui){ ... });

Это событие происходит в момент завершения растягивания диалогового окна (а именно, в момент, когда кнопка мыши будет отпущена).
// обработка события resizeStop
$("selector").dialog({
   resizeStop: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "dialogdragstop", function(event, ui){ ... });

Это событие происходит в момент закрытия диалогового окна.
// обработка события close
$("selector").dialog({
   close: function(event, ui) { ... }
});

// еще один способ (используя метод bind)
$("selector").bind( "dialogclose", function(event, ui){ ... });
</pre>
Controlling a dialog programmatically<br>
close Закрывает диалоговое окно, если оно открыто.<br>
destroy Удаляет всю функциональность плагина dialog с выбранных элементов.<br>
disable Останавливает работу плагина dialog на выбранных элементах. Для возобновления, необходимо воспользоваться методом .dialog("enable").<br>
enable Возобновляет работу плагина dialog на выбранных элементах (например, после того, как она была остановлена с помощью .dialog("disable")).<br>
isOpen Проверяет открыто ли диалоговое окно. Возвращает true если оно открыто и false иначе.<br>
moveToTop Изменяет z-index диалогового окна так, чтобы он оказался поверх остальных открытых диалоговых окон.<br>
option Этот метод позволяет изменять/получать свойства плагина dialog. Если необходимо изменить сразу несколько свойств, воспользуйтесь следующей формой этой функции —.dialog("option", options), где options это объект в формате{optionName1:value1, optionName2:value2, ...}.<br>
Toggling the dialog 11<br>
Если это свойство равно true, то диалоговое окно будет автоматически открыто при установке плагина Dialog на элемент. В случае false, диалоговое окно не будет открыто до тех пор, пока не будет вызвано .dialog("open").
<pre>
// ------- Работа со свойством autoOpen ---------
// в момент установки dialog на элемент
$("selector").dialog({ autoOpen: false });
 
//получение значения autoOpen
var autoOpen = $("selector").dialog( "option", "autoOpen" );
//изменение значения autoOpen
$("selector").dialog( "option", "autoOpen", false );

&lt;button type="button" id="toggle"&gt;Toggle dialog!&lt;/button&gt;
		&lt;div id="myDialog" title="This is the title!"&gt;Lorem ipsum
			(function($){
				var dialogOpts = {
					autoOpen: false
				};
				$("#myDialog").dialog(dialogOpts);
				$("#toggle").click(function() {
					if (!$("#myDialog").dialog("isOpen")) {
					    $("#myDialog").dialog("open");
					} else {
						$("#myDialog").dialog("close");
					};
				});
			})(jQuery);
Getting data from the dialog 12
&lt;p&gt;Please answer the opinion poll:&lt;/p&gt;
		&lt;div id="myDialog" title="Best Widget Library"&gt;
	&lt;p&gt;Is jQuery UI the greatest JavaScript widget library?&lt;/p&gt;
			&lt;label for="yes"&gt;Yes!&lt;/label&gt;
	&lt;input type="radio" id="yes" value="yes" name="question" checked="checked"&gt;&lt;br&gt;
			&lt;label for="no"&gt;No!&lt;/label&gt;
&lt;input type="radio" id="no" value="no" name="question"&gt;
		&lt;/div&gt;
(function($){
	var execute = function() {
	var answer = $("#myDialog").find("input:checked").val();

$("&lt;p&gt;").text("Thanks for selecting " + answer).appendTo($("body"));
						$("#myDialog").dialog("close");
					},
					cancel = function() {
						$("#myDialog").dialog("close");
					},
					dialogOpts = {
						buttons: {
							"Ok": execute,
							"Cancel": cancel
						}
					};
				$("#myDialog").dialog(dialogOpts);
			})(jQuery);
			</pre>
Dialog interoperability 13
<pre>
&lt;div id="myDialog" title="An Accordion Dialog"&gt;
	&lt;div id="myAccordion"&gt;
	&lt;h2&gt;&lt;a href="#"&gt;Header 1&lt;/a&gt;&lt;/h2&gt;
&lt;div&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin.&lt;/div&gt;
	&lt;h2&gt;&lt;a href="#"&gt;Header 2&lt;/a&gt;&lt;/h2&gt;
&lt;div&gt;Etiam tincidunt est vitae est. Ut posuere, mauris at sodales rutrum, turpis.&lt;/div&gt;
	&lt;h2&gt;&lt;a href="#"&gt;Header 3&lt;/a&gt;&lt;/h2&gt;
&lt;div&gt;Donec at dolor ac metus pharetra aliquam. Suspendisse purus.&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
&lt;script src="devement-bundle/ui/jquery.ui.accordion.js"&gt;&lt;/script&gt;
			(function($){
			$("#myDialog").dialog();
			$("#myAccordion").accordion();
			})(jQuery);
Creating a dynamic image-based dialog 14
&lt;div id="thumbs" class="ui-corner-all"&gt;
&lt;div class="ui-widget-header ui-corner-top"&gt;
	&lt;h2&gt;Some Common Flowers&lt;/h2&gt;
&lt;/div&gt;
&lt;p&gt;(click a thumbnail to view a full-size image)&lt;/p&gt;
	&lt;div class="thumb ui-helper-clearfix ui-widget-content"&gt;
	&lt;a href="img/haFull.jpg" title="Helianthus annuus"&gt;&lt;img src="img/haThumb.jpg" alt="Helianthus annuus"&gt;&lt;/a&gt;
	&lt;h3&gt;Helianthus annuus&lt;/h3&gt;
	&lt;p&gt;Sunflowers (Helianthus annuus) are annual plants native to the Americas, that possess a large flowering head&lt;/p&gt;
&lt;/div&gt;
&lt;div class="thumb ui-helper-clearfix ui-widget-content"&gt;
	&lt;a href="img/lcFull.jpg" title="Lilium columbianum"&gt;&lt;img src="img/lcThumb.jpg" alt="Lilium columbianum"&gt;&lt;/a&gt;
	&lt;h3&gt;Lilium columbianum&lt;/h3&gt;
	&lt;p&gt;The Lilium columbianum is a lily native to western North America. It is also known as the Columbia Lily or Tiger Lily&lt;/p&gt;
&lt;/div&gt;
&lt;div class="thumb ui-helper-clearfix ui-widget-content"&gt;
	&lt;a href="img/msFull.jpg" title="Myosotis scorpioides"&gt;&lt;img src="img/msThumb.jpg" alt="Myosotis scorpioides"&gt;&lt;/a&gt;
	&lt;h3&gt;Myosotis scorpioides&lt;/h3&gt;
	&lt;p&gt;The Myosotis scorpioides, or Forget-me-not, is a herbaceous perennial plant of the genus Myosotis.&lt;/p&gt;
&lt;/div&gt;
&lt;div class="thumb ui-helper-clearfix ui-widget-content ui-corner-bottom last"&gt;
	&lt;a href="img/nnFull.jpg" title="Nelumbo nucifera"&gt;&lt;img src="img/nnThumb.jpg" alt="Nelumbo nucifera"&gt;&lt;/a&gt;
	&lt;h3&gt;Nelumbo nucifera&lt;/h3&gt;
	&lt;p&gt;Nelumbo nucifera is known by a number of names including Indian lotus, sacred lotus, bean of India, or simply Lotus.&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
	&lt;div id="dialog"&gt;&lt;/div&gt;
&lt;script src="devment-bundle/ui/jquery.ui.draggable.js"&gt;&lt;/script&gt;

			(function($){
				var fileName,
					titleText,
			    	dialogOpts = {
						modal: true,
						width: 388,
						height: 470,
						autoOpen: false,
						open: function() {

							$("#dialog").empty();
							$("&lt;img /&gt;", {
								src: fileName
							}).appendTo("#dialog");
				$("#dialog").dialog("option", "title", titleText);
						}
					};
				$("#dialog").dialog(dialogOpts);
				$("#thumbs").find("a").click(function(e) {
					e.preventDefault();
					fileName = $(this).attr("href");
					titleText = $(this).attr("title");
     				$("#dialog").dialog("open");
				});
			})(jQuery);
			</pre>
The Slider Widget<br>
Плагин Slider позволяет превращать блочные элементы (обычно div'ы) в элементы управления, которые обычно называют ползунками. Передвигать рукоятки ползунков можно с помощью мыши, а если ползунок находится в фокусе, то и с помощь клавиш со стрелками.<br>
Обработчики событий, происходящие на ползунках, будут получать 2 параметра: стандартный объект события и дополнительный объект (назовем его ui) со следующими полями:<br>
ui.value — текущее значение ползунка.<br>
ui.handle — DOM-элемент выполняющий роль рукоятки ползунка. Этот элемент <br>создается автоматически, при инициализации плагина (при создании, этому элементу присваивается класс 'ui-slider-handle').<br>
В ползунке может быть любое количество рукояток. Если их больше одной, то вместо поляvalue нужно использовать values, который будет хранить массив значений (по одному на каждую рукоятку).
<pre>
Implementing a slider1
&lt;div id="mySlider"&gt;&lt;/div&gt;
        &lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
        &lt;script src="devpment-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
 &lt;script src="devopment-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.mouse.js"&gt;&lt;/script&gt;
 &lt;script src="development-bundle/ui/jquery.ui.slider.js"&gt;&lt;/script&gt;
        &lt;script&gt;
			(function($){
				$("#mySlider").slider();
			})(jQuery);
Custom styling 2
&lt;link rel="stylesheet" href="css/sliderTheme.css"&gt;
&lt;div class="background-div"&gt;
&lt;div id="mySlider"&gt;&lt;/div&gt;
&lt;/div&gt;
			(function($){
				$("#mySlider").slider();
			})(jQuery);
			</pre>
Creating a vertical slider 3
Это свойство определяет как будет располагаться ползунок: вертикально или горизонтально. Возможные значения 'horizontal' и 'vertical'.
<pre>
// ------- Работа со свойством orientation ---------
// в момент установки slider на элемент
$("selector").slider({ orientation: 'vertical' });

//получение значения orientation
var orientation = $("selector").slider( "option", "orientation" );
//изменение значения orientation
$("selector").slider( "option", "orientation", 'vertical' );

			(function($){
				var sliderOpts = {
					orientation: "vertical"
				};
				$("#mySlider").slider(sliderOpts);
			})(jQuery);
Minimum and maximum values 4
Соответствует максимальному значению на ползунке.
// ------- Работа со свойством max ---------
// в момент установки slider на элемент
$("selector").slider({ max: 7 });
 
//получение значения max
var max = $("selector").slider( "option", "max" );
//изменение значения max
$("selector").slider( "option", "max", 7 );

Соответствует минимальному значению на ползунке.
// ------- Работа со свойством min ---------
// в момент установки slider на элемент
$("selector").slider({ min: 2 });

//получение значения min
var min = $("selector").slider( "option", "min" );
//изменение значения min
$("selector").slider( "option", "min", 2 );

			(function($){
				var sliderOpts = {
					min: -50,
					max: 50
				};
				$("#mySlider").slider(sliderOpts);
			})(jQuery);
			</pre>
Slider steps 5<br>
Определяет минимальный шаг при перемещении рукоятки ползунка (см. пример "Настройка значений"). Прежде чем задавать этому свойству значение, отличное от 
<pre>
1, убедитесь, что оно кратно величине max-min.
// ------- Работа со свойством step ---------
// в момент установки slider на элемент
$("selector").slider({ step: 20 });

//получение значения step
var step = $("selector").slider( "option", "step" );
//изменение значения step
$("selector").slider( "option", "step", 20 );

			(function($){
				var sliderOpts = {
					step: 25
				};
				$("#mySlider").slider(sliderOpts);
			})(jQuery);
			</pre>
Slider animation 6<br>
Определяет, необходима ли анимация плавного перемещения ползунка, когда пользователь кликает мышью в область ползунка вне области рукоятки. Если анимация нужна, то следует задать в этом параметре время перемещения. Это может быть одно из строковых значений: "slow", "normal" или "fast" (соответствуют 600, 400 и 200 миллисекундам). Или непосредственно количеством миллисекунд (например 1000). Если в параметре animate задать значение true, то это будет соответствовать значению "normal".
<pre>
// ------- Работа со свойством animate ---------
// в момент установки slider на элемент
$("selector").slider({ animate: true });
 
//получение значения animate
var animate = $("selector").slider( "option", "animate" );
//изменение значения animate
$("selector").slider( "option", "animate", true );

			(function($){
				var sliderOpts = {
					animate: true
				};
				$("#mySlider").slider(sliderOpts);
			})(jQuery);
			</pre>
Setting the slider's value 7<br>
Определяет текущее установленное значение ползунка. Если на ползунке находится более одной рукоятки, value отвечает за значение первой из них. Значение всех рукояток (когда их больше одной) находятся в свойстве values.
<pre>
// ------- Работа со свойством value ---------

// в момент установки slider на элемент
$("selector").slider({ value: 37 });
 
//получение значения value
var value = $("selector").slider( "option", "value" );
//изменение значения value
$("selector").slider( "option", "value", 37 );

			(function($){
				var sliderOpts = {
					value: 50
				};
				$("#mySlider").slider(sliderOpts);
			})(jQuery);
			</pre>
Using multiple handles 8
Эта опция активна только когда на ползунке более одной рукоятки. В этом случае, в ней хранится массив со значениями каждой из них.
<pre>
// ------- Работа со свойством values ---------
// в момент установки slider на элемент
$("selector").slider({ values: [1,5] });
 
//получение значения values
var values = $("selector").slider( "option", "values" );
//изменение значения values
$("selector").slider( "option", "values", [1,5] );

			(function($){
				var sliderOpts = {
					values: [25, 75]
				};
				$("#mySlider").slider(sliderOpts);
			})(jQuery);
			</pre>
The range element 9<br>
Определяет, будет ли окрашен на ползунке диапазон значений. Если это свойство установлено вtrue, а на ползунке расположены две рукоятки, то часть ползунка между ними будет окрашена (см. пример "Диапазон значений"). Если на ползунке одна рукоятка, то для того, чтобы окрасить область от минимума до ползунка, нужно указать в range значение "min" Значение "max" следует указать, чтобы окрасить область от ползунка, до максимума.
<pre>
// ------- Работа со свойством range ---------
// в момент установки slider на элемент
$("selector").slider({ range: "min" });
 
//получение значения range
var range = $("selector").slider( "option", "range" );
//изменение значения range
$("selector").slider( "option", "range", "min" );

			(function($){
				var sliderOpts = {
					values: [25, 75],
					range: true
				};
				$("#mySlider").slider(sliderOpts);
			})(jQuery);
A maximum of two handles 10
			(function($){
				var sliderOpts = {
					range: "min"
				};
				$("#mySlider").slider(sliderOpts);
			})(jQuery);
			</pre>
Using slider's event API 11<br>
change Это событие происходит после окончания перетаскивания ползунка или при изменении его значения программно (например с помощью метода .slider("value",[value])). Обработчик этого события будет получать два параметра: event и ui. Используйтеevent.orginalEvent, чтобы определить, как именно было изменено значение: с помощью мыши, клавиатуры или программно. Чтобы узнать окончательное значение ползунка, используйтеui.value, если на ползунке только одна рукоятка и $(this).slider('values', index), чтобы узнать значение рукоятки под номером index (только если рукояток более одной).
<pre>
// обработка события change
$("selector").slider({
   change: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "slidechange", function(event, ui){ ... });

slide The slider's hЭто событие происходит на каждое движении мыши, при перетаскивании рукоятки ползунка.
// обработка события slide
$("selector").slider({
   slide: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "slide", function(event, ui){ ... });

start Это событие происходит, когда пользователь начинает перетаскивать рукоятку ползунка.
// обработка события start
$("selector").slider({
   start: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sliderstart", function(event, ui){ ... });

stop Это событие происходит в момент завершения перетаскивания рукоятки ползунка.
// обработка события stop
$("selector").slider({
   stop: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sliderstop", function(event, ui){ ... });

 &lt;link rel="stylesheet" href="css/sliderTheme2.css"&gt;
			(function($){
				var sliderOpts = {
					start: function() {
						$("#tip").fadeOut(function() {
      						$(this).remove();
    					});
					},
					change: function(e, ui) {
					$("&lt;div /&gt;", {
					"class": "ui-widget-header ui-corner-all",
							id: "tip",
							text: ui.value + "%",
							css: {
								left: e.pageX - 35									}
						}).appendTo("#mySlider");
					}
				};
				$("#mySlider").slider(sliderOpts);
			})(jQuery);
			</pre>
Slider methods 12<br>
Позволяет изменять/получать текущее значение ползунка. Если на ползунке находится более одной рукоятки, value отвечает за значение первой из них. За значение всех рукояток (когда их больше одной) отвечает метод values.
<pre>
&lt;div id="mySlider"&gt;&lt;/div&gt;
   &lt;button type="button" id="setMax"&gt;Set to max value&lt;/button&gt;
	(function($){
		$("#mySlider").slider();
		$("#setMax").click(function() {
		var maxVal = $("#mySlider").slider("option", "max");
		$("#mySlider").slider("value", maxVal);
		});
	})(jQuery);
	</pre>
Slider methods 13<br>
Позволяет изменять/получать значения всех рукояток на ползунке (обращаясь к их значениям по номеру index). Доступно только в случае, когда на ползунке более одной рукоятки. За значение одной рукоятки отвечает метод value.
<pre>
&lt;div id="mySlider"&gt;&lt;/div&gt;
        &lt;button class="preset" id="low"&gt;Preset 1 (low)&lt;/button&gt;
	&lt;button class="preset" id="high"&gt;Preset 2 (high)&lt;/button&gt;
			(function($){
				var sliderOpts = {
					values: [25, 75]
				};
				$("#mySlider").slider(sliderOpts);
				$(".preset").click(function() {
					if (this.id === "low") {
					$("#mySlider").slider("values", 0, 0);
					$("#mySlider").slider("values", 1, 25);
					} else {
					$("#mySlider").slider("values", 0, 75);
					$("#mySlider").slider("values", 1, 100);
					}
				});
			})(jQuery);
audio id="audio" 14
&lt;audio id="audio" src="http://upload.wikimedia.org/wikipedia/en/7/77/Jamiroquai_-_Snooze_You_Lose.ogg"&gt;
	Your browser does not support the audio element.
&lt;/audio&gt;  
&lt;div id="volume"&gt;&lt;/div&gt;
			(function($){
				var audio = $("audio")[0],
					sliderOpts = {
						value: 5,
						min: 0,
						max: 10,
						orientation: "vertical",
						change: function() {
						var vol = $(this).slider("value") / 10;
							audio.volume = vol;
						}
					};
 				audio.volume = 0.5;
				audio.play();
				$("#volume").slider(sliderOpts);
			})(jQuery);
			</pre>
A color slider 15
<pre>
&lt;div id="container" class="ui-widget ui-corner-all ui-widget-content ui-helper-clearfix"&gt;
			&lt;label&gt;R:&lt;/label&gt;&lt;div id="rSlider"&gt;&lt;/div&gt;&lt;br&gt;
			&lt;label&gt;G:&lt;/label&gt;&lt;div id="gSlider"&gt;&lt;/div&gt;&lt;br&gt;
			&lt;label&gt;B:&lt;/label&gt;&lt;div id="bSlider"&gt;&lt;/div&gt;
&lt;div id="colorBox" class="ui-corner-all ui-widget-content"&gt;&lt;/div&gt;
&lt;input id="output" type="text" value="rgb(255,255,255)"&gt;
&lt;label for="output" id="outputLabel"&gt;Color value:&lt;/label&gt;
&lt;/div&gt;
(function($){
		var sliderOpts = {
			min:0,
			max: 255,
			value: 255,
	slide: function() {
		var r = $("#rSlider").slider("value"),
		g = $("#gSlider").slider("value"),
		b = $("#bSlider").slider("value");
	var rgbString = ["rgb(", r, ",", g, ",", b, ")"].join("");
	$("#colorBox").css({ backgroundColor: rgbString });
				$("#output").val(rgbString);
			}
		};
$("#rSlider, #gSlider, #bSlider").slider(sliderOpts);
})(jQuery);
&lt;/script&gt;
</pre>.
The Datepicker Widget 1<br>
Плагин Datepicker позволяет добавить на ваши страницы календарь, который может быть использован для выбора и отображения дат. Плагин обладает множеством настроек, позволяющих использовать календарь для широкого спектра целей (см. примеры использования выше).
<pre>
&lt;label&gt;Enter a date: &lt;/label&gt;&lt;input id="date"&gt;
        &lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
        &lt;script src="devment-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
&lt;script src="devent-bundle/ui/jquery.ui.datepicker.js"&gt;&lt;/script&gt;
			(function($){
				$("#date").datepicker();
			})(jQuery);
			</pre>
Configurable options of the datepicker 2<br>
appendText "" В этом параметре можно задать текст, который будет помещен после текстового поля. Там можно разместить какую-нибудь вспомогательную информацию, например, указать используемый формат.
<pre>
// ------- Работа со свойством appendText ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ appendText: "(yyyy-mm-dd)" });
 
//получение значения appendText
var altFormat = $("selector").datepicker( "option", "appendText" );
//изменение значения appendText
$("selector").datepicker( "option", "appendText", "(yyyy-mm-dd)" );
</pre>
defaultDate null  С помощью этого свойства можно указать, какая дата будет подсвечена при открытии календаря. По умолчанию, такой датой является текущая. Это свойство можно указать задав конкретную дату с помощью javascript-объекта Date, целого числа (на это число дней будет совершен сдвиг относительно текущей даты) или с помощью строки (так же указав сдвиг относительно текущей даты). В строке нужно указать на сколько лет ("y"), месяцев ("m"), недель("w"), дней ("d") нужно сдвинуть дату, например:<br>
<pre>
"+1m +7d" — на месяц и семь дней вперед
"-1y -2w" — на год и две недели назад
// ------- Работа со свойством defaultDate ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ defaultDate: 7 });
 
//получение значения defaultDate
var defaultDate = $("selector").datepicker( "option", "defaultDate" );
//изменение значения defaultDate
$("selector").datepicker( "option", "defaultDate", 7 );
</pre>
showOtherMonths false Если это свойство равно true, то пустое пространство календаря, которое часто образуется в первую и последнюю неделю месяца за счет неполных недель, будет заполнено числами из соседних месяцев. Однако, если при этом свойство selectOtherMonths не будет равно true, то эти даты нельзя будет выбирать.<br>
<pre>
// ------- Работа со свойством showOtherMonths ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ showOtherMonths:true });
 
//получение значения showOtherMonths
var showOtherMonths = $("selector").datepicker( "option", "showOtherMonths" );
//изменение значения showOtherMonths
$("selector").datepicker( "option", "showOtherMonths", true );

			(function($){
				var pickerOpts = {
					appendText: "(mm/dd/yy)",
					defaultDate: "+5",
					showOtherMonths: true
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
			</pre>
3 maxDate<br>
maxDate null С помощью этого свойства можно указать наибольшую дату, которую можно выбрать (более поздние даты окажутся не выбираемыми). Это свойство можно указать задав конкретную дату с помощью javascript-объекта Date, целого числа (на это число дней будет совершен сдвиг относительно текущей даты) или с помощью строки (так же указав сдвиг относительно текущей даты). В строке нужно указать на сколько лет ("y"), месяцев ("m"), недель("w"), дней ("d") нужно сдвинуть дату, например:
<pre>
"+1m +7d" — на месяц и семь дней вперед
"-1y -2w" — на год и две недели назад
// ------- Работа со свойством maxDate ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ maxDate: 7 });
 
//получение значения maxDate
var maxDate = $("selector").datepicker( "option", "maxDate" );
//изменение значения maxDate
$("selector").datepicker( "option", "maxDate", 7 );

			(function($){
				var pickerOpts = {
					minDate: new Date(),
					maxDate: "+10"
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
			</pre>
4 changeMonth<br>
changeMonth Если это свойство включено, то в календаре появляется выпадающий список с месяцами для быстрого перехода между ними.
<pre>
// ------- Работа со свойством changeMonth ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ changeMonth: true});
 
//получение значения changeMonth
var changeMonth = $("selector").datepicker( "option", "changeMonth" );
//изменение значения changeMonth
$("selector").datepicker( "option", "changeMonth", true);

changeYear Если это свойство включено, то в календаре появляется выпадающий список с годами для быстрого перехода между ними. Задать границы указанных в данном списке лет, воспользуйтесь свойством yearRange (см. его описание ниже).
// ------- Работа со свойством changeYear ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ changeYear: true});
 
//получение значения changeYear
var changeYear = $("selector").datepicker( "option", "changeYear" );
//изменение значения changeYear
$("selector").datepicker( "option", "changeYear", true);

			(function($){
				var pickerOpts = {
					changeMonth: true,
					changeYear: true
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
			</pre>
5 yearRange<br>
Определяет диапазон лет, которые окажутся в выпадающем списке выбора года (включается с помощью свойства changeYear). Это свойство можно задать относительно текущего года в формате "-nn:+nn", либо относительно отображаемого календарем года, в формате "c-nn:+c+nn", либо конкретным диапазоном дат: "nnnn:nnnn". Указанные варианты можно комбинировать: "nnnn:+nn". Кроме указанных в этом свойстве ограничений, на диапазон дат в выпадающем списке даты будет влиять заданные максимальная и минимальная дата (свойстваminDate и maxDate).
<pre>
// ------- Работа со свойством yearRange ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ yearRange:'2000:2010' });
 
//получение значения yearRange
var yearRange = $("selector").datepicker( "option", "yearRange" );
//изменение значения yearRange
$("selector").datepicker( "option", "yearRange", '2000:2010' );

			(function($){
				var pickerOpts = {
					changeMonth: true,
					changeYear: true,
					yearRange: "-25:+25"
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
			</pre>
6 showButtonPanel<br>
Определяет, нужно ли отображать панель с дополнительными кнопками календаря (см. пример "Дополнительные кнопки" выше).
<pre>
// ------- Работа со свойством showButtonPanel ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ showButtonPanel:true });
 
//получение значения showButtonPanel
var showButtonPanel = $("selector").datepicker( "option", "showButtonPanel" );
//изменение значения showButtonPanel
$("selector").datepicker( "option", "showButtonPanel", true );

			(function($){
				var pickerOpts = {
					showButtonPanel: true
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
			</pre>
7  showOn<br>
Определяет, в ответ на какое действие будет открываться календарь. Возможные значения: "focus" (получение фокуса текстовым полем), "button" (нажатие на вспомогательную кнопку), "both" (в обоих случаях). В двух последних значениях, вспомогательная кнопка будет добавлена автоматически. Задать изображение для кнопки можно в свойстве buttonImage.
<pre>
// ------- Работа со свойством showOn ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ showOn:"both" });
 
//получение значения showOn
var showOn = $("selector").datepicker( "option", "showOn" );
//изменение значения showOn
$("selector").datepicker( "option", "showOn", "both" );

			(function($){
				var pickerOpts = {
					showOn: "button"
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
			</pre>
8  buttonText<br>
Этот параметр определяет текст на кнопке открытия календаря. Задавать этот параметр имеет смысл, только если включено открытие календаря на нажатие кнопки (свойство showOn равно "button" или "both"). Если при этом, для кнопки задано изображение (свойство buttonImage), то текст на ней отображаться не будет, но будет появляться в качестве подсказки при наведении курсора на кнопку.
<pre>
// ------- Работа со свойством buttonText ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ buttonText: "Открыть календарь" });
 
//получение значения buttonText
var buttonText = $("selector").datepicker( "option", "buttonText" );
//изменение значения buttonText
$("selector").datepicker( "option", "buttonText", "Открыть календарь" );

			(function($){
				var pickerOpts = {
					showOn: "button",
					buttonText: "Open Picker"
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
			</pre>
9  buttonImage<br>
Задавать этот параметр имеет смысл, только если включено открытие календаря на нажатие кнопки (свойство showOn равно "button" или "both"). В этом случае, в параметре buttonImageможно задать адрес картинки, которая окажется на вспомогательной кнопке. Если при этом, для кнопки задан еще и текст, то он не будет отображен на кнопке, но будет появляться в качестве подсказки, при наведении курсора на кнопку.
Включив свойство buttonImageOnly, вы скроете тело кнопки, оставив видной только заданную картинку.
<pre>
// ------- Работа со свойством buttonImage ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ buttonImage: '/images/datepicker.gif' });
 
//получение значения buttonImage
var buttonImage = $("selector").datepicker( "option", "buttonImage" );
//изменение значения buttonImage
$("selector").datepicker( "option", "buttonImage", '/images/datepicker.gif' );

			(function($){
				var pickerOpts = {
					showOn: "button",
					buttonText: "Open Picker",
					buttonImage: "img/cal.png"
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
			</pre>
10  buttonImageOnly<br>
Задавать этот параметр имеет смысл, только если включено открытие календаря на нажатие кнопки (свойство showOn равно "button" или "both") и для кнопки задано изображение (параметрbuttonImage). Тогда, если buttonImageOnly равен true, то тело кнопки отображаться не будет, а на ее месте будет только заданное изображение.
<pre>
// ------- Работа со свойством buttonImageOnly ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ buttonImageOnly: true });
 
//получение значения buttonImageOnly
var buttonImageOnly = $("selector").datepicker( "option", "buttonImageOnly" );
//изменение значения buttonImageOnly
$("selector").datepicker( "option", "buttonImageOnly", true );

			(function($){
				var pickerOpts = {
					showOn: "button",
					buttonText: "Open Picker",
					buttonImage: "img/cal.png",
					buttonImageOnly: true
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
			</pre>
11  duration<br>
В этом свойстве указывается продолжительность сворачивания/разворачивания календаря. Эту величину можно указать количеством миллисекунд или одним из трех текстовых значений: "slow", "normal", "fast" (600, 400, 200 миллисекунд). Тип анимации, применяемый при сворачивании/разворачивании календаря задается в свойстве showAnim.
<pre>
// ------- Работа со свойством duration ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ duration: 700 });
 
//получение значения duration
var duration = $("selector").datepicker( "option", "duration" );
//изменение значения duration
$("selector").datepicker( "option", "duration", 700 );

			(function($){
				var pickerOpts = {
					duration: "fast"
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
		&lt;/script&gt;
		</pre>
12 showOptions<br>
showAnim Определяет тип UI-анимации, с которой будет появляться и исчезать календарь. Возможные значения — имя любого UI эффекта или пустая строка, если анимацию использовать не нужно.
<pre>
// ------- Работа со свойством showAnim ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ showAnim:"fold" });
 
//получение значения showAnim
var showAnim = $("selector").datepicker( "option", "showAnim" );
//изменение значения showAnim
$("selector").datepicker( "option", "showAnim", "fold" );

showOptions Если для открытия/закрытия календаря в свойстве showAnim задана одна их UI-анимаций, то в описываемом свойстве можно задать ее опции.
// ------- Работа со свойством showOptions ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ showOptions:{direction:'up'} });
 
//получение значения showOptions
var showOptions = $("selector").datepicker( "option", "showOptions" );
//изменение значения showOptions
$("selector").datepicker( "option", "showOptions", {direction:'up'} );

&lt;script src="devpment-bundle/ui/jquery.effects.core.js"&gt;&lt;/script&gt;
        &lt;script src="devt-bundle/ui/jquery.effects.drop.js"&gt;&lt;/script&gt;
			(function($){
				var pickerOpts = {
					showAnim: "drop",
					showOptions: { direction: "up" }
				};

				$("#date").datepicker(pickerOpts);
			})(jQuery);
			</pre>
13 numberOfMonths<br>
Значение этого поля, определяет количество одновременно отображаемых месяцев календаря. Это свойство может быть задано целым числом (количество месяцев расположенных в строку) или массивом из двух элементов (количества строк и столбцов с месяцами).
<pre>
// ------- Работа со свойством numberOfMonths ---------
// в момент установки datepicker на элемент
$("selector").datepicker({numberOfMonths: [2, 3]});
 
//получение значения numberOfMonths
var numberOfMonths = $("selector").datepicker( "option", "numberOfMonths" );
//изменение значения numberOfMonths
$("selector").datepicker( "option", "numberOfMonths", [2, 3]);

			(function($){
				var pickerOpts = {
					numberOfMonths: 3
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
			</pre>
14 Changing the date format<br>
Это свойство определяет текстовый формат, в котором должна быть задана дата.
<pre>
// ------- Работа со свойством dateFormat ---------
// в момент установки datepicker на элемент
$("selector").datepicker({ dateFormat: "yy-mm-dd"});
 
//получение значения dateFormat
var dateFormat = $("selector").datepicker( "option", "dateFormat" );
//изменение значения dateFormat
$("selector").datepicker( "option", "dateFormat", "yy-mm-dd" );

			(function($){
				var pickerOpts = {
					dateFormat: "d MM yy"
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
Option value 			Short-hand 		Formatted as...
$.datepicker.ATOM 		"yy-mm-dd" 		2011-04-13
$.datepicker.COOKIE 	"D, dd M y" 		Wed, 13 Apr 2011
$.datepicker.ISO_8601 	"yy-mm-dd" 		2011-04-13
$.datepicker.RFC_822 	"D, d M y"		 Wed, 13 Apr 11
$.datepicker.RFC_850 	"DD, dd-M-y" 	Wednesday, 13-Apr-11
$.datepicker.RFC_1036 	"D, d M y"		 Wed, 13 Apr 11
$.datepicker.RFC_1123 	"D, d M yy" 		Wed, 13 Apr 2011
$.datepicker.RFC_2822 	"D, d M yy" 		Wed, 13 Apr 2011
$.datepicker.RSS 		"D, d M y"		Wed, 13 Apr 11
$.datepicker.TIMESTAMP @ (UNIX timestamp) 	 2011-04-13
$.datepicker.W3C 		 "yy-mm-dd" 		Wed, 13 Apr 11

Updating an additional input element
var pickerOpts = {
altField: "#alt",
altFormat: $.datepicker.TIMESTAMP
};</pre>
15 dateFormat: "Selecte'd': d MM yy"<br>
<pre>
 &lt;script src="devment-bundle/ui/jquery.effects.core.js"&gt;&lt;/script&gt;
&lt;script src="devment-bundle/ui/jquery.effects.drop.js"&gt;&lt;/script&gt;
			(function($){
				var pickerOpts = {
					dateFormat: "Selecte'd': d MM yy"
				};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
16 dateFormat: $.datepicker.ATOM
&lt;script src="devment-bundle/ui/jquery.effects.core.js"&gt;&lt;/script&gt;
        &lt;script src="devt-bundle/ui/jquery.effects.drop.js"&gt;&lt;/script&gt;
			(function($){
				var pickerOpts = {
					dateFormat: $.datepicker.ATOM					};
				$("#date").datepicker(pickerOpts);
			})(jQuery);
17  TIMESTAMP
&lt;script src="devment-bundle/ui/jquery.effects.core.js"&gt;&lt;/script&gt;
&lt;script src="devment-bundle/ui/jquery.effects.drop.js"&gt;&lt;/script&gt;
        &lt;script&gt;
			(function($){
				var pickerOpts = {
					altField: "#alt",
					altFormat: $.datepicker.TIMESTAMP							};
			$("#date").datepicker(pickerOpts);
			})(jQuery);
		&lt;/script&gt;
18 Localization
&lt;script src="development-bundle/ui/i18n/jquery.ui.datepicker-fr.js"&gt;&lt;/script&gt;
        &lt;script&gt;
			(function($){
				$("#date").datepicker();
			})(jQuery);
		&lt;/script&gt;
19  For example, to implement a Lolcat datepicker, change the configuration object of datePicker6.html to the following:
 &lt;script&gt;
	(function($){
			var pickerOpts = {
		closeText: "Kthxbai",
			currentText: "Todai",
			nextText: "Fwd",
			prevText: "Bak",
monthNames: ["January", "February", "March", "April", "Mai", "Jun", "July", "August", "Septembr", "Octobr", "Novembr", "Decembr"],
monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
dayNames: ["Sundai", "Mondai", "Tuesdai", "Wednesdai", "Thursdai", "Fridai", "Katurdai"],
dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Kat"],
	dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Ka"],
					dateFormat: 'dd/mm/yy',
					firstDay: 1,
					isRTL: false,
					showButtonPanel: true
			};
		$("#date").datepicker(pickerOpts);
	})(jQuery);
&lt;/script&gt;
</pre>
20 Callback properties<br>
setDate  Устанавливает дату date в качестве выбранной. Параметр date может быть задана или объектом Date или строкой, содержащей дату в формате, определенным в свойстве dateFormat..
<pre>
&lt;label&gt;Enter a date: &lt;/label&gt;&lt;input id="date"&gt;
        &lt;select id="language"&gt;
            &lt;option id="en-GB"&gt;English&lt;/option&gt;
            &lt;option id="ar"&gt;Arabic&lt;/option&gt;
            &lt;option id="uk"&gt;Ukrainian&lt;/option&gt;
            &lt;option id="zh-TW"&gt;Taiwanese&lt;/option&gt;
        &lt;/select&gt;
Next link to the i18n.js roll-up file as follows:
        &lt;script src="development-bundle/ui/i18n/jquery-ui-i18n.js"&gt;&lt;/script&gt;
Now change the final &lt;script&gt; element so that it appears as follows:
			(function($){
				var pickerOpts = {
					beforeShow: function() {
	var lang = $(":selected", $("#language")).attr("id");
						$.datepicker.setDefaults($.datepicker.regional[lang]);
					}
				};
				$("#date").datepicker(pickerOpts);
				$.datepicker.setDefaults($.datepicker.regional['']);
			})(jQuery);
			</pre>
21 Utility methods Selecting a date programmatically<br>
<pre>
			(function($){
				$("#date").datepicker();
				$("#select").click(function() {
					$("#date").datepicker("setDate", "+7");
				});
			})(jQuery);
			</pre>
22  Date picking methods  updateDate
<pre>
			(function($){
				function updateDate(date) {
					$("#date").val(date);
				}
		$("#date").focus(function() {
			$(this).datepicker("dialog", null, updateDate);
		});
	})(jQuery);
	</pre>
23  Showing the datepicker in a dialog box
<pre>
&lt;div id="bookingForm" class="ui-widget ui-corner-all"&gt;
			&lt;div class="ui-widget-header ui-corner-top"&gt;
				&lt;h2&gt;Booking Form&lt;/h2&gt;
			&lt;/div&gt;
			&lt;div class="ui-widget-content ui-corner-bottom"&gt;
		&lt;label&gt;Appointment date:&lt;/label&gt;&lt;input id="date"&gt;
			&lt;/div&gt;
&lt;/div&gt;
&lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
&lt;script src="devent-bundle/ui/jquery.ui.datepicker.js"&gt;&lt;/script&gt;

	(function($){
		var months = [],
		days = [];
$.getJSON("http://www.danwellman.co.uk/bookedDates.php?jsoncallback=?", function(data) {
		for (var x = 0; x &lt; data.dates.length; x++) {
			months.push(data.dates[x].month);
			days.push(data.dates[x].day);
			}
		});
function addDates(date) {
		if (date.getDay() == 0 || date.getDay() == 6) {
			return [false, ""];
		}
for (var x = 0; x &lt; days.length; x++) {
if (date.getMonth() == months[x] - 1 && date.getDate() == days[x]) {
return [false, "preBooked_class"];						}
		}
		return [true, ""];
	}
	var pickerOpts = {
		beforeShowDay: addDates,
		minDate: "+1"
		};
	$("#date").datepicker(pickerOpts);
})(jQuery);
</pre>
Progressbar<br>
Плагин Progressbar позволяет превращать блочные элементы (обычно div'ы) в индикаторы выполнения, которые отображают прогресс выполнения какой-либо задачи. Естественно, связывать выполнение задачи с соответствующим отображением в прогрессбаре, веб программист должен самостоятельно.
Плагин рассчитан на использование в хорошо отлаженных системах. Это значит, что устанавливаемые значения будут находится строго в диапазоне от 0 до 100 и будут иметь целочисленный тип. Кроме того, при изменении значений, они должны возрастать! Если система не может однозначно определить стадию выполнения задачи, лучше уведомлять пользователя сообщением "выполняется" и т.п.
<pre>
1 The default progressbar implementation
&lt;div id="myProgressbar"&gt;&lt;/div&gt;
&lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
 &lt;script src="development-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
&lt;script src="devnt-bundle/ui/jquery.ui.progressbar.js"&gt;&lt;/script&gt;
			(function($){
				$("#myProgressbar").progressbar();
			})(jQuery);
			</pre>
disabled<br>
Останавливает\возобновляет работу плагина Progressbar на выбранных элементах.
<pre>
// ------- Работа со свойством disabled ---------
// в момент установки progressbar на элемент
$("selector").progressbar({ disabled: true });
 
//получение значения disabled
var disabled = $("selector").progressbar( "option", "disabled" );
//изменение значения disabled
$("selector").progressbar( "option", "disabled", true );

2  Setting progressbar's value
Определяет текущее значение индикатора выполнения (должно быть в диапазоне от 0 до 100).
// ------- Работа со свойством value ---------
// в момент установки progressbar на элемент
$("selector").progressbar({ value: 37 });
 
//получение значения value
var value = $("selector").progressbar( "option", "value" );
//изменение значения value
$("selector").progressbar( "option", "value", 37 );

			(function($){
				var progressOpts = {
					value: 50
				};
			$("#myProgressbar").progressbar(progressOpts);
			})(jQuery);
			</pre>
3  Progressbar's event API<br>
change Это событие происходит в момент изменения значения индикатора выполнения.
<pre>
// обработка события change
$("selector").progressbar({
   change: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "progressbarchange", function(event, ui){ ... });

(function($){
var progress = $("#myProgressbar"),
	progressOpts = {
	change: function() {
			var val = $(this).progressbar("option", "value");
							if (!$("#value").length) {
								$("&lt;span /&gt;", {
									text: val + "%",
									id: "value",
									css: {
										float: "right",
										marginTop: -28,
										marginRight: 10
									}
								}).appendTo(progress);
							} else {
							$("#value").text(val + "%");
							}
						}
					};
progress.progressbar(progressOpts);
	$("#increase").click(function() {
		var currentVal = progress.progressbar("option", "value"),
		newVal = currentVal + 10;
		progress.progressbar("option", "value", newVal);
				});
			})(jQuery);
		&lt;/script&gt;
		</pre>
4 Progressbar methods<br>
Этот метод позволяет изменять/получать свойства плагина progressbar. Если необходимо изменить сразу несколько свойств, воспользуйтесь следующей формой этой функции —.progressbar("option", options), где options это объект в формате{optionName1:value1, optionName2:value2, ...}.
<pre>
(function($){
var progress = $("#myProgressbar");
progress.progressbar();
$("#increase").click(function() {
	var currentVal = progress.progressbar("option", "value"),
			newVal = currentVal + 10;
			progress.progressbar("value", newVal);
				if (!$("#value").length) {
					$("&lt;span /&gt;", {
						text: newVal + "%",
							id: "value",
							css: {
								float: "right",
								marginTop: -28,
								marginRight: 10
							}
						}).appendTo(progress);
					} else {
						$("#value").text(val + "%");
					}
				});
			})(jQuery);
		&lt;/script&gt;
5 User initiated progress
        &lt;link rel="stylesheet" href="css/progressTheme.css"&gt;
	&lt;div class="form-container ui-helper-clearfix ui-corner-all"&gt;
			&lt;h1&gt;Registration Form&lt;/h1&gt;
			&lt;p&gt;Progress:&lt;/p&gt;
			&lt;div id="myProgressbar"&gt;&lt;/div&gt;
            &lt;label id="amount"&gt;0%&lt;/label&gt;
			&lt;form action="serverScript.php"&gt;
                &lt;div class="form-panel"&gt;
                    &lt;h2&gt;Personal Details&lt;/h2&gt;
&lt;fieldset class="ui-corner-all"&gt;
                        &lt;label&gt;Name:&lt;/label&gt;&lt;input type="text"&gt;
                        &lt;label&gt;D.O.B:&lt;/label&gt;&lt;input type="text"&gt;
&lt;label&gt;Choose password:&lt;/label&gt;&lt;input type="password"&gt;
&lt;label&gt;Confirm password:&lt;/label&gt;&lt;input type="password"&gt;
                    &lt;/fieldset&gt;
                &lt;/div&gt;
                &lt;div class="form-panel ui-helper-hidden"&gt;
&lt;h2&gt;Contact Details&lt;/h2&gt;
&lt;fieldset class="ui-corner-all"&gt;
&lt;label&gt;Email:&lt;/label&gt;&lt;input type="text"&gt;
&lt;label&gt;Telephone:&lt;/label&gt;&lt;input type="text"&gt;
&lt;label&gt;Address:&lt;/label&gt;&lt;textarea rows="3" cols="25"&gt; &lt;/textarea&gt;
&lt;/fieldset&gt;
&lt;/div&gt;
                &lt;div class="form-panel ui-helper-hidden"&gt;
                    &lt;h2&gt;Registration Complete&lt;/h2&gt;
                    &lt;fieldset class="ui-corner-all"&gt;
                        &lt;p&gt;Thanks for registering!&lt;/p&gt;
                    &lt;/fieldset&gt;
                &lt;/div&gt;
            &lt;/form&gt;
&lt;button id="next"&gt;Next&lt;/button&gt;&lt;button id="back" disabled="disabled"&gt;Back&lt;/button&gt;
&lt;/div&gt;
(function($){
var prog = $("#myProgressbar"),
progressOpts = {
	change: function() {
		prog.next().text(prog.progressbar("value") + "%");
		}
	};
		prog.progressbar(progressOpts);
		$("#next, #back").click(function() {
		$("button").attr("disabled", true);
	if (this.id === "next") {
prog.progressbar("option", "value", prog.progressbar("option", "value") + 50);
	$("form").find("div:visible").fadeOut().next().fadeIn(function(){
		$("#back").attr("disabled", false);
		if (!$("form").find("div:last").is(":visible")) {
		$("#next").attr("disabled", false);
	}
	});
	} else {
prog.progressbar("option", "value", prog.progressbar("option", "value") - 50);
$('form').find("div:visible").not(".buttons").fadeOut().prev().fadeIn(
function()  {
$("#next").attr("disabled", false);
			if (!$("form").find("div:first").is(":visible")) {
				$("#back").attr("disabled", false);
				}
			});
		}
	});
})(jQuery);
</pre>
6   Rich uploads with progressbar
<pre>
        &lt;link rel="stylesheet" href="css/progressTheme2.css"&gt;
		&lt;h2&gt;AJAX File Upload&lt;/h2&gt;
        &lt;input type="file" id="file" /&gt;
        &lt;div id="myProgressbar"&gt;&lt;/div&gt;
			(function($){
				var prog = $("#myProgressbar"),
				inputFile = $("#file"),
				progressOpts = {
				complete: function() {
				$("#filename").text("Complete!");
			}
		}
			inputFile.change(function() {
			prog.progressbar(progressOpts);
var files = inputFile.attr("files"),
		file = files[0],
		xhr = new XMLHttpRequest();
xhr.upload.onprogress = function updateProgress(e) {
	var loaded = (e.loaded / e.total);
prog.progressbar("value", Math.round(loaded * 100));
				    }
					xhr.upload.onload = function() {
						prog.progressbar("value", 100);
					}
					$("&lt;apan /&gt;", {
						id: "filename",
						text: file.fileName
					}).insertAfter(prog);
			    xhr.open("POST", "progressUpload.php");
			xhr.sendAsBinary(file.getAsBinary());
		});
	})(jQuery);
	</pre>
Autocomplete Widgets<br>
Плагин Autocomplete помогает пользователю заполнять текстовые поля, предлагая подходящие варианты по первым набранным им символам. Чтобы выбрать вариант из предоставленных подсказок можно воспользоваться клавиатурой (клавиши стрелок и enter) или мышью (кликнув по нужному варианту).
Данные для автозаполнения могут быть заданы тремя способами:
Массивом (это будет хорошим решением, если количество вариантов не превышает 50-100 элементов).<br>
URL страницы, на которую будет автоматически отправляться ajax-запрос при каждом изменении вводимого текста.<br>
Функцией. В этом случае поиск подходящих элементов нужно будет осуществить самостоятельно (наиболее гибкий вариант).
Во всех случаях, источник данных указывается в свойстве source.<br>
Массив<br>
В этом случае, задается либо массив строк, либо массив объектов, которые должны содержать поля label, value или оба. Если заданы оба поля, то в списке автозаполнения будут показываться поля из label, а при выборе любого из них, в текстовое поле будет помещен соответствующее значение value. Если задать массив объектов только с label или только с value, то эти значения будут отображаться и в предложенном списке и вставляться при выборе:
<pre>
// массив строк
var availableTags = [
  "Испанский",
  "Итальянский",
  "Английский",
  "Китайский",
  "Русский"
];
 
// или массив объектов
availableTags = [
  {label:"Испанский", value:"es"},
  {label:"Итальянский", value:"it"},
  {label:"Английский", value:"en"},
  {label:"Китайский", value:"zh"},
  {label:"Русский", value:"ru"}
];
 
// задаем массив в качестве источника слов для автозаполнения.
$( "#tags" ).autocomplete({source: availableTags});
</pre>
URL страницы<br>
Если в свойстве source задать строку с url-адресом, то при изменении содержимого текстового поля, по этому адресу будет автоматически производиться ajax-запрос на сервер. Серверу будет передаваться содержимое текстового поля в параметре term. Естественно, обработку данных на сервере вы должны будете организовать самостоятельно (скорее всего, это будет заключаться в поиске подходящих слов по подстроке, в вашей базе данных). Ответ от сервера должен соответствовать тому же формату, что и в предыдущем случае:
<pre>
// javascript-код на странице
$("#tags").autocomplete({
  source: "search.php", // url-адрес
  minLength: 2 // минимальное количество для совершения запроса
});
&lt;/source&gt;
Так может выглядеть код на стороне сервера (страница search.php)
&lt;source lang="php"&gt;
// допустим, функция findAutocomplete ищет слова (например в БД) по
// заданной подстроке и возвращает массив с подходящими словами.
$elements = findAutocomplete($_GET['term']);
$s = "[".implode(",", $elements)."]";
echo $s;
// в итоге, ответ будет содержать примерно следующее  ["finded_1", "finded_2"
</pre>
Функция<br>
Это наиболее гибкое из возможных решений. Заданная функция будет получать два параметра:
Первый — объект запроса, который будет содержать одно поле: term. Оно будет содержать текущее содержимое текстового поля, для которого нужно подобрать элементы автозаполнения.
Вторым параметром будет задана функция, которую будет необходимо вызвать и передать ей список подходящих элементов автозаполнения. Он должен соответствовать тому же формату, что и в предыдущих случаях (массив строк или массив объектов). Необходимо отметить, что эта функция должна быть вызвана при любых обстоятельствах, даже если при подборе элементов автозаполнения произошла ошибка.<br>
Рассмотрим пример, в котором в качестве свойства source задается функция, запрашивающая данные для автозаполнения на стороннем сервере (кроссдоменный запрос). Этот пример реализован выше под заголовком "Подгрузка удаленных данных".
<pre>
$( "#tags" ).autocomplete({
      source: function(request, response){
        // организуем кроссдоменный запрос
        $.ajax({
          url: "http://ws.geonames.org/searchJSON",
          dataType: "jsonp",
          // параметры запроса, передаваемые на сервер (последний - подстрока для поиска):
          data:{
            featureClass: "P",
            style: "full",
            maxRows: 12,
            name_startsWith: request.term
          },
          // обработка успешного выполнения запроса
          success: function(data){
            // приведем полученные данные к необходимому формату и передадим в предоставленную функцию response
            response($.map(data.geonames, function(item){
              return{
                label: item.name + (item.adminName1 ? ", " + item.adminName1 : "") + ", " + item.countryName,
                value: item.name
              }
            }));
          }
        });
      },
      minLength: 2
    });

&lt;link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.9.custom.css"&gt;
  &lt;label&gt;Enter your city:&lt;/label&gt;&lt;input id="city"&gt;
&lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.position.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.autocomplete.js"&gt;&lt;/script&gt;
</pre>
Определяет источник элементов автозаполнения.
<pre>
// ------- Работа со свойством source ---------
// в момент установки autocomplete на элемент
$("selector").autocomplete({ source:["c++", "java", "php"] });
 
//получение значения source
var source = $("selector").autocomplete( "option", "source" );
//изменение значения source
$("selector").autocomplete( "option", "source", ["c++", "java", "php"] );

			(function($){
				var autoOpts = {
					source: [
						"Aberdeen",
						"Armagh",
						"Bangor",
						"York"
					]
				};
				$("#city").autocomplete(autoOpts);
			})(jQuery);
2  Using an array of objects as the data source
			(function($){
				var autoOpts = {
					source: [
						{ value: "AB", label: "Aberdeen" },
						{ value: "AR", label: "Armagh" },
						{ value: "BA", label: "Bangor" },
					]
				};
				$("#city").autocomplete(autoOpts);
			})(jQuery);
			</pre>
3 Configuring minimum length<br>
Определяет минимальное количество символов, при котором будет осуществлен поиск подходящих элементов автозаполнения. Если вы берете данные для автозаполнения у сервера, увеличение этого параметра (обычно до 2 или 3) снизит количество запросов на сервер, почти не повлияв на удобство использования (вряд-ли можно подобрать удачные варианты по одной букве).
<pre>
// ------- Работа со свойством minLength ---------
// в момент установки autocomplete на элемент
$("selector").autocomplete({ minLength: 2 });
 
//получение значения minLength
var minLength = $("selector").autocomplete( "option", "minLength" );
//изменение значения minLength
$("selector").autocomplete( "option", "minLength", 2 );

			(function($){
				var autoOpts = {
					minLength: 2,
					source: [
						"Aberdeen",
						"Armagh",
						"Bangor",
					]
				};
		$("#city").autocomplete(autoOpts);
	})(jQuery);
	</pre>
4 Appending the suggestion list to an alternative element

Определяет, в какой элемент будет вставлен список автозаполнения.
<pre>
// ------- Работа со свойством appendTo ---------
// в момент установки autocomplete на элемент
$("selector").autocomplete({ appendTo:"#someElem" });
 
//получение значения appendTo
var appendTo = $(".selector").autocomplete( "option", "appendTo" );
//изменение значения appendTo
$("selector").autocomplete( "option", "appendTo", "#someElem" );

    	&lt;div id="container"&gt;
	    	&lt;label&gt;Enter your city:&lt;/label&gt;&lt;input id="city"&gt;
        &lt;/div&gt;
 &lt;script&gt;
			(function($){
				var autoOpts = {
					appendTo: "#container",
					source: [
						"Aberdeen",
						"Armagh",
						]
			};
		$("#city").autocomplete(autoOpts);
})(jQuery);
</pre>
5  Autocomplete events select A suggestion from the list is selected
Происходит при выборе элемента автозаполнения. Стандартное действие на это событие — перенос текста выбранного элемента в текстовое поле, а затем закрытие списка автозаполнения. Если обработчик события select вернет false, то переноса текста не произойдет, однако список все равно будет закрыт. Очередность событий при выборе одного из элементов: select, close, а затем change.
<pre>
// обработка события select
$("selector").autocomplete({
   select: function(event, ui) { /*ui.item будет содержать выбранный элемент*/ }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "autocompleteselect", function(event, ui){ ... });

(function($){
var autoOpts = {
	source: [
	{ value: "AR", label: "Armagh", population: 54263 },
	{ value: "BA", label: "Bangor", population: 21735 },
	{ value: "BA", label: "Bath", population: 83992 },
			],
select: function(e, ui) {
if ($("#pop").length) {
$("#pop").text(ui.item.label + "'s population is: " + ui.item.population);
		} else {
		$("&lt;p&gt;&lt;/p&gt;", {
		id: "pop",
text: ui.item.label + "'s population is: " + ui.item.population
			}).insertAfter("#city");
		}
	}
};
	$("#city").autocomplete(autoOpts);
})(jQuery);
</pre>
focus Происходит при выделении одного из элементов автозаполнения. Когда это событие происходит из-за нажатия на клавиши клавиатуры ↓ или ↑ (кроме этого, событие focus может происходить при наведении курсора на элементы), текст выделенного элемента оказывается в текстовом поле. Если обработчик события focus возвратит false, то замены текста в текстовом поле не произойдет, однако выделения элемента это не отменит.
<pre>
// обработка события focus
$("selector").autocomplete({
   focus: function(event, ui) {  /*ui.item будет содержать выделенный элемент*/ }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "autocompletefocus", function(event, ui){ ... });

create Событие create происходит в момент инициализации autocomplete на элементе.
// обработка события create
$("selector").autocomplete({
  create: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "autocompletecreate", function(event, ui){ ... });

search Событие search происходит до того, как начинается поиск подходящих элементов, но после того, как закончится задержка (см. свойство delay). Если обработчик этого события вернет false, то поиск элементов для автозаполнения будет отменен.
// обработка события search
$("selector").autocomplete({
   search: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "autocompletesearch", function(event, ui){ ... });

open Событие open происходит в момент открытия списка с элементами автозаполнения.
// обработка события open
$("selector").autocomplete({
   open: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "autocompleteopen", function(event, ui){ ... });

close Происходит при закрытии списка автозаполнения. Очередность событий при выборе одного из элементов: select, close, а затем change.
// обработка события close
$("selector").autocomplete({
   close: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "autocompleteclose", function(event, ui){ ... });
</pre>
change Событие change происходит при выборе элемента автозаполнения, уже после закрытия всего списка. То есть, очередность событий при выборе одного из элементов: select, close, а затем change.
<pre>
// обработка события change
$("selector").autocomplete({
   change: function(event, ui) { /*ui.item будет содержать выбранный элемент*/ }
});

// еще один способ (используя метод bind)
$("selector").bind( "autocompletechange", function(event, ui){ ... });
</pre>
6 Working with remote data sources
<pre>
(function($){
var autoOpts = {
	source: "http://danwellman.co.uk/countries.php?callback=?"
		};
		$("#country").autocomplete(autoOpts);
})(jQuery);
7 Using a function as the value of the source option
 &lt;link rel="stylesheet" href="css/autocompleteTheme.css"&gt;
&lt;div id="formWrap"&gt;
&lt;form id="messageForm" action="#"&gt;
&lt;fieldset&gt;
	&lt;legend&gt;New message form&lt;/legend&gt;
	&lt;span&gt;New Message&lt;/span&gt;
           &lt;div class="inner-form ui-helper-clearfix"&gt;
	&lt;label&gt;To:&lt;/label&gt;
	&lt;div id="toList" class="ui-helper-clearfix"&gt;
	&lt;input id="to"&gt;
                  &lt;input id="emails" type="hidden"&gt;
	&lt;/div&gt;
&lt;label&gt;Message:&lt;/label&gt;
&lt;textarea id="message" name="message" rows="2" cols="50"&gt;&lt;/textarea&gt;
            &lt;/div&gt;
           &lt;div class="buttons ui-helper-clearfix"&gt;
                    	&lt;button type="submit"&gt;Send&lt;/button&gt;
			&lt;a href="#" title="Cancel"&gt;Cancel&lt;/a&gt;
          &lt;/div&gt;
&lt;/fieldset&gt;
&lt;/form&gt; &lt;/div&gt;
			(function($){
	var autoOpts = {
	source: function(req, resp){

	//request data
					$.getJSON("http://danwellman.co.uk/contacts.php?callback=?", req, function(data) {

//create array for response objects
	var suggestions = [];

	//process response
	$.each(data, function(i, val){
	var obj = {};
	obj.value = val.name;
	obj.email = val.email;
	suggestions.push(obj);
	});

	//pass array to callback
	resp(suggestions);
	});
},
	select: function(e, ui) {
	//create formatted email
			var emailList = $("#emails"),
			emails = emailList.val().split(","),
			span = $("&lt;span&gt;&lt;/span&gt;", {
			text: ui.item.value,
			data: {"email": ui.item.email}
			}),
			a = $("&lt;a&gt;&lt;/a&gt;", {
			"class": "remove",
			href: "#",
			title: "Remove",
			text: "x"
			}).appendTo(span);

		//add contact to friend div
			span.insertBefore("#to");
		 //update emails list
			emails.push(ui.item.email);
			emailList.val(emails.join(","));
		//tidy input
			$("#to").remove();
			$("&lt;input/&gt;", {
			id: "to"
			}).insertBefore("#emails").autocomplete(autoOpts);
			}
		};
		//attach autocomplete
			$("#to").autocomplete(autoOpts);
			//add click handler to friends div
			$("#toList").click(function(){
			$("#to").focus();
		});
	//add delegate handler for clicks on remove links
		$("#toList").delegate("a", "click", function(){
	//get email address of contact
		var email = $(this).parent().data("email"),
		emails = $("#emails").val().split(",");
	//remove contact
		$(this).parent().remove();
	//remove email
		$.each(emails, function(i, val) {
		if (val === email) {
		emails.splice(i, 1);
		}
	});
		$("#emails").val(emails);
	});
})(jQuery);
</pre>
8 Displaying HTML in the list of suggestions
<pre>
&lt;title&gt;Autocomplete&lt;/title&gt;
        &lt;script src="js/jquery.ui.autocomplete.html.js"&gt;&lt;/script&gt;
        &lt;script&gt;
			(function($){
				var data = [
					{ value: "Aberdeen", label: "Aberdeen" },
					{ value: "Armagh", label: "Armagh" },
					{ value: "Bangor", label: "Bangor" },
				],
				autoOpts = {
					html: true,
					source: function(req, resp) {
						var suggestions = [],
					regEx = new RegExp("^" + req.term, "i");
						//match suggestions to input
						$.each(data, function(i, val){
							if (val.label.match(regEx)) {
								var obj = {};
								obj.value = val.value;
obj.label = val.label.replace(regEx, "&lt;span&gt;" + req.term + "&lt;/span&gt;");
								suggestions.push(obj);
							}
						});
						resp(suggestions);
					}
				};
				$("#city").autocomplete(autoOpts);
			})(jQuery);
			</pre>
The button widget<br>
Плагин Button позволяет стилизовать кнопоки на странице (элементы &lt;input&gt; с типами reset или submit, а так же элементы &lt;button&gt;). Кроме этого, с помощью этого плагина, можно превратить в кнопки элементы &lt;a href="#"&gt; (якори), флажки и переключатели (элементы &lt;input&gt; с типами checkbox и radio). Кнопки, сделанные из флажков и переключателей могут находится в двух состояниях: выбрано/не выбрано и за счет этого не теряют своей первоначальной функциональности.<br>
Можно объединить несколько кнопок в группу. Для этого нужно вместо метода .button(), воспользоваться .buttonset(). И если .button()нужно применять непосредственно к элементам, которые вы хотите сделать кнопками, то.buttonset() применяется к контейнеру, содержащему все элементы, которые должны стать группой кнопок:
<pre>
&lt;!-- Делаем отдельную кнопку: --&gt;
  &lt;button&gt;Кнопка&lt;/button&gt;
 
  &lt;script&gt;
    $("button").button();
  &lt;/script&gt;
 
&lt;!-- Делаем группу кнопок: --&gt;
  &lt;div id="set"&gt;
    &lt;button&gt;Кнопка 1&lt;/button&gt;
    &lt;button&gt;Кнопка 2&lt;/button&gt;
  &lt;/div&gt;
 
  &lt;script&gt;
    $("#set").buttonset();
  &lt;/script&gt;
Кроме обычного текста, на кнопки можно добавлять иконки. Однако, иконки не могут быть добавлены элементам &lt;input&gt; типа button, submit или reset.
</pre>
1 Standard implementations
<pre>
&lt;link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.9.custom.css"&gt;
&lt;a href="#" id="myButton"&gt;A link button&lt;/a&gt;
        &lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
  &lt;script src="development-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.button.js"&gt;&lt;/script&gt;
			(function($){
				$("#myButton").button();
			})(jQuery);
			</pre>
text  Если это свойство выключено, то кнопка не будет содержать текста. Однако, это свойство будет проигнорировано, если не будут заданы иконки.
<pre>
// ------- Работа со свойством text ---------
// в момент установки button на элемент
$("selector").button({ text: false });
 
//получение значения text
var text = $("selector").button( "option", "text" );
//изменение значения text
$("selector").button( "option", "text", false );
</pre>
2 Theming<br>
В этом свойстве задается текст который будет присутствовать на кнопке. По умолчанию, берется значение из элемента: если кнопка стилизована из элемента &lt;button&gt;, то будет взято его содержимое, а если кнопка получена из элемента &lt;input&gt;, то берется значения аттрибута value или привязанного к нему элемента &lt;label&gt; (обычно для случаев флажков и переключателей).
<pre>
// ------- Работа со свойством label ---------
// в момент установки button на элемент
$("selector").button({ label: {primary:ui-icon-gear, secondary:null} });
 
//получение значения label
var label = $("selector").button( "option", "label" );
//изменение значения label
$("selector").button( "option", "label", {primary:ui-icon-gear, secondary:null} );

&lt;link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.9.custom.css"&gt;
&lt;a href="#" id="myButton"&gt;A link button&lt;/a&gt;
			(function($){
				var buttonOpts = {
					label: "A configured label"
				};
				$("#myButton").button(buttonOpts);
			})(jQuery);
			</pre>
3 Button icons<br>
В этом свойстве можно задать две иконки, которые будут расположены до (primary) и после (secondary) текста на кнопке. Иконки задаются с помощью класса, в котором прописан фон с необходимой иконкой. Для этого можно воспользоваться стандартными иконками UI.
<pre>
// ------- Работа со свойством icons ---------
// в момент установки button на элемент
$("selector").button({ icons: {primary:ui-icon-gear, secondary:null} });
 
//получение значения icons
var icons = $("selector").button( "option", "icons" );
//изменение значения icons
$("selector").button( "option", "icons", {primary:ui-icon-gear, secondary:null} );

&lt;a href="#" id="myButton"&gt;A link button&lt;/a&gt;
			(function($){
				var buttonOpts = {
					icons: {
						primary: "ui-icon-disk",
						secondary: "ui-icon-triangle-1-s"
					}
				};
				$("#myButton").button(buttonOpts);
			})(jQuery);
4  Button icons
        &lt;link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.9.custom.css"&gt;
&lt;a href="#" id="myButton"&gt;A link button&lt;/a&gt;
&lt;script src="development-bundle/ui/jquery.ui.button.js"&gt;&lt;/script&gt;
        &lt;script&gt;
			(function($){
				var buttonOpts = {
					icons: {
						primary: "ui-icon-disk",
						secondary: "ui-icon-triangle-1-s"
					},
					text: false
				};
				$("#myButton").button(buttonOpts);
			})(jQuery);
			</pre>
5  Button events<br>
Событие create происходит в момент инициализации button на элементе.
<pre>
// обработка события create
$("selector").button({
   create: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "buttoncreate", function(event, ui){ ... });

     &lt;link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.9.custom.css"&gt;
&lt;link rel="stylesheet" href="css/buttonTheme.css"&gt;
&lt;div class="iconic-input ui-button-text-icons ui-state-default ui-corner-all"&gt;
&lt;span class="ui-button-icon-primary ui-icon ui-icon-disk"&gt;&lt;/span&gt;
&lt;input id="myButton" type="button" value="Input icons" class="ui-button-text"&gt;
&lt;span class="ui-button-icon-secondary ui-icon ui-icon-triangle-1-s"&gt;&lt;/span&gt;
        &lt;/div&gt;
&lt;script src="development-bundle/ui/jquery.ui.button.js"&gt;&lt;/script&gt;
			(function($){
				$("#myButton").button().hover(function() {
				$(this).parent().addClass("ui-state-hover");
				}, function() {
				$(this).parent().removeClass("ui-state-hover");
				});
			})(jQuery);
			</pre>
6  create
<pre>
        &lt;link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.9.custom.css"&gt;
    	&lt;button id="myButton"&gt;A button&lt;/button&gt;
        &lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.button.js"&gt;&lt;/script&gt;
			(function($){
				var buttonOpts = {
					create: function() {
						$(this).css("display", "none")
					}
				};
				$("#myButton").button(buttonOpts)
			})(jQuery);
			</pre>
7  Register  form
<pre>
&lt;title&gt;Button&lt;/title&gt;
        &lt;link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.9.custom.css"&gt;
    	&lt;form&gt;
&lt;label for="name"&gt;Name: &lt;input id="name" name="name"&gt;&lt;/label&gt;
&lt;label for="email"&gt;Email: &lt;input id="email" name="email"&gt;&lt;/label&gt;
	    	&lt;button id="myButton"&gt;Register&lt;/button&gt;
        &lt;/form&gt;
&lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.button.js"&gt;&lt;/script&gt;
			(function($){
				$("#myButton").button().click(function(e) {
					e.preventDefault();
					var form = $("form"),
						formData = {
						name: form.find("#name").val(),
							email: form.find("#email").val()
						};
			$.post("register.php", formData, function() {
			$("#myButton").button("option", "disabled", true);
						form.find("label").remove();
						$("&lt;label&gt;&lt;/label&gt;", {
							text: "Thanks for registering!"
						}).prependTo(form);
					});
				});
			})(jQuery);
			</pre>
8  buttonset
<pre>
        &lt;link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.9.custom.css"&gt;
    	&lt;div id="buttons"&gt;
        	&lt;h2&gt;Programming Languages&lt;/h2&gt;
	  	    &lt;p&gt;Select all languages you know:&lt;/p&gt;
&lt;label for="js"&gt;JavaScript&lt;/label&gt;&lt;input id="js" type="checkbox"&gt;
&lt;label for="py"&gt;Python&lt;/label&gt;&lt;input id="py" type="checkbox"&gt;
&lt;label for="cSharp"&gt;C#&lt;/label&gt;&lt;input id="cSharp" type="checkbox"&gt;
&lt;label for="jv"&gt;Java&lt;/label&gt;&lt;input id="jv" type="checkbox"&gt;
        &lt;/div&gt;
        &lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.button.js"&gt;&lt;/script&gt;
			(function($){
				$("#buttons").buttonset();
			})(jQuery);
			</pre>
9 	buttonset
<pre>
        &lt;link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.9.custom.css"&gt;
    	&lt;div id="buttons"&gt;
        	&lt;h2&gt;Programming Languages&lt;/h2&gt;
	  	    &lt;p&gt;Select your most proficient languages:&lt;/p&gt;
&lt;label for="js"&gt;JavaScript&lt;/label&gt;&lt;input id="js" type="radio" name="lang"&gt;
   	    &lt;label for="py"&gt;Python&lt;/label&gt;&lt;input id="py" type="radio" name="lang"&gt;
	&lt;label for="cSharp"&gt;C#&lt;/label&gt;&lt;input id="cSharp" type="radio" name="lang"&gt;
&lt;label for="jv"&gt;Java&lt;/label&gt;&lt;input id="jv" type="radio" name="lang"&gt;
        &lt;/div&gt;
        &lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
        &lt;script src="development-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.button.js"&gt;&lt;/script&gt;
			(function($){
				$("#buttons").buttonset();
			})(jQuery);
			</pre>
10 Checkbox buttonsets
<pre>
&lt;title&gt;Button&lt;/title&gt;
&lt;link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.9.custom.css"&gt;
&lt;div id="buttons"&gt;
&lt;h2&gt;Programming Languages&lt;/h2&gt;
&lt;p&gt;Select all languages you know:&lt;/p&gt;
&lt;label for="js1"&gt;JavaScript&lt;/label&gt;&lt;input id="js1" type="checkbox"&gt;
&lt;label for="py1"&gt;Python&lt;/label&gt;&lt;input id="py1" type="checkbox"&gt;
&lt;label for="cSharp1"&gt;C#&lt;/label&gt;&lt;input id="cSharp1" type="checkbox"&gt;
&lt;label for="jv1"&gt;Java&lt;/label&gt;&lt;input id="jv1" type="checkbox"&gt;
        &lt;/div&gt;
        &lt;button id="select"&gt;Select All&lt;/button&gt;
        &lt;button id="deselect"&gt;Deselect All&lt;/button&gt;
        &lt;script src="development-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
&lt;script src="development-bundle/ui/jquery.ui.button.js"&gt;&lt;/script&gt;
			(function($){
				$("#buttons").buttonset();
			$("#select").button().click(function() { Событие create происходит в момент инициализации button на элементе.
// обработка события create
$("selector").button({
   create: function(event, ui) { ... }
});

// еще один способ (используя метод bind)
$("selector").bind( "buttoncreate", function(event, ui){ ... });
$("#buttons").find("input").attr("checked", true).button("refresh");
	});

			$("#deselect").button().click(function() {
$("#buttons").find("input").attr("checked", false).button("refresh");
	});
			})(jQuery);
</pre>
Position<br>
Эта утилита jQuery UI, позволяющая удобно позиционировать элементы (в часности UI-виджеты) относительно окна (window), документа (document), других элементов и даже курсора. С ее помощью нельзя позиционировать скрытые элементы (hidden). Эта утилита является независимой и не требует подключения к странице других UI модулей (даже ядра jQuery UI).
Допустим, что необходимо расположить элемент с id=el1 в левом нижнем углу элемента с id=target так, чтобы первый спускался на пол своей высоты (пример с синем квадратиком в примере выше):
<pre>
$("#el1").position({
  my: "right center",  // место на позиционируемом элементе
  at: "right bottom",  // место на элементе относительно которого будет позиционирование
  of: "#target"        // элемент относительно которого будет позиционирование
});
</pre>
my Определяет точку на позиционируемом элементе, относительно которой будет происходить выравнивание (например "нижний левый край элемента должен будет оказаться в центре документа (или другого элемента)").<br>
Задается строкой формата "по_горизонтали по_вертикали", возможные значения "right|center|left bottom|center|top". Если одно из значений не указывается (например просто "left" или просто "top"), то недостающее считается "center" (т.е. "left center" и "center top").<br>
At Определяет точку на элементе, относительно которого будут позиционировать. Относительно этой точки и будет происходить выравнивание (например "центр определенного элемента должен будет оказаться в нижнем правом углу документа (или другого элемента))".<br>
Задается строкой формата "по_горизонтали по_вертикали", возможные значения "right|center|left bottom|center|top". Если одно из значений не указывается (например просто "left" или просто "top"), то недостающее считается "center" (т.е. "left center" и "center top")..<br>
of В этом свойстве задается элемент, относительно которого будет происходить позиционирование (документ, окно, элемент страницы). Если передается event, то позиционирование будет происходить относительно его свойств pageX и pageY.
<br>
Offset В этом свойстве задается сдвиг по горизонтали и вертикали (в пикселях). Например "50 50" (left top). Если задать одно значение, то оно будет применено как по вертикали так и по горизонтали.
<br>
Collission Если позиционируемый элемент оказывается частично или полностью выходящим за рамки окна, это свойство определяет его альтернативную позицию.
<br>
Using Заданная в этом параметре функция будет вызываться в момент позиционирования элемента. Ей будет передан один параметр — объект с полями top и left, которые содержат расстояния (в пикселях), на которое необходимо сместить позиционируемый элемент, чтобы он расположился относительно второго элемента, так как это было задано.
<br>
Effect<br>
.effect() является методом объекта jQuery, расширяя его стандартную функциональность. <br>
.effect(effect, [options], [speed], [callback])<br>
effect — имя требуемого эффекта<br>
options — параметры требуемого эффекта (отличаются для разных типов эффектов.<br>
speed — продолжительность выполнения эффекта. Может быть задана в миллисекундах <br>или строковым значением 'fast', 'normal' или 'slow' (200, 400 и 600 миллисекунд). По умолчанию используется 'normal'.<br>
callback — функция, которая будет вызвана после выполнения эффекта.<br>

Доступные эффекты<br>
'blind'<br>
 
Сворачивает/разворачивает элементы, за счет изменения его высоты или ширины.
Параметры:<br>
direction — определяет, как будет сворачиваться/разворачиваться элемент: горизонтально или вертикально. Доступные значения: "horizontal" и "vertical". По умолчанию "vertical".<br>
mode — определяет, сворачивать или разворачивать элемент. Доступные значения "hide" и "show". По умолчанию "hide".<br>

'bounce'<br>

Выполняет заданное количество колебаний элемента.
Параметры:<br><br>
direction — направление выполнения эффекта. Доступные значения: "up", "down", "left", "right". По умолчанию "up".<br>
mode — определяет, сворачивать или разворачивать элемент. Доступные значения "hide" и "show". По умолчанию "hide".<br>
distance — размер колебаний. По умолчанию 20.<br>
times — количество колебаний. По умолчанию 5.<br>
'clip'<br>
 
Сворачивает/разворачивает элементы, за счет изменения его высоты или ширины. Отличается от blinds положением элемента при выполнении эффекта.<br>
Параметры:<br>
direction — определяет, как будет сворачиваться/разворачиваться элемент: горизонтально или вертикально. Доступные значения: "horizontal" и "vertical". По умолчанию "vertical".<br>
mode — определяет, сворачивать или разворачивать элемент. Доступные значения "hide" и "show". По умолчанию "hide".<br>
'drop'<br>
 
Скрывает/показывает элементы, за счет изменения его позиции и прозрачности.
Параметры:<br>
direction — определяет, куда будут двигаться элементы при выполнении этого эффекта. Доступные значения: "left", "right", "up", "down". По умолчанию "left".
mode — определяет, скрывать или показывать элемент. Доступные значения "hide" и "show". По умолчанию "hide".<br>
'explode'<br>
 
Разбивает/собирает элементы.
Параметры:<br>
mode — определяет, скрывать (разбивать) или показывать (собирать) элемент. <br>Доступные значения "hide" и "show". По умолчанию "hide".<br>
pieces — количество кусочков, на которое будут разбит элемент. По умолчанию 9.
'fade'<br>
 
Скрывает элементы за счет изменения их прозрачности. Аналог метода .fadeOut() объекта jQuery. Не имеет параметров.<br>

'fold'<br>
 
Сворачивает/разворачивает элементы (в начале по горизонтали, затем по вертикали, либо наоборот).<br>
Параметры:<br>
horizFirst — определяет, нужно ли в начале сворачивать/разворачивать элемент по горизонтали или нет. По умолчанию "false".<br>
mode — определяет, скрывать или показывать элемент. Доступные значения "hide" и "show". По умолчанию "hide".<br>
size — размер до которого будет уменьшен элемент, прежде чем исчезнуть. По умолчанию 15.<br>
'highlight'<br>
 
Заставляет элемент страницы плавно моргнуть заданным цветом. Благодаря этому эффекту элемент можно скрыть или показать. А можно просто подсветить (например для привлечения внимания). Для этого нужно на видимом элементе вызвать highlight, не задавая параметр mode в"hide".<br>
Параметры:<br>
color — цвет, которым моргнет элемент. По умолчанию "#ffff99".<br>
mode — определяет, скрывать или показывать элемент. Доступные значения "hide" и "show". По умолчанию "show".<br>
'puff'<br>
 
Растворяет/собирает элементы страницы, за счет изменения их размеров и прозрачности.<br>
Параметры:<br>
percent — количество процентов, до которых будет увеличен элемент. По умолчанию 150.<br>
mode — определяет, скрывать или показывать элемент. Доступные значения "hide" и "show". По умолчанию "show".<br>
'pulsate'<br>
 
Выполняет заданное количество "пульсаций" элемента. Пульсации совершаются за счет изменения прозрачности элементов.
Параметры:<br>
mode — определяет, оставить элемент в итоге скрытым или видным. Доступные значения "hide" и "show". По умолчанию "show".<br>
times — количество колебаний. По умолчанию 5.<br>
'scale'<br>
 
Изменяет размеры элементов. В ширину, высоту или пропорционально по обоим направлениям.
Параметры:<br>
direction — определяет, как изменять размеры элементов. В ширину, высоту или в оба направления. Доступные значения "both", "vertical" и "horizontal". По умолчанию "both".<br>
from — определяет размеры элемента в начальный момент выполнения анимации (обычно этим параметром не пользуются). {height: .., width: ..}<br>
origin — расположение точки, относительно которой будут проходить изменения. По умолчанию['middle','center']<br>
percent — какого размера должен стать объект (в процентах). По умолчанию 0.<br>
scale — определяет, какие области элемента будут ли растянуты/сжаты. Если нужно изменить только размер самого содержимого, следует присвоить этому параметру значение 'content', если нужно пропорционально увеличить еще и внутренние отступы (padding) то 'box', а если содержимое, отступы и границы, то следует установить параметру scale значение 'both'.<br>
'shake'<br>
 
Производит вибрацию элемента, горизонтальную или вертикальную.
Параметры:<br>
direction — определяет направление вибрации. Возможные значения "up", "down", "left", "right". По умолчанию "left".<br>
distance — размах вибрации. По умолчанию 20.<br>
times — число вибраций. По умолчанию 3.<br>
'size'<br>
 
Изменяет размеры элементов. В ширину и высоту.
Параметры:<br>
from — определяет размеры элемента в начальный момент выполнения анимации (обычно этим параметром не пользуются). {height: .., width: ..}.<br>
to — размеры элемента в после выполнения анимации. {height: .., width: ..}.<br>
origin — расположение точки, относительно которой будут проходить изменения. По умолчанию['top','left']<br>
scale — определяет, какие области элемента будут ли растянуты/сжаты. Если нужно изменить только размер самого содержимого, следует присвоить этому параметру значение 'content', если нужно пропорционально увеличить еще и внутренние отступы (padding) то 'box', а если содержимое, отступы и границы, то следует установить параметру scale значение 'both'.<br>
'slide'<br>
 
Прячет элемент за пределы экрана или наоборот, возвращает его.
Параметры:<br>
direction — направление выполнения эффекта. Доступные значения: "up", "down", "left", "right". По умолчанию "left".<br>
mode — определяет, сворачивать или разворачивать элемент. Доступные значения "hide" и "show". По умолчанию "show".<br>
distance — размер выполнения эффекта. По умолчанию равен ширине/высоте элемента (в зависимости от направления движения). Можно устанавливать значения, меньшие, чем значения по умолчанию.<br>
'transfer'<br>
 
Переносит границы одного заданного элемента на другой. Очень полезный эффект, когда необходимо показать взаимодействие между элементами.
Фактически переносимый элемент обладает классом ui-effects-transfer. Зная это, можно оформлять его так, как вы захотите. <br>
Параметры:<br>
className — optional class name the transfer element will receive.<br>
to — селектор jQuery, по которому будет выбран элемент, на который будет перенесена граница.<br>
Color Animation<br>
Модуль эффектов jQuery UI расширяет функциональность метода .animate(), обеспечивая возможность плавного изменения цветовых параметров у элементов. А именно:<br>
<pre>
backgroundColor
borderBottomColor
borderLeftColor
borderRightColor
borderTopColor
color
outlineColor
</pre>
(необходимо указывать эти параметры именно так, а не через дефис как это делается в соответствующих css-параметрах)
Цвет можно указать в трех различных форматах:
шестнадцетеричном (#FF0000)<br>
rgb (rgb(255,255,255))
и по имени ("black")<br>
Например, чтобы плавно изменить цвет фона у элемента с идентификатором elId на красный, можно использовать следующий код:
<pre>
  $("#elId").animate(backgroundColor: "red", 300);
// цвет будет изменен в течении 300 мс (1/3 секунды)
</pre>
Перетаскиваемые элементы<br>
Плагин Draggable позволяет сделать элементы страницы перемещаемыми с помощью мыши. Эти элементы автоматически получают класс ui-draggable, а в момент перемещения еще иui-draggable-dragging.<br>
Перетаскиваемые элементы генерируют три новых типа событий: start, drag, и stop. Они происходят в момент захвата, при перемещении и в момент отпускания перемещаемого элемента. Обработчики этих событий будут получать 2 параметра: стандартный объект события от браузера и дополнительный объект (назовем его ui) со следующими полями:<br>
ui.helper — вспомогательный элемент (helper) в форме объекта jQuery. <br>
ui.position — позиция перемещаемого элемента относительно ближайшего родителя c заданным типом позиционирования (css-свойство position равно relative или absolute или fixed).<br>
ui.offset — позиция перемещаемого элемента относительно начала документа.<br>
Для изменения координат элемента в момент его перемещения можно использовать свойство position внутри обработчика событий:
<pre>
$("#el").draggable({ drag:function(event, ui){
  ui.position.left = x;
  ui.position.top = y;
}});
</pre>
или свойство offset, которое можно получить напрямую у перемещаемого объекта:
$(this).data('draggable').offset.click.top = y;
<br>
disabled<br>
<br>
Останавливает\возобновляет возможность перетаскивать элементы страницы.
<pre>
// ------- Работа со свойством disabled---------
// в момент установки draggable на элемент
$(".selector").draggable({ disabled: true });
 
//получение значения disabled
var disabled = $(".selector").draggable( "option", "disabled" );
//изменение значения disabled
$(".selector").draggable( "option", "disabled", true );
</pre>
addClasses
<br>
Задав это свойство со значением false, вы отмените автоматическую установку класса "ui-draggable" на перетаскиваемые элементы. Это может быть оптимизационной мерой, в случае, если необходимо сделать перетаскиваемыми сразу несколько сотен элементов или даже более.
<pre>
// ------- Работа со свойством addClasses ---------
// в момент установки draggable на элемент
$(".selector").draggable({ addClasses: false });
 
//получение значения addClasses
var addClasses = $(".selector").draggable( "option", "addClasses" );
//изменение значения addClasses
$(".selector").draggable( "option", "addClasses", true );
</pre>
appendTo
<br>
Этот параметр определяет в какой элемент страницы будет помещен вспомогательный элемент (helper, см. одноименное свойство). По умолчанию, он помещается туда же, где находится сам перемещаемый элемент. appendTo может быть задан DOM-элементом или селектором, по которому будет осуществлен поиск элемента.
<pre>
// ------- Работа со свойством appendTo ---------
// в момент установки draggable на элемент
$(".selector").draggable({ appendTo: "#someId" });
 
//получение значения appendTo
var el = $(".selector").draggable( "option", "appendTo" );
//изменение значения appendTo
$(".selector").draggable( "option", "appendTo", "#someId" );
</pre>
axis
<br>
Этот параметр определяет в каком направлении можно будет перемещать элемент. Возможные значения 'x', 'y' и false (только по вертикали, только по горизонтали или в любом).
<pre>
// ------- Работа со свойством axis ---------
// в момент установки draggable на элемент
$(".selector").draggable({ axis: "x" });
 
//получение значения axis
var axis = $(".selector").draggable( "option", "axis" );
//изменение значения axis
$(".selector").draggable( "option", "axis", "y" );
</pre>
cancel
<br>
Параметр cancel определяет, за какие элементы нельзя "браться" для перемещения исходного элемента.
<pre>
// ------- Работа со свойством cancel ---------
// в момент установки draggable на элемент
$(".selector").draggable({ cancel: "button" });
 
//получение значения cancel
var cancel = $(".selector").draggable( "option", "cancel" );
//изменение значения cancel
$(".selector").draggable( "option", "cancel", "button" );
<br>
connectToSortable
<br>
Определяет, может ли draggable-элемент быть добавлен к набору sortable-элементов (см. плагин sortable). Параметр может принимать либо значение false, либо строку с селектором, определяющим группу sortable-элементов. Для корректной работы скрипта, у draggable-элемента желательно задать вспомогательный элемент helper:"clone" (см. свойство helper).
<pre>
// ------- Работа со свойством connectToSortable ---------
// в момент установки draggable на элемент
$(".selector").draggable({ connectToSortable:"ul#myList" });
 
//получение значения connectToSortable
var connectToSortable = $(".selector").draggable( "option", "connectToSortable" );
//изменение значения connectToSortable
$(".selector").draggable( "option", "connectToSortable", "ul#myList" );
</pre>
containment
<br>
Параметр containment определяет ограничения на перемещение элемента при перетаскивании. По умолчанию их нет, но они могут быть заданы областью какого-либо элемента (например с помощью селекторов 'parent', 'document', 'window' и др.) и кроме этого можно задать ограничения прямоугольником с координатами [x1, y1, x2, y2].
<pre>
// ------- Работа со свойством containment---------
// в момент установки draggable на элемент
$(".selector").draggable({ containment:"parent" });
 
//получение значения containment
var containment = $(".selector").draggable( "option", "containment" );
//изменение значения containment
$(".selector").draggable( "option", "containment", "parent" );
</pre>
cursor
<br>
Определяет значение css-свойства cursor (вид курсора).
<pre>
// ------- Работа со свойством cursor---------
// в момент установки draggable на элемент
$(".selector").draggable({ cursor:"pointer" });
 
//получение значения cursor
var cursor = $(".selector").draggable( "option", "cursor" );
//изменение значения cursor
$(".selector").draggable( "option", "cursor", "pointer" );
</pre>
cursorAt
<br>
С помощью этого свойства можно задать координаты на перемещаемом элементе, в которых окажется курсор при его перетаскивании (см. выше пример "Расположение курсора").
<pre>
// ------- Работа со свойством cursorAt ---------
// в момент установки draggable на элемент
$(".selector").draggable({ cursorAt:{left:5, top:5} });
 
//получение значения cursorAt
var cursorAt = $(".selector").draggable( "option", "cursorAt" );
//изменение значения cursorAt
$(".selector").draggable( "option", "cursorAt", {right:5, bottom:5} );
</pre>
delay
<br>
Параметр delay определяет задержку (в миллисекундах) перед началом перемещения элемента. Это может быть защитой от нежелательного перетаскивания элемента, если пользователь случайно потянет элемент.
<pre>
// ------- Работа со свойством delay ---------
// в момент установки draggable на элемент
$(".selector").draggable({ delay:500 });
 
//получение значения delay
var delay = $(".selector").draggable( "option", "delay" );
//изменение значения delay
$(".selector").draggable( "option", "delay", 500 );
</pre>
distance
<br>
Этот параметр определяет расстояние (в пикселях), на которое нужно потянуть элемент, что бы он "оторвался" от своего первоначального положения. Это может быть защитой от нежелательного перетаскивания элемента, если пользователь случайно потянет элемент.
<pre>
// ------- Работа со свойством distance ---------
// в момент установки draggable на элемент
$(".selector").draggable({ distance:15 });
 
//получение значения distance
var distance = $(".selector").draggable( "option", "distance" );
//изменение значения distance
$(".selector").draggable( "option", "distance", 15 );
</pre>
grid
<br>
С помощью grid можно задать в пикселях размер шага перемещения элемента (горизонтального и вертикального отдельно).
<pre>
// ------- Работа со свойством grid ---------
// в момент установки draggable на элемент
$(".selector").draggable({ grid:[10,10] });
 
//получение значения grid
var grid = $(".selector").draggable( "option", "grid" );
//изменение значения grid
$(".selector").draggable( "option", "grid", [10,10] );
</pre>
handle
<br>
Позволяет указать, какие элементы, находящиеся внутри draggable-элемента, можно "схватить" для перетаскивания последнего. Параметр может быть задан с помощью DOM-элемента или селектора, по которому его можно найти. 
<pre>
// ------- Работа со свойством handle ---------
// в момент установки draggable на элемент
$(".selector").draggable({ handle:'h2' });
 
//получение значения handle
var handle = $(".selector").draggable( "option", "handle" );
//изменение значения handle
$(".selector").draggable( "option", "handle", 'h2' );
</pre>
helper
Определяет, какой элемент будет перемещаться на самом деле: сам элемент (значение 'original'), его клон (значение 'clone') или какой то другой элемент (в этом случае, параметру helper необходимо присвоить функцию, которая бы возвращала нужный DOM-элемент).
<pre>
// ------- Работа со свойством helper ---------
// в момент установки draggable на элемент
$(".selector").draggable({ helper:'clone' });
 
//получение значения helper
var helper = $(".selector").draggable( "option", "helper" );
//изменение значения helper
$(".selector").draggable( "option", "helper", 'clone' );
</pre>
iframeFix
<br>
Предотвращает возникновение события mousemove над элементами iframe в момент перетаскивания. Задав true в качестве значения свойства iframeFix, вы обеспечите невидимое перекрытие для всех iframe-ов. Если же задать селектор, то перекрыты будут только те iframe-ы, которые ему удовлетворяют.
<pre>
// ------- Работа со свойством iframeFix ---------
// в момент установки draggable на элемент
$(".selector").draggable({ iframeFix:true });
 
//получение значения iframeFix
var iframeFix = $(".selector").draggable( "option", "iframeFix" );
//изменение значения iframeFix
$(".selector").draggable( "option", "iframeFix", true );
</pre>
opacity
<br>
Параметр opacity отвечает за уровень прозрачности элемента в момент его перемещения. Напомним, что он принимает значения от 0 до 1 (от полной прозрачности, до полной видимости).
<pre>
// ------- Работа со свойством opacity ---------
// в момент установки draggable на элемент
$(".selector").draggable({ opacity:0.5 });
 
//получение значения opacity
var opacity = $(".selector").draggable( "option", "opacity" );
//изменение значения opacity
$(".selector").draggable( "option", "opacity", 0.5 );
</pre>
refreshPositions
<br>
При использовании совместно с плагином Droppable, результат перетаскивания считается только при отпускании элемента. Если вам необходимо подсчитывать Droppable-результат при каждом движении перемещаемого элемента, установите refreshPositions в true. Однако, не стоит забывать, что это увеличивает нагрузку на процессор.
<pre>
// ------- Работа со свойством refreshPositions ---------
// в момент установки draggable на элемент
$(".selector").draggable({ refreshPositions:true });
 
//получение значения refreshPositions
var refreshPositions = $(".selector").draggable( "option", "refreshPositions" );
//изменение значения refreshPositions
$(".selector").draggable( "option", "refreshPositions", true );
</pre>
revert
<br>
Если присвоить этому свойству значение true, то при отпускании перетаскиваемого элемента, он вернется на исходную позицию. Кроме этого, доступны два строковых варианта этого свойства: 'valid' и 'invalid', которые имеют смысл при использовании плагина Droppable. В случае 'invalid' перетаскиваемый элемент будет возвращен на прежнюю позицию, если он был "сброшен" не на Droppable-элемент. При 'invalid', наоборот — элемент будет возвращен в исходную позицию, только если был сброшен на Droppable-элемент.
<pre>
// ------- Работа со свойством revert ---------
// в момент установки draggable на элемент
$(".selector").draggable({ revert:true });
 
//получение значения revert
var revert = $(".selector").draggable( "option", "revert" );
//изменение значения revert
$(".selector").draggable( "option", "revert", true );
</pre>
revertDuration
<br>
Продолжительность (в миллисекундах) автоматического возвращения элемента на прежнюю позицию, при включенном параметре revert.
<pre>
// ------- Работа со свойством revertDuration ---------
// в момент установки draggable на элемент
$(".selector").draggable({ revertDuration:100 });
 
//получение значения revertDuration
var revertDuration = $(".selector").draggable( "option", "revertDuration" );
//изменение значения revertDuration
$(".selector").draggable( "option", "revertDuration", 100 );
</pre>
scope
<br>
draggable и droppable элементы обладают параметром scope. Все draggable-элементы могут быть «скинуты» на droppable-элементы при совпадении значения этого параметра. Элементы с различными scope не могут так взаимодействовать. Кроме scope, droppable-элементы могут ограничивать взаимодействие с перетаскиваемыми элементами посредством параметра accept
<pre>
// ------- Работа со свойством scope ---------
// в момент установки draggable на элемент
$(".selector").draggable({ scope:"tasks" });
 
//получение значения scope
var scope = $(".selector").draggable( "option", "scope" );
//изменение значения scope
$(".selector").draggable( "option", "scope", "tasks" );
</pre>
scroll
<br>
Присвоив этому параметру значение true, вы включите автоскроллинг. В этом случае, при попытке перетащить элемент за пределы ближайшего скроллируемого родителя, последний начнет прокручиваться автоматически. Смотри так же параметры scrollSensitivity и scrollSpeed.
<pre>
// ------- Работа со свойством scroll ---------
// в момент установки draggable на элемент
$(".selector").draggable({ scroll:true });
 
//получение значения scroll
var scroll = $(".selector").draggable( "option", "scroll" );
//изменение значения scroll
$(".selector").draggable( "option", "scroll", true );
</pre>
scrollSensitivity
<br>
Определяет расстояние (в пикселях) на котором должен находиться перетаскиваемый элемент от границы его ближайшего скроллируемого предка, для включения автоскроллинг (см. свойство scroll).
<pre>
// ------- Работа со свойством scrollSensitivity ---------
// в момент установки draggable на элемент
$(".selector").draggable({ scrollSensitivity:100 });
 
//получение значения scrollSensitivity
var scrollSensitivity = $(".selector").draggable( "option", "scrollSensitivity" );
//изменение значения scrollSensitivity
$(".selector").draggable( "option", "scrollSensitivity", 100 );
</pre>
scrollSpeed
<br>
Определяет скорость выполнения автоскроллинга (см. свойство scroll).
<pre>
// ------- Работа со свойством scrollSpeed ---------
// в момент установки draggable на элемент
$(".selector").draggable({ scrollSpeed:40 });
 
//получение значения scrollSpeed
var scrollSpeed = $(".selector").draggable( "option", "scrollSpeed" );
//изменение значения scrollSpeed
$(".selector").draggable( "option", "scrollSpeed", 40 );
</pre>
snap
<br>
Перетаскиваемые элементы можно научить "примагничиваться" к краям других элементов (см. выше пример "Магнитные края"). Для этого нужно задать свойство snap со значением true, при котором друг к другу примагничиваться будут перетаскиваемые элементы. Кроме этого, параметру snap можно присвоить селектор и тогда, перемещаемый элемент будет магнититься только к элементам, которые ему соответствуют. Свойства snapMode и snapTolerance помогут настроить параметры примагничивания.
<pre>
// ------- Работа со свойством snap ---------
// в момент установки draggable на элемент
$(".selector").draggable({ snap:true });
 
//получение значения snap
var snap = $(".selector").draggable( "option", "snap" );
//изменение значения snap
$(".selector").draggable( "option", "snap", true );
</pre>
snapMode
<br>
Свойство snapMode определяет режим примагничивания перетаскиваемого элемента (см. свойство snap). Возможные значения: 'inner', 'outer', 'both'. Они означают, что перетаскиваемые элементы будут магнититься только ко внутренним, только ко внешним или к обеим сторонам выбранных в свойстве snap элементам.
<pre>
// ------- Работа со свойством snapMode ---------
// в момент установки draggable на элемент
$(".selector").draggable({ snapMode:'outer' });
 
//получение значения snapMode
var snapMode = $(".selector").draggable( "option", "snapMode" );
//изменение значения snapMode
$(".selector").draggable( "option", "snapMode", 'outer' );
</pre>
snapTolerance
<br>
snapTolerance определяет расстояние (в пикселях), находясь на котором начинает действовать примагничивание (см. свойство snap).
<pre>
// ------- Работа со свойством snapTolerance ---------
// в момент установки draggable на элемент
$(".selector").draggable({ snapTolerance:50 });
 
//получение значения snapTolerance
var snapTolerance = $(".selector").draggable( "option", "snapTolerance" );
//изменение значения snapTolerance
$(".selector").draggable( "option", "snapTolerance", 50 );
</pre>
stack
<br>
Перетаскиваемые элементы, найденные с помощью заданного в stack селектора, при старте перемещения будут автоматически получать наибольший z-index
<pre>
// ------- Работа со свойством stack ---------
// в момент установки draggable на элемент
$(".selector").draggable({ stack:".draggable" });
 
//получение значения stack
var stack = $(".selector").draggable( "option", "stack" );
//изменение значения stack
$(".selector").draggable( "option", "stack", ".draggable" );
</pre>
zIndex
<br>
С помощью этого параметра можно управлять css-свойством z-index перетаскиваемого элемента.
<pre>
// ------- Работа со свойством zIndex ---------
// в момент установки draggable на элемент
$(".selector").draggable({ zIndex:5 });
 
//получение значения zIndex
var zIndex = $(".selector").draggable( "option", "zIndex" );
//изменение значения zIndex
$(".selector").draggable( "option", "zIndex", 5 );
</pre>
create
<br>
Событие create происходит в момент инициализации draggable на элементе.
<pre>
// обработка события create
$(".selector").draggable({
   create: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$(".selector").bind( "dragcreate", function(event, ui){ ... });
</pre>
start
:
Событие start происходит в момент начала перетаскивания элемента.
<pre>
// обработка события start
$(".selector").draggable({
   start: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$(".selector").bind( "dragstart", function(event, ui){ ... });
</pre>
drag

Событие drag при каждом движении перетаскиваемого элемента.
<pre>
// обработка события drag
$(".selector").draggable({
   drag: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$(".selector").bind( "drag", function(event, ui){ ... });
</pre>
stop

Событие start происходит в момент отпускания перетаскиваемого элемента.
<pre>
// обработка события stop
$(".selector").draggable({
   stop: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$(".selector").bind( "dragstop", function(event, ui){ ... });

</pre>
Плагин Droppable позволяет обрабатывать сброс перетаскиваемых (draggable) элементов в области выбранных элементов. Можно задавать какие из draggable-элементов могут быть «пойманы», а какие нет.
Droppable-элементы генерируют несколько новых типов событий. Обработчики этих событий будут получать 2 параметра: стандартный объект события от браузера и дополнительный объект (назовем его ui) со следующими полями:
ui.draggable — перетаскиваемый объект, задействованный в произошедшем событии.
ui.helper — вспомогательный объект текущего draggable-элемента
ui.position — позиция вспомогательного элемента относительно ближайшего родителя c заданным типом позиционирования (css-свойство position равно relative или absolute или fixed).
ui.offset — позиция вспомогательного элемента относительно начала документа.
<br>
disabled
<br>
Останавливает\возобновляет возможность ловить перетаскиваемые элементы страницы.
<pre>
// ------- Работа со свойством disabled ---------
// в момент установки droppable на элемент
$("selector").droppable({ disabled: true });
 
//получение значения disabled
var disabled = $("selector").droppable( "option", "disabled" );
//изменение значения disabled
$("selector").droppable( "option", "disabled", true );
</pre>
accept
<br>
Определяет, какие элементы сможет ловить droppable-элемент (по умолчанию любые). Можно задать в качестве этого параметра функцию. В этом случае, функция будет вызываться для каждого перетаскиваемого элемента по отдельности (они будут передаваться в функцию первым параметром) и в случае возвращения значения true, переданный элемент сможет быть пойман droppable-элементом.
<pre>
// ------- Работа со свойством accept ---------
// в момент установки droppable на элемент
$("selector").droppable({ accept:function(el){return el.hasClass("someClass")} });
 
//получение значения accept
var accept = $("selector").droppable( "option", "accept" );
//изменение значения accept
$("selector").droppable( "option", "accept", ".someClass" );
</pre>
activeClass
<br>
Это свойство содержит имя класса, который будет присвоен droppable-элементу в момент перемещения подходящего перетаскиваемого элемента
<pre>
// ------- Работа со свойством activeClass ---------
// в момент установки droppable на элемент
$("selector").droppable({ activeClass:"someClass" });
 
//получение значения activeClass
var activeClass = $("selector").droppable( "option", "activeClass" );
//изменение значения activeClass
$("selector").droppable( "option", "activeClass", "someClass" );
</pre>
activeClass
<br>
Это свойство содержит имя класса, который будет присвоен droppable-элементу при перемещении подходящего перетаскиваемого элемента
<pre>
// ------- Работа со свойством activeClass ---------
// в момент установки droppable на элемент
$("selector").droppable({ activeClass:"someClass" });
 
//получение значения activeClass
var activeClass = $("selector").droppable( "option", "activeClass" );
//изменение значения activeClass
$("selector").droppable( "option", "activeClass", "someClass" );
</pre>
greedy
<br>
При значении true, отключается передача событий плагина droppable вверх по иерархии
<pre>
// ------- Работа со свойством greedy ---------
// в момент установки droppable на элемент
$("selector").droppable({ greedy:true });
 
//получение значения greedy
var greedy = $("selector").droppable( "option", "greedy" );
//изменение значения greedy
$("selector").droppable( "option", "greedy", true );
</pre>
hoverClass
<br>
Это свойство содержит имя класса, который будет присвоен droppable-элементу при 
нахождении подходящего перетаскиваемого элемента
<pre>
// ------- Работа со свойством hoverClass ---------
// в момент установки droppable на элемент
$("selector").droppable({ hoverClass:"someClass" });
 
//получение значения hoverClass
var activeClass = $("selector").droppable( "option", "hoverClass" );
//изменение значения hoverClass
$("selector").droppable( "option", "hoverClass", "someClass" );
</pre>
scope
<br>
draggable и droppable элементы обладают параметром scope. Все draggable-элементы могут быть «пойманы» droppable-элементами при совпадении значения этого параметра. Элементы с различными scope не могут так взаимодействовать. Кроме scope, droppable-элементы могут ограничивать взаимодействие с перетаскиваемыми элементами посредством параметра accept.
<pre>
// ------- Работа со свойством scope ---------
// в момент установки droppable на элемент
$("selector").droppable({ scope:"tasks" });
 
//получение значения scope
var scope = $("selector").droppable( "option", "scope" );
//изменение значения scope
$("selector").droppable( "option", "scope", "tasks" );
</pre>
tolerance
<br>
С помощью этого свойства можно настроить режим определения находится ли перетаскиваемый элемент над ловящим. Возможные значения:
fit — перетаскиваемый элемент считается находящимся над ловящим элементом, если полностью находится внутри последнего.
intersect — ..., если перетаскиваемый элемент лежит внутри ловящего хотя бы наполовину.
pointer — ..., если курсор находится в области ловящего элемента.
touch — ..., если перетаскиваемый элемент хоты бы на один пиксель лежит над ловящим элементом.
<pre>
// ------- Работа со свойством tolerance ---------
// в момент установки droppable на элемент
$("selector").droppable({ tolerance:"fit" });
 
//получение значения tolerance
var tolerance = $("selector").droppable( "option", "tolerance" );
//изменение значения tolerance
$("selector").droppable( "option", "tolerance", "fit" );
</pre>

Плагин Resizable позволяет сделать выбранные элементы растягиваемыми с помощью мыши. При настройке можно указать в какие стороны они будут растягиваться, а так же ограничить максимальный и минимальный возможный размер.
Resizable-элементы генерируют три новых типа: start, resize, stop. Они происходят в момент захвата, при растягивании и в момент отпускания resizable-элемента. Обработчики этих событий будут получать 2 параметра: стандартный объект события от браузера и дополнительный объект (назовем его ui) со следующими полями:<br>
ui.helper — вспомогательный элемент (helper) в форме объекта jQuery. <br>
ui.originalPosition — позиция resizable-элемента перед началом растяжения.<br>
ui.originalSize — размер resizable-элемента перед началом растяжения.<br>
ui.position — текущая позиция resizable-элемента относительно ближайшего родителя c заданным типом позиционирования (css-свойство position равно relative или absolute или fixed).<br>
ui.size — текущий размер растягиваемого элемента.<br>
<br>
disabled

Останавливает\возобновляет возможность изменять размеры выбранных элементов страницы.
<pre>
// ------- Работа со свойством disabled ---------
// в момент установки resizable на элемент
$("selector").resizable({ disabled: true });
 
//получение значения disabled
var disabled = $("selector").resizable( "option", "disabled" );
//изменение значения disabled
$("selector").resizable( "option", "disabled", true );
</pre>
alsoResize
<pre>
В этом параметре можно указать элементы, размер которых будет автоматически изменяться вслед растягиванием текущего элемента.
// ------- Работа со свойством alsoResize ---------
// в момент установки resizable на элемент
$("selector").resizable({ alsoResize:".bigBan" });
 
//получение значения alsoResize
var alsoResize = $("selector").resizable( "option", "alsoResize" );
//изменение значения alsoResize
$("selector").resizable( "option", "alsoResize", ".bigBan" );
</pre>
animate

Если установить это свойство в true то в процессе растягивании элемента вы будете видеть изменения вспомогательного элемента, а при завершении растягивания исходный элемент плавно примет нужные размеры (плавность можно настраивать с помощью свойств animateDuration и animateEasing).
<pre>
// ------- Работа со свойством animate ---------
// в момент установки resizable на элемент
$("selector").resizable({ animate:true });
 
//получение значения animate
var animate = $("selector").resizable( "option", "animate" );
//изменение значения animate
$("selector").resizable( "option", "animate", true );
</pre>
animateDuration

Продолжительность выполнения анимации (если она задана в параметре animate). Она может быть задана в миллисекундах или строковым значением 'fast' или 'slow' (200 и 600 миллисекунд).
<pre>
// ------- Работа со свойством animateDuration ---------
// в момент установки resizable на элемент
$("selector").resizable({ animateDuration:700 });
 
//получение значения animateDuration
var animateDuration = $("selector").resizable( "option", "animateDuration" );
//изменение значения animateDuration
$("selector").resizable( "option", "animateDuration", 700 );
</pre>
animateEasing

Динамика выполнения анимации (если она задана в параметре animate).
<pre>
// ------- Работа со свойством animateEasing ---------
// в момент установки resizable на элемент
$("selector").resizable({ animateEasing:"linear" });
 
//получение значения animateEasing
var animateEasing = $("selector").resizable( "option", "animateEasing" );
//изменение значения animateEasing
$("selector").resizable( "option", "animateEasing", "linear" );
</pre>
aspectRatio

Присвоив этому параметру true, вы включите режим сохранения первоначальных пропорций растягиваемого элемента. Кроме этого, можно задать необходимую пропорцию в виде числа, например 6/10.
<pre>
// ------- Работа со свойством aspectRatio ---------
// в момент установки resizable на элемент
$("selector").resizable({ aspectRatio:true });
 
//получение значения aspectRatio
var aspectRatio = $("selector").resizable( "option", "aspectRatio" );
//изменение значения aspectRatio
$("selector").resizable( "option", "aspectRatio", true );
</pre>
autoHide

Если это свойство равно true, то элементы за которые происходит растягивание будут появляться только когда курсор будет появляться над текущим растягиваемым элементом страницы.
<pre>
// ------- Работа со свойством autoHide ---------
// в момент установки resizable на элемент
$("selector").resizable({ autoHide:true });
 
//получение значения autoHide
var autoHide = $("selector").resizable( "option", "autoHide" );
//изменение значения autoHide
$("selector").resizable( "option", "autoHide", true );
</pre>
cancel

Пока курсор находится над элементами, соответствующими селектору из cancel, растягивание текущего элемента не сможет начаться.
<pre>
// ------- Работа со свойством cancel ---------
// в момент установки resizable на элемент
$("selector").resizable({ cancel:':input,option,textarea' });
 
//получение значения cancel
var cancel = $("selector").resizable( "option", "cancel" );
//изменение значения cancel
$("selector").resizable( "option", "cancel", ':input,option,textarea' );
</pre>
containment

Параметр containment определяет ограничения на растяжение resizable-элемента. По умолчанию их нет, но они могут быть заданы областью какого-либо элемента (например с помощью селекторов 'parent', 'document', 'window' и др.).
<pre>
// ------- Работа со свойством containment---------
// в момент установки resizable на элемент
$("selector").resizable({ containment:"parent" });
 
//получение значения containment
var containment = $("selector").resizable( "option", "containment" );
//изменение значения containment
$("selector").resizable( "option", "containment", "parent" );
</pre>
delay

Параметр delay определяет задержку (в миллисекундах) перед началом растягивания элемента. Это может быть защитой от нежелательного растягивания элемента, если пользователь случайно потянет элемент.
<pre>
// ------- Работа со свойством delay ---------
// в момент установки resizable на элемент
$("selector").resizable({ delay:500 });
 
//получение значения delay
var delay = $("selector").resizable( "option", "delay" );
//изменение значения delay
$("selector").resizable( "option", "delay", 500 );
</pre>
distance

Этот параметр определяет расстояние (в пикселях), на которое нужно потянуть элемент, что бы его размер начал меняться. Это может быть защитой от нежелательного растягивания элемента, если пользователь случайно потянет за его край.
<pre>
// ------- Работа со свойством distance ---------
// в момент установки resizable на элемент
$("selector").resizable({ distance:15 });
 
//получение значения distance
var distance = $("selector").resizable( "option", "distance" );
//изменение значения distance
$("selector").resizable( "option", "distance", 15 );
</pre>
grid

С помощью grid можно задать в пикселях размер шага растягивания элемента (горизонтального и вертикального отдельно).
<pre>
// ------- Работа со свойством grid ---------
// в момент установки resizable на элемент
$("selector").resizable({ grid:[10,10] });
 
//получение значения grid
var grid = $("selector").resizable( "option", "grid" );
//изменение значения grid
$("selector").resizable( "option", "grid", [10,10] );
</pre>
handles

В этом свойстве можно задать объекты, за которые будут растягиваться resizable-элементы. Оно может быть задано в виде строки значений, перечисленных через запятую (возможные значения: n, e, s, w, ne, se, sw, nw, all. Все кроме последнего значения ассоциированы со сторонами света: север (верх), запад (лево), юг (низ), восток (право), северо-восток и т.д.). Растягивающие объекты будут установлены плагином автоматически в заданных местах (верху, низу, по диагонали и др.).
Кроме этого, можно задать собственные объекты, за которые будут растягиваться resizable-элементы. Для этого свойству handles необходимо присвоить javascript-объект, ключами которого могут быть {n, e, s, w, ne, se, sw, nw}. А в качестве значений, должны быть заданы селекторы, по которым будет произведен поиск объектов для растягивания, внутри растягиваемых элементов. Если растягивающие объекты расположены снаружи resizable-элементов, то вместо селектора нужно задать их непосредственно объектами DOM или jQuery-объектами.
<pre>
// ------- Работа со свойством handles ---------
// в момент установки resizable на элемент
$("selector").resizable({ handles:"se" });
 
//получение значения handles
var handles = $("selector").resizable( "option", "handles" );
//изменение значения handles
$("selector").resizable( "option", "handles", {"se":".se-element"} );
</pre>
helper

В этом свойстве можно задать имя класса для вспомогательного элемента. Именно он будет изменять свои размеры в момент растягивания (а при завершении растягивания размеры вспомогательного элемента будут присвоены исходному resizable-элементу). Если оставить это свойство в false, то вспомогательный элемент не будет создан.
<pre>
// ------- Работа со свойством helper ---------
// в момент установки resizable на элемент
$("selector").resizable({ helper:'ui-state-highlight' });
 
//получение значения helper
var helper = $("selector").resizable( "option", "helper" );
//изменение значения helper
$("selector").resizable( "option", "helper", 'ui-state-highlight' );
</pre>
maxHeight

Это свойство определяет максимальную высоту (в пикселях) растягиваемого элемента.
<pre>
// ------- Работа со свойством maxHeight ---------
// в момент установки resizable на элемент
$("selector").resizable({ maxHeight:300 });
 
//получение значения maxHeight
var maxHeight = $("selector").resizable( "option", "maxHeight" );
//изменение значения maxHeight
$("selector").resizable( "option", "maxHeight", 300 );
</pre>
maxWidth

Это свойство определяет максимальную ширину (в пикселях) растягиваемого элемента.
<pre>
// ------- Работа со свойством maxWidth ---------
// в момент установки resizable на элемент
$("selector").resizable({ maxWidth:300 });
 
//получение значения maxWidth
var maxWidth = $("selector").resizable( "option", "maxWidth" );
//изменение значения maxWidth
$("selector").resizable( "option", "maxWidth", 300 );
</pre>
minHeight

Это свойство определяет минимальную высоту (в пикселях) растягиваемого элемента.
<pre>
// ------- Работа со свойством minHeight ---------
// в момент установки resizable на элемент
$("selector").resizable({ minHeight:300 });
 
//получение значения minHeight
var minHeight = $("selector").resizable( "option", "minHeight" );
//изменение значения minHeight
$("selector").resizable( "option", "minHeight", 300 );
</pre>
minWidth

Это свойство определяет минимальную ширину (в пикселях) растягиваемого элемента.
<pre>
// ------- Работа со свойством minWidth ---------
// в момент установки resizable на элемент
$("selector").resizable({ minWidth:300 });
 
//получение значения minWidth
var minWidth = $("selector").resizable( "option", "minWidth" );
//изменение значения minWidth
$("selector").resizable( "option", "minWidth", 300 );
</pre>

Выбираемые элементы<br>
Плагин Selectable позволяет делать элементы страницы выделяемыми, подобно ярлыкам рабочего стола. При нажатой клавише Ctrl можно выделять элементы без потери выделения с уже выбранных. Выделенные элементы автоматически получают класс ui-selected, а в процессе выделения обладают классом ui-selecting.
<pre>
&lt;ol id="selectable"&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
    &lt;li&gt;Item 3&lt;/li&gt;
    &lt;li&gt;Item 4&lt;/li&gt;
    &lt;li&gt;Item 5&lt;/li&gt;
    &lt;li&gt;Item 6&lt;/li&gt;
    &lt;li&gt;Item 7&lt;/li&gt;
  &lt;/ol&gt;

  &lt;script&gt;
    // selectable применяется к элементу списка, а выделяемыми будут его дочерние li
    $("#selectable").selectable();
  &lt;/script&gt;


</pre>
disabled
<br>
Останавливает\возобновляет возможность выделять элементы страницы.
<pre>
// ------- Работа со свойством disabled---------
// в момент установки selectable на элемент
$("selector").selectable({ disabled: true });
 
//получение значения disabled
var disabled = $("selector").selectable( "option", "disabled" );
//изменение значения disabled
$("selector").selectable( "option", "disabled", true );
</pre>
autoRefresh

Этот параметр определяет необходимость пересчитывать размеры и позицию выделяемых элементов в процессе выделения. Если вы имеете дело с большим числом таких элементов, которые при этом не меняют свои размеры и положение на странице, то для экономии ресурсов компьютера можно установить значение свойства autoRefresh в false.
<pre>
// ------- Работа со свойством autoRefresh ---------
// в момент установки selectable на элемент
$("selector").selectable({ autoRefresh:false });
 
//получение значения autoRefresh
var autoRefresh = $("selector").selectable( "option", "autoRefresh" );
//изменение значения autoRefresh
$("selector").selectable( "option", "autoRefresh", false );
</pre>
cancel

Пока курсор находится над элементом, соответствующим селектору из cancel, содержащий его selectable-элемент не будет выделен.
<pre>
// ------- Работа со свойством cancel ---------
// в момент установки selectable на элемент
$("selector").selectable({ cancel:':input,option,textarea' });
 
//получение значения cancel
var cancel = $("selector").selectable( "option", "cancel" );
//изменение значения cancel
$("selector").selectable( "option", "cancel", ':input,option,textarea' );
</pre>
delay

Параметр delay определяет задержку (в миллисекундах) перед началом выделения элемента. Это может быть защитой от случайного выделения элемента.
<pre>
// ------- Работа со свойством delay ---------
// в момент установки selectable на элемент
$("selector").selectable({ delay:500 });
 
//получение значения delay
var delay = $("selector").selectable( "option", "delay" );
//изменение значения delay
$("selector").selectable( "option", "delay", 500 );
</pre>
distance

Этот параметр определяет размер (в пикселях) выделения элемента, который нужно сделать, чтобы он был выбран. Это может быть защитой от случайного выделения элемента.
<pre>
// ------- Работа со свойством distance ---------
// в момент установки selectable на элемент
$("selector").selectable({ distance:15 });
 
//получение значения distance
var distance = $("selector").selectable( "option", "distance" );
//изменение значения distance
$("selector").selectable( "option", "distance", 15 );
</pre>
filter

С помощью заданного в этом параметре селектора происходит фильтрация дочерних элементов selectable-элемента. Те из них, кто проходит эту фильтрацию, сможет быть выделен, а остальные нет.
<pre>
// ------- Работа со свойством filter ---------
// в момент установки selectable на элемент
$("selector").selectable({ filter:"li" });
 
//получение значения filter
var filter = $("selector").selectable( "option", "filter" );
//изменение значения filter
$("selector").selectable( "option", "filter", "li" );
</pre>
tolerance

Определяет при каких условиях элемент будет выделен. Возможные варианты:
fit — если зона созданная курсором полностью покрывает элемент.
touch — если зона созданная курсором пересекает элемент хотя бы в одной точке.
<pre>
// ------- Работа со свойством tolerance ---------
// в момент установки selectable на элемент
$("selector").selectable({ tolerance:"fit" });
 
//получение значения tolerance
var tolerance = $("selector").selectable( "option", "tolerance" );
//изменение значения tolerance
$("selector").selectable( "option", "tolerance", "fit" );
</pre>
Группируемые элементы<br>
Плагин Sortable позволяет научить группу элементов страницы меняться друг с другом местами, при перетаскивании их мышью. Плагин применяется не к самим группируемым элементам, а к обрамляющему их элементу (если нужно сделать группируемыми элементы списка li, то применить плагин нужно к содержащему их ul-элементу). Обрамляющий элемент автоматически получают класс ui-sortable.
<br>
ui.helper — вспомогательный элемент (helper) в форме объекта jQuery.<br>
ui.position — позиция перемещаемого helper-элемента относительно ближайшего родителя c заданным типом позиционирования (css-свойство position равно relative или absolute или fixed).<br>
ui.offset — позиция перемещаемого helper-элемента относительно начала документа.<br>
ui.item — перемещаемый в данный момент элемент.<br>
ui.placeholder — элемент, заполняющий вакантное пространство (placeholder), если он определен.<br>
ui.sender — sortable-элемент, в котором был взят группируемый элемент (это свойство доступно, только если вы перемещаете элемент из одной группы в другую).<br>

disabled
<br>
Останавливает\возобновляет возможности плагина.
<pre>
// ------- Работа со свойством disabled---------
// в момент установки draggable на элемент
$("selector").sortable({ disabled: true });
 
//получение значения disabled
var disabled = $("selector").sortable( "option", "disabled" );
//изменение значения disabled
$("selector").sortable( "option", "disabled", true );
</pre>
appendTo
<br>
Этот параметр определяет в какой элемент страницы будет помещен вспомогательный элемент (helper, см. одноименное свойство ниже), в случае, если helper не равен "original". По умолчанию, вспомогательный элемент помещается туда же, где находится перемещаемый элемент. appendToможет быть задан DOM-элементом или селектором, по которому будет осуществлен поиск элемента.
<pre>
// ------- Работа со свойством appendTo ---------
// в момент установки sortable на элемент
$("selector").sortable({ appendTo: "#someId" });
 
//получение значения appendTo
var el = $("selector").sortable( "option", "appendTo" );
//изменение значения appendTo
$("selector").sortable( "option", "appendTo", "#someId" );
</pre>
axis

Этот параметр определяет в каком направлении можно будет перемещать элемент. Возможные значения 'x', 'y' и false (только по вертикали, только по горизонтали или в любом).
<pre>
// ------- Работа со свойством axis ---------
// в момент установки sortable на элемент
$("selector").sortable({ axis: "x" });
 
//получение значения axis
var axis = $("selector").sortable( "option", "axis" );
//изменение значения axis
$(".selector").sortable( "option", "axis", "y" );
</pre>
cancel

Параметр cancel определяет, какие элементы нельзя перетаскивать.
<pre>
// ------- Работа со свойством cancel ---------
// в момент установки sortable на элемент
$("selector").sortable({ cancel: "button" });
 
//получение значения cancel
var cancel = $("selector").sortable( "option", "cancel" );
//изменение значения cancel
$("selector").sortable( "option", "cancel", "button" );
</pre>
connectWith

В этом параметре можно указать другие sortable-наборы, из которых можно перетаскивать элементы в данный набор.
<pre>
// ------- Работа со свойством connectWith ---------
// в момент установки sortable на элемент
$("selector").sortable({ connectWith:"ul#myList" });
 
//получение значения connectWith
var connectWith = $("selector").sortable( "option", "connectWith" );
//изменение значения connectWith
$("selector").sortable( "option", "connectWith", "ul#myList" );
</pre>
containment

Параметр containment определяет ограничения на перемещение элемента при перетаскивании. По умолчанию их нет, но они могут быть заданы областью какого-либо элемента (например с помощью селекторов или строк 'parent', 'document', 'window' и др.).
<pre>
// ------- Работа со свойством containment ---------
// в момент установки sortable на элемент
$("selector").sortable({ containment:"parent" });
 
//получение значения containment
var containment = $("selector").sortable( "option", "containment" );
//изменение значения containment
$("selector").sortable( "option", "containment", "parent" );
</pre>
cursor

Определяет значение css-свойства cursor (вид курсора) для группируемых элементов.
<pre>
// ------- Работа со свойством cursor ---------
// в момент установки sortable на элемент
$("selector").sortable({ cursor:"pointer" });
 
//получение значения cursor
var cursor = $("selector").sortable( "option", "cursor" );
//изменение значения cursor
$("selector").sortable( "option", "cursor", "pointer" );
</pre>
cursorAt

С помощью этого свойства можно задать координаты на перемещаемом элементе, в которых окажется курсор при его перетаскивании
<pre>
// ------- Работа со свойством cursorAt ---------
// в момент установки sortable на элемент
$("selector").sortable({ cursorAt:{left:5, top:5} });
 
//получение значения cursorAt
var cursorAt = $("selector").sortable( "option", "cursorAt" );
//изменение значения cursorAt
$("selector").sortable( "option", "cursorAt", {right:5, bottom:5} );
</pre>
delay

Параметр delay определяет задержку (в миллисекундах) перед началом перемещения элемента. Это может быть защитой от нежелательного перетаскивания элемента, если пользователь случайно потянет элемент.
<pre>
// ------- Работа со свойством delay ---------
// в момент установки sortable на элемент
$("selector").sortable({ delay:500 });
 
//получение значения delay
var delay = $("selector").sortable( "option", "delay" );
//изменение значения delay
$("selector").sortable( "option", "delay", 500 );
</pre>
distance

Этот параметр определяет расстояние (в пикселях), на которое нужно потянуть элемент, что бы он "оторвался" от своего первоначального положения. Это может быть защитой от нежелательного перетаскивания элемента, если пользователь случайно потянет элемент.
<pre>
// ------- Работа со свойством distance ---------
// в момент установки sortable на элемент
$("selector").sortable({ distance:15 });
 
//получение значения distance
var distance = $("selector").sortable( "option", "distance" );
//изменение значения distance
$("selector").sortable( "option", "distance", 15 );
</pre>
dropOnEmpty

Если этот параметр равен false, то из текущего набора sortable-элементов нельзя будет переносить элементы в другие наборы, если в них нет ни одного элемента
<pre>
// ------- Работа со свойством dropOnEmpty ---------
// в момент установки sortable на элемент
$("selector").sortable({ dropOnEmpty:true });
 
//получение значения dropOnEmpty
var dropOnEmpty = $("selector").sortable( "option", "dropOnEmpty" );
//изменение значения dropOnEmpty
$("selector").sortable( "option", "dropOnEmpty", true );
forceHelperSize
:boolean(false)
If true, forces the helper to have a size.
// ------- Работа со свойством forceHelperSize ---------
// в момент установки sortable на элемент
$("selector").sortable({ forceHelperSize:true });
 
//получение значения forceHelperSize
var forceHelperSize = $("selector").sortable( "option", "forceHelperSize" );
//изменение значения forceHelperSize
$("selector").sortable( "option", "forceHelperSize", true );
forcePlaceholderSize
:boolean(false)
If true, forces the placeholder to have a size.
// ------- Работа со свойством forcePlaceholderSize ---------
// в момент установки sortable на элемент
$("selector").sortable({ forcePlaceholderSize:true });
 
//получение значения forcePlaceholderSize
var forcePlaceholderSize = $("selector").sortable( "option", "forcePlaceholderSize" );
//изменение значения forcePlaceholderSize
$("selector").sortable( "option", "forcePlaceholderSize", true );
</pre>
grid

С помощью grid можно задать в пикселях размер шага перемещения элемента (горизонтального и вертикального отдельно).
<pre>
// ------- Работа со свойством grid ---------
// в момент установки sortable на элемент
$("selector").sortable({ grid:[10,10] });
 
//получение значения grid
var grid = $("selector").sortable( "option", "grid" );
//изменение значения grid
$("selector").sortable( "option", "grid", [10,10] );
</pre>
handle

Позволяет указать, какие элементы, находящиеся внутри группируемого элемента, можно "схватить" для перетаскивания последнего. Параметр может быть задан с помощью DOM-элемента или селектора, по которому его можно найти.
<pre>
// ------- Работа со свойством handle ---------
// в момент установки sortable на элемент
$(".selector").sortable({ handle:'h2' });
 
//получение значения handle
var handle = $(".selector").sortable( "option", "handle" );
//изменение значения handle
$(".selector").sortable( "option", "handle", 'h2' );
</pre>
helper

Определяет, какой элемент будет перемещаться в момент перетаскивания на самом деле: сам элемент (значение 'original'), его клон (значение 'clone') или какой то другой элемент (в этом случае, параметру helper необходимо присвоить функцию, которая бы возвращала нужный DOM-элемент).
<pre>
// ------- Работа со свойством helper ---------
// в момент установки sortable на элемент
$(".selector").sortable({ helper:'clone' });
 
//получение значения helper
var helper = $(".selector").sortable( "option", "helper" );
//изменение значения helper
$(".selector").sortable( "option", "helper", 'clone' );
</pre>
items

Плагин Sortable примененный к элементу страницы, делает всех его прямых потомков группируемыми. Если необходимо, чтобы группируемыми стали лишь некоторые элементы, укажите соответствующий им селектор в параметре items
<pre>
// ------- Работа со свойством items ---------
// в момент установки sortable на элемент
$(".selector").sortable({ items:true });
 
//получение значения items
var items = $(".selector").sortable( "option", "items" );
//изменение значения items
$(".selector").sortable( "option", "items", true );
</pre>
opacity

Параметр opacity отвечает за уровень прозрачности элемента в момент его перемещения. Напомним, что он принимает значения от 0 до 1 (от полной прозрачности, до полной видимости).
<pre>
// ------- Работа со свойством opacity ---------
// в момент установки sortable на элемент
$("selector").sortable({ opacity:0.5 });
 
//получение значения opacity
var opacity = $("selector").sortable( "option", "opacity" );
//изменение значения opacity
$("selector").sortable( "option", "opacity", 0.5 );
</pre>
placeholder

При перетаскивании группируемого элемента, соседние элементы перемещаются, оставляя текущее вакантное место пустым. Для его оформления можно указать в параметре placeholder нужный класс.
<pre>
// ------- Работа со свойством placeholder ---------
// в момент установки sortable на элемент
$("selector").sortable({ placeholder:"someClass" });
 
//получение значения placeholder
var placeholder = $("selector").sortable( "option", "placeholder" );
//изменение значения placeholder
$("selector").sortable( "option", "placeholder", "someClass" );
</pre>
revert

Если этот параметр равен true, то при отпускании перетаскиваемого элемента, он вернется на место, с которого был взят. В этом параметре можно так же указать целое число, которое будет использовано как время (в миллисекундах) возвращения элемента в исходную позицию.
<pre>
// ------- Работа со свойством revert ---------
// в момент установки sortable на элемент
$("selector").sortable({ revert:true });
 
//получение значения revert
var revert = $("selector").sortable( "option", "revert" );
//изменение значения revert
$("selector").sortable( "option", "revert", true );
</pre>
scroll

Присвоив этому параметру значение true, вы включите автоскроллинг. В этом случае, при попытке перетащить элемент за пределы ближайшего прокручиваемого родителя, последний начнет прокручиваться автоматически. Смотри так же параметры scrollSensitivity и scrollSpeed.
<pre>
// ------- Работа со свойством scroll ---------
// в момент установки sortable на элемент
$("selector").sortable({ scroll:false });
 
//получение значения scroll
var scroll = $("selector").sortable( "option", "scroll" );
//изменение значения scroll
$("selector").sortable( "option", "scroll", false );
</pre>
scrollSensitivity

Определяет расстояние (в пикселях) на котором должен находиться перетаскиваемый элемент от границы его ближайшего скроллируемого предка, для включения автоскроллинг
<pre>
// ------- Работа со свойством scrollSensitivity ---------
// в момент установки sortable на элемент
$("selector").sortable({ scrollSensitivity:100 });
 
//получение значения scrollSensitivity
var scrollSensitivity = $("selector").sortable( "option", "scrollSensitivity" );
//изменение значения scrollSensitivity
$("selector").sortable( "option", "scrollSensitivity", 100 );
</pre>
scrollSpeed

Определяет скорость выполнения автоскроллинга
<pre>
// ------- Работа со свойством scrollSpeed ---------
// в момент установки sortable на элемент
$(".selector").sortable({ scrollSpeed:40 });
 
//получение значения scrollSpeed
var scrollSpeed = $(".selector").sortable( "option", "scrollSpeed" );
//изменение значения scrollSpeed
$(".selector").sortable( "option", "scrollSpeed", 40 );
</pre>
tolerance

С помощью этого свойства можно указать режим определения позиции перетаскиваемого элемента. Возможные значения:
intersect — перетаскиваемый элемент считается находящимся на следующей позиции, если он находится над ней более чем наполовину.
pointer — ..., если курсор находится в этой позиции.
<pre>
// ------- Работа со свойством tolerance ---------
// в момент установки sortable на элемент
$("selector").sortable({ tolerance:"pointer" });
 
//получение значения tolerance
var tolerance = $("selector").sortable( "option", "tolerance" );
//изменение значения tolerance
$("selector").sortable( "option", "tolerance", "pointer" );
</pre>
zIndex

С помощью этого параметра можно указать значение css-свойства z-index перетаскиваемого элемента.
<pre>
// ------- Работа со свойством zIndex ---------
// в момент установки sortable на элемент
$(".selector").sortable({ zIndex:5 });
 
//получение значения zIndex
var zIndex = $(".selector").sortable( "option", "zIndex" );
//изменение значения zIndex
$(".selector").sortable( "option", "zIndex", 5 );

</pre>
create

Событие create происходит в момент инициализации sortable на элементе.
<pre>
// обработка события create
$("selector").sortable({
   create: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sortcreate", function(event, ui){ ... });
</pre>
start

Событие start происходит в момент начала перетаскивания элемента.
<pre>
// обработка события start
$("selector").sortable({
   start: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sortstart", function(event, ui){ ... });
</pre>
sort

Событие sort происходит при каждом движении (изменении координат) перетаскиваемого элемента.
<pre>
// обработка события sort
$("selector").sortable({
   sort: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sort", function(event, ui){ ... });
</pre>
change

Событие change происходит во время перетаскивания группируемого элемента, в моменты смены вакантной позиции (места, на которое встанет перетаскиваемый элемент, если его отпустить в данный момент).
<pre>
// обработка события change
$("selector").sortable({
   change: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "change", function(event, ui){ ... });
</pre>
beforeStop

Это событие происходит после отпускания перетаскиваемого элемента, но до удаления вспомогательных элементов (helper и placeholder).
<pre>
// обработка события beforeStop
$("selector").sortable({
   beforeStop: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sortbeforestop", function(event, ui){ ... });
</pre>
stop

Событие происходит после отпускания перетаскиваемого элемента.
<pre>
// обработка события stop
$("selector").sortable({
   stop: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sortstop", function(event, ui){ ... });
</pre>
update

Событие происходит после отпускания перетаскиваемого элемента, в случае, если порядок группируемых элементов поменялся.
<pre>
// обработка события update
$("selector").sortable({
   update: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sortupdate", function(event, ui){ ... });
</pre>
receive

Это событие происходит, когда в набор группируемых элементов помешают элемент из другого (связанного) набора.
<pre>
// обработка события receive
$("selector").sortable({
   receive: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sortreceive", function(event, ui){ ... });
</pre>
over

Это событие происходит, если элемент из связанного группируемого набора оказывается над текущим набором. Это событие произойдет и в случае, если схватить элемент из текущего набора, перетащить его в область связного набора и не отпуская возвратить обратно в зону текущего набора (однако, это поведение не указано в документации и возможно является ошибочным, поэтому может быть и исправлено в будущем).
<pre>
// обработка события over
$("selector").sortable({
   over: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sortover", function(event, ui){ ... });
</pre>
out

Судя по документации, это событие должно происходить в случае, если элемент из текущего группируемого набора, окажется над областью другого (связанного) набора. Но на деле, это событие происходит по довольно запутанному принципу.
<pre>
// обработка события out
$("selector").sortable({
   out: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sortout", function(event, ui){ ... });
</pre>
activate

Это событие срабатывает в начале перетаскивания элемента, находящегося в текущем или связанном наборе.
<pre>
// обработка события activate
$("selector").sortable({
   activate: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sortactivate", function(event, ui){ ... });
</pre>
deactivate

Это событие срабатывает при завершении перетаскивания элемента, находящегося в текущем или связанном наборе.
<pre>
// обработка события deactivate
$("selector").sortable({
   deactivate: function(event, ui) { ... }
});
 
// еще один способ (используя метод bind)
$("selector").bind( "sortdeactivate", function(event, ui){ ... });

		&lt;title&gt;Droppable 6&lt;/title&gt;
&lt;div id="target_a"&gt;A&lt;/div&gt;
        &lt;div id="target_b"&gt;B&lt;/div&gt;
        &lt;div id="group_a"&gt;
            &lt;p&gt;A&lt;/p&gt;
            &lt;div id="a1" class="group_a"&gt;a1&lt;/div&gt;
            &lt;div id="a2" class="group_a"&gt;a2&lt;/div&gt;
            &lt;div id="a3" class="group_a"&gt;a3&lt;/div&gt;
        &lt;/div&gt;
        &lt;div id="group_b"&gt;
            &lt;p&gt;B&lt;/p&gt;
            &lt;div id="b1" class="group_b"&gt;b1&lt;/div&gt;
            &lt;div id="b2" class="group_b"&gt;b2&lt;/div&gt;
            &lt;div id="b3" class="group_b"&gt;b3&lt;/div&gt;
        &lt;/div&gt;
&lt;script src="devment-bundle/ui/jquery.ui.mouse.js"&gt;&lt;/script&gt;
&lt;script src="devnt-bundle/ui/jquery.ui.draggable.js"&gt;&lt;/script&gt;
&lt;script src="devent-bundle/ui/jquery.ui.droppable.js"&gt;&lt;/script&gt;
			(function($){
				var dragOpts_a = {
						scope: "a"
					},
					dragOpts_b = {
						scope: "b"
					},
					dropOpts_a = {
						hoverClass: "over",
						scope: "a"
					},
					dropOpts_b = {
						hoverClass: "over",
						scope: "b"
					};
				$(".group_a").draggable(dragOpts_a);
				$(".group_b").draggable(dragOpts_b);
				$("#target_a").droppable(dropOpts_a);
				$("#target_b").droppable(dropOpts_b);
			})(jQuery);
7
		&lt;div id="drag"&gt;&lt;/div&gt;
		&lt;div class="target" id="outer"&gt;
			&lt;div class="target" id="inner"&gt;&lt;/div&gt;
		&lt;/div&gt;
		&lt;div id="status"&gt;&lt;/div&gt;
			(function($){
				$(".target").css({ opacity:"0.5" });
				var dragOpts = {
						zIndex: 3
					},
					dropOpts = {
						drop: dropCallback,
						greedy: true
					};
				function dropCallback(e) {
					var message = $("&lt;p /&gt;", {
						id: "message",
			text: "The firing droppable was " + e.target.id
					});
					$("#status").append(message);
				}
				$("#drag").draggable(dragOpts);
				$(".target").droppable(dropOpts);
			})(jQuery);
12			(function($){
				var dragOpts = {
					start: function(e, ui) {
						ui.helper.addClass("up");
					},
					stop: function(e, ui) {
						ui.helper.removeClass("up");
					}
				};
				$("#drag").draggable(dragOpts);
			})(jQuery);

13 &lt;script src="dev-bundle/ui/jquery.ui.draggable.js"&gt;&lt;/script&gt;
        &lt;script&gt;
			(function($){
				var dragOpts = {
					stop: function(e, ui) {
						var rel = $("&lt;p /&gt;", {
                              text: "The helper was moved " + ui.position.top + "px down, and " + ui.position.left + "px to the left of its original position."
							}),
							offset = $("&lt;p /&gt;", {
                              text: "The helper was moved " + ui.offset.top + "px from the top, and " + ui.offset.left + "px to the left relative to the viewport."
							});
			$("#results").empty().append(rel).append(offset);
					}
				};
				$("#drag").draggable(dragOpts);
			})(jQuery);

		&lt;title&gt;Sortable&lt;/title&gt;
&lt;link rel="stylesheet" href="css/smooth/jquery-ui.custom.css"&gt;
		&lt;ul id="sortables"&gt;
			&lt;li&gt;Sortable 1&lt;/li&gt;
			&lt;li&gt;Sortable 2&lt;/li&gt;
			&lt;li&gt;Sortable 3&lt;/li&gt;
			&lt;li&gt;Sortable 4&lt;/li&gt;
			&lt;li&gt;Sortable 5&lt;/li&gt;
		&lt;/ul&gt;
&lt;script src="dev-bundle/jquery-1.4.4.js"&gt;&lt;/script&gt;
&lt;script src="dev-bundle/ui/jquery.ui.core.js"&gt;&lt;/script&gt;
&lt;script src="dev-bundle/ui/jquery.ui.widget.js"&gt;&lt;/script&gt;
&lt;script src="dev-bundle/ui/jquery.ui.mouse.js"&gt;&lt;/script&gt;
&lt;script src="dev-bundle/ui/jquery.ui.sortable.js"&gt;&lt;/script&gt;
        &lt;script&gt;
			(function($){
				$("#sortables").sortable();
			})(jQuery);
		&lt;/script&gt;
2  &lt;link rel="stylesheet" href="css/sortable.css"&gt;
&lt;div id="sortables" class="ui-widget"&gt;
&lt;div class="ui-widget-header ui-corner-all"&gt;Sortable 1&lt;/div&gt;
&lt;div class="ui-widget-header ui-corner-all"&gt;Sortable 2&lt;/div&gt;
&lt;div class="ui-widget-header ui-corner-all"&gt;Sortable 3&lt;/div&gt;
&lt;div class="ui-widget-header ui-corner-all"&gt;Sortable 4&lt;/div&gt;
&lt;div class="ui-widget-header ui-corner-all"&gt;Sortable 5&lt;/div&gt;
&lt;/div&gt;
3 &lt;script&gt;
			(function($){
				var sortOpts = {
					axis: "y",
					containment: "#container",
					cursor: "ns-resize",
					distance: 30
				};
				$("#sortables").sortable(sortOpts);
			})(jQuery);

4 &lt;script&gt;
			(function($){
				var sortOpts = {
					revert: "slow",
					handle: "span",
					delay: 1000,
					opacity: ".5"
				};
				$("#sortables").sortable(sortOpts);
			})(jQuery);

5 &lt;script&gt;
			(function($){
				var sortOpts = {
					placeholder: "empty ui-corner-all",
					forcePlaceholderSize: true
				};
				$("#sortables").sortable(sortOpts);
			})(jQuery);
6 &lt;script&gt;
			(function($){
				var helperMaker = function(e, ui) {
					return $("&lt;div /&gt;", {
						text: $(ui).text(),
						"class": "ui-corner-all",
						css: {
							opacity: 0.5,
							border: "4px dashed #cccccc",
							textAlign: "center"
						}
					});
				},
				sortOpts = {
					helper: helperMaker
				};
					$("#sortables").sortable(sortOpts);
			})(jQuery);
7 &lt;script&gt;
			(function($){
				var sortOpts = {
					items: "&gt;:not(.unsortable)"
				};
				$("#sortables").sortable(sortOpts);
			})(jQuery);
8 &lt;script&gt;
			(function($){
				var sortOpts = {
				connectWith: ["#sortablesA", "#sortablesB"]
				};
			$("#sortablesA, #sortablesB").sortable(sortOpts);
			})(jQuery);
9 &lt;script&gt;
			(function($){
				var sortOpts = {
				connectWith: ["#sortablesA", "#sortablesB"],
					start: function(e, ui) {
						$("&lt;p /&gt;", {
							id: "message",
						text: ui.helper.text() + " is active",
							css: {
								clear:"both"
							}
						}).appendTo("body");
					},
					stop: function() {
						$("#message").remove();
					}
				};
		$("#sortablesA, #sortablesB").sortable(sortOpts);
			})(jQuery);
10 &lt;script&gt;
			(function($){
				var getPlaces = function(e, ui) {
var extraMessage = (e.type === "sortreceive") ? " in a new list" : "";

						$("#message").remove();
						$("&lt;p /&gt;", {
							id: "message",
text: ["Item now at position ", (ui.item.index() + 1).toString(), extraMessage].join(" "),
							css: {
								clear: "both"
							}
						}).appendTo("body");
					},
					sortOpts = {
				connectWith: ["#sortablesA", "#sortablesB"],
						beforeStop: getPlaces,
						receive: getPlaces
					};
			$("#sortablesA, #sortablesB").sortable(sortOpts);
			})(jQuery);
11 &lt;script&gt;
			(function($){
				var sortOpts = {
			connectWith: ["#sortablesA", "#sortablesB"],
					activate: function() {
    					$("&lt;p /&gt;", {
				text: $(this).attr("id") + " has been activated",
							css: {
								clear:"both"
							}
						}).appendTo("body");
					},
					deactivate: function() {
						$("&lt;p /&gt;", {
			text: $(this).attr("id") + " has been deactivated",
							css: {
								clear:"both"
							}
						}).appendTo("body");
					},
					receive: function(e, ui) {
						$("&lt;p /&gt;", {
							text: ui.item.text() + " was moved from " + ui.sender.attr("id") + " into " + $(this).attr("id"),
							css: {
								clear:"both"
							}
						}).appendTo("body");
					}
				};
			$("#sortablesA, #sortablesB").sortable(sortOpts);
			})(jQuery);
12 &lt;script&gt;
			(function($){
				var sortOpts = {
					stop: function(e, ui) {
			var order = $("#sortablesA").sortable("serialize");
						$("#message").remove();
						$("&lt;p /&gt;", {
							id: "message",
							text: order,
							css: {
								clear:"both"
							}
						}).appendTo("body");
					}
				};
				$("#sortablesA").sortable(sortOpts);
			})(jQuery);
13  &lt;div id="tabs"&gt; &lt;ul&gt;
	&lt;li&gt;&lt;a href="#0"&gt;&lt;span&gt;Sort Tab 1&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href="#1"&gt;&lt;span&gt;Sort Tab 2&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href="#2"&gt;&lt;span&gt;Sort Tab 3&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
		&lt;div id="0"&gt;The first tab panel&lt;/div&gt;
		&lt;div id="1"&gt;The second tab panel&lt;/div&gt;
		&lt;div id="2"&gt;The third tab panel&lt;/div&gt;
	&lt;/div&gt;
&lt;script src="dev-bundle/ui/jquery.ui.tabs.js"&gt;&lt;/script&gt;
        &lt;script&gt;
			(function($){
				var sortOpts = {
					axis: "x",
					items: "li"
				};
				$("#tabs").tabs().sortable(sortOpts);
			})(jQuery);
14 &lt;ul id="drag"&gt;
			&lt;li&gt;Click here to add a new task...&lt;/li&gt;
		&lt;/ul&gt;
		&lt;a id="add" href="#"&gt;&lt;/a&gt;
		&lt;div id="taskList"&gt;
			&lt;ul id="tasks"&gt;
                &lt;li&gt;Design new site&lt;/li&gt;
                &lt;li&gt;Call client&lt;/li&gt;
                &lt;li&gt;Order pizza&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/div&gt;
&lt;script src="dev-bundle/ui/jquery.ui.draggable.js"&gt;&lt;/script&gt;
        &lt;script&gt;
			(function($){
				var dragItem = $("#drag li"),
					addButton = $("#add"),
					sortOpts = {
						axis: "y",
						stop: function() {
						addButton.css("display", "none");
dragItem.text("Click to add a new task...").draggable("option", "disabled", true).removeClass("ui-state-disabled");
						}
					},
					dragOpts = {
						connectToSortable: "#tasks",
						helper: "clone",
						disabled: true
					};
				$("#tasks").sortable(sortOpts);
		dragItem.draggable(dragOpts).live("click", function() {
					if ($("#tasks").children().length &gt; 7) {
						alert("too many tasks already!");
					} else {
						var input = $("&lt;input /&gt;", {
							id: "newTask"
						});
						$(this).text("").append(input);
						input.focus();
	addButton.removeClass("down").css("display", "block");
					}
				});
				addButton.live("click", function(e) {
					e.preventDefault();
					if ($("#drag input").val() !== "") {
		dragItem.text($("#newTask").val()).draggable("option", "disabled", false);
		$("#drag input").remove();
	addButton.addClass("down").attr("title", "drag new task into the list");
	}
});
})(jQuery);
