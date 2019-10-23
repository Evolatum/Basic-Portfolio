$("#aboutLink").on("click",function () {
    console.log("click");
    $('html, body').animate({scrollTop: 0}, 1000);
});

$("#portfolioLink").on("click",function () {
    console.log("click");
    $('html, body').animate({scrollTop: $("#portfolio").offset().top - 100}, 1000);
});

$("#contactLink").on("click",function () {
    console.log("click");
    $('html, body').animate({scrollTop: $("#contact").offset().top - 100}, 1000);
});