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

    var reviews = new Swiper('.reviews-swiper', {
        pagination: '.reviews-pagination',
        nextButton: '.reviews-next',
        prevButton: '.reviews-prev',
        paginationClickable: true,
        loop:true,
        autoplayDisableOnInteraction: false
    });


    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.849974, 37.670016],
                zoom: 9
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
                iconImageOffset: [-3, -42]
            });

        myMap.geoObjects.add(myPlacemark);
    });

} );