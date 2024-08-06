

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "0%",
        end: "+=150%",
        pin: ".wrapper",
        scrub: 1
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
    })
    .to(
      ".section1.hero",
      {
        scale: 1.1,
        
      },
      "<"
    );
});











const observer = new IntersectionObserver((entrie) => {
    entrie.forEach((entry) => {
        console.log(entry)
                  if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                  }else {
                    entry.target.classList.remove('show');
                  }
    });
});

const hiddenTitles = document.querySelectorAll(".title") ;
hiddenTitles.forEach((el) => observer.observe(el));



const view = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
                  if (entry.isIntersecting) {
                    entry.target.classList.add('display');
                  }else {
                    entry.target.classList.remove('display');
                  }
    });
});

const hiddenElememts = document.querySelectorAll(".contents") ;
hiddenElememts.forEach((el) => view.observe(el));





let angle = 0;

function changeGradientAngle() {
    angle = (angle + 1) % 360; 
    document.body.style.background = `linear-gradient(${angle}deg, rgb(0,0,33), rgb(0,39,72),rgb(128, 128, 128), rgb(0,0,33))`;
}

setInterval(changeGradientAngle, 10);