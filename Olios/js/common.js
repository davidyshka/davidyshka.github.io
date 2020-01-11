$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    prevArrow: false,
    nextArrow: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: true,
    swipe: false,
    infinite: true,
    speed: 1000
});

$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn__active');
    $('.nav').toggleClass('nav__active');
});