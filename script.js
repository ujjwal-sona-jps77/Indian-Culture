gsap.from("nav", {
  y: -100,
  duration: 1,
});

gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -5%",
    end: "top -100%",
    scrub: true,
  },
  duration: 1.5,
});

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.textAnimate(".page1 .top h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.2,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
}); // This is Animation is not visible because of Loading Animation

Shery.textAnimate("#locate" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 1.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

// Shery.textAnimate("#about_pp" /* Element to target.*/, {
//   //Parameters are optional.
//   style: 1,
//   y: 10,
//   delay: 0.1,
//   duration: 1,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   multiplier: 0.1,
// });

// Shery.makeMagnet("#map" /* Element to target.*/, {
//   //Parameters are optional.
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });

var loader = document.querySelector("#loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 4200);

Shery.imageMasker("#map" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Map",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.textAnimate(".box_in h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.hoverWithMediaCircle("nav h1" /* Element to target.*/, {
});

gsap.from("#about_pp", {
  y: 120,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top 9%",
    end: "top 12%",
    scrub: 2
  },
  delay: 1,
});
