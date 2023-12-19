function scroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
scroll();

gsap.from('nav',{
    y:'-110',
    duration:1,
    delay:.5,
})
gsap.to('nav',{
    backgroundColor : '#227355',
    duration : 2,
    height : '50px',
    scrollTrigger : {
        trigger : 'nav',
        scroller : '.books-smooth',
        start : 'top -70%',
        end : 'bottom 10%',
        scrub : 1,
    },
})