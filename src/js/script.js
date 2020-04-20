$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 2,
      },
      // breakpoint from 768 up
      768: {
        items: 3,
      },
    },
  });
});
