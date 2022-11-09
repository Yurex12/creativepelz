//Animation on scroll
     AOS.init({
         duration:700
     }) 
 //swiper    
     const swiper = new Swiper('.swiper', { 
 autoplay :{
  delay: 1200,
  disableOnInteraction: false, 
 },
 
 loop: true,
   pagination: { 
   el: '.swiper-pagination', 
   clickable:true,
   },
   
    breakpoints : {
        500:{
       slidesPerView: 1     
        },
        
        768: {
        slidesPerView: 2,         
        },
        
        1024 : {
        slidesPerView: 3,         
        }
    }
  
    });        

    //Flyer
let overlayFlyer = document.querySelector(".overlay-flyer");

let openOverlayFlyer  = document.querySelector(".open-flyer-overlay");

let closeOverlayFlyer =
document.querySelector(".close-flyer-overlay");

openOverlayFlyer.addEventListener("click" , () => {
overlayFlyer.classList.add("show-overlay") ;
 
});
closeOverlayFlyer.addEventListener("click" ,() => {
overlayFlyer.classList.remove("show-overlay")  ;     
})

 //Business card

let overlayBusinessCard = document.querySelector(".overlay-business-card");

let openOverlayBusinessCard = document.querySelector(".open-business-card-overlay");

let closeOverlayBusinessCard =
document.querySelector(".close-business-card-overlay");

openOverlayBusinessCard.addEventListener("click" , () => {
overlayBusinessCard.classList.add("show-overlay") ;
 
});
closeOverlayBusinessCard.addEventListener("click" ,() => {
overlayBusinessCard.classList.remove("show-overlay")  ;     
})


//logo design  
  
let overlayLogo  = document.querySelector(".overlay-logo");

let openOverlayLogo  = document.querySelector(".open-logo-overlay");

let closeOverlayLogo  =
document.querySelector(".close-logo-overlay");

openOverlayLogo.addEventListener("click" , () => {
overlayLogo.classList.add("show-overlay") ;
 
});
closeOverlayLogo.addEventListener("click" ,() => {
overlayLogo.classList.remove("show-overlay")  ;     
})


//social media post design  
  
let overlaySocialMediaPost = document.querySelector(".overlay-social-media-post");

let openOverlaySocialMediaPost  = document.querySelector(".open-social-media-post-overlay");

let closeOverlaySocialMediaPost =
document.querySelector(".close-social-media-post-overlay");

openOverlaySocialMediaPost.addEventListener("click" , () => {
overlaySocialMediaPost.classList.add("show-overlay") ;
 
});
closeOverlaySocialMediaPost.addEventListener("click" ,() => {
overlaySocialMediaPost.classList.remove("show-overlay")  ;     
})
  
  //Book Cover design  
  
let overlayBookCover  = document.querySelector(".overlay-book-cover");

let openOverlayBookCover  = document.querySelector(".open-book-cover-overlay");

let closeOverlayBookCover =
document.querySelector(".close-book-cover-overlay");

openOverlayBookCover.addEventListener("click" , () => {
overlayBookCover.classList.add("show-overlay") ;
 
});
closeOverlayBookCover.addEventListener("click" ,() => {
overlayBookCover.classList.remove("show-overlay")  ;     
})

             
