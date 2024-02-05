"use strict";

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.gallery img');
  const overlay = document.getElementById('overlay');

  function showImage(index) {
    currentImageIndex = index; // Aktualisiert den aktuellen Bildindex
    const imageSrc = images[index].src;
    
    // Erstellt oder aktualisiert das Vollbild-Bild
    let fullScreenImage = overlay.querySelector('.fullscreen-image');
    if (!fullScreenImage) {
      fullScreenImage = document.createElement('img');
      fullScreenImage.classList.add('fullscreen-image');
      overlay.appendChild(fullScreenImage);
    }
    fullScreenImage.src = imageSrc;

    // Zeigt den Overlay an
    overlay.style.display = 'flex';
  }

  images.forEach((image, index) => {
    image.addEventListener('click', () => showImage(index));
  });

  document.getElementById('prev').addEventListener('click', (e) => {
    e.stopPropagation(); // Verhindert, dass das Overlay-Click-Event ausgelöst wird
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(newIndex);
  });

  document.getElementById('next').addEventListener('click', (e) => {
    e.stopPropagation(); // Verhindert, dass das Overlay-Click-Event ausgelöst wird
    const newIndex = (currentImageIndex + 1) % images.length;
    showImage(newIndex);
  });

  overlay.addEventListener('click', function(e) {
    this.style.display = 'none'; // Versteckt den Overlay
  });
});


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    }

    if (i >= revealElements.length - 2) {
      if (
        revealElements[i].getBoundingClientRect().top <
        200 + window.innerHeight / 1.2
      ) {
        revealElements[i].classList.add("revealed");
      }
    }
  }
};

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay =
    revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
    currentSlide = n;
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  }

  showSlide(currentSlide);

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
});



//Hier werden die Buttons deklariert!
const allProjects = document.querySelectorAll(".project-card");
const buttonAlle = document.querySelector("#f-alle");
const buttonProcessing = document.querySelector("#f-CC");
const buttonWeb = document.querySelector("#f-webdesign");
const buttonMS = document.querySelector("#f-MS");
const buttonIK = document.querySelector("#f-IK");
const buttonCI = document.querySelector("#f-CI");
const buttonIED = document.querySelector("#f-IED");
const buttonBlend = document.querySelector("#f-Blend")

console.log(allProjects);

// Filter funktion
function filterProjects(category) {
  allProjects.forEach((project) => {
    if (category === "Alle") {
      project.classList.remove("inactive");
    } else if (project.classList.contains(category)) {
      project.classList.remove("inactive");
    } else {
      project.classList.add("inactive");
    }
  });
}

// Event Listener. Hier wird angegeben, was gefiltert wird nach den ID's der jeweiligen Kategorie
buttonAlle.addEventListener("click", () => {
  filterProjects("Alle");
});

buttonProcessing.addEventListener("click", () => {
  filterProjects("CC");
});

buttonWeb.addEventListener("click", () => {
  filterProjects("webdesign");
});
buttonMS.addEventListener("click", () => {
  filterProjects("MS");
});
buttonIK.addEventListener("click", () => {
  filterProjects("IK");
});
buttonCI.addEventListener("click", () => {
  filterProjects("CI");
});
buttonIED.addEventListener("click", () => {
  filterProjects("IED");
});
buttonBlend.addEventListener("click", () => {
  filterProjects("Blender");
}); 

/*
const allProjects = document.querySelectorAll(".project-card");
const filterButtons = document.querySelectorAll(".filter ul li");

console.log(allProjects);

// Filter Funktion
function filterProjects(category) {
  allProjects.forEach((project) => {
    if (category === "Alle") {
      project.classList.remove("inactive");
    } else if (project.classList.contains(category)) {
      project.classList.remove("inactive");
    } else {
      project.classList.add("inactive");
    }
  });
}

// Event Listener für Filter Buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Entferne zuerst die 'active'-Klasse von allen Buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Füge die 'active'-Klasse nur zum geklickten Button hinzu
    button.classList.add("active");

    // Rufe die Filterfunktion auf und übergebe die Kategorie des Buttons
    filterProjects(button.id.slice(2)); // Entferne das "f-" Präfix aus der ID
  });
});*/

