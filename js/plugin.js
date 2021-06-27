
$(document).ready(function() {

    $("body").niceScroll({
        cursorcolor: "aquamarine",
        cursorwidth: "16px"
    });

    $(window).scroll(function() {
       
        if ($(this).scrollTop() > 600) {

            $(".home .scroll-navBar").slideDown(500);

        }else {

            $(".home .scroll-navBar").slideUp(500);

        }

        if ($(this).scrollTop() > 200) {

            $(".home .scroll-button").fadeIn(500);

        }else {

            $(".home .scroll-button").fadeOut(500);

        }

    });

    $(".home .scroll-button").on('click' , function () {

        $("html , body").animate({ scrollTop: 0} , 1000);

    });


    $(".home .navBar ul li , .home .scroll-navBar ul li").on('click' , function() {

        $("html , body").animate({

            scrollTop: $($(this).data("class")).offset().top 

        } , 2000);

    });

});