$(function() {
  // Burger Menu and Mobile Menu JS
  $(".burger-menu").click(function() {
    $(this).toggleClass("active");
    $("body").toggleClass("active");
    $(".fixed-mobile-menu").toggleClass("active");
    $(".menu-listing-header").toggleClass("active");
  });
  // Our Blogs Slick Slider JS
  $(".our-blogs-slick-slider-home").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});