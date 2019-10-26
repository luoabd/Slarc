$(document).ready(function() {
    $('#videoGallery').lightSlider({
      gallery:true,
      item:1,
      adaptiveHeight:true,
      loop:true,
      thumbItem:8,
      thumbMargin:4,
      keyPress: true,
      onSliderLoad: function() {
        $('#videoGallery').removeClass('cS-hidden');
    }
    });
  });

; (function () {

    'use strict';
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
        navbar();
    })(jQuery);


}());
