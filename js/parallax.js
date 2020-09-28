//Parallax backgrounds
const parallax = document.getElementById ("parallax");

window.addEventListener("scroll", function() {
    if ($(window).width() < 768) {
        return;
     }
     else {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.4 + "px"
     }
});

//Scroll function, Navbar
window.addEventListener("scroll", function(){
   let menuArea = document.getElementById('navbar');

   if(window.pageYOffset > 100){
      menuArea.classList.add("cus-nav");
   }
   else{
      menuArea.classList.remove("cus-nav")
   }
});

//Toggle hamburger button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});