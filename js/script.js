$(".header__burger, .nav__item").on("click", function() {
    $(".header__burger").toggleClass("active");
    $(".nav").toggleClass("visible");
    $("body").toggleClass("hidden");
})
