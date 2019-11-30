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

  $(".js-icon-nav").click(function(){
    let nav = $(".js-main-nav")
    let icon =  $(".js-icon-nav i")
    nav.slideToggle(200)

    if(icon.hasClass("ion-navicon-round")){
      icon.addClass("ion-close-round")
      icon.removeClass("ion-navicon-round")
    }else {
      icon.addClass("ion-navicon-round")
      icon.removeClass("ion-close-round")
    }
  })
});