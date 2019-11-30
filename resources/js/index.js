$(document).ready(function() {
  // fixed-nav

  $(".js-features").waypoint(
    // fixed0-nav
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("fixed-nav");
      } else {
        $("nav").removeClass("fixed-nav");
      }
    },
    {
      offset: "60px"
    }
  );

  //   smooth animation
  let scrollLink = $(".scroll");
  scrollLink.click(function(e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: $(this.hash).offset().top }, 1000);
  });

  //   animation
  $(".fade-features").waypoint(
    function() {
      $(".fade-features").addClass("animated fadeIn ");
    },
    {
      offset: "50%"
    }
  );

  $(".fade-img").waypoint(
    function() {
      $(".fade-img").addClass("animated fadeInUp ");
    },
    {
      offset: "50%"
    }
  );

  $(".js-fade-cities").waypoint(
    function() {
      $(".js-fade-cities").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );
  $(".fade-plan").waypoint(
    function() {
      $(".fade-plan").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  // mobile nav
  $(".js-nav-icon").click(function() {
    let nav = $(".js-main-nav");
    nav.slideToggle(200);
  });
});
