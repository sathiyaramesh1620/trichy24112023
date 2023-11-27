window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
    })



$('.owl-carousel').owlCarousel(
   {
    autoplay:true,
    // autoplayhoverpause:true,
    autoplaytimeout:100,
    items:3                                                                             ,
    nav:true,
    loop:true
   }

)