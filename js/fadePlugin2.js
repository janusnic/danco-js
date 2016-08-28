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
