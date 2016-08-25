var ul;
var li_items;
var li_number;
var image_number = 0;
var slider_width = 0;
var image_width;
var current = 0;
var prev, next;
var currentPostion = 0;

var timerId_1 = null;
var timerId_2 = null;

function init(){

    ul = document.getElementById('image_slider');
    li_items = ul.children;
    li_number = li_items.length;

    for (var i = 0; i < li_number; i++){
            image_width = li_items[i].childNodes[0].clientWidth;
            slider_width += image_width;
            image_number++;
    }

    ul.style.width = parseInt(slider_width) + 'px';
    generatePager(image_number);
    prev = document.getElementById("prev");
    next = document.getElementById("next");

    prev.onclick = function(){
        onClickPrev();
    };
    next.onclick = function(){
        onClickNext();
    };

    slider(ul);
}

function onClickPrev(){
    stop_slider();
    if (current == 0){
        slideTo(image_number - 1);
    }
    else{
        slideTo(current - 1);
    }
}

function onClickNext(){
    //
    stop_slider();
    if (current == image_number - 1){
        slideTo(0);
    }
    else{
        slideTo(current + 1);
    }
}

function stop_slider () {
	clearTimeout(timerId_1);
	if (timerId_2 != null)
	{
		clearTimeout(timerId_2);
	}
}

function slideTo(imageToGo){
    var direction;
    var numOfImageToGo = Math.abs(imageToGo - current);

    direction = current > imageToGo ? 1 : -1;
    currentPostion = -1 * current * image_width;
    var opts = {
        duration:1000,
        delta:function(p){return p;},
        step:function(delta){
            ul.style.left = parseInt(currentPostion + direction * delta * image_width * numOfImageToGo) + 'px';
        },
        callback:function(){current = imageToGo;}
    };

    animate(opts);
}

function slider(){
        animate({
            delay:17,
            duration: 3000,
            delta:function(p){return Math.max(0, -1 + 2 * p)},
            step:function(delta){
                    ul.style.left = '-' + parseInt(current * image_width + delta * image_width) + 'px';
                },
                callback:function(){
                    current++;
                    if(current < li_number-1){
                        slider();
                    }
                    else{
                        var left = (li_number - 1) * image_width;
                        setTimeout(function(){goBack(left)},2000);
                        timerId_1 = setTimeout(slider, 4000);
                    }
                }
        });
}

function goBack(left_limits){
    current = 0;
    timerId_2 = setInterval(function(){
        if(left_limits >= 0){
            ul.style.left = '-' + parseInt(left_limits) + 'px';
            left_limits -= image_width/10;
        }
    }, 17);
}

function animate(opts){
    var start = new Date;
    var id = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed/opts.duration;
        if(progress > 1){
            progress = 1;
        }
        var delta = opts.delta(progress);
        opts.step(delta);
        if (progress == 1){
            clearInterval(id);
            opts.callback();
        }
    }, opts.dalay || 17);
}

function generatePager(imageNumber){
    var pageNumber;
    var pagerDiv = document.getElementById('pager');
    for (i = 0; i < imageNumber; i++){
        var li = document.createElement('li');
        pageNumber = document.createTextNode(parseInt(i + 1));
        li.appendChild(pageNumber);
        pagerDiv.appendChild(li);
        // add event inside a loop, closure issue.
        li.onclick = function(i){
            return function(){
                stop_slider();
                slideTo(i);
            }
        }(i);
    }
    var computedStyle = document.defaultView.getComputedStyle(li, null);

    var liWidth = parseInt(li.offsetWidth);
    var liMargin = parseInt(computedStyle.margin.replace('px',""));
    pagerDiv.style.width = parseInt((liWidth + liMargin * 2) * imageNumber) + 'px';
}
window.onload = init;
