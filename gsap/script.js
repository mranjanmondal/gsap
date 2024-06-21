var ball = document.querySelector(".happen");
var ball2 = document.querySelector(".ball")


function animation(){
    var tl = gsap.timeline();
tl.from("nav h1,nav h4, nav button",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
});
tl.from(".center1 h1",{
    x:-100,
    opacity:0
})
tl.from(".center1 p",{
    y:-40,
    opacity:0
})
tl.from(".center1 button",{
    x:-40,
    opacity:0
})
tl.from(".center2 img",{
    x:50,
    duration:0.5,
    opacity:0
},"-=0.9")

tl.from(".section1bottom a",{
    y:30,
    opacity:0,
    stagger:0.2,
    duration:0.5
})
}
animation();
 var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scrub:4
    }
 })

 tl2.from(".services",{
    y:30,
    opacity:0,
})

gsap.from(".footer .footer0,.footer .footer1,.footer .footer2",{
    y:-300,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:".footer .footer0,.footer .footer1,.footer .footer2",
        scroller:"body",
        start:"top 40%",
        end:"top 50%",
        scrub:4
    }
})

tl2.from(".container #elem1,.container .elem3",{
    x:-300,
    opacity:0
},"anime")
tl2.from(".container .elem2,.container #elem4",{
    x:300,
    opacity:0
},"anime")
  
ball.addEventListener("mousemove",function(dets){
    ball2.innerHTML="view more"
gsap.to(ball2,{
    opacity:1,
    x:dets.x,
    y:dets.y,
    
})
})
ball.addEventListener("mouseleave",function(dets){
    ball2.innerHTML=""
gsap.to(ball2,{
    opacity:0,
   
})
})