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

    var ul1;
    var cloneLi;
    var cloneLi1;
    var i, j;

    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var a = document.createElement('a');

    var toggleMenu = function(){
        if (this.nextSibling.style.display == 'none'){
            this.nextSibling.style.display = 'block';
            this.classList.add('current');
        }
        else {
            this.nextSibling.style.display = 'none'
            this.classList.remove('current');
        }
    };

    var createItem = function(a,menu){
        var cloneA = a.cloneNode();
        cloneA.appendChild(document.createTextNode(''+menu[0]+''));
        if (menu[1].length>1) {
          cloneA.setAttribute('href', '#');
          // cloneA.setAttribute('class','dropdown-toggle');
          cloneA.className= 'dropdown-toggle';
          cloneA.addEventListener('click', toggleMenu, false);
        }
        else {
            cloneA.setAttribute('href', menu[1]);
            }
        return cloneA;
    };

    for (i = 0; i < menu.length; i++) {
        cloneLi = li.cloneNode();
        cloneLi.appendChild(createItem(a,menu[i]));

        if (menu[i][1].length>1) {
          ul1 = ul.cloneNode();
          ul1.style.display = 'none';

          for (j = 0; j <menu[i][1].length; j++) {
              cloneLi1 = li.cloneNode();
              cloneLi1.appendChild(createItem(a,menu[i][1][j]));
              ul1.appendChild(cloneLi1);
          }
          cloneLi.appendChild(ul1);
        }
        ul.appendChild(cloneLi);
      }
    parent_menu.appendChild(ul);
};

window.onload=createMenu;
