// scroll snapping //

gsap.registerPlugin(ScrollTrigger);

function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: {y: i*innerHeight, autoKill: false},
    duration: 1
  });

  if(anim) {
    anim.restart();
  }
}

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    onEnter: () => goToSection(i)
  });
  ScrollTrigger.create({
    trigger: panel,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i),
  });
});





// opening //

gsap.from("#svg_1", {opacity:0, duration:2, delay:2});
gsap.from("#svg_2", {x:400, y:400, opacity:0, duration:2});
gsap.from("#svg_3", {x:-400, y:400, opacity:0, duration:2});
gsap.from("#svg_4", {x:0, y:400, opacity:0, duration:2});
gsap.from("#svg_5", {x:-400, y:0, opacity:0, duration:2});
gsap.from("#svg_6", {x:400, y:0, opacity:0, duration:2});
gsap.from("#svg_7", {x:0, y:-400, opacity:0, duration:2});
gsap.from(".header", {y:-80, duration:2, delay:1});
gsap.to("#svg_0", {top:40, left:40, duration:1, delay:3.2, scale:0.2});
gsap.from("#logo", {opacity:0, delay:4.2});
gsap.to("#svg_0", {delay:4.4, opacity:0});

gsap.from(".homeArea", {opacity:0, duration:2, delay:4.4});
gsap.to(".LClock", {rotation:360, duration:4, repeat:-1, ease:"linear"});
gsap.to(".SClock", {rotation:360, duration:48, repeat:-1, ease:"linear"});
gsap.fromTo(".mouse",{x:70, duration:3}, {x:-70, duration:3, repeat:-1, yoyo: true, ease:"linear"});

$(".yoda").click(function(){
  gsap.to(".arm", {rotation:25, duration:0.15, repeat:-1, yoyo: true, transformOrigin:"bottom"});
})

