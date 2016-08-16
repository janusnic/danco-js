var createMenu = function (){
    var parent_menu = document.getElementById('menu');
    var menu =[
      'Главня',
      'О компании',
      'Каталог',
      'Услуги',
      'Блог',
      'Контакты'
    ];

    var ul = document.createElement('ul');
    var li, a, textNode;

    for (var i = 0; i < menu.length; i++) {
        li = document.createElement('li');

        textNode = document.createTextNode(''+menu[i]+'');
        a = document.createElement('a');
        a.appendChild(textNode);
        a.setAttribute('href', '#');
        li.appendChild(a);

        ul.appendChild(li);
      }
    parent_menu.appendChild(ul);
};

window.onload=createMenu;
