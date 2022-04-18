
$(function () {
    $('#slider-slick').slick({
      // autoplay: true,
      infinite: true,
      speed: 900,
      slidesToShow: 3, 
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 999,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

      let slider = $('#slider-light').lightSlider({
        pager: false,
        item: 3,
        loop:true,
        slideMove: 1,
        controls: false,
        responsive : [
            {
                breakpoint:999,
                settings: {
                    item:2,
                    slideMove:1,
                  }
            },
            {
              breakpoint:580,
              settings: {
                  item:1,
                  slideMove:1,
                }
          }
        ]
    });
    $(".prev").on('click', function () {
        slider.goToPrevSlide();
    });
    $(".next").on('click', function () {
        slider.goToNextSlide();
    });

});

