"use strict";
// Hämtar in knappen och länkarna till hamburgarmenyn
const menuButton = document.querySelector(".menu-button");
const menuLinks = document.querySelector(".menu");

// Hämtar knappar och element till bildspelet
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");
const slidePic = document.querySelector(".slideshow");
const slideCounter = document.querySelector(".slidecounter");

// Hämtar element från formuläret
const form = document.querySelector(".form-submit");
const formName = document.querySelector("#name");
const formMail = document.querySelector("#email");
const formMessage = document.querySelector("#message");
const errorShow = document.querySelector("#show-errors")



// Öppnar/stänger hamburgarmenyn när man trycker på knappen
menuButton.addEventListener("click", function(){
    menuLinks.classList.toggle("open")
})


/**
 * Bildspelet
*/
let nowPic = 0;
// Ett objek med array med allt till bildspelet
const pictures = [
    {
        src: "images/work_beehive3.jpg",
        alt: "Biodlaren Sebastian tittar på en honungskaka"
    },
    {
        src: "images/honeycomb5.jpg",
        alt: "Biodlaren Sebastian tittar på en honungskaka"
    },
    {
        src: "images/passionflower.jpg",
        alt: "Bi letar mat på en passionsblomma"
    },
    {
        src: "images/honeycomb4.jpg",
        alt: "Biodlaren jobbar med honungskakorna"
    },
    {
        src: "images/flower2.jpg",
        alt: "Ett bi på en ringblomma"
    },
    {
        src: "images/work_write.jpg",
        alt: "Biodlare som antecknar vid bikuporna"
    },
    {
        src: "images/honeycomb3.jpg",
        alt: "En honungskaka med bin på"
    },
    {
        src: "images/work_beehive1.jpg",
        alt: "Biodlare jobbar bland bina"
    },
    {
        src: "images/honeycomb1.jpg",
        alt: "En honungskaka på en bikupa med bin på"
    },
    {
        src: "images/bees.jpg",
        alt: "Bin som flyger in i en bikupa"
    }
]

// Om man trycker på nästa-knappen i bildspelet
function nextPicture () {
console.log("Next")
    if (nowPic === pictures.length -1) {
        // Om arryen är på sista bilden, byt till första bilden igen
        nowPic = 0;
    } else {
        // Om ej, ta nästkommande bild
        nowPic++;
    }

    showNextPicture(nowPic);
}

// Om man trycker på knappen förgående i bildspelet
function previousPicture () {
console.log("prev")
    if (nowPic === 0 ) {
        // Om arrayen är på första bilden, byt till den sista bilden i arrayen
        nowPic = pictures.length -1;
    } else {
        // Om ej, byt till den förra bilden
        nowPic--;
    }

    showNextPicture(nowPic);

}

// Skriver ut till skärmen
function showNextPicture (nowPic) {
console.log("skriver ut")
    // Skriver ut bild och alt-text till skärmen
    slidePic.src = pictures[nowPic].src;
    slidePic.alt = pictures[nowPic].alt;

    /* Räknar och skriver ut vilken bild det är som visas,
    och hur många som finns totalt */
    slideCounter.innerHTML = `${nowPic+1}/${pictures.length}`;

}

/* Lyssnar på sidoknapparna till bildspelet, men bara ifall knapparna
finns någonstanns på den öppna sidan */
if (nextButton && prevButton) {
    nextButton.addEventListener("click", nextPicture);
    prevButton.addEventListener("click", previousPicture);
}



/**
* Formuläret
*/
//Array som används för eventuella felmeddelanden
let errors = [];

function validateForm (event) { 
    console.log("ValidateForm")
    //Formuläret skickas ej
    event.preventDefault();

    //Tömmer arrayen
    errors = [];
    
    //Variabel som håller koll på eventuella fel
    let validate = true;

    //Läser in värden från formulären samt tar bort eventuella mellanslag
    const name = formName.value.trim();
    const mail = formMail.value.trim();
    const message = formMessage.value.trim();

    //Läser om de har skrivit in något namn
    if (name === ""){
        errors.push("Du måste ange ditt namn");
        validate = false;
    }
    //Läser om de har skrivit in någon e-postadress
    if (mail === ""){
        errors.push("Du måste ange din e-postadress");
        validate = false;
    }
    //Läser om de har skrivit något meddelande
    if (message === ""){
        errors.push("Du måste skriva ett meddelande");
        validate = false;
    }

    console.log(errors)
    showErrors(errors);
}


function showErrors (errors, ){
    console.log("showErrors");
   
    errorShow.innerHTML = "";
  

    if (errors.length > 0 ) {
        for(let i = 0; i < errors.length; i++){
            const errorsLi = document.createElement("li");
            errorsLi.innerHTML = errors[i];
            errorShow.appendChild(errorsLi);
        }
    }
}




/* Lyssnar på skicka-knappen, men bara ifall det finns den knappen
på just den öppna sidan */
if (form) {
    form.addEventListener("submit", validateForm);
}

