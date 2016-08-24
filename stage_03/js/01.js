var ul;
var li_items;
var li_number;
var image_number = 0;
var slider_width = 0;
var image_width;
var current = 0;

function init(){

    ul = document.getElementById('image_slider');
    li_items = ul.children;
    li_number = li_items.length;

    console.log('li_number= ',li_number);

    for (var i = 0; i < li_number; i++){
            image_width = li_items[i].childNodes[0].clientWidth;
            slider_width += image_width;
            image_number++;
    }

    ul.style.width = parseInt(slider_width) + 'px';

    console.log('image_width= ',image_width,'slider_width= ',slider_width,'image_number=',image_number);
}

window.onload = init;
