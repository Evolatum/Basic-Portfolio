$("#aboutLink").on("click",function () {
    $('html, body').animate({scrollTop: 0}, 1000);
});

$("#portfolioLink").on("click",function () {
    if($(window).width() < 577){
        $('html, body').animate({scrollTop: $("#portfolio").offset().top - 150}, 1000);
    }
    else {
        $('html, body').animate({scrollTop: $("#portfolio").offset().top - 100}, 1000);
    }
});

$("#contactLink").on("click",function () {
    if($(window).width() < 577){
        $('html, body').animate({scrollTop: $("#contact").offset().top - 150}, 1000);
    }
    else {
        $('html, body').animate({scrollTop: $("#contact").offset().top - 100}, 1000);
    }
});