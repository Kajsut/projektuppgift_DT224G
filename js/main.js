"use strict";
/* Hämtar in knappen och länkarna till hamburgarmenyn */
const menuButton = document.querySelector(".menu-button");
const menuLinks = document.querySelector(".menu");

/* Öppnar/stänger hamburgarmenyn när man trycker på knappen */
menuButton.addEventListener("click", function(){
    menuLinks.classList.toggle("open")
})