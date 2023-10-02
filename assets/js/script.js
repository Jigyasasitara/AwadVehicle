

/**
 * navbar toggle
 * 
 */
function watsapp() {
  var name = document.getElementById("input-1").value;
  var phoneno = document.getElementById("input-2").value;
  var date = document.getElementById("input-3").value;
  var watsappmessage = "http://wa.me/919646884773?text="+name+"%0a"+"mobile no:"+phoneno+"%0a"+ "date"+date;
  window.open(watsappmessage, '_blank').focus();
  
}  
'use strict';

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
//     reset: true
});

sr.reveal('.hero-form, .hero, .hero-banner',{delay: 100}); 
