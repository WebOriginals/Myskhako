    // var swiperStart22 = new Swiper('.js--swiper-22', {
    //   // pagination: '.swiper-pagination',
    //   slidesPerView: 'auto',
    //   // paginationClickable: true,
    //   spaceBetween: 0,
    //   loop: true,
    //   prevButton: ".js--swiper-22__prev",
    //   nextButton: ".js--swiper-22__next", 
    // });
    // // $(document).resize(function () {
    // //   swiperStart22.update(true);
    // // }); 

    // var swiperStart33 = new Swiper('.js--swiper-33', {
    //   // pagination: '.swiper-pagination',
    //   slidesPerView: 'auto',
    //   // paginationClickable: true,
    //   spaceBetween: 0,
    //   loop: true,
    //   // initialSlide: 1,
    // });
    // // $(document).resize(function () {
    // //   swiperStart33.update(true);
    // // }); 
    // swiperStart22.params.control = swiperStart33;
    // swiperStart33.params.control = swiperStart22;
// var window.swiperStart22 = 0;
// var window.swiperStart33 = 0;
$(document).ready(function(){
    var aboutImg = new Swiper('.js--slider-about', {
        slidesPerView: 1,
        loop: true,
        autoHeight: true,
        pagination: {
            el: '.about-scr__pagination',
            type: 'fraction',
        },
    });
    var catalogSlider = new Swiper('.js--slider-catalog', {
        // slidesPerView: 'auto',
        // spaceBetween: 430,
        slidesPerView: 2,
        // slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        // autoHeight: true,
        // pagination: {
        //     el: '.about-scr__pagination',
        //     type: 'fraction',
        // },
        navigation: {
            nextEl: '.catalog-slider__next',
            prevEl: '.catalog-slider__prev',
        },
        breakpoints: {
            // when window width is <= 320px
            // 320: {
            //     slidesPerView: 1,
            //     spaceBetween: 10
            // },
            575: {
                slidesPerView: 'auto',
                spaceBetween: 25
            }
        },
        on: {
            slideChangeTransitionStart: function () {
                //console.log('swiper next/prev slide');
                var slideTextPrev = $(".swiper-slide-prev").find(".catalog-slider__h").not('.swiper-slide-duplicate').text();
                var slideTextNext = $(".swiper-slide-next").find(".catalog-slider__h").not('.swiper-slide-duplicate').text();
                $(".catalog-slider__prev").find(".news-item__arr-text").text(slideTextPrev);
                $(".catalog-slider__next").find(".news-item__arr-text").text(slideTextNext);
                
            },
        },
    });
    // catalogSlider.on(slideChangeTransitionStart, function () {
    //     console.log('slide changed');
    // });
    // var cardReviews = new Swiper('.js--slider-reviews', {
    //     slidesPerView: 1,
    //     loop: true,
    //     pagination: {
    //         el: '.about-scr__pagination',
    //         type: 'fraction',
    //     },
    // });
    $(".about-scr__next-btn").click(
        function(){
            aboutImg.slideNext();
        }
    );
    var rangeWine = new Swiper('.js--range-slider', {
        //init: false,
        // new Swiper('.js--range-slider', {
        slidesPerView: "auto",
        freeMode: true,
        speed: 2000,
        slidesOffsetBefore: 10,
        slidesOffsetAfter: 10,
        spaceBetween: 30,
        slideToClickedSlide: true,
        // autoplay: {
        //     delay: 5000,
        // },
        // pagination: {
        //     el: '.swiper-pagination',
        //     // type: 'bullets',
        //     type: 'fraction',
        // },
       on: {
            init: function (e) {
               
                //var elem = $(this.$el).closest(".js-start-tab").attr("id");
                
                //$( "#" + elem ).removeClass("js-start-tab");
                // $(".js-start-tab").addClass("AAAAAA");
                // $(".js-start-tab").removeClass("js-start-tab");
                // if ($(".js-start-tab")){
                    // $(".js-start-tab").removeClass("js-start-tab");
                    // $(".js-start-tab").each(function (indx) {
                    //     console.log("----");
                    //     $(this).removeClass("js-start-tab");
                    // });
                // }
           },
        },
    });
	
    //rangeWine.on('init', function () { console.log(this); });
    //rangeWine.init();

    // $(".wine-tabs__link").click(function () {
    //     rangeWine.update(true);
    // });
    $(".burger").click(function () {
        $(this).toggleClass("burger--act");
        $(".menu").toggleClass("menu--act");
        $(".nav").toggleClass("nav--open-menu");
        $("html").toggleClass("ov-h");
        $("body").toggleClass("ov-h");
    });
    if (!Modernizr.flexwrap) {
        console.log('flex-wrap not-supported');
        $('.hot-news__col-2').after('<div class="clearfix"></div>');
        var gridCol1H = $('.hot-news__col-1').innerHeight();
        var gridCol2H = $('.hot-news__col-2').innerHeight();
        var gridSumM = gridCol1H - gridCol2H;
        
        if (gridCol1H > gridCol2H) {
            $('.news-soc.news-soc--mobile').css('margin-bottom', gridSumM );
        }
    } else {
        console.log('flex-wrap supported');
    }
    if (!Modernizr.cssvhunit) {
        // not-supported
        var vhFunc = function () {
            var modVhh = $(window).innerHeight();
            $(".header-scr__slide").css('min-height', modVhh + "px");
            // console.log("vhFunc отработал");
        }
        vhFunc();
        $(window).on('resize', function () {
            vhFunc();
            // console.log("vhFunc резайз");
        });
    }

    // if ($(".filter")) {
        var filter = function(elem){
            var vElStart = elem || $(".filter__item--active");
            console.log(vElStart);
            var elementOffset = $(vElStart).offset();
            var elementWidth = $(vElStart).innerWidth();
            var elementRz = elementWidth / 2;
            var containerOffset = $(".filter").offset();
            console.log("containerOffset = " + containerOffset.left);
            console.log("elementOffset = " + elementOffset.left);
            // $(this).css('height')
            var sumOffset = elementOffset.left - containerOffset.left + elementRz;
            $(".filter__line").css('left',sumOffset);
        };
    // }

  

    var arrSliderPosFunction = function () {
        var wSliderMarg = 0;
        var wSlider = $(".catalog-page__content").innerWidth();
        var wSlide = $(".catalog-slider__item").outerWidth();
        var wSliderMargAll = wSlider - (wSlide*2);
        wSliderMarg = wSliderMargAll/2;
        var wSliderMargArr = wSliderMargAll/4;
        var arrMinus = ((wSlide/2) + wSliderMargArr)*(-1);
        //console.log("arrMinus = " + arrMinus);
        $(".catalog-slider__prev").css('margin-left', arrMinus);
        $(".catalog-slider__next").css('margin-right', arrMinus);
    };
    if ($(".catalog-slider__next")) {
        arrSliderPosFunction();
        //console.log("init in if 2 slider");
    }
    $(window).on('resize', function () {
        arrSliderPosFunction();
    });

    // var filter = function(elem){

    //     elem = elem || null;       

    //      var procces = function( el ){
    //          var elementOffset = $(el).offset();
    //          var elementWidth = $(el).innerWidth();
    //          var elementRz = elementWidth / 2;
    //          var containerOffset = $(".filter").offset();
    //          // console.log("containerOffset = " + containerOffset.left);
    //          // console.log("elementOffset = " + elementOffset.left);
    //          // $(this).css('height')             
    //          var sumOffset = elementOffset.left - containerOffset.left + elementRz;
    //          $(".filter__item").removeClass("filter__item--active");
    //          $(el).addClass("filter__item--active");
    //          $(".filter__line").css('left', sumOffset); 
    //      }   

    //     if ( elem ){
    //         procces( elem );            
    //     } else {
    //         elem = $('.filter').find('.filter__item--active');
    //         if (elem.length > 0) { procces(elem); }
    //     }
    // };



    

    $(".filter__item").click(function () {
        $(".filter__item").removeClass("filter__item--active");
        $(this).addClass("filter__item--active");
    });
    // $(".filter__item").click(function () {
    //     filter(this);
    // });
    // if ($(".filter")) {
    //     filter();
    //     console.log("init in if");
    // }

    //060418


    if (!Modernizr.touch) {
        // not-supported
        $(".filter__item").click(function () {
            filter(this);
        });
        if ($("body").innerWidth() > 1199) {
            if ($(".filter").length!==0) {
                filter();
                // setTimeout(1000);
                setInterval(function () {
                    $(".filter__line").css('opacity', '1');
                }, 500);
                console.log("init in if");
            }
        }
    } else {
        // supported
    } 

    //060418

    if ($(".catalog-slider__next")) {
        arrSliderPosFunction();
        //console.log("init in if 2 slider");
    }
    $(window).on('resize',function(){
        // if ($(".filter")) {
        //     filter();
        //     console.log("init in if");
        // }
        // filter();
        // arrSliderPosFunction();
    });

    $(".wine-params__params-item").each(function (indx) {
        var wineParam1 = $(this).data("param-1");
        var wineParam2 = $(this).data("param-2");
        var wineParamWidth = (wineParam1 / wineParam2)*100;
        //console.log("wineParam1 = " + wineParam1);
        //console.log("wineParam2 = " + wineParam2);
        //console.log("wineParamWidth = " + wineParamWidth);
        //console.log("----");
        $(this).find(".wine-params__line-value").css("width", wineParamWidth + "%");
    });

        function scaleCaptcha() {
            var width = $('.contacts-form__captacha-wrap').width();
            if (width < 302) {
                var scale = width / 302;
                $('.js-captcha').css('transform', 'scale(' + scale + ')');
                $('.js-captcha').css('-webkit-transform', 'scale(' + scale + ')');
                $('.js-captcha').css('transform-origin', '0 0');
                $('.js-captcha').css('-webkit-transform-origin', '0 0');
                // var hWrap = $('.js-captcha').innerHeight();
                
                // $('.contacts-form__captacha-size-wrap').css('height', hWrap + 'px');
            } else {
                $('.js-captcha').css('transform', 'none');
                // $('.contacts-form__captacha-size-wrap').removeAttr('style');
            }
        }
        if ($('.js-captcha').length > 0){
            $(function () {
    
                // Initialize scaling
                scaleCaptcha();
    
                // Update scaling on window resize
                // Uses jQuery throttle plugin to limit strain on the browser
                $(window).resize(function () {
                    scaleCaptcha();
                });
    
            });
        }
 
});


$(window).on('load', function(){
		
	var rangeSlider = $( '.js--range-slider' );
	if( rangeSlider.length > 0 ) {
		rangeSlider.each(function(){
			$( this ).closest( '.js-start-tab' ).removeClass( 'js-start-tab' );
		});
    }
    
    var onVisible = {
        elements: [],

        add: function (query, offset, callback) {
            var elements = document.querySelectorAll(query);

            Array.prototype.forEach.call(elements, function (value) {
                this.elements.push([value, value.getBoundingClientRect().top + window.scrollY + offset, callback]);
            }, this);
        },

        clean: function () {
            this.elements.length = 0;
        }
    };

    var onScroll = function () {
        var scroll = window.scrollY + window.innerHeight;

        onVisible.elements.forEach(function (value) {
            if (value[1] !== false && scroll >= value[1]) {
                console.log(value[1]);
                value[1] = false;
                value[2]();


                console.log(scroll);
            }
        });
    };

    window.addEventListener('DOMContentLoaded', onScroll);
    window.addEventListener('scroll', onScroll);

    var showScrllEl = function () {
        onVisible.add('.showScrll', 200, function () {
        // onVisible.add('.showScrll', 350, function () {
            this[0].classList.add('show');
        });
        // onVisible.add('.showScrll', 300, function () {
        //     this[0].classList.add('show-step-2');
        // });
    };
    var showScrllElBottom = function () {
        onVisible.add('.showScrll-Bottom', 35, function () {
            this[0].classList.add('show');
        });
        // onVisible.add('.showScrll-Bottom', 150, function () {
        //     this[0].classList.add('show-step-2');
        // });
    };

    showScrllEl();
    showScrllElBottom();
});



var s = skrollr;
    $(window).on('load',function () {
        if (!Modernizr.touch) {
            console.log("touch not-supported");
            console.log(s);
            s.init();
            $(".black-block__h-text").click(
                function(){
                    s.destroy();
                }
            );
        } else {
            console.log("touch supported");
        }
    });
// $('.about-scr__info').onScreen({
//       tolerance: 200,
//       toggleClass: false,
//       doIn: function() {
//         $(this).addClass('onScreen')
//       }
// });

