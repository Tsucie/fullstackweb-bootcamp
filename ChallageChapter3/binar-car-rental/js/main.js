$(document).ready(function () {
  // Owl Carousel Setting
  $("#testimoni-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    center: true,
    autoplayHoverPause: false,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
    },
  });

  // Owl Carousel Events
  var owl = $(".owl-carousel");
  owl.owlCarousel();
  $("#next-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $("#prev-btn").click(function () {
    owl.trigger("prev.owl.carousel", [300]);
  });
});
