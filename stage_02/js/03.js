var createMenu = function (){
    var parent_menu = document.getElementById('menu');
    var menu =[
      ['Главня',['index.html']],
      [ 'О компании',['about.html']],
      [ 'Каталог',[
        ['Бытовая техника',['cat.html']],
        ['Телефоны',['cat.html']],
        ['Мобильные устройства',['cat.html']],
        ['Гаджеты',['cat.html']],
        ['Компъютеры',['cat.html']],
        ['Комплектующие',['cat.html']],
        ]
      ],
      [ 'Услуги',[
          ['Ремонт',['1.html']],
          ['Настойка',['1.html']],
          ['Доставка',['1.html']],
          ['Косультации',['1.html']],
          ['Модификация',['1.html']]
        ]
      ],
      [ 'Блог',['blog.html']],
      [ 'Контакты',['contact.html']]
    ];

    var textNode, ul1;
    var cloneLi, cloneA;
    var cloneLi1, cloneA1;
    var i, j;

    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var a = document.createElement('a');

    var toggleMenu = function(){
        if (this.nextSibling.style.display == 'none'){
            this.nextSibling.style.display = 'block';
        }
        else {
            this.nextSibling.style.display = 'none'
        }
    };

    var createItem = function(){
        cloneLi = li.cloneNode(true);
        cloneA = a.cloneNode(true);
        cloneA.appendChild(document.createTextNode(''+menu[i][0]+''));
        if (menu[i][1].length>1) {
          cloneA.setAttribute('href', '#');
          cloneA.addEventListener('click', toggleMenu, false);
        }
        else {
            cloneA.setAttribute('href', menu[i][1]);
            }
        return cloneLi.appendChild(cloneA);
    };


    for (i = 0; i < menu.length; i++) {

        textNode = document.createTextNode(''+menu[i][0]+'');
        cloneLi = li.cloneNode(true);
        cloneA = a.cloneNode(true);
        cloneA.appendChild(textNode);
        cloneLi.appendChild(cloneA);

        //cloneLi = createItem();

        if (menu[i][1].length>1) {
          cloneA.setAttribute('href', '#');

          cloneA.addEventListener('click', toggleMenu, false);

          ul1 = ul.cloneNode();
          ul1.style.display = 'none';

          for (j = 0; j <menu[i][1].length; j++) {
              cloneLi1 = li.cloneNode(true);
              cloneA1 = a.cloneNode(true);
              cloneA1.appendChild(document.createTextNode(menu[i][1][j][0]));
              cloneA1.setAttribute('href', menu[i][1][j][1]);
              cloneLi1.appendChild(cloneA1);
              ul1.appendChild(cloneLi1);
          }
          cloneLi.appendChild(ul1);
        }
        else {
            cloneA.setAttribute('href', menu[i][1]);
            }
        ul.appendChild(cloneLi);
      }
    parent_menu.appendChild(ul);
};

window.onload=createMenu;
