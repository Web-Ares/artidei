( function(){

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

})();

$( function(){
    $('.portfolio__menu').each(function () {
        tabs($(this));
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
                    hintContent: '����������� ������ �����',
                    balloonContent: '��� �������� �����'
                }, {
                    // �����.
                    // ���������� ������� ������ ��� ������.
                    iconLayout: 'default#image',
                    // ��� ����������� ������ �����.
                    iconImageHref: 'img/myIcon.png',
                    // ������� �����.
                    iconImageSize: [113, 108],
                    // �������� ������ �������� ���� ������ ������������
                    // � "�����" (����� ��������).
                    iconImageOffset: [-113, -108]
                });

            myMap.geoObjects.add(myPlacemark);
        });
    }

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