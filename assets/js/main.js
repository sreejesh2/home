(function($) {
    "use strict";


    /*===========================================
    	=            Windows Load          =
    =============================================*/
    $(window).on('load', function() {
        preloader();
        sliderAction();
        wowAnimation();
        aosAnimation();
    });


    /*===========================================
    	=            Preloader          =
    =============================================*/
    function preloader() {
        $('#preloader').delay(0).fadeOut();
    };


    /*===========================================
    	=    		Mobile Menu			      =
    =============================================*/
    //SubMenu Dropdown Toggle
    if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
        $('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
    }

    //Mobile Nav Hide Show
    if ($('.tgmobile__menu').length) {

        var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
        $('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function() {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(300);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });
    };


    /*===========================================
    	=     Menu sticky & Scroll to top      =
    =============================================*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#sticky-header").removeClass("sticky-menu");
            $('.scroll-to-target').removeClass('open');
            $("#header-fixed-height").removeClass("active-height");

        } else {
            $("#sticky-header").addClass("sticky-menu");
            $('.scroll-to-target').addClass('open');
            $("#header-fixed-height").addClass("active-height");
        }
    });


    /*===========================================
    	=           Scroll Up  	         =
    =============================================*/
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 0);

        });
    }


    /*===========================================
    	=          Data Background    =
    =============================================*/
    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });


    /*===========================================
    	=      Select2 Active      =
    =============================================*/
    $("#course-cat").select2({
        tags: true,
        theme: "bootstrap",
        minimumResultsForSearch: -1,
        dropdownCssClass: "course-category-dropdown",
    });


    /*===========================================
    	=          Slider Active        =
    =============================================*/
    function sliderAction() {
        $('.slider__active').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
        }).slickAnimation();
    };

    /*===========================================
    	=          Brand Active       =
    =============================================*/
    $('.brand-active').slick({
        dots: false,
        infinite: true,
        speed: 600,
        autoplay: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });


    /*===========================================
    	=       Course Slider Active       =
    =============================================*/
    $('.courses-slider-active').slick({
        dots: false,
        infinite: true,
        speed: 600,
        autoplay: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '110px',
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0',
                }
            },
        ]
    });


    /*==================================
            Testimonial Active
    ====================================*/
    $('.testimonial__content-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        asNavFor: '.testimonial__image-active',
        prevArrow: '<button type="button" class="slick-prev"><i class="flaticon-chevron"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="flaticon-chevron"></i></button>',
        appendArrows: '.testimonial__content-nav',
    });
    $('.testimonial__image-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial__content-active',
        dots: false,
        arrows: false,
        fade: true,
        focusOnSelect: true
    });


    /*===========================================
    	=      Testimonial Active 02         =
    =============================================*/
    $('.testimonial-active').slick({
        dots: false,
        infinite: true,
        speed: 600,
        autoplay: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="flaticon-chevron"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="flaticon-chevron"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });


    /*===========================================
    	=      Shop Active         =
    =============================================*/
    $('.shop-active').slick({
        dots: false,
        infinite: true,
        speed: 600,
        autoplay: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });


    /*===========================================
    	=      speaker Active         =
    =============================================*/
    $('.speakers-active').slick({
        dots: false,
        infinite: true,
        speed: 600,
        autoplay: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        appendArrows: '.speakers-nav',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    /*==================================
              Button Icon Draw
    ====================================*/
    var $svgIconBox = $('.tg-svg');
    $svgIconBox.each(function() {
        var $this = $(this),
            $svgIcon = $this.find('.svg-icon'),
            $id = $svgIcon.attr('id'),
            $icon = $svgIcon.data('svg-icon');
        var $vivus = new Vivus($id, {
            duration: 80,
            file: $icon,
        });
        $this.on('mouseenter', function() {
            $vivus.reset().play();
        });
    });


    /*===========================================
    	=       TweenMax Active   =
    =============================================*/
    $(".tg-motion-effects").mousemove(function(e) {
        parallaxIt(e, ".tg-motion-effects1", 70);
        parallaxIt(e, ".tg-motion-effects2", 5);
        parallaxIt(e, ".tg-motion-effects3", -10);
        parallaxIt(e, ".tg-motion-effects4", 30);
        parallaxIt(e, ".tg-motion-effects5", -50);
        parallaxIt(e, ".tg-motion-effects6", -20);
    });

    function parallaxIt(e, target_class, movement) {
        var $wrap = $(e.target).parents(".tg-motion-effects");
        if (!$wrap.length) return;
        var $target = $wrap.find(target_class);
        var relX = e.pageX - $wrap.offset().left;
        var relY = e.pageY - $wrap.offset().top;

        TweenMax.to($target, 1, {
            x: ((relX - $wrap.width() / 2) / $wrap.width()) * movement,
            y: ((relY - $wrap.height() / 2) / $wrap.height()) * movement,
        });
    };


    /*===========================================
    	=    		 Cart Active  	         =
    =============================================*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });


    /*===========================================
          =       Odometer Active    =
    =============================================*/
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });


    /*===========================================
    	=        Magnific Popup    =
    =============================================*/
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


    /*===========================================
    	=         Isotope Active     =
    =============================================*/
    $('.courses-active').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.courses-active').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: 1,
            }
        });
        // filter items on button click
        $('.courses__nav-active').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

    });
    //for menu active class
    $('.courses__nav-active button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    /*===========================================
    	=        Wow Active      =
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }


    /*===========================================
    	=           Aos Active       =
    =============================================*/
    function aosAnimation() {
        AOS.init({
            duration: 1000,
            mirror: true,
            once: true,
            disable: 'mobile',
        });
    }


})(jQuery);