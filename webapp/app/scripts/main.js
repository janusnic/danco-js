'use strict';
console.log('\'Allo \'Allo!');

document.getElementById('idoc').onclick=function(){
	console.log(this.innerHTML);
};


var nel = document.getElementsByTagName('*');

console.log('количество элементов на странице: ' + nel.length );

document.getElementById('idoc').onclick=function(){
	console.log(this.innerHTML);
};

document.getElementById('b4').onclick=function(){
  //Получим объект представляющий adddom-элемент на странице
  var domElement = document.getElementById('adddom');
 
   //Создадим объект newElement div
  var newElement = document.createElement('div');
  newElement.innerHTML = '<p>Новый-преновый Dom параграф</p>';
 
  //Поместим новый элемент в конец div-элемента adddom на странице
  domElement.appendChild(newElement);
};

document.getElementById('b6').onclick=function(){
  //Получим объект представляющий list-элемент на странице
  
  var list = document.getElementById('myList');
  list.removeChild(list.childNodes[0]);
};

document.getElementById('b13').onclick=function(){
  document.body.style.backgroundColor='yellow';  
};

window.onload=function() {
	console.log('DOM say: Document is ready!');
};


$(document).ready(function(){

	console.log('JQuery say: Document is ready!');
	
	var head = '<h3>Подсчитаем количество элементов на странице:</h3>';
	$('#result').html(head + $('*').length);

	$('#b1').click(function(){
		var res = $('#result').html();
		console.log(res);
	});

	$('#b2').click(function(){
		
		$('#topbox').html($('#result').html());
	});

	$('#b3').click(function(){
		$('.cont').html(function(indx, oldHtml){
		    if($(oldHtml).hasClass('red')) {
		    	return oldHtml + '<div class="box green"> 2.5 </div>';
		    }
		    else {
    	return oldHtml;
    	}
  		});
	});
		$('#bt3').click(function(){
		  $('#list .item').text(function(indx, oldText){
			if($(this).text() === 'Функция')  {
		    	return oldText + 'заменяет все содержимое у выбранных элементов на возвращенный пользовательской функцией текст. Функция вызывается отдельно, для каждого из выбранных элементов. При вызове ей передаются следующие параметры: index — позиция элемента в наборе, value — текущий текст элемента.';
		    }
		    else {
    	return oldText;
    	}
  		});
	});

	$('#b5').click(function(){
		  //Получим объект jQuery 
  		  var jqElement = $('#adddom');
 
		  //Создадим объект jQuery по html-тексту
		  var newElement = $('<p>Новый-преновый параграф from JQuery</p>');
		 
		  //Поместим новый элемент в конец div-элемента
		  jqElement.append(newElement);
	
	});

	$('#bt6').click(function(){
		var foo = jQuery('#foo');
 		foo.detach(); //удаляем элемент
 		//много-много кода 
		foo.appendTo('body'); //вставляем элемент обратно на страницу (не обязательно в то же место, где он был)
	
	});

	$('#b7').click(function(){
		$('ul:last *').addClass('result');
	
	});

	$('#b8').click(function(){
		$('ul:last li:odd').addClass('red');
	
	});

	$('#b9').click(function(){
		$('*:empty').addClass('green');
	
	});

	$('#b10').click(function(){
		$('#myUl:first-child').addClass('result');
	
	});

	$('#b11').click(function(){
		$('*:button').addClass('green');
	
	});

	$('#b12').click(function(){
		$('*:only-child').addClass('result');
	
	});

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
    	
    	$('#pers').after('<h3>'+$('#username').val()+'</h3>');
        
    });
    $('#b16').click(function(){
    	$('.list').append('<li class="item">Тест</li>');
  		$('<li class="item">Тест</li>').appendTo($('.list'));
     });
    
    $('#b17').click(function(){
    	$('.l2').append($('.l1 li:first'));
    });
	$('#b18').click(function(){
	    $('#list2 li').height(function(i,val){
	       return val+10;
	    });
    });
	
	$('#b20').click(function(){
	    $('#list3 .item').width(function(i,val){
			return val+10;
	    });
    });
    
    $('#b21').click(function(){
	    $('#list3 .item:first').offset(function(i,val){
	  return {top:val.top + 30, left:val.left};
	    });
    });

    $('#b22').click(function(){
	    $('.inner').offsetParent().css('background-color', 'yellow');
	    
    });

    $('#b23').click(function(){
	   $('.inner').replaceWith(function(){
     	return '<img src="../images/1.jpg">';
 		});
	    
    });
     $('#b24').click(function(){
		$('#img1').clone().appendTo('#clone1');
	    
    });
    


});
