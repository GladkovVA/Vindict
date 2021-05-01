const tl = new TimelineMax();

tl.from('.header', {opacity: 0, y: -100, duration: 0.5})
.from('.hero__background', {opacity: 0, y: -100, duration: 0.5})
.from('.hero__background--osc4', {opacity:0, duration: 0.3})
.from('.hero__background--osc1', {opacity:0, duration: 0.3})
.from('.hero__background--osc3', {opacity:0, duration: 0.3})
.from('.hero__background--osc2', {opacity:0, duration: 0.3});

let split1 = new SplitText("#heroTitle", {type: "chars"});
let split2 = new SplitText("#heroLable", {type: "chars"});
let split3 = new SplitText("#heroTitleAdd", {type: "chars"});
let split4 = new SplitText("#heroPresent", {type: "words"});
tl.from(split1.chars, {duration: 0.4, opacity: 0, autoAlpha: 0, stagger: 0.05})
.from(split2.chars, {duration: 0.4, opacity: 0, autoAlpha: 0, stagger: 0.05}, "-=0.4")
.from(split3.chars, {duration: 0.4, y: 100, autoAlpha: 0, stagger: 0.05}, "-=0.4");

tl.from('.hero__btn--sentence', {opacity: 0, x: -100, duration: 0.4})
.from('.hero__btn--portfolio', {opacity: 0, x: 100, duration: 0.4}, "-=0.4")
.from('.hero__definition', {opacity: 0, duration: 0.4});

tl.from(split4.words, {duration: 1, x: 200, autoAlpha: 0, ease: "elastic", stagger: 0.05}, "-=0.4");

// const anim = gsap.from(".about-us__artboard", {
//   opacity: 0,
//   x: 400,
//   rotation: 360,
//   duration: 3,
//   scale: 0.3
// });
// // .from('.description1', { x: -300, opacity: 0, duration: 0.4});

// ScrollTrigger.create({
//   trigger: ".about-us__artboard",
//   animation: anim,
//   start: "top bottom-=30",
//   end: "top center+=270",
//   toggleClass: "active",
//   pin: true,
//   scrub: 2,
//   onUpdate: self => {
//     console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
//   }
// });

if (document.documentElement.clientWidth < 768) {

  document.querySelectorAll('.services__card').forEach(item => {
    
      ScrollTrigger.create({
        trigger: item,
        start: "top center-=20",
        end: "bottom center+=20",
        toggleClass: "active-scale",
        scrub: true
      });
    });
}


