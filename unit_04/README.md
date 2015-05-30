# danco-js unit 04

&lt;script src="http://code.jquery.com/jquery-1.11.1.min.js"&gt;&lt;/script&gt;

<h2>Функция jQuery</h2>

<h3>jQuery() или $()</h3>
Функция jQuery() позволяет производить поиск элементов на странице, создавать новые элементы по заданному HTML тексту, а так же кое что еще. Возвращает объект jQuery. 
<br>
Несмотря на то, что функция $() имеет большое количество назначений, самым распространенным является поиск элементов на странице:

<h3>Примеры поиска элементов страницы:</h3>
$("div")	вернет все div-элементы на странице.<br>
$(".someBlock")	вернет все элементы с классом someBlock.<br>
$("#content")	вернет элемент с идентификатором content.<br>
$("#content2 div.someBlock")	вернет div-элементы с классом someBlock, которые находятся внутри элемента с идентификатором content2.<br>
$("div:odd")	вернет элементы, находящиеся на странице под нечетными номерами.<br>
$("#content2 div.someBlock")	вернет div-элементы с классом someBlock, которые находятся внутри элемента с идентификатором content2.<br>
$("[value = 5]")	вернет все элементы с атрибутом value, равным 5.<br>
$("div", document)	вернет все div-элементы внутри основного документа.<br>
$("div", frames[0].document)	вернет все div-элементы внутри первого фрейма на странице.<br>
$("div", $(".block"))	вернет все div-элементы, находящиеся внутри элементов с классом block (обычно, для этого лучше подойдет конструкция $(".block div")).<br>

<h3>document object model (DOM). </h3>

jQuery’s $("div") = getElementsByTagName("div")
<pre>

var nel = document.getElementsByTagName('*');

console.log('количество элементов на странице: ' + nel.length );

</pre> 

<h2>getElementById Method</h2>

<h3>innerHTML Property</h3>
element.innerHTML

<h3>Поиск HTML Elements</h3>
<pre>
document.getElementById()	найти по id
document.getElementsByTagName()	найти по tag name
document.getElementsByClassName()	найти по class name

function fclick(x) {
	switch (x) {
		case 1:
			document.getElementById('result1').innerHTML=document.getElementById('result').innerHTML;
		break;
		case 2:
			document.getElementById('result1').innerHTML='количество элементов p на странице: ' + document.getElementsByTagName('p').length;
		break;
		case 3:
			document.getElementById('result1').innerHTML='количество class=btn на странице: ' + document.getElementsByClassName('btn').length;
		break;
	}
	
}
</pre>

<h3>Поиск HTML Objects</h3>
<pre>
document.anchors	Возвращает все a 
document.baseURI	Возвращает absolute base URI 
document.body	Возвращает body
document.cookie	Возвращает document's cookie	
document.doctype	Возвращает document's doctype	
document.documentElement	Возвращает html element	
document.documentMode	Возвращает mode browser
document.documentURI	Возвращает URI document	
document.domain	Возвращает domain name 
document.embeds	Возвращает все embed
document.forms	Возвращает все form
document.head	Возвращает head
document.images	Возвращает все img
document.implementation	Возвращает DOM implementation
document.inputEncoding	Возвращает character set
document.lastModified	Возвращает date and time the document was updated
document.links	Возвращает все area и a с аттрибутом href
document.readyState	Возвращает (loading) status document
document.referrer	Возвращает URI of the referrer
document.scripts	Возвращает все script
document.strictErrorChecking	Возвращает if error checking is enforced
document.title	Возвращает title
document.URL	Возвращает complete URL


function fclick(x) {
	switch (x) {
		case 1:
			document.getElementById('result1').innerHTML=document.getElementById('result').innerHTML;
		break;
		case 2:
			document.getElementById('result1').innerHTML='количество элементов p на странице: ' + document.getElementsByTagName('p').length;
		break;
		case 3:
			document.getElementById('result1').innerHTML='количество class=btn на странице: ' + document.getElementsByClassName('btn').length;
		break;
		case 4:
			document.getElementById('result1').innerHTML='lastModified: ' + document.lastModified;
		break;
		case 5:
			document.getElementById('result1').innerHTML=document.title;
		break;
		case 6:
			document.getElementById('result1').innerHTML=document.URL;
		break;
	}
	
}
</pre>

<h3>Добавить Events Handlers</h3>
<pre>
window.onload=function() {
	console.log('DOM say: Document is ready!');
};

$(document).ready(function(){
	console.log('JQuery say: Document is ready!');
});

document.getElementById(id).onclick=function(){code}	

document.getElementById('idoc').onclick=function(){
	console.log(this.innerHTML);
}	
</pre>

<h2>Селекторы</h2>
Селекторами называют строчные выражения, с помощью которых задаются условия поиска элементов DOM на странице. Вы можете находить интересующие вас элементы, используя выражения в стиле CSS 1-3. Селекторы позволяют находить элементы по различным признакам: значению атрибутов, содержимому элементов, родительским элементам, дочерним элементам, порядковым номерам, по именам классов, идентификаторов и/или тегов.
<br>
Например выражение $('div') осуществит поиск всех div-элементов на странице, $('.className') найдет все элементы с классом className и т. д. В данном примере селекторами являются строки 'div' и '.className', а $( ) — это функция, которая осуществляет поиск элементов по заданному селектору.
<br>
При необходимости, можно создавать собственные селекторы.
<br>
Если вы используете метасимволы (#;&,.+*~':"!^$[]()=>|/ ) как часть имени идентификатора, класса или названия атрибута, не забывайте экранировать эти символы в селекторах с помощью \\. Например, если вам нужен элемент формы input с атрибутом name='names[]', то используйте следующий код: $('input[name=names\\[\\]]').

<h2>Базовые</h2>

"*" все элементы<br>

<h2>Примеры использования:</h2>
$("*")	вернет все элементы на странице<br>
$("div *")	вернет все элементы, находящиеся внутри div-элементов на странице.<br>
$(".rightBlock *")	вернет все элементы, находящиеся внутри элементов с классом rightBlock<br>

".className" элементы с классом className<br>
"#idName" элемент (один!) с идентификатором idName<br>
"tagName" элементы с заданным именем тега<br>


<h3>Подсчитаем количество элементов на странице:</h3>

$("div").html($("*").length);

$(document).ready(function(){
	var head = '<h3>Подсчитаем количество элементов на странице:</h3>';
	$('#result').html(head + $('*').length);
});

<br>



<h2>Добавление содержимого</h2>
.html()
Возвращает/изменяет (в зависимости от числа параметров) html-содержимое элементов на странице

<h3>.html()</h3>
возвращает html-содержимое выбранного элемента. Если таких элементов несколько, то значение будет взято у первого.
<pre>
вернет html-содержимое первого элемента с классом result.

	$('#b1').click(function(){
		var res = $('#result').html();
		console.log(res);
	});

</pre>

<h3>.html(newHTML)</h3>
заменяет содержимое всех выбранных элементов на newHTML.
<pre>

	$('#b2').click(function(){
		var res = $('#result').html();
		$('#topbox').html($('#result').html());
	});

$(".topBlock").html("&lt;p&gt;Новье!&lt;/p&gt;")	изменит содержимое всех элементов с классом topBlock на параграф с текстом "Новье!".

</pre>


<h3>.html(function(index, value))</h3>
заменяет содержимое выбранных элементов на возвращенное пользовательской функцией значение. Функция вызывается отдельно, для каждого из выбранных элементов. При вызове ей передаются следующие параметры: index — позиция элемента в наборе, value — текущее html-содержимое.
<pre>
&lt;div class="cont"&gt;
  	 &lt;div class="box red"&gt; 1 &lt;/div&gt;
  	 &lt;div class="box"> 2 &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="cont"&gt;
  	 &lt;div class="box"&gt; 3 &lt;/div&gt;
  	 &lt;div class="box"&gt; 4 &lt;/div&gt;
  &lt;/div&gt;


$(".cont").html(function(indx, oldHtml){
    if($(oldHtml).hasClass("red"))
    	return oldHtml + '&lt;div class="box green"&gt; 2.5 &lt;/div&gt;';
    else
    	return oldHtml;
  });

</pre>

<br>
<h3>.text()</h3>
Возвращает/изменяет (в зависимости от числа параметров) текст, находящийся в элементах на странице
<br>
$(".topBlock").text()	вернет текстовое содержимое всех элементов с классом topBlock (одной строкой).
$(".topBlock").text("Новье!")	заменит содержимое всех элементов с классом topBlock на текст "Новье!".
<br>
<h3>.text(function(index, value))</h3>
заменяет все содержимое у выбранных элементов на возвращенный пользовательской функцией текст. Функция вызывается отдельно, для каждого из выбранных элементов. При вызове ей передаются следующие параметры: index — позиция элемента в наборе, value — текущий текст элемента.
<br>
<pre>
		$('#bt3').click(function(){
		  $('#list .item').text(function(indx, oldText){
			if($(this).text() === 'Функция')  {
		    	return oldText + 'заменяет все содержимое у выбранных элементов
		    	на возвращенный пользовательской функцией текст. Функция 
		    	вызывается отдельно, для каждого из выбранных элементов. При 
		    	вызове ей передаются следующие параметры: index — позиция 
		    	элемента в наборе, value — текущий текст элемента.';

		    }
		    else {
    	return oldText;
    	}
  		});
	});

</pre>

если вы попытаетесь с помощью метода text() поместить в элемент другие элементы с помощью html-текста, то jQuery будет экранировать все теги, и в результате на странице появится html-текст, вместо html-элементов (см. результат в разделе "В действии"). Для вставки html-элементов нужно использовать метод .html().
$('div.demo-container').text('<p> А вот и текст! </p>');

<h2>Комбинированные селекторы</h2>
Селекторы, находящиеся в одном выражении, взаимодействуют между собой практически так же, как в правилах CSS
<br>
"first, second, ..." элементы удовлетворяющие любому из селекторов first, second, ...
<br>
"outer inner" элементы из inner, которые являются потомками (т.е. лежат внутри) элементов из outer
<br>
"parent > child" элементы из child, которые являются прямыми потомками элементов из parent
<br>
"prev + next" элементы из next, которые следуют непосредственно за элементами из prev
<br>
"prev ~ next" элементы из next, которые следуют за элементами из prev
Селекторы по атрибутам
<br>
"[name]" элементы, содержащие атрибут name
<br>
"[name = value]" элементы, у которых значение атрибута name совпадает с value
<br>
"[name != value]" элементы, у которых значение атрибута name не совпадает с value
<br>
"[name ^= value]" элементы, у которых значение атрибута name начинается с value
<br>
"[name $= value]" элементы, у которых значение атрибута name заканчивается на value
<br>
"[name *= value]" элементы, у которых значение атрибута name содержит подстроку value
<br>
"[name ~= value]" элементы, у которых значение атрибута name содержит слово value
<br>
"[name |= value]" элементы, у которых значение атрибута name имеют префикс value (равен value или имеет вид: "value-*")
<br>
"[first][second][..." элементы, соответствующие всем заданным условиям на атрибуты одновременно
<br>


<h3>Изменить HTML Elements</h3>
<pre>
element.innerHTML=	изменить inner HTML
element.attribute=	изменить attribute
element.setAttribute(attribute,value)	изменить attribute
element.style.property=	изменить стиль 
</pre>

<h3>Добавить или удалить Elements</h3>
<pre>
document.createElement()	Создвть
document.removeChild()	Удалить
document.appendChild()	Добавить
document.replaceChild()	Заменить
document.write(text)	Вывести на устройство выводаstream

document.getElementById('b4').onclick=function(){
  //Получим объект представляющий adddom-элемент на странице
  var domElement = document.getElementById('adddom');
 
   //Создадим объект newElement div
  var newElement = document.createElement('div');
  newElement.innerHTML = '<p>Новый-преновый параграф</p>';
 
  //Поместим новый элемент в конец div-элемента adddom на странице
  domElement.appendChild(newElement);
};

document.getElementById('b6').onclick=function(){
  //Получим объект представляющий list-элемент на странице
  
  var list = document.getElementById("myList");
  list.removeChild(list.childNodes[0]);
};
</pre>

<h3>Пример использования функции $():</h3>
<h3>.remove()  .detach()</h3>
Методы для удаления элементов страницы.
<br>
$("div.content").remove()	удалит все div-элементы с классом content.
<br>
$("div.content").detach()	результат, как и в предыдущем примере.
<br>
Различие двух рассматриваемых методов заключается в том, что при использовании detach, jQuery не удаляет информацию о элементе и поэтому он может быть восстановлен. Например:
<pre>
	$('#bt6').click(function(){
		var foo = jQuery('#foo');
 		foo.detach(); //удаляем элемент
 		//много-много кода 
		foo.appendTo('body'); //вставляем элемент 
							//обратно на страницу 
							//(не обязательно в то же место, где он был)
	
	});
</pre>

<pre>
$('#b5').click(function(){
		  //Получим объект jQuery 
  		  var jqElement = $('#adddom');
 
		  //Создадим объект jQuery по html-тексту
		  var newElement = $("<p>Новый-преновый параграф from JQuery</p>");
		 
		  //Поместим новый элемент в конец div-элемента
		  jqElement.append(newElement);
	
	});
</pre>


<h2>Простые фильтры</h2>
Фильтры, с помощью которых можно уточнить результат других селекторов. По назначению и синтаксису они очень похожи на псевдоклассы в CSS
<br>
":focus" элемент, находящийся в фокусе<br>
":first" первый найденный элемент<br>
":last" последний найденный элемент<br>
":eq( )" элемент идущий под заданным номером среди выбранных<br>
":not(selector)" все найденные элементы, кроме указанных в selector<br>
":even" элементы с четными номерами позиций, в наборе выбранных элементов<br>
":odd" элементы с нечетными номерами позиций, в наборе выбранных элементов<br>
":gt( )" элементы с индексом превышающим n<br>
":lt( )" элементы с индексом меньшим, чем n<br>
":header" элементы, являющиеся заголовками (с тегами h1, h2 и.т.д.)<br>
":animated" элементы, которые в данный момент задействованы в анимации<br>
":hidden" невидимые элементы страницы<br>
":visible" видимые элементы страницы<br>
":lang(language)" элементы, в которых указаны языки содержимого<br>
":root" элемент, который является корневым в документе.<br>

<h3>
Найдем все элементы внутри последнего ul-элемента и добавим им класс result, который выделит их красной границей:</h3>
<br>
<pre>
	$('#b7').click(function(){
		$('ul:last *').addClass('result');
	
	});

	$('#b8').click(function(){
		$('ul:last li:odd').addClass('red');
	
	});
</pre>
<br>


<h3>Фильтры по содержимому</h3>
":contains(text)" элементы, содержащие заданный текст<br>
":empty" элементы без содержимого (без текста и других элементов)<br>
":has(selector)" элементы, которые содержат хотя бы один элемент из selector<br>
":parent" непустые элементы<br>

<h3>Фильтры дочерних элементов</h3>
Данные селекторы отфильтровывают элементы по их расположению в родительских элементах
<br>
":first-child" элементы, расположенные первыми в своих родительских элементах<br>
":last-child" элементы, расположенные последними в своих родительских элементах<br>
":nth-child( )"
":nth-child-last( )" элементы, расположенные определенным образом в родительских элементах (четные, нечетные, идущие под заданным номером)<br>
":only-child" элементы, являющиеся единственными потомками в своих родительских элементах<br>
":only-of-type" элементы, являющиеся единственными, удовлетворяющими селектору, потомками в своих родительских элементах<br>
":first-of-type" те из выбранных элементов, которые первыми встречаются в своих родительских элементах<br>
":last-of-type" те из выбранных элементов, которые последними встречаются в своих родительских элементах<br>
":nth-first-of-type( )"
":nth-last-of-type( )" те из выбранных элементов, которые в определенную очередь встречаются в своих родительских элементах
<br>
<pre>
	$('#b10').click(function(){
		$('#myUl:first-child').addClass('result');
	
	});

	$('#b12').click(function(){
		$('*:only-child').addClass('result');
	
	});
</pre>

<h3>Фильтры элементов форм</h3>
":button" элементы с тегом button или типом button<br>
":radio" элементы, являющиеся переключателями<br>
":checkbox" элементы, являющиеся флажками<br>
":text" элементы, являющиеся текстовыми полями<br>
":password" элементы, являющиеся полями ввода пароля<br>
":file" элементы, являющиеся полями загрузки файлов<br>
":submit" элементы, являющиеся кнопками отправки формы<br>
":reset" элементы, являющиеся кнопками очистки формы<br>
":image" элементы, являющиеся изображениями для отправки формы (input типа image)<br>
":input" элементы, являющиеся элементами формы (с тегами input, textarea или button)<br>
":selected" выбранные элементы (со статусом selected). Это могут быть элементы типа &lt;option&gt;.<br>
":focus" элементы формы, находящиеся в фокусе.<br>
":checked" выбранные элементы (со статусом checked). Это могут быть элементы типа &lt;checkbox&gt; или &lt;radio&gt;.<br>
":enabled" активные элементы формы (со статусом enabled)<br>
":disabled" неактивные элементы формы (со статусом disabled)<br>

<pre>
	$('#b11').click(function(){
		$('*:button').addClass('green');
	
	});
</pre>

<h3>Изменить стиль Elements</h3>

element.style.property=	изменить стиль 

<h2>Работа с параметрами и стилями</h2>
<h3>.css()</h3>
Возвращает/изменяет (в зависимости от числа входных параметров) CSS параметры элемента
<h3>.height()
.innerHeight()
.outerHeight()</h3>
Возвращает/изменяет высоту элемента
<pre>
$('#b18').click(function(){
	    $('#list2 li').height(function(i,val){
	       return val+10;
	    });
    });
</pre>
<h3>.width()
.innerWidth()
.outerWidth()</h3>
Возвращает/изменяет ширину элемента
<pre>
$('#b20').click(function(){
	    $('#list3 .item').width(function(i,val){
			return val+10;
	    });
    });
</pre>
<h3>.position()
.offset()</h3>
Возвращает/изменяет позицию элемента
<pre>
    
    $('#b21').click(function(){
	    $('#list3 .item:first').offset(function(i,val){
	  return {top:val.top + 30, left:val.left};
	    });
    });

</pre>
<h3>.offsetParent()</h3>
Возвращает ближайшего предка c позиционированием, отличным от static (позиционирование по умолчанию)
<pre>
.outer{
   position:relative;  
     width:100px;
     height:100px;
     margin:15px;
     background-color:white;
   }
   .wrap{ 
     width:60px;
     height:60px;   
     margin:18px;
     background-color:white;
   }
    $('#b22').click(function(){
	    $('.inner').offsetParent().css('background-color', 'yellow');
	    
    });
</pre>

<h3>.scrollTop()
.scrollLeft()</h3>
Возвращает/изменяет величину скроллинга (прокрутку) элемента


<h2>Работа с параметрами и стилями .css()</h2>

Возвращает/изменяет (в зависимости от числа входных параметров) CSS параметры элемента

<pre>
document.getElementById('b13').onclick=function(){
  document.body.style.backgroundColor='yellow';  
};

	$('#b14').click(function(){
		$('tr:odd').css('background-color', 'yellow');
		$('tr:even').css('background-color', 'blue');	
	});

	$('tr').dblclick(function(){
        $(this).css('background-color', 'white');
    });

	$('td').mouseenter(function(){
        $(this).css('background-color', 'red');
    });
     $('td').mouseleave(function(){
        $(this).css('background-color', 'white');
    });

    $('td').mousedown(function(){
        $(this).css('color', 'white');
    });
    $('td').mouseup(function(){
        $(this).css('color', 'black');
    });
     $('th').hover(function(){
        $(this).css('color', 'white');
        $(this).css('background-color', 'green');
    });
    $('th').mouseout(function(){
        $(this).css('color', 'black');
        $(this).css('background-color', 'white');
    });

    $('input').focus(function(){
        $(this).css('background-color', '#cccccc');
    });
    $('input').blur(function(){
        $(this).css('background-color', '#ffffff');
    });
    $('#b15').click(function(){
    	$('#pers').after('&lt;h3&gt;'+$('#username').val()+'&lt;/h3&gt;');
    });

</pre>


<h2>Добавление содержимого</h2>
<h3>.html()</h3>
Возвращает/изменяет (в зависимости от числа параметров) html-содержимое элементов на странице
<h3>.text()</h3>
Возвращает/изменяет (в зависимости от числа параметров) текст, находящийся в элементах на странице
<h3>.append()
.appendTo()</h3>
Добавляет заданное содержимое в конец элементов на странице
<h3>.prepend()
.prependTo()</h3>
Добавляет заданное содержимое в начало элементов на странице
<h3>.after()
.insertAfter()</h3>
Добавляет заданное содержимое после элементов на странице
<h3>.before()
.insertBefore()</h3>
Добавляет заданное содержимое перед элементами на странице
<h3>.wrap()
.wrapAll()</h3>
Окружает элементы на странице заданными html-элементами
<h3>.wrapInner()</h3>
Окружает содержимое элементов на странице заданными html-элементами
<h2>Удаление содержимого</h2>
<h3>.detach()
.remove()</h3>
Удаляет элементы на странице
<h3>.empty()</h3>
Удаляет содержимое элементов на странице
<h3>.unwrap()</h3>
Удаляет родительские элементы, при этом их содержимое остается на месте
<h2>Замена элементов</h2>
<h3>.replaceWith()
.replaceAll()</h3>
Заменяет одни элементы страницы на другие (новые или уже существующие).
<pre>
$('#b23').click(function(){
	   $('.inner').replaceWith(function(){
     	return '&lt;img src="images/1.jpg"&gt;';
 		});
	    
    });
</pre>

<h2>Клонирование элементов</h2>
<h3>.clone( )</h3>
Возвращает копию выбранных элементов страницы.
<pre>
  $('#b24').click(function(){
		$('#img1').clone().appendTo('#clone1');
	    
    });
</pre>