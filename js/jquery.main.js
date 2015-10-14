( function(){
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

    $('.portfolio-swiper').each(function () {
        var portfolio = new Swiper('.portfolio-swiper', {
            pagination: '.portfolio-pagination',
            nextButton: '.portfolio-next',
            prevButton: '.portfolio-prev',
            paginationClickable: true,
            loop: true,
            autoplayDisableOnInteraction: false
        });
    });

    $( function(){
        $('.portfolio__menu').each(function () {
            tabs($(this));
        });
    } );

    var tabs = function (obj) {

        //private properties
        var _self = this,
            _tab = obj.find( '.news__tab li'),
            _wrap = obj.find( '.tab__item'),
            i = 0,
            _obj = obj;

        //private methods
        var _addEvents = function () {
                showPage = function(i){
                    _wrap.hide();
                    _wrap.eq(i).show();
                    _tab.removeClass("active");
                    _tab.eq(i).addClass("active");
                };

                showPage(0);

                _tab.each(function(index, element){
                    $(element).attr("data-page", i);
                    i++;
                });

                _tab.click(function(){
                    showPage(parseInt($(this).attr("data-page")));
                });
            },
            _init = function () {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

})();