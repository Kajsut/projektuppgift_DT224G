"use strict";
/* Hämtar in knappen och länkarna till hamburgarmenyn */
const menuButton = document.querySelector(".menu-button");
const menuLinks = document.querySelector(".menu");

/* Hämtar knappar och element till bildspelet */
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");
const slidePic = document.querySelector(".slideshow");
const slideCounter = document.querySelector(".slidecounter")


/* Öppnar/stänger hamburgarmenyn när man trycker på knappen */
menuButton.addEventListener("click", function(){
    menuLinks.classList.toggle("open")
})


/**
 * Bildspelet
*/
/* Ett objek med array med allt till bildspelet */

const pictures = [
    {
        src: "images/work_beehive3.jpg",
        alt: "Biodlaren Sebastian som tittar på en honungskaka",
        count: "1/10"
    },
]

function nextPicture () {


}


function previousPicture () {


}


/* Lyssnar på sidoknapparna till bildspelet */
nextButton.addEventListener("klick", nextPicture);
prevButton.addEventListener("klick", previousPicture);