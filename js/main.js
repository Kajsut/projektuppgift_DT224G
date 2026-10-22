"use strict";

const menuButton = document.querySelector(".menu-button");
const menuLinks = document.querySelector(".menu");

menuButton.addEventListener("click", function(){
    menuLinks.classList.toggle("open")
})