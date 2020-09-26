//Parallax backgrounds
const parallax = document.getElementById ("parallax");

window.addEventListener("scroll", function() {
    if ($(window).width() < 768) {
        return;
     }
     else {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.5 + "px"
     }
});

window.addEventListener("scroll", function(){
   let menuArea = document.getElementById('navbar');

   if(window.pageYOffset > 100){
      menuArea.classList.add("cus-nav");
   }
   else{
      menuArea.classList.remove("cus-nav")
   }
})