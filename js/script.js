$(".header__burger").on("click", function() {
    $(this).toggleClass("active");
    $(".nav").toggleClass("visible");
    $("body").toggleClass("hidden");
})
