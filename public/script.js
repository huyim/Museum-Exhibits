/* initialization, done when Web page is loaded */

// notice this code is outside any functions
// Means it will get run as soon as the Browser reads this .js file
console.log("initialization");

//countdown timer
//Some reference: 
//https://stackoverflow.com/questions/10610402/javascript-replace-all-commas-in-a-string
setInterval(function() {
  let timer = document.getElementById("num").textContent;
  timer = timer.replace(/,/g,"");
  timer--;
  timer = timer.toLocaleString();
  document.getElementById("num").textContent = timer;
}, 1000)
let finishTime = new Date("May 10, 2020 17:00:00");
let today = new Date();

// Slide show reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
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

