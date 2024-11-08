// $(document).ready(function () {
    var slider_info = {};

    var homeSlider = new Swiper('.js--slider-home', {
        slidesPerView: 1,
        // loop: true,
        pagination: {
            el: '.header-scr__pagination',
            // type: 'fraction',
            type: 'bullets',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            // crossFade: true
            crossFade: false
        },
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        // , "cube", "coverflow" or "flip"
        // effect: 'flip',
        navigation: {
            nextEl: '.js--slider-next',
            prevEl: '.js--slider-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                console.log('swiper next/prev slide');
                $(".swiper-slide").find(".header-scr__slide").removeClass("header-scr__slide--show");
                $(".swiper-slide-active").find(".header-scr__slide").addClass("header-scr__slide--show");
                // мерцание
            },
            slideChangeTransitionEnd: function () {
                // console.log('swiper next/prev slide');
                // $(".swiper-slide").find(".header-scr__slide").removeClass("header-scr__slide--show");
                // $(".swiper-slide-active").find(".header-scr__slide").addClass("header-scr__slide--show");
                // мерцание
                set_activ(this.activeIndex);
            },
            init: function(){
                console.log("homeSlider init 777");
                console.log(this.slides.length);

                this.slides.each( function( ind, elem ){

                    slider_info[ind] = {};
                    slider_info[ind].activ = {}; 
                    slider_info[ind].unactiv = {};                 

                    slider_info[ind].activ.title = $(elem)
                        .find(".header-scr__text-22 .header-scr__text-h").text();

                    slider_info[ind].activ.descr = $(elem)
                        .find('.header-scr__text-22 .header-scr__text-after').text();

                    slider_info[ind].activ.img = $(elem)
                        .find(".header-scr__bg-22").data('start-bg'); 
                        
                    slider_info[ind].unactiv.title = $(elem)
                        .find(".header-scr__text-11 .header-scr__text-h").text();

                    slider_info[ind].unactiv.descr = $(elem)
                        .find('.header-scr__text-11 .header-scr__text-after').text();

                    slider_info[ind].unactiv.img = $(elem)
                        .find(".header-scr__bg-11").data('start-bg');     
                    
                });               

                console.log(slider_info );

                set_panel( this );
                resizeEffHomeSlide();
            },
            transitionStart: function(){
                console.log("transitionStart");

                // console.log('swiper next/prev slide');
                // $(".swiper-slide").find(".header-scr__slide").removeClass("header-scr__slide--show");
                // $(".swiper-slide-active").find(".header-scr__slide").addClass("header-scr__slide--show");
                // мерцание

                console.log("homeSlider.previousIndex = " + this.previousIndex);
                console.log("homeSlider.activeIndex = " + this.activeIndex);
                //console.log(this);
                var aa = this.previousIndex;
                var bb = this.activeIndex;

                if ((aa < bb && (aa + 1) != bb) || (aa > bb && (aa - 1) != bb) ) {                   
                // if ((aa < bb && (aa + 1) != bb) || (aa > bb) ) {                   
                    $(this.slides[bb]).find(".header-scr__bg-11").css("background-image", "url(" + slider_info[aa].activ.img + ")");
                    $(this.slides[bb]).find(".header-scr__level-11-bg").css("background-image", "url(" + slider_info[aa].activ.img + ")");
                    $(this.slides[bb]).find(".header-scr__level-211-bg").css("background-image", "url(" + slider_info[aa].activ.img + ")");
                    $(this.slides[bb]).find(".header-scr__text-11 .header-scr__text-h").text(slider_info[aa].activ.title);
                    $(this.slides[bb]).find(".header-scr__text-11 .header-scr__text-after").text(slider_info[aa].activ.descr);
                }

            },
            transitionEnd: function(){
                console.log("-------------");
                console.log("transitionEnd");
                var prev = this.previousIndex;

                $(this.slides[prev]).find(".header-scr__bg-11").css("background-image", "url(" + slider_info[prev].unactiv.img + ")");
                $(this.slides[prev]).find(".header-scr__level-11-bg").css("background-image", "url(" + slider_info[prev].unactiv.img + ")");
                $(this.slides[prev]).find(".header-scr__level-211-bg").css("background-image", "url(" + slider_info[prev].unactiv.img + ")");
                $(this.slides[prev]).find(".header-scr__text-11 .header-scr__text-h").text(slider_info[prev].unactiv.title);
                $(this.slides[prev]).find(".header-scr__text-11 .header-scr__text-after").text(slider_info[prev].unactiv.descr);
                console.log(prev);
            },
            slidePrevTransitionStart: function () {
                console.log("slidePrevTransitionStart");
                console.log("homeSlider.previousIndex = " + this.previousIndex);
                console.log("homeSlider.activeIndex = " + this.activeIndex);
                //console.log(this);
                var aa = this.previousIndex;
                var bb = this.activeIndex;
                    if ( aa > bb ) {                   
                    $(this.slides[bb]).find(".header-scr__bg-11").css("background-image", "url(" + slider_info[aa].activ.img + ")");
                    $(this.slides[bb]).find(".header-scr__level-11-bg").css("background-image", "url(" + slider_info[aa].activ.img + ")");
                    $(this.slides[bb]).find(".header-scr__level-211-bg").css("background-image", "url(" + slider_info[aa].activ.img + ")");
                    $(this.slides[bb]).find(".header-scr__text-11 .header-scr__text-h").text(slider_info[aa].activ.title);
                    $(this.slides[bb]).find(".header-scr__text-11 .header-scr__text-after").text(slider_info[aa].activ.descr);
                }
            },
            slidePrevTransitionEnd: function () {
                console.log("-------------");
                console.log("transitionEnd");
                var prev = this.previousIndex;

                $(this.slides[prev]).find(".header-scr__bg-11").css("background-image", "url(" + slider_info[prev].unactiv.img + ")");
                $(this.slides[prev]).find(".header-scr__level-11-bg").css("background-image", "url(" + slider_info[prev].unactiv.img + ")");
                $(this.slides[prev]).find(".header-scr__level-211-bg").css("background-image", "url(" + slider_info[prev].unactiv.img + ")");
                $(this.slides[prev]).find(".header-scr__text-11 .header-scr__text-h").text(slider_info[prev].unactiv.title);
                $(this.slides[prev]).find(".header-scr__text-11 .header-scr__text-after").text(slider_info[prev].unactiv.descr);
                console.log(prev);
            },
            // reachEnd: function () {
            //     setTimeout(function(){
            //         homeSlider.slideTo(0);
            //     },1000)
            // },
        },
    });


function set_activ( item ){

    $(".header-scr__num-pag").find('.header-scr__num-pag-bullet')
        .removeClass("header-scr__num-pag-bullet--active" );
        
    $(".header-scr__num-pag").find('.header-scr__num-pag-bullet[data-sl="' + item + '"]')
        .addClass("header-scr__num-pag-bullet--active");
}

function set_panel(elem) {

    var set_content = "";
    var activ_index = elem.activeIndex;

    elem.slides.each(function (ind) {       
        var sl = ind + 1;        
        set_content += "<div data-sl='" + ind +"' class='header-scr__num-pag-bullet'>0" + sl + "</div>";
    });

    $(".header-scr__num-pag").html(set_content);

    $(".header-scr__num-pag-bullet").on( "click", function(){
        var slide = $(this).data("sl");
        console.log(slide);
        homeSlider.slideTo(slide);
    });
    set_activ(activ_index);    
}

// размеры для эффектов 
// размеры для эффектов 
function resizeEffHomeSlide() {
    var stHomeElement= $(".header-scr");
    var stVhHome = stHomeElement.innerHeight();
    var stVwHome = stHomeElement.innerWidth();
    var fixNav = $(".nav.nav--fixed");
    var fixNavHeight = fixNav.innerHeight();
    fixNav.css("margin-bottom", -fixNavHeight)
    
    console.log(stVhHome, stVwHome);
    console.log("resizeEffHomeSlide");
    // $(".header-scr").find(".header-scr__level-11-bg").each();
    
    $(".header-scr").find(".header-scr__level-11-bg").each(function (indx, element) {
        $(element).addClass("no-transition-eff");
        $(element).css("height", stVhHome);
        $(element).css("width", stVwHome);
        $(element).removeClass("no-transition-eff");
    });
    $(".header-scr").find(".header-scr__level-22-bg").each(function (indx, element) {
        $(element).addClass("no-transition-eff");
        $(element).css("height", stVhHome);
        $(element).css("width", stVwHome);
        $(element).removeClass("no-transition-eff");
    });
    $(".header-scr").find(".header-scr__level-211-bg").each(function (indx, element) {
        $(element).addClass("no-transition-eff");
        $(element).css("height", stVhHome);
        $(element).css("width", stVwHome);
        $(element).removeClass("no-transition-eff");
    });
    $(".header-scr").find(".header-scr__level-222-bg").each(function (indx, element) {
        $(element).addClass("no-transition-eff");
        $(element).css("height", stVhHome);
        $(element).css("width", stVwHome);
        $(element).removeClass("no-transition-eff");
    });
}

$(window).on("resize", function(){
    resizeEffHomeSlide();
});