"use strict";

/* -------------------------------------------------
   1) SCROLL-OBSERVER: Tildel .show-animate ved scroll
--------------------------------------------------- */
const sections = document.querySelectorAll("section");

// Overvåg scroll og aktiver .show-animate på sektioner
window.onscroll = () => {
  sections.forEach((sec) => {
    const scrollDistance = window.scrollY;
    const secDistance = sec.offsetTop;

    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

/* -------------------------------------------------
   2) HOVER-EFFEKT PÅ FØRSTE SEKTION (eksempel)
--------------------------------------------------- */
const sectionOne = document.querySelector(".sec1");

if (sectionOne) {
  sectionOne.addEventListener("mouseover", function () {
    this.classList.add("scale");
  });

  sectionOne.addEventListener("mouseout", function () {
    this.classList.remove("scale");
  });
}


// NYT NYT Vanilla JS

const soundDog = new Audio("../sound/dog.wav");
const soundHorse = new Audio("../sound/horse.wav");
const soundBear = new Audio("../sound/bear.wav");

const horseCard = document.getElementById("horseCard");
const bearCard = document.getElementById("bearCard");
const dogCard = document.getElementById("dogCard");

if (horseCard) {
   horseCard.addEventListener("click", function() {
      soundHorse.play();
      horseCard.classList.toggle("flipped");
   });
}

if (bearCard) {
   bearCard.addEventListener("click", function() {
      soundBear.play();
      bearCard.classList.toggle("flipped");
   });
}

if (dogCard) {
   dogCard.addEventListener("click", function() {
      soundDog.play();
      dogCard.classList.toggle("flipped");
   });
}


// OPGAVE 6 - LYDFIL

// Opretter variabel der peger på lyden af en bil:
const soundCar = new Audio("sound/car-engine-sound.mp3");

// Henter elementerne via deres id'er:
const car1Card = document.querySelector("#car1");
const car2Card = document.querySelector("#car2");
const car3Card = document.querySelector("#car3");

// Laver en if-betingelse (if carCard is true (findes)). Dernæst click-eventlistener med funktioner:
if (car1Card) {
   car1Card.addEventListener("click", function(){
      soundCar.play();
      //play indbygget funktion i JS der starter afspilning af lyden.
      car1Card.classList.toggle("flipped");
      //classList giver adgang til alle de CSS-klasser, elementet har. toggle er en switch.
   })
}