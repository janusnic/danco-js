# JQuery Stage 02
.ready()
======
The .ready() method is typically used with an anonymous function:

    $( document ).ready(function() {
      // Handler for .ready() called.
    });

Which is equivalent to the recommended way of calling:

    $(function() {
      // Handler for .ready() called.
    });

DOM Insertion, Inside
==============
These methods allow us to insert new content inside an existing element.

.append()
-----------
Insert content, specified by the parameter, to the end of each element in the set of matched elements.

.appendTo()
--------------
Insert every element in the set of matched elements to the end of the target.

.html()
--------
Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.

.prepend()
------------
Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.

.prependTo()
--------------
Insert every element in the set of matched elements to the beginning of the target.

.text()
-------
Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.

DOM Insertion, Outside
===============
These methods allow us to insert new content outside an existing element.
.after()
--------
Insert content, specified by the parameter, after each element in the set of matched elements.
.before()
----------
Insert content, specified by the parameter, before each element in the set of matched elements.
.insertAfter()
---------------
Insert every element in the set of matched elements after the target.
.insertBefore()
----------------
Insert every element in the set of matched elements before the target.

DOM Insertion, Around
==============
These methods allow us to insert new content surrounding existing content.
.unwrap()
-----------
Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
.wrap()
---------
Wrap an HTML structure around each element in the set of matched elements.
.wrapAll()
-----------
Wrap an HTML structure around all elements in the set of matched elements.
.wrapInner()
--------------
Wrap an HTML structure around the content of each element in the set of matched elements.

1.html
====

        <!DOCTYPE html>
        <html class=''>
        <head>
            <meta charset='UTF-8'>
            <link rel='stylesheet prefetch' href='css/reset.css'>
            <link rel='stylesheet prefetch' href='css/main.css'>
        </head>
        <body>
        <div id="Fader" class="fader">
          <img class="slide" src="images/1.jpg"/>
          <img class="slide" src="images/2.jpg"/>
          <img class="slide" src="images/3.jpg"/>
            <div class="fader_controls">
              <div class="page prev" data-target="prev">&lsaquo;</div>
              <div class="page next" data-target="next">&rsaquo;</div>
              <ul class="pager_list"></ul>
            </div>
        </div>

        <script src='js/jquery-3.1.0.min.js'></script>
        <script>
            $(function() {
                var $container = $('#Fader'),
                    slideSelector = '.slide',
                    fading = false,
                    slideTimer, activeSlide, newSlide,
                    $slides = $container.find(slideSelector),
                    totalSlides = $slides.length,
                    $pagerList = $container.find('.pager_list');

                    for (var i = 0; i < totalSlides; i++) {
                        $( "<li>" ).clone().append(''+i+'').addClass("page").attr('data-target', i).appendTo($pagerList);
                    }
                    var $pagers = $pagerList.find('.page');
                    $slides.eq(0).css('opacity', 1);
                    $pagers.eq(0).addClass('active');
                    activeSlide = 0;
            });
        </script>
        </body>
        </html>


        for (var i = 0; i < totalSlides; i++) {
            $pagerList.append('<li class="page" data-target="' + i + '">' + i + '</li>');
        }

2.html changeSlides
=============

        $(function() {
            var $container = $('#Fader'),
                slideSelector = '.slide',
                fading = false,
                slideTimer, activeSlide, newSlide,
                $slides = $container.find(slideSelector),
                totalSlides = $slides.length,
                $pagerList = $container.find('.pager_list');

                function changeSlides(target) {
                    if (target == 'next') {
                        newSlide = activeSlide + 1;
                        if (newSlide > totalSlides - 1) {
                            newSlide = 0;
                        }
                    } else if (target == 'prev') {
                        newSlide = activeSlide - 1;
                        if (newSlide < 0) {
                            newSlide = totalSlides - 1;
                        }
                    } else {
                        newSlide = target;
                    }
                }

                for (var i = 0; i < totalSlides; i++) {
                    $( "<li>" ).clone().append(''+i+'').addClass("page").attr('data-target', i).appendTo($pagerList);
                }

                $container.find('.page').on('click', function () {
                    var target = $(this).attr('data-target');

                    console.log(target);

                    changeSlides(target);
                });

                var $pagers = $pagerList.find('.page');
                $slides.eq(0).css('opacity', 1);
                $pagers.eq(0).addClass('active');
                activeSlide = 0;
        });

jQuery Effect - animate() Method
=====================

The animate( ) method performs a custom animation of a set of CSS properties.

Here is the simple syntax to use this method:

        selector.animate( params, [duration, easing, callback] );

Parameters:

        params: A map of CSS properties that the animation will move toward.

        duration: This is optional parameter representing how long the animation will run.

        easing: This is optional parameter representing which easing function to use for the transition

        callback: This is optional parameter representing a function to call once the animation is complete.

        $slides.eq(activeIndex).animate({ 'opacity': 0 }, 3000, function () {
            cleanUp();
        });

3.html animateSlides
==============
        $(function() {
            var $container = $('#Fader'),
                slideSelector = '.slide',
                fading = false,
                slideTimer, activeSlide, newSlide,
                $slides = $container.find(slideSelector),
                totalSlides = $slides.length,
                $pagerList = $container.find('.pager_list');


                function animateSlides(activeIndex, newIndex) {
                    function cleanUp() {
                        $slides.eq(activeIndex).removeAttr('style');
                        activeSlide = newIndex;
                        fading = false;
                    }
                    ;
                    if (fading || activeIndex == newIndex) {
                        return false;
                    }
                    ;
                    fading = true;
                    $pagers.removeClass('active').eq(newSlide).addClass('active');
                    $slides.eq(activeIndex).css('z-index', 3);
                    $slides.eq(newIndex).css({
                        'z-index': 2,
                        'opacity': 1
                    });
                        $slides.eq(activeIndex).animate({ 'opacity': 0 }, 3000, function () {
                            cleanUp();
                        });

                }

                function changeSlides(target) {
                    if (target == 'next') {
                        newSlide = activeSlide + 1;
                        if (newSlide > totalSlides - 1) {
                            newSlide = 0;
                        }
                    } else if (target == 'prev') {
                        newSlide = activeSlide - 1;
                        if (newSlide < 0) {
                            newSlide = totalSlides - 1;
                        }
                        ;
                    } else {
                        newSlide = target;
                    }
                    ;
                    animateSlides(activeSlide, newSlide);
                }

                for (var i = 0; i < totalSlides; i++) {
                    $( "<li>" ).clone().append(''+i+'').addClass("page").attr('data-target', i).appendTo($pagerList);
                }

                $container.find('.page').on('click', function () {
                    var target = $(this).attr('data-target');

                    changeSlides(target);
                });

                var $pagers = $pagerList.find('.page');
                $slides.eq(0).css('opacity', 1);
                $pagers.eq(0).addClass('active');
                activeSlide = 0;
        });

4.html loop - waitForNext
================

        $(function() {
            var $container = $('#Fader'),
                slideSelector = '.slide',
                fading = false,
                slideTimer, activeSlide, newSlide,
                $slides = $container.find(slideSelector),
                totalSlides = $slides.length,
                $pagerList = $container.find('.pager_list');


                function animateSlides(activeIndex, newIndex) {
                    function cleanUp() {
                        $slides.eq(activeIndex).removeAttr('style');
                        activeSlide = newIndex;
                        fading = false;
                        waitForNext();
                    }
                    ;
                    if (fading || activeIndex == newIndex) {
                        return false;
                    }
                    ;
                    fading = true;
                    $pagers.removeClass('active').eq(newSlide).addClass('active');
                    $slides.eq(activeIndex).css('z-index', 3);
                    $slides.eq(newIndex).css({
                        'z-index': 2,
                        'opacity': 1
                    });

                        $slides.eq(activeIndex).animate({ 'opacity': 0 }, 3000, function () {
                            cleanUp();
                        });

                }

                function changeSlides(target) {
                    if (target == 'next') {
                        newSlide = activeSlide + 1;
                        if (newSlide > totalSlides - 1) {
                            newSlide = 0;
                        }
                    } else if (target == 'prev') {
                        newSlide = activeSlide - 1;
                        if (newSlide < 0) {
                            newSlide = totalSlides - 1;
                        }
                        ;
                    } else {
                        newSlide = target;
                    }
                    ;
                    animateSlides(activeSlide, newSlide);
                }

                function waitForNext() {
                    slideTimer = setTimeout(function () {
                        changeSlides('next');
                    }, 1000);
                }


                for (var i = 0; i < totalSlides; i++) {
                    $( "<li>" ).clone().append(''+i+'').addClass("page").attr('data-target', i).appendTo($pagerList);
                }

                $container.find('.page').on('click', function () {
                    var target = $(this).attr('data-target');
                    clearTimeout(slideTimer);
                    changeSlides(target);
                });

                var $pagers = $pagerList.find('.page');
                $slides.eq(0).css('opacity', 1);
                $pagers.eq(0).addClass('active');
                activeSlide = 0;
                waitForNext();

        });


jQuery Plugins
=========

A plug-in is piece of code written in a standard JavaScript file. These files provide useful jQuery methods which can be used along with jQuery library methods.

There are plenty of jQuery plug-in available which you can download from repository links at :
https://learn.jquery.com/plugins/
http://plugins.jquery.com/

How to use Plugins:
----------------------
To make a plug-in's methods available to us, we include plug-in file very similar to jQuery library file in the <head> of the document.

We must ensure that it appears after the main jQuery source file, and before our custom JavaScript code.

Following example shows how to include jquery.plug-in.js plugin:

        <html>
        <head>
           <script type="text/javascript"
           src="../../js/jquery-2.2.0.js"></script>
           <script src="jquery.plug-in.js" type="text/javascript">
           </script>
           <script src="custom.js" type="text/javascript"></script>
           <script type="text/javascript" language="javascript">

           $(document).ready(function() {
            .......your custom code.....
           });
           </script>
        </head>
        <body>
           .............................
        </body>
        </html>


How to develop a Plug-in
================
This is very simple to write your own plug-in. Following is the syntax to create a a method:

        jQuery.fn.methodName = methodDefinition;

Here methodNameM is the name of new method and methodDefinition is actual method definition.

The guideline recommended by the jQuery team is :

- Any methods or functions you attach must have a semicolon (;) at the end.
- Your method must return the jQuery object, unless explicity noted otherwise.
- You should use this.each to iterate over the current set of matched elements - it produces clean and compatible code that way.
- Prefix the filename with jquery, follow that with the name of the plugin and conclude with .js.
- Always attach the plugin to jQuery directly instead of $, so users can use a custom alias via noConflict() method.

For example, if we write a plugin that we want to name debug, our JavaScript filename for this plugin is:

        jquery.debug.js

The use of the jquery. prefix eliminates any possible name collisions with files intended for use with other libraries.

Following is a small plug-in to have warning method for debugging purpose. Keep this code in jquery.debug.js file:

        jQuery.fn.warning = function() {
            return this.each(function() {
               alert('Tag Name:"' + $(this).attr("tagName") + '".');
            });
        };

Here is the example showing usage of warning() method. Assuming we put jquery.debug.js file in /jquery subdirectory:

        <html>
        <head>
           <script type="text/javascript"
           src="../../js/jquery-2.2.0.js"></script>
           <script src="/jquery/jquery.debug.js" type="text/javascript">
           </script>
           <script type="text/javascript" language="javascript">

           $(document).ready(function() {
                $("div").warning();
              $("p").warning();
           });
           </script>
        </head>
        <body>
          <p>This is paragraph</p>
          <div>This is division</div>
        </body>
        </html>

Using the each() Method
===============
Your typical jQuery object will contain references to any number of DOM elements, and that's why jQuery objects are often referred to as collections. If you want to do any manipulating with specific elements (e.g. getting a data attribute, calculating specific positions) then you need to use .each() to loop through the elements.

        $.fn.myNewPlugin = function() {

            return this.each(function() {
                // Do something to each element here.
            });

        };
Notice that we return the results of .each() instead of returning this. Since .each() is already chainable, it returns this, which we then return. This is a better way to maintain chainability than what we've been doing so far.

5.html
====

        (function ($) {

        var libs = {
          init:function() {
            return this.each(function () {
                    var   $container = $(this),
                        slideSelector = '.slide',
                        fading = false,
                        slideTimer, activeSlide, newSlide,
                        $slides = $container.find(slideSelector),
                        totalSlides = $slides.length,
                        $pagerList = $container.find('.pager_list');

                        function animateSlides(activeIndex, newIndex) {
                            function cleanUp() {
                                $slides.eq(activeIndex).removeAttr('style');
                                activeSlide = newIndex;
                                fading = false;
                                waitForNext();
                            }
                            ;
                            if (fading || activeIndex == newIndex) {
                                return false;
                            }
                            ;
                            fading = true;
                            $pagers.removeClass('active').eq(newSlide).addClass('active');
                            $slides.eq(activeIndex).css('z-index', 3);
                            $slides.eq(newIndex).css({
                                'z-index': 2,
                                'opacity': 1
                            });

                                $slides.eq(activeIndex).animate({ 'opacity': 0 }, 3000, function () {
                                    cleanUp();
                                });

                        }

                        function changeSlides(target) {
                            if (target == 'next') {
                                newSlide = activeSlide + 1;
                                if (newSlide > totalSlides - 1) {
                                    newSlide = 0;
                                }
                            } else if (target == 'prev') {
                                newSlide = activeSlide - 1;
                                if (newSlide < 0) {
                                    newSlide = totalSlides - 1;
                                }
                                ;
                            } else {
                                newSlide = target;
                            }
                            ;
                            animateSlides(activeSlide, newSlide);
                        }

                        function waitForNext() {
                            slideTimer = setTimeout(function () {
                                changeSlides('next');
                            }, 1000);
                        }

                        for (var i = 0; i < totalSlides; i++) {
                            $( "<li>" ).clone().append(''+i+'').addClass("page").attr('data-target', i).appendTo($pagerList);
                        }
                        $container.find('.page').on('click', function () {
                            var target = $(this).attr('data-target');
                            clearTimeout(slideTimer);
                            changeSlides(target);
                        });

                        var $pagers = $pagerList.find('.page');
                        $slides.eq(0).css('opacity', 1);
                        $pagers.eq(0).addClass('active');
                        activeSlide = 0;
                        waitForNext();
            }); //end this.each
            }
        };
        $.fn.easyFader = function () {
            return libs.init.apply(this);
        };
        }(jQuery));

            $(function() {
                $('#Fader').easyFader();
            });


6 myplugin.js
=========
        <!DOCTYPE html>
        <html class=''>
        <head>
            <meta charset='UTF-8'>
        <link rel='stylesheet prefetch' href='css/reset.css'>
        <link rel='stylesheet prefetch' href='css/main.css'>
        </head>
        <body>
        <div id="Fader" class="fader">
          <img class="slide" src="images/1.jpg"/>
          <img class="slide" src="images/2.jpg"/>
          <img class="slide" src="images/3.jpg"/>
            <div class="fader_controls">
              <div class="page prev" data-target="prev">&lsaquo;</div>
              <div class="page next" data-target="next">&rsaquo;</div>
              <ul class="pager_list"></ul>
            </div>
        </div>

        <script src='js/jquery-3.1.0.min.js'></script>
        <script src='js/myplugin.js'></script>
        <script>

            $(function() {
                $('#Fader').easyFader();
            });

        </script>
        </body>
        </html>

7 fadePlugin.js
=========

        <script src='js/jquery-3.1.0.min.js'></script>
        <script src='js/fadePlugin1.js'></script>
        <script>

            $(function() {
                $('#Fader').easyFader({
                        slideDuration: 6000,
                        fadeDuration: 800
                    });
            });

        </script>


Accepting Options
===========
        As your plugins get more and more complex, it's a good idea to make your plugin customizable by accepting options. The easiest way to do this, especially if there are lots of options, is with an object literal. Let's change our greenify plugin to accept some options.

        (function ( $ ) {

            $.fn.greenify = function( options ) {

                // This is the easiest way to have default options.
                var settings = $.extend({
                    // These are the defaults.
                    color: "#556b2f",
                    backgroundColor: "white"
                }, options );

                // Greenify the collection based on the settings variable.
                return this.css({
                    color: settings.color,
                    backgroundColor: settings.backgroundColor
                });

            };

        }( jQuery ));

        Example usage:

        $( "div" ).greenify({
            color: "orange"
        });

        The default value for color of #556b2f gets overridden by $.extend() to be orange.


js/fadePlugin1.js settings
================

        (function ($) {

        var libs = {
          init:function(settings) {
            return this.each(function () {
                var config = {
                    slideDuration: 7000,
                    fadeDuration: 800
                };
                if (settings) {
                    $.extend(config, settings);
                }

                this.config = config;

                    var   $container = $(this),
                        slideSelector = '.slide',
                        fading = false,
                        slideTimer, activeSlide, newSlide,
                        $slides = $container.find(slideSelector),
                        totalSlides = $slides.length,
                        $pagerList = $container.find('.pager_list');

                        function animateSlides(activeIndex, newIndex) {
                            function cleanUp() {
                                $slides.eq(activeIndex).removeAttr('style');
                                activeSlide = newIndex;
                                fading = false;
                                waitForNext();
                            }
                            ;
                            if (fading || activeIndex == newIndex) {
                                return false;
                            }
                            ;
                            fading = true;
                            $pagers.removeClass('active').eq(newSlide).addClass('active');
                            $slides.eq(activeIndex).css('z-index', 3);
                            $slides.eq(newIndex).css({
                                'z-index': 2,
                                'opacity': 1
                            });

                                $slides.eq(activeIndex).animate({ 'opacity': 0 }, config.fadeDuration, function () {
                                    cleanUp();
                                });

                        }

                        function changeSlides(target) {
                            if (target == 'next') {
                                newSlide = activeSlide + 1;
                                if (newSlide > totalSlides - 1) {
                                    newSlide = 0;
                                }
                            } else if (target == 'prev') {
                                newSlide = activeSlide - 1;
                                if (newSlide < 0) {
                                    newSlide = totalSlides - 1;
                                }
                                ;
                            } else {
                                newSlide = target;
                            }
                            ;
                            animateSlides(activeSlide, newSlide);
                        }

                        function waitForNext() {
                            slideTimer = setTimeout(function () {
                                changeSlides('next');
                            }, config.slideDuration);
                        }

                        for (var i = 0; i < totalSlides; i++) {
                            $( "<li>" ).clone().append(''+i+'').addClass("page").attr('data-target', i).appendTo($pagerList);
                        }
                        $container.find('.page').on('click', function () {
                            var target = $(this).attr('data-target');
                            clearTimeout(slideTimer);
                            console.log(target);
                            changeSlides(target);
                        });

                        var $pagers = $pagerList.find('.page');
                        $slides.eq(0).css('opacity', 1);
                        $pagers.eq(0).addClass('active');
                        activeSlide = 0;
                        waitForNext();
            }); //end this.each
            }
        };
        $.fn.easyFader = function(settings) {
            return libs.init.apply(this, arguments);
        };
        }(jQuery));


    js/fadePlugin1.js prefix
    ==============

        (function ($) {

            function prefix(el) {
                var prefixes = [
                    'Webkit',
                    'Moz',
                    'O',
                    'ms'
                ];
                for (var i = 0; i < prefixes.length; i++) {
                    if (prefixes[i] + 'Transition' in el.style) {
                        return '-' + prefixes[i].toLowerCase() + '-';
                    }
                    ;
                }
                return 'transition' in el.style ? '' : false;
            }

        var libs = {
          init:function(settings) {
            return this.each(function () {
                var config = {
                    slideDuration: 7000,
                    fadeDuration: 800
                };
                if (settings) {
                    $.extend(config, settings);
                }

                this.config = config;

                    var   $container = $(this),
                        slideSelector = '.slide',
                        fading = false,
                        slideTimer, activeSlide, newSlide,
                        $slides = $container.find(slideSelector),
                        totalSlides = $slides.length,
                        $pagerList = $container.find('.pager_list');

                        prefix = prefix($container[0]);

                        function animateSlides(activeIndex, newIndex) {
                            function cleanUp() {
                                $slides.eq(activeIndex).removeAttr('style');
                                activeSlide = newIndex;
                                fading = false;
                                waitForNext();
                            }
                            ;
                            if (fading || activeIndex == newIndex) {
                                return false;
                            }
                            ;
                            fading = true;
                            $pagers.removeClass('active').eq(newSlide).addClass('active');
                            $slides.eq(activeIndex).css('z-index', 3);
                            $slides.eq(newIndex).css({
                                'z-index': 2,
                                'opacity': 1
                            });

                            if (!prefix) {
                                $slides.eq(activeIndex).animate({ 'opacity': 0 }, config.fadeDuration, function () {
                                    cleanUp();
                                });
                            } else {
                                var styles = {};
                                styles[prefix + 'transition'] = 'opacity ' + config.fadeDuration + 'ms';
                                styles['opacity'] = 0;
                                $slides.eq(activeIndex).css(styles);
                                var fadeTimer = setTimeout(function () {
                                    cleanUp();
                                }, config.fadeDuration);
                            }


                        }

                        function changeSlides(target) {
                            if (target == 'next') {
                                newSlide = activeSlide + 1;
                                if (newSlide > totalSlides - 1) {
                                    newSlide = 0;
                                }
                            } else if (target == 'prev') {
                                newSlide = activeSlide - 1;
                                if (newSlide < 0) {
                                    newSlide = totalSlides - 1;
                                }
                                ;
                            } else {
                                newSlide = target;
                            }
                            ;
                            animateSlides(activeSlide, newSlide);
                        }

                        function waitForNext() {
                            slideTimer = setTimeout(function () {
                                changeSlides('next');
                            }, config.slideDuration);
                        }

                        for (var i = 0; i < totalSlides; i++) {
                            $( "<li>" ).clone().append(''+i+'').addClass("page").attr('data-target', i).appendTo($pagerList);
                        }
                        $container.find('.page').on('click', function () {
                            var target = $(this).attr('data-target');
                            clearTimeout(slideTimer);
                            console.log(target);
                            changeSlides(target);
                        });

                        var $pagers = $pagerList.find('.page');
                        $slides.eq(0).css('opacity', 1);
                        $pagers.eq(0).addClass('active');
                        activeSlide = 0;
                        waitForNext();
            }); //end this.each
            }
        };
        $.fn.easyFader = function(settings) {
            return libs.init.apply(this, arguments);
        };
        }(jQuery));
