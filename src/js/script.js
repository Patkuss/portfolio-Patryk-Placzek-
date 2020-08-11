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