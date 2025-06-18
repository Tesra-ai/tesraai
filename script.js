// script.js

// Smooth scroll on info section buttons (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Example: Add interactivity later like animations or modal windows
// window.addEventListener('DOMContentLoaded', () => {
//   console.log('Tesra AI website loaded');
// });
