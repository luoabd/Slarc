  $('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});

  
; (function () {

    'use strict';
    var isotope = function () {
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.portfolioFilter a').click(function () {
            $('.portfolioFilter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        }); 
    };

    var navbar = function () {
        $(window).scroll(function () {
            $("nav.navbar").offset().top > -70 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
        }),
        $(function () {
            $("a.page-scroll").bind("click", function (a) { var o = $(this); $("html, body").stop().animate({ scrollTop: $(o.attr("href")).offset().top - 58 }, 1e3), a.preventDefault()
        })
        });
    };

    (function ($) {
        isotope();
        navbar();
    })(jQuery);


}());
