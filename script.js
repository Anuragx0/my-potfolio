gsap.from(".photo .circle", {
    scale: 0.5,
    duration :1,
    y:30,
    x:50,
    scrollTrigger:{
        trigger:".photo .circle",
        scroller:"body",
    }
})