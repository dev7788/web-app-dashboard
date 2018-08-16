// Global variables
const alertDot = document.getElementById('header-right-dot');
const alert = document.getElementById('alert');
const alertButton = document.getElementById('alert-button');

// Hides the alert dot and message when button is clicked
alertButton.addEventListener('click', (e) => {
  alertDot.style.visibility = 'hidden';
  alertDot.style.opacity = '0';
  alert.style.visibility = 'hidden';
  alert.style.opacity = '0';
});
