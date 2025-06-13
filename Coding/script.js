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
