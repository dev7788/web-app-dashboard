// Global variables
const alert = document.getElementById('alert');
const alertButton = document.getElementById('alert-button');

// Hides the alert message when button is clicked
alertButton.addEventListener('click', (e) => {
  alert.style.display = 'none';
});
