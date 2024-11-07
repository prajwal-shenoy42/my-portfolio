// Get elements to animate
const fadeElements = document.querySelectorAll('.fade-in');
const slideElements = document.querySelectorAll('.slide-in');
const scaleElements = document.querySelectorAll('.scale-up');

// Function to check visibility
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Animate elements on scroll
window.addEventListener('scroll', () => {
  fadeElements.forEach((element) => {
    if (isElementVisible(element)) {
      element.classList.add('visible');
    }
  });

  slideElements.forEach((element) => {
    if (isElementVisible(element)) {
      element.classList.add('visible');
    }
  });

  scaleElements.forEach((element) => {
    if (isElementVisible(element)) {
      element.classList.add('visible');
    }
  });
});