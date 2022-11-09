//toggle and nav controls
let menu = document.querySelector(".navs");
 let toggleButton = document.querySelector(".menuToggle");
  

toggleButton.addEventListener("click" ,
 function () {
toggleButton.classList.toggle("activeToggle");
menu.classList.toggle("active");
             })
             
   //Animation on scroll
     AOS.init({
         duration:700,
         once: true,
     })           
 
  


     
      


             
             
