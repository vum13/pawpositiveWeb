/**
 * Pawsitive Pet Academy - Interactive Features & Quote Calculator
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log("Pawsitive Pet Academy interface initialized.");

  // Mobile navigation menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Interactive Quote Calculator Logic
  const quoteForm = document.getElementById('quote-form');
  const quoteResult = document.getElementById('quote-result');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const serviceType = document.getElementById('service-type').value;
      const petSize = document.getElementById('pet-size').value;
      const duration = parseInt(document.getElementById('duration').value) || 1;

      // Base rate calculation
      let baseRate = 50;
      if (serviceType === 'training') baseRate = 75;
      if (serviceType === 'grooming') baseRate = 60;
      if (serviceType === 'daycare') baseRate = 40;

      // Pet size adjustment
      let sizeMultiplier = 1;
      if (petSize === 'medium') sizeMultiplier = 1.25;
      if (petSize === 'large') sizeMultiplier = 1.5;

      const totalCost = (baseRate * sizeMultiplier * duration).toFixed(2);

      quoteResult.innerHTML = `Estimated Total: $${totalCost} for ${duration} session(s).`;
    });
  }

  // Registration Form Validation
  const registrationForm = document.getElementById('registration-form');
  if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
      const ownerName = document.getElementById('owner-name').value.trim();
      const petName = document.getElementById('pet-name').value.trim();

      if (!ownerName || !petName) {
        e.preventDefault();
        alert('Please complete all required owner and pet fields before submitting.');
      }
    });
  }
});