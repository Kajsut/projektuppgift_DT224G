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
let nowPic = 0;

const pictures = [
    {
        src: "images/work_beehive3.jpg",
        alt: "Biodlaren Sebastian tittar på en honungskaka",
        count: "1/10"
    },
    {
        src: "images/honeycomb5.jpg",
        alt: "Biodlaren Sebastian tittar på en honungskaka",
        count: "2/10"
    },
    {
        src: "images/passionflower.jpg",
        alt: "Bi letar mat på en passionsblomma",
        count: "3/10"
    },
    {
        src: "images/honeycomb4.jpg",
        alt: "Biodlaren jobbar med honungskakorna",
        count: "4/10"
    },
    {
        src: "images/flower2.jpg",
        alt: "Ett bi på en ringblomma",
        count: "5/10"
    },
    {
        src: "images/work_write.jpg",
        alt: "Biodlare som antecknar vid bikuporna",
        count: "6/10"
    },
    {
        src: "images/honeycomb3.jpg",
        alt: "En honungskaka med bin på",
        count: "7/10"
    },
    {
        src: "images/work-beehive1.jpg",
        alt: "Biodlare jobbar bland bina",
        count: "8/10"
    },
    {
        src: "images/honeycomb1.jpg",
        alt: "En honungskaka på en bikupa med bin på",
        count: "9/10"
    },
    {
        src: "images/bees.jpg",
        alt: "Bin som flyger in i en bikupa",
        count: "10/10"
    },
]

function nextPicture () {

    if (nowPic === pictures.length -1) {
        /* Om arrayen är på sista bilden, byt till första bilden igen */
        nowPic = 0;
    } else {
        /* Om ej, ta nästkommande bild  */
        nowPic++;
    }

    showNextPicture(nowPic);
}


function previousPicture () {

    if (nowPic === 0 ) {
        nowPic = pictures.length -1;
    } else {
        nowPic--;
    }

    showNextPicture(nowPic);

}


function showNextPicture () {


}

/* Lyssnar på sidoknapparna till bildspelet */
nextButton.addEventListener("klick", nextPicture);
prevButton.addEventListener("klick", previousPicture);