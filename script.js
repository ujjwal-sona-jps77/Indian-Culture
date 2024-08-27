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
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


var loader = document.querySelector("#loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 4200);

function textanimate() {
  setTimeout(function () {
    Shery.textAnimate(".page1 .top h1" , {
      style: 1,
      y: 10,
      delay: 0.2,
      duration: 1,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      multiplier: 0.1,
    });
  }, 5200);
}

Shery.imageMasker("#map", {
  mouseFollower: true,
  text: "Map",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.hoverWithMediaCircle("nav h1" , {
  images: ["image1.jpg", "image2.jpg", "image3.jpg"]
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
    scrub: 2,
  }
});

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
