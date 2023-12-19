function scroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
scroll();

gsap.from('nav',{
    y:'-90',
    duration:.5,
    delay:.5,
})
gsap.from('.container',{
    y:'60',
    duration:1,
    delay:.5,
    opacity : 0,
    scrollTrigger : {
      trigger : '.container',
      scroller : '#main',
      start : 'top 85%',
      end : 'bottom 86%',
      scrub : 2,
  },
})
gsap.from('.page-bot', {
    opacity : 0,
    duration:1.5,
    delay:.5,
})
gsap.to('nav',{
    backgroundColor : '#4d864d',
    duration : 2,
    height : '50px',
    scrollTrigger : {
        trigger : 'nav',
        scroller : '#main',
        start : 'top -70%',
        end : 'bottom 10%',
        scrub : 1,
    },
})
gsap.to('body',{
    backgroundColor : '#F2F2F2',
    duration : 2,
    scrollTrigger : {
        trigger : 'body',
        scroller : '#main',
        start : 'top -70%',
        end : 'top -80%',
        scrub : 1,
    },
})