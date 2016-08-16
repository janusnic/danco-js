function toggleMenu(){

    if (this.nextSibling.style.display == 'none'){
        this.nextSibling.style.display = 'block';
    }
    else {
        this.nextSibling.style.display = 'none'
    }
    // console.log(this);
}
var createMenu = function (){
    var parent_menu = document.getElementById('menu');
    var menu =[
      ['Главня',['index.html']],
      [ 'О компании',['about.html']],
      [ 'Каталог',[
        ['Бытовая техника','cat.html'],
        ['Телефоны','cat.html'],
        ['Мобильные устройства','cat.html'],
        ['Гаджеты','cat.html'],
        ['Компъютеры','cat.html'],
        ['Комплектующие','cat.html'],
        ]
      ],
      [ 'Услуги',[
          ['Ремонт','1.html'],
          ['Настойка','1.html'],
          ['Доставка','1.html'],
          ['Косультации','1.html'],
          ['Модификация','1.html']
        ]
      ],
      [ 'Блог',['blog.html']],
      [ 'Контакты',['contact.html']]
    ];

    var ul = document.createElement('ul');
    var li, a, textNode, ul1;
    var li1 = [], a1 = [];

    for (var i = 0; i < menu.length; i++) {
        li = document.createElement('li');

        textNode = document.createTextNode(''+menu[i][0]+'');
        a = document.createElement('a');
        a.appendChild(textNode);
        //
        li.appendChild(a);


        if (menu[i][1].length>1) {
          a.setAttribute('href', '#');
          // var idm = 'id' + i;

          //a.setAttribute('onClick', 'toggleMenu(); return false;');
          a.addEventListener('click', toggleMenu, false);
          ul1 = document.createElement('ul');
          // ul1.setAttribute('id', idm);
          ul1.style.display = 'none';

          for (var j = 0; j <menu[i][1].length; j++) {

              li1[j] = document.createElement('li');
              a1[j] = document.createElement('a');
              a1[j].appendChild(document.createTextNode(menu[i][1][j][0]));
              a1[j].setAttribute('href', menu[i][1][j][1]);
              li1[j].appendChild(a1[j]);
              ul1.appendChild(li1[j]);
          }
          li.appendChild(ul1);
        }
        else {
            a.setAttribute('href', menu[i][1]);
            }

        ul.appendChild(li);
      }
    parent_menu.appendChild(ul);
};

window.onload=createMenu;
// When called as a listener, turns the related element blue
function bluify(e){
  // Always true
  console.log(this === e.currentTarget);
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
  console.log(this.parentNode.nodeName);
  console.log(this.nextSibling.innerHTML);
  if (this.nextSibling.style.display == 'none'){
  this.nextSibling.style.display = 'block';
  }
  else {
      this.nextSibling.style.display = 'none'
  }
}
/*
// Get a list of every element in the document
var elements = document.getElementsByTagName('a');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for(var i=0 ; i<elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}
*/
