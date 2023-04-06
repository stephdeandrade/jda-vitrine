const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);


function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up');
        $('.nav-button').removeClass('hidden').addClass('show');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down');
            $('.nav-button').removeClass('show').addClass('hidden');

        }
    }
    
    lastScrollTop = st;
}   

var menuTl = gsap.timeline();

menuTl.to('.menu-btn', {
    width: "100vh",
    height: "100vh",
    opacity: 1,
    duration: 0.5,
}, "same").to('.nav-menu', {
    left: "0%",
    top: "0%",
    right: "50%",
    translateX: "50%",
}, "same").to('.menu-btn', {
    scale: 4,

}, "next").to('.nav-menu', {
    width:"100vw",
    translateX: "0%",
}, "next").to('.cls-1', {
    fill: "#eca380",
},"next").to('.menu-btn', {
    width:"100vw",
    borderRadius: "0%",
    scale: 1,

}).to('.menu-container', {
    display: "flex",
},'reveal').to('.reveal-1', {
    opacity: 1,
    top: 0,
    duration: 0.1
}, "reveal").to('.reveal-2', {
    opacity: 1,
    top: 0,
    duration: 0.3
}, "reveal").to('.reveal-3', {
    opacity: 1,
    top: 0,
    duration: 0.5
}, "reveal").to('.reveal-4', {
    opacity: 1,
    top: 0,
    duration: 0.7
}, "reveal")

const navButton = document.querySelector(".nav-button");
const navBtn = document.querySelector(".nav-btn");

menuTl.reverse();

navButton.addEventListener('click', () => {
    menuTl.reversed(!menuTl.reversed());
    navBtn.classList.toggle("close")
    document.body.classList.toggle("of")
})

let menuItem = document.querySelectorAll(".menu__item-text");
let menuImage = document.querySelectorAll(".menu__item-image");

// adding eventListeners to all the menuItems.
for (let i = 0; i < 4; i++) {
  //   image reveal animation
  const animation = gsap.to(menuImage[i], {
    opacity: 1,
    duration: 0.6,
    translateY: 0,
    ease: "ease-in-out"
  });

  menuItem[i].addEventListener("mouseenter", () => animation.play());
  menuItem[i].addEventListener("mouseleave", () => animation.reverse());

  //   initialization
  animation.reverse();
}

const iButton = document.querySelector('.i-button');
const form = document.querySelector('.inscription-form');

iButton.addEventListener('click', () =>{
   form.classList.toggle('open')
   document.body.classList.toggle("of")


}); 