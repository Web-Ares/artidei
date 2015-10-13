$(function(){

    var swiper = new Swiper('.promo-swiper', {
        pagination: '.promo-pagination',
        nextButton: '.promo-next',
        prevButton: '.promo-prev',
        paginationClickable: true,
        loop:true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });

} );