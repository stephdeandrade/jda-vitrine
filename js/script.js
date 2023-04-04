/**compteur */
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

const section_2 = document.getElementById("horizontal")
let box_items = gsap.utils.toArray(".horizontal__item");

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
