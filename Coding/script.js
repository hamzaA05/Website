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


