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

})();

$( function(){
    $('.portfolio__menu').each(function () {
        tabs($(this));
    });

    $('.portfolio-wrap__img').each(function () {
        bgHeight($(this));
    });

    if($('#map').length){
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                    center: [55.849974, 37.670016],
                    zoom: 14
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'Это красивая метка'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: 'img/myIcon.png',
                    // Размеры метки.
                    iconImageSize: [113, 108],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-113, -108]
                });

            myMap.geoObjects.add(myPlacemark);
        });
    }

} );

var bgHeight = function (obj) {

    //private properties
    var _self = this,
        _obj = obj,
        _window = $( window ),
        _imageSrc = _obj
            .css('background-image')
            .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
            .split(',')[0],
        _image = new Image();

    //private methods
    var _addEvents = function () {
            _window.on({
                load: function() {
                    _image.src = _imageSrc;

                    setTimeout(function () {
                        var _height = _image.height;
                        _obj.css('height', _height)
                    }, 50);
                }
            });
        },
        _init = function () {
            _addEvents();
        };

    //public properties

    //public methods

    _init();
};

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