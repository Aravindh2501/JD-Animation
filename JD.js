var h = gsap.timeline();

h.from(".logo, .menu ,.m-img", {
    opacity: 0,
    x: -20,
    duration: 1,
    ease: "power2.out",
    stagger: 1,
});

h.to(".text", {
    opacity: 1,
    y: 0,
    stagger: 0.1, 
});

h.fromTo("#bottle,#ice1,#ice2,#glass1", {
    // x: 200,       
    // y: 100,        
    opacity: 0,  
}, {
    x: 0,      
    y: 0,     
    opacity: 1,  
    duration: 1, 
});
h.fromTo("#glass2", {
    // x: -200,       
    y: 200,        
    opacity: 0,  
}, {
    x: 0,      
    y: 0,     
    opacity: 1,  
    duration: 1, 
});



gsap.registerPlugin(ScrollTrigger);

// trigger 1

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
    }
});

tl.to("#bottle", {
    top: "110%",
    width: "20%",
    left: "10%"
}, "whickey");

tl.to("#ice1", {
    top: "175%",
    width: "13%",
    left: "80%",
    rotation: 360,
}, "whickey");

tl.to("#ice2", {
    top: "107%",
    width: "10%",
    left: "8%"
}, "whickey");

tl.to("#glass1", {
    top: "167%",
    width: "15%",
    left: "19%",
    rotation: 70,
    rotation: 6,
}, "whickey");

tl.to("#glass2", {
    top: "107%",
    width: "8%",
    left: "75%",
    rotation: -42,
}, "whickey");

// trigger 2

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".flovors",
        start: "0% 95%",
        end: "0% 50%",
        scrub: true,
        // markers: true,
    }
});


tl2.from("#bottle2", {
    rotate: "-100deg",
    top: "110%",
    left: "-100%",
}, "flavourb")

tl2.from("#bottle3", {
    rotate: "100deg",
    top: "110%",
    left: "-100%",
}, "flavourb")

tl2.to("#bottle", {
    left: "41%",
    width: "15%",
    top: "201%",
}, 'flavourb')
tl2.to("#ice1", {
    left: "41%",
    width: "15%",
    top: "201%",
}, 'flavourb')
tl2.to("#glass1", {
    left: "38%",
    width: "15%",
    top: "70%",
    opacity: 0,
}, 'flavourb')
