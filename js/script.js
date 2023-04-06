// Transition

const allBandes = document.querySelectorAll('.bande');
const TLAnim = new TimelineMax();

function delay(n) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n)
    })
}

barba.init({

    sync: true,

    transitions: [
        {
            async leave(){
                const done = this.async();

                TLAnim
                .to(allBandes, {
                    height: '100%',
                    stagger: 0.05,
                    ease: "power2.out", 
                    duration: 0.5
                });

                await delay(1500);
                done();

            },
            enter(){
                TLAnim
                .to(allBandes, {
                    height: '0%',
                    stagger: 0.05,
                    ease: "power2.out", 
                    duration: 0.5
                });
                window.scrollTo({ top: 0});

            }
        }
    ]
})


const bleu = document.querySelector('.bleu');
const blanc = document.querySelector('.blanc');
const orange = document.querySelector('.orange');
const overlay1 = document.querySelector('.overlay1');
const overlay2 = document.querySelector('.overlay2');
const overlay3 = document.querySelector('.overlay3');

const tl = gsap.timeline();

tl.to(overlay1, {
    height: "100%",
    duration: 0.8,
    delay: 1,
    ease: 'power2.inOut'
}, "same").to(blanc,{
    opacity: 1,
    duration: 0.8,
    delay: 1,
    ease: 'power2.inOut'

}, "same").to(overlay2, {
    height: "100%",
    duration: 0.8,
    ease: 'power2.inOut'
}, "sam").to(bleu,{
    opacity: 1,
    duration: 0.8,
    ease: 'power2.inOut'

}, "sam").to(overlay3, {
    height: "100%",
    duration: 0.8,
    ease: 'power2.inOut'
}, "sa").to(bleu,{
    opacity: 0,
    duration: 0.8,
    ease: 'power2.inOut'

}, "sa").to(blanc,{
    opacity: 0,
    duration: 0.8,
    ease: 'power2.inOut'

}, "sa").to(orange, {
    translateY: "-43vh",
    scale: 0.31 ,
    duration: 1,
    ease: 'power2.inOut'

}).to('.loader', {
    opacity: 0,
    duration: 1,
    ease: 'power2.inOut'

}).to('.loader', {
    display: "none"
}).fromTo('.text-home',{
    translateY: 50,
    opacity: 0,
},{
    translateY: 0,
    opacity: 1,

}).fromTo('.inscription-form',{
    opacity: 0,

},{
    opacity: 1,

})




$(document).ready(($) => {
    $('#compteur__num_1 span').counterUp({
        time:  2000,
        number: 78
    })
    $('#compteur__num_2 span').counterUp({
        time:  2000,
        number: 78
    })
    $('#compteur__num_3 span').counterUp({
        time:  2000,
        number: 956
    })
    $('#compteur__num_4 span').counterUp({
        time:  2000,
        number: 747
    })
});


/** scroll horizontal */
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_2 = document.getElementById("horizontal");
let box_items = gsap.utils.toArray(".horizontal_item");

gsap.to(box_items, {
    xPercent: -100 * (box_items.length - 1),
    ease: "sine.out",
    scrollTrigger: {
       trigger: section_2,
       pin: true,
       scrub: 3,
       snap: 1 / (box_items.length - 1),
       end: "+=" + section_2.offsetWidth
    }
});



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


// adding eventListeners to all the formItems.
for (let i = 0; i < 3; i++) {
    var anim = new gsap.timeline();

    let formitem = document.querySelectorAll('.cpt');
    let formImage = document.querySelectorAll(".form__item-image");
  //   image reveal animation
  const animation = anim.to('.form-image_text',{
    opacity: 0,
    duration: 0.6,
    ease: "ease-in-out"
  }).to(formImage[i], {
    opacity: 1,
    duration: 0.6,
    ease: "ease-in-out"
  });


  formitem[i].addEventListener("mouseenter", () => animation.play());
  formitem[i].addEventListener("mouseleave", () => animation.reverse());

  //   initialization
  animation.reverse();
}

 /**compteur */
 
 const iButton = document.querySelector('.i-button');
 const form = document.querySelector('.inscription-form');

 iButton.addEventListener('click', () =>{
    form.classList.toggle('open')
    document.body.classList.toggle("of")


 });

 const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            var logo = new gsap.timeline();
            logo.to('.logo-anim', {
                opacity: 1,
                duration: 1.5,
                ease: "ease-in-out",
            }).to('.trait-anim', {
                width: "90%",
                duration: 1,
                ease: "ease-in-out",

            }).to('.fleche-anim', {
                opacity: 1,
                duration: 0.2,
                scale: 1,
                ease: "ease-in-out",

            }).to('.logo-fini-anim', {
                opacity: 1,
                duration: 0.5,
                scale: 1,
                ease: "ease-in-out",
            })
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector('.logo-anim'))

const titleIntersect = function (entries, observ) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observ.unobserve(entry.target)
        }
    })
}

const observ = new IntersectionObserver(titleIntersect, options)
document.querySelectorAll('.reval').forEach(function (r) {
    observ.observe(r)
})
const mapIntersect = function (entries, obser) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            var map = new gsap.timeline();

            map.to('.carte', {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "ease-in-out"
            }).to('.map-reveal', {
                opacity: 1,
                translateY: 0,
                duration: 0.5,
                ease: "ease-in-out"
            })
            obser.unobserve(entry.target)
        }
    })
}

const obser = new IntersectionObserver(mapIntersect, options)
obser.observe(document.querySelector('.carte'))



