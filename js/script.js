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
            fitWidth: true,
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

    // Portfolio Transition
    let h2Elements = Array.from(document.querySelectorAll(".portfolio h2"));

    h2Elements.forEach((el) => {
        el.addEventListener("mouseenter", function () {
            this.parentElement.parentElement.nextElementSibling
                .querySelector("img")
                .classList.add("left-push");
        });
        el.addEventListener("mouseleave", function () {
            this.parentElement.parentElement.nextElementSibling
                .querySelector("img")
                .classList.remove("left-push");
        });
    });

    // Portfolio Image Isotope
    $(".portfolio-grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        layoutMode: "fitRows",
        fitRows: {
            gutter: 10,
        },
    });

    $().fancybox({
        selector: ".grid-item a:visible",
        thumbs: {
            autoStart: true,
        },
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
    $('[data-toggle="tooltip"]').tooltip();
});
