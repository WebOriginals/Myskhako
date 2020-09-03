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
                console.log('swiper next/prev slide');
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
               
                var elem = $(this.$el).closest(".js-start-tab").attr("id");
                
                $( "#" + elem ).removeClass("js-start-tab");
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

  

    var arrSliderPosFunction = function () {
        var wSliderMarg = 0;
        var wSlider = $(".catalog-page__content").innerWidth();
        var wSlide = $(".catalog-slider__item").outerWidth();
        var wSliderMargAll = wSlider - (wSlide*2);
        wSliderMarg = wSliderMargAll/2;
        var wSliderMargArr = wSliderMargAll/4;
        var arrMinus = ((wSlide/2) + wSliderMargArr)*(-1);
        console.log("arrMinus = " + arrMinus);
        $(".catalog-slider__prev").css('margin-left', arrMinus);
        $(".catalog-slider__next").css('margin-right', arrMinus);
    };
    if ($(".catalog-slider__next")) {
        arrSliderPosFunction();
        console.log("init in if 2 slider");
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

    //060418
    if (!Modernizr.touch) {
        // not-supported
        $(".filter__item").click(function () {
            filter(this);
        });
        if ($("body").innerWidth()>1199){ 
            if ($(".filter")) {
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
        console.log("init in if 2 slider");
    }
    $(window).on('resize',function(){
        // if ($(".filter")) {
        //     filter();
        //     console.log("init in if");
        // }
        // filter();
        // arrSliderPosFunction();
    });
    // $(window).on('resize',function(){
    // });

    $(".wine-params__params-item").each(function (indx) {
        var wineParam1 = $(this).data("param-1");
        var wineParam2 = $(this).data("param-2");
        var wineParamWidth = (wineParam1 / wineParam2)*100;
        console.log("wineParam1 = " + wineParam1);
        console.log("wineParam2 = " + wineParam2);
        console.log("wineParamWidth = " + wineParamWidth);
        console.log("----");
        $(this).find(".wine-params__line-value").css("width", wineParamWidth + "%");
    });


    $(".share-btn__btn--1").click(function(){
        $(".ya-share2__item_service_twitter").find(".ya-share2__link").trigger('click');
        console.log(this);
    });
    $(".share-btn__btn--3").click(function(){
        console.log(this);
        $(".ya-share2__item_service_vkontakte").find(".ya-share2__link").trigger('click');
    });
    $(".share-btn__btn--4").click(function(){
        console.log(this);
        $(".ya-share2__item_service_facebook").find(".ya-share2__link").trigger('click');
    });

});



// $(".share-btn__btn--1").on('click',function () {
//     $(".ya-share2__item_service_twitter").find(".ya-share2__link").trigger('click');
//     console.log(this);
// });
// $(".share-btn__btn--3").on('click', function () {
//     console.log(this);
//     $(".ya-share2__item_service_vkontakte").find(".ya-share2__link").trigger('click');
// });
// $(".share-btn__btn--1").on('click', function () {
//     console.log(this);
//     $(".ya-share2__item_service_facebook").find(".ya-share2__link").trigger('click');
// });


// обернуть в onload
if ($(".ya-share2__item_service_twitter").lentgh>0){
    $(".share-btn__btn--1").on('click', function () {
        var h = $(".ya-share2__item_service_twitter").find(".ya-share2__link").attr('href');
        var myWindow = window.open(h, "tsest", "width=700,height=400"); myWindow.focus();
        console.log(this);
    });
}

// var myWindow = window.open(h, "tsest", "width=700,height=400"); myWindow.focus();
// var h = $('.ya-share2__item_service_twitter a').attr('href');