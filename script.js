function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}


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
});

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
