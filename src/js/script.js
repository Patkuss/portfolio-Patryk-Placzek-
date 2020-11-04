// scroll snapping //

(function($) {
  var selector = ".section";

  var $slides = $(selector);

  var currentSlide = 0;
  var isAnimating = false;

  var stopAnimation = function() {
    setTimeout(function() {
      isAnimating = false;
    }, 300);
  };

  var bottomIsReached = function($elem) {
    var rect = $elem[0].getBoundingClientRect();
    return rect.bottom <= $(window).height();
  };

  var topIsReached = function($elem) {
    var rect = $elem[0].getBoundingClientRect();
    return rect.top >= 0;
  };

  document.addEventListener(
    "wheel",
    function(event) {
      var $currentSlide = $($slides[currentSlide]);

      if (isAnimating) {
        event.preventDefault();
        return;
      }

      var direction = -event.deltaY;

      if (direction < 0) {
        // next
        if (currentSlide + 1 >= $slides.length) return;
        if (!bottomIsReached($currentSlide)) return;
        event.preventDefault();
        currentSlide++;
        var $slide = $($slides[currentSlide]);
        var offsetTop = $slide.offset().top;
        isAnimating = true;
        $("html, body").animate(
          {
            scrollTop: offsetTop
          },
          1000,
          stopAnimation
        );
      } else {
        // back
        if (currentSlide - 1 < 0) return;
        if (!topIsReached($currentSlide)) return;
        event.preventDefault();
        currentSlide--;
        var $slide = $($slides[currentSlide]);
        var offsetTop = $slide.offset().top;
        isAnimating = true;
        $("html, body").animate(
          {
            scrollTop: offsetTop
          },
          1000,
          stopAnimation
        );
      }
    },
    { passive: false }
  );
})(jQuery);


// opening //

gsap.from("#svg_1", {opacity:0, duration:2, delay:1});
gsap.from("#svg_2", {x:400, y:400, opacity:0, duration:1});
gsap.from("#svg_3", {x:-400, y:400, opacity:0, duration:1});
gsap.from("#svg_4", {x:0, y:400, opacity:0, duration:1});
gsap.from("#svg_5", {x:-400, y:0, opacity:0, duration:1});
gsap.from("#svg_6", {x:400, y:0, opacity:0, duration:1});
gsap.from("#svg_7", {x:0, y:-400, opacity:0, duration:1});
gsap.from(".header", {y:-80, duration:1, delay:1});
gsap.to("#svg_0", {top:40, left:40, duration:1, delay:1.2, scale:0.2});
gsap.from("#logo", {opacity:0, delay:2.2});
gsap.to("#svg_0", {delay:2.4, opacity:0});

// main area animations //

gsap.from(".section", {opacity:0, duration:2, delay:2.4});
gsap.from(".navigation", {opacity:0, duration:2, delay:2.4});
gsap.to(".LClock", {rotation:360, duration:4, repeat:-1, ease:"linear"});
gsap.to(".SClock", {rotation:360, duration:48, repeat:-1, ease:"linear"});
gsap.fromTo(".mouse",{x:70, duration:3}, {x:-70, duration:3, repeat:-1, yoyo: true, ease:"linear"});
$(".yoda").click(function(){
  gsap.to(".arm", {rotation:25, duration:0.15, repeat:-1, yoyo: true, transformOrigin:"bottom"});
})

// smooth scroll //

$(document).on('click', 'a[href^="#"]', function(smooth) {
  var id = $(this).attr('href');
  var $id = $(id);
  if ($id.length === 0) {
      return;
  }
  smooth.preventDefault();
  var pos = $id.offset().top;
  $('body, html').animate({scrollTop: pos});
});

// side navigation / scrollMagic //

$(function() {
  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: "#section1",
    duration: 561
  })
  .setClassToggle(".navigation a.nav-1", "active")
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#section2",
    duration: 561
  })
  .setClassToggle(".navigation a.nav-2", "active")
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#section3",
    duration: 561
  })
  .setClassToggle(".navigation a.nav-3", "active")
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#section4",
    duration: 561
  })
  .setClassToggle(".navigation a.nav-4", "active")
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#section5",
    duration: 561
  })
  .setClassToggle(".navigation a.nav-5", "active")
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#section6",
    duration: 561
  })
  .setClassToggle(".navigation a.nav-6", "active")
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#section7",
    duration: 561
  })
  .setClassToggle(".navigation a.nav-7", "active")
  .addTo(controller);
});

// swaping nav color //

$(document).scroll(function() {
  const scrollPos = $(document).scrollTop();

  const nav = document.querySelector('#header');

  const section1 = $('#section1').offset().top;
  const section2 = $('#section2').offset().top;
  const section3 = $('#section3').offset().top;

  if (scrollPos >= section1 && scrollPos < section2 -250) {
    nav.classList.remove("greenHeader");
  } else if (scrollPos >= section2 - 250 && scrollPos < section3 - 350) {
    nav.classList.add("greenHeader");
  } else if (scrollPos >= section3 - 150) {
    nav.classList.remove("greenHeader");
  };
});
