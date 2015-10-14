$(function(){

    if ($('.promo-swiper').length){
        $('.promo-swiper').each(function(){
            var swiper = new Swiper('.promo-swiper', {
                pagination: '.promo-pagination',
                nextButton: '.promo-next',
                prevButton: '.promo-prev',
                paginationClickable: true,
                loop:true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false
            });
        });
    }
    if ($('.reviews-swiper').length) {
        $('.reviews-swiper').each(function () {
            var reviews = new Swiper('.reviews-swiper', {
                pagination: '.reviews-pagination',
                nextButton: '.reviews-next',
                prevButton: '.reviews-prev',
                paginationClickable: true,
                loop: true,
                autoplayDisableOnInteraction: false
            });
        });
    }

} );