/*
  Hanna Tiara Andarlia
  Career Exploration #7 by Glints Academy with Progate
*/

"use strict";

/* Navbar */
function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/* Slideshow cover */
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("cover");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // change image every 5s
}

/* Slideshow packages */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("packages");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* Popup Modals */
// Get the modal
var login = document.getElementById('login');
var signup = document.getElementById('signup');
var booking = document.getElementById('login');

const modals = [signup, login, booking];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  numbers.foreach ((modal) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  })
}

// Booking Tabs
function openLink(evt, linkName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" red", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " red";
}

// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();

/* Toggle Theme/Mode */
function toggleMyTheme() {
  var element1 = document.body;
  element1.classList.toggle("light-theme");
}
