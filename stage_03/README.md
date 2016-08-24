# Slider
css/slider.css
---------------
        .container{
            width:1220px;
            height:500px;
            padding:20px;
            border:1px solid gray;
            -webkit-box-sizing:border-box;
            -moz-box-sizing:border-box;
            box-sizing:border-box;
          background: black;
        }
        .image-slider-wrapper{
            overflow: hidden;
        }
        #image_slider{
            position: relative;
            overflow: hidden;
            height: 400px;
            padding:0;
            left:0;
        }
        #image_slider li{
            position:relative;
            max-width: 100%;
            float:left;
            list-style: none;
            left: 0;
        }

1.html
--------
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <link rel="stylesheet" type="text/css" href="css/slider.css">
                <style type="text/css">
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="image-slider-wrapper">
                        <ul id="image_slider">
                            <li><img src="images/1.jpg"></li>
                            <li><img src="images/2.jpg"></li>
                            <li><img src="images/3.jpg"></li>
                            <li><img src="images/4.jpg"></li>
                            <li><img src="images/5.jpg"></li>
                            <li><img src="images/6.jpg"></li>
                        </ul>
                        <div class="pager">
                        </div>
                    </div>
                </div>
                <script src="js/01.js">
                </script>
            </body>
        </html>

Node.children
=========

        Node.children is a read-only property that returns a live HTMLCollection of the child elements of Node.

        Syntax
        var elList = elementNodeReference.children;
        elList is a HTMLCollection, which is an ordered collection of DOM elements that are children of elementNodeReference. If there are no element children, then elList contains no elements and has a length of 0.

        Example
        // pEl is a reference to a <p> element
        var elementChildren = pEl.children;
        for (var i = 0; i < elementChildren.length; i++) {
            console.log(elementChildren[i].tagName);
            // NOTE: elementChildren is a live list, adding or removing children from pEl
            // will change the members of elementChildren immediately
        }

Node.childNodes
==========
        The Node.childNodes read-only property returns a live collection of child nodes of the given element.

        Syntax
        var ndList = elementNodeReference.childNodes;
        ndList is an ordered collection of node objects that are children of the current element. If the element has no children, then ndList contains no node.

        The ndList is a variable storing the node list of childNodes. Such list is of type NodeList.

        Example
        // parg is an object reference to a <p> element

        if (parg.hasChildNodes()) {
          // So, first we check if the object is not empty, if the object has child nodes
          var children = parg.childNodes;

          for (var i = 0; i < children.length; i++) {
            // do something with each child as children[i]
            // NOTE: List is live, Adding or removing children will change the list
          }
        }
        // This is one way to remove all children from a node
        // box is an object reference to an element with children

        while (box.firstChild) {
            //The list is LIVE so it will re-index each call
            box.removeChild(box.firstChild);
        }
        Notes
        The items in the collection of nodes are objects and not strings. To get data from those node objects, you must use their properties (e.g. elementNodeReference.childNodes[1].nodeName to get the name, etc.).

        The document object itself has 2 children: the Doctype declaration and the root element, typically referred to as documentElement. (In (X)HTML documents this is the HTML element.)

        childNodes also includes e.g. text nodes and comments. To skip them, use ParentNode.children instead.

        The Node.firstChild read-only property returns the node's first child in the tree, or null if the node is childless. If the node is a Document, it returns the first node in the list of its direct children.

        Syntax
        var childNode = node.firstChild;
        Description
        childNode is a reference to the first child of node if there is one, otherwise it's null.

        Example
        This example demonstrates the use of firstChild and how whitespace nodes might interfere with using this property. See the Notes section for more information about whitespace handling in Gecko DOM.

        <p id="para-01">
          <span>First span</span>
        </p>

        <script type="text/javascript">
          var p01 = document.getElementById('para-01');
          alert(p01.firstChild.nodeName)
        </script>
        In the above, the alert will show '#text' because a text node is inserted to maintain the whitespace between the end of the opening <p> and <span> tags. Any whitespace will cause the #text node to be inserted, from a single space to any number of spaces, returns, tabs, and so on.

        Another #text node is inserted between the closing </span> and </p>tags.

        If this whitespace is removed from the source, the #text nodes are not inserted and the span element becomes the paragraph's first child.

        <p id="para-01"><span>First span</span></p>

        <script type="text/javascript">
          var p01 = document.getElementById('para-01');
          alert(p01.firstChild.nodeName)
        </script>
        Now the alert will show 'SPAN'.

        The Node.lastChild read-only property returns the last child of the node. If its parent is an element, then the child is generally an element node, a text node, or a comment node. It returns null if there are no child elements.

        Syntax
        var last_child = element.lastChild
        Example
        var tr = document.getElementById("row1");
        var corner_td = tr.lastChild;

        The Node.nextSibling read-only property returns the node immediately following the specified one in its parent's childNodes list, or null if the specified node is the last node in that list.

       Syntax
       nextNode = node.nextSibling
       Notes
       Gecko-based browsers insert text nodes into a document to represent whitespace in the source markup. Therefore a node obtained, for example, using Node.firstChild or Node.previousSibling may refer to a whitespace text node rather than the actual element the author intended to get.

       See Whitespace in the DOM and W3C DOM 3 FAQ: Why are some Text nodes empty? for more information.

       Example
       <div id="div-01">Here is div-01</div>
       <div id="div-02">Here is div-02</div>

       <script type="text/javascript">
       var el = document.getElementById('div-01').nextSibling,
           i = 1;

       console.log('Siblings of div-01:');

       while (el) {
         console.log(i + '. ' + el.nodeName);
         el = el.nextSibling;
         i++;
       }

       </script>

       /**************************************************
         The following is written to the console as it loads:

            Siblings of div-01

             1. #text
             2. DIV
             3. #text
             4. SCRIPT

       **************************************************/
       In the above example, it can be seen that #text nodes are inserted in the DOM where whitespace occurs in the markup between tags (i.e. after the closing tag of an element and before the opening tag of the next). No whitespace is created between the elements inserted by the document.write statement.

       The possible inclusion of text nodes in the DOM must be allowed for when traversing the DOM using nextSibling. See the resources in the Notes section.

       The Node.previousSibling read-only property returns the node immediately preceding the specified one in its parent's childNodes list, or null if the specified node is the first in that list.

       Syntax
       previousNode = node.previousSibling;
       Example
       // <a><b1 id="b1"/><b2 id="b2"/></a>

       alert(document.getElementById("b1").previousSibling); // null
       alert(document.getElementById("b2").previousSibling.id); // "b1"
       Notes
       Gecko-based browsers insert text nodes into a document to represent whitespace in the source markup. Therefore a node obtained, for example, using Node.firstChild or Node.previousSibling may refer to a whitespace text node rather than the actual element the author intended to get.

Determining the dimensions of elements
----------------------------------------------
       The Element.clientWidth property is zero for elements with no CSS or inline layout boxes, otherwise it's the inner width of an element in pixels. It includes padding but not the vertical scrollbar (if present, if rendered), border or margin.

       This property will round the value to an integer. If you need a fractional value, use element.getBoundingClientRect().
       Syntax
       var intElemClientWidth = element.clientWidth;
       intElemClientWidth is an integer corresponding to the clientWidth of element in pixels. clientWidth is read–only.

       The Element.clientHeight read-only property is zero for elements with no CSS or inline layout boxes, otherwise it's  the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin.

       clientHeight can be calculated as CSS height + CSS padding - height of horizontal scrollbar (if present).

       Note: This property will round the value to an integer. If you need a fractional value, use element.getBoundingClientRect().
       Syntax
       var h = element.clientHeight;
       h is an integer representing height of the element in pixels.

 js/01.js
---------
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


2.html
--------

        <!DOCTYPE HTML>
        <html>
        <head>
        <link type="text/css" rel="stylesheet" href="css/animate.css">
        <script>
        function move(elem) {
          var left = 0
          function frame() {
            left++  // update parameters
            elem.style.left = left + 'px' // show frame
            if (left == 100)  // check finish condition
              clearInterval(id)
          }
          var id = setInterval(frame, 10) // draw every 10ms
        }
        </script>
        </head>

        <body>
        <div onclick="move(this.children[0])" class="example_path">
            <div class="example_block"></div>
        </div>
        </body>
        </html>

3.html
-------

            <!DOCTYPE HTML>
            <html>
            <head>
            <link type="text/css" rel="stylesheet" href="css/animate.css">

            <script>

            function move(element, delta, duration) {
              var to = 500

              animate({
                delay: 10,
                duration: duration || 1000, // 1 sec by default
                delta:function(p){return Math.max(0, -1 + 2 * p)},

                step: function(delta) {
                  element.style.left = to*delta + "px"
                }
              })
            }
            function animate(opts) {
              var start = new Date
              var id = setInterval(function() {
                var timePassed = new Date - start
                var progress = timePassed / opts.duration
                if (progress > 1) progress = 1

                var delta = opts.delta(progress)
                opts.step(delta)

                if (progress == 1) {
                  clearInterval(id)
                }
              }, opts.delay || 10)
            }
            </script>
            </head>

            <body>
            <div onclick="move(this.children[0])" class="example_path">
                <div class="example_block"></div>
            </div>
            </body>
            </html>

02.js
------
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

            for (var i = 0; i < li_number; i++){
                    image_width = li_items[i].childNodes[0].clientWidth;
                    slider_width += image_width;
                    image_number++;
            }

            ul.style.width = parseInt(slider_width) + 'px';

            slider(ul);

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

                    }
                });
        }

        function animate(opts){
            var start = new Date;
            var id = setInterval(function(){
                var timePassed = new Date - start;
                var progress = timePassed/opts.duration
                console.log('progress= ',progress);
                if(progress > 1){
                    progress = 1;
                }
                var delta = opts.delta(progress);
                opts.step(delta);
                console.log('delta= ',delta);
                if (progress == 1){
                    clearInterval(id);
                    opts.callback();
                }
            }, opts.dalay || 17);
        }

        window.onload = init;


03.js
------
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

            for (var i = 0; i < li_number; i++){
                    image_width = li_items[i].childNodes[0].clientWidth;
                    slider_width += image_width;
                    image_number++;
            }

            ul.style.width = parseInt(slider_width) + 'px';

            slider(ul);

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
                                setTimeout(slider, 4000);
                            }
                        }
                });
        }

        function animate(opts){
            var start = new Date;
            var id = setInterval(function(){
                var timePassed = new Date - start;
                var progress = timePassed/opts.duration;
                console.log('progress= ',progress);
                if(progress > 1){
                    progress = 1;
                }
                var delta = opts.delta(progress);
                opts.step(delta);
                console.log('delta= ',delta);
                if (progress == 1){
                    clearInterval(id);
                    opts.callback();
                }
            }, opts.dalay || 17);
        }

        window.onload = init;

04.js
------

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

            for (var i = 0; i < li_number; i++){
                    image_width = li_items[i].childNodes[0].clientWidth;
                    slider_width += image_width;
                    image_number++;
            }

            ul.style.width = parseInt(slider_width) + 'px';

            slider(ul);

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
                                setTimeout(slider, 4000);
                            }
                        }
                });
        }

        function goBack(left_limits){
            current = 0;
            setInterval(function(){
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
                //console.log('progress= ',progress);
                if(progress > 1){
                    progress = 1;
                }
                var delta = opts.delta(progress);
                opts.step(delta);
                //console.log('delta= ',delta);
                if (progress == 1){
                    clearInterval(id);
                    opts.callback();
                }
            }, opts.dalay || 17);
        }

        window.onload = init;
