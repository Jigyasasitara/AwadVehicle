

/**
 * navbar toggle
 * 
 */
 const today = new Date().toISOString().slice(0, 10);

        // Set the input field's value to today's date
        document.getElementById('input-3').value = today;
function watsapp() {
  var name = document.getElementById("input-1").value;
  var phoneno = document.getElementById("input-2").value;
  var date = document.getElementById("input-3").value;
  var watsappmessage = "http://wa.me/919646884773?text="+name+"%0a"+"Mobile no : "+phoneno+"%0a"+ "Date : "+date+"%0a"+" I Wish to book a vehichle "+"%0a"+"//Add something more"+"%0a";
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
