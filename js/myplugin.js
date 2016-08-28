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
$.fn.easyFader = function () {
    return libs.init.apply(this);
};
}(jQuery));
