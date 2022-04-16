$(".header__burger").on("click", function() {
    $(".header__burger").toggleClass("active");
    $(".nav").toggleClass("visible");
    $("body").toggleClass("hidden");
})
