$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      426: {
        items: 2,
      },
      // breakpoint from 768 up
      768: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  var $grid = $(".grid");
  $grid.isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      columnWidth: ".grid-sizer",
    },
  });

  $grid.imagesLoaded().progress(function () {
    $grid.isotope("layout");
  });

  $(".filter ul").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
    console.log(filterValue);
  });

  $(".menu > div > div > ul > li > a").on("click", function () {
    $(".toggler").prop("checked", false);
  });
  // var $window = $(window),
  //   $grid_item = $(".grid-item");

  // function resize() {
  //   if ($window.width() <= 320) {
  //     return $grid_item.addClass("grid-item--width2");
  //   }

  //   $grid_item.removeClass("grid-item--width2");
  // }

  // $window.resize(resize).trigger("resize");
});
