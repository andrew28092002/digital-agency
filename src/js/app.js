import $ from 'jquery'
import 'slick-carousel'


$('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="./images/next-arrow.svg" alt="next"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="./images/prev-arrow.svg" alt="prev"></button>',
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        }
      }
    ]
  });