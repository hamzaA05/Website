// About-Cards beim Scrollen einblenden
const aboutCards = document.querySelectorAll('.about-card');

const aboutObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      aboutObserver.unobserve(entry.target); // Nur 1x zeigen
    }
  });
}, { threshold: 0.2 });

aboutCards.forEach(card => aboutObserver.observe(card));

// Scroll Fade-in Animation mit IntersectionObserver
const sections = document.querySelectorAll('section:not(#hero)');

const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Nur einmal animieren
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

// Skillbar-Füllung animieren beim Scroll
const skillBars = document.querySelectorAll(".skill-bar");

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector(".bar-fill");
      const percent = entry.target.getAttribute("data-percent");
      fill.style.width = percent + "%";
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// --- Typewriter-Effekt ---
const texts = [
  "Informatiker EFZ",
  "Berufsmatura Wirtschaft",
  "Cool :)",
  "Motiviert & Zielstrebig",
  "Verantwortungsbewusst & Teamorientiert"
];

let currentText = 0;
let charIndex = 0;
const textElement = document.getElementById("typewriter-text");

function type() {
  if (charIndex <= texts[currentText].length) {
    textElement.textContent = texts[currentText].slice(0, charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      erase();
    }, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = texts[currentText].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    currentText = (currentText + 1) % texts.length;
    setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Timeline Items beim Scroll einblenden
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

timelineItems.forEach(item => timelineObserver.observe(item));

