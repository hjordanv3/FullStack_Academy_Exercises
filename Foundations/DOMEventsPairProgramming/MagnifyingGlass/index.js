// Get elements from the DOM
const text = document.getElementById('text');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

// Set initial font size
let fontSize = 24;

// Add event listener to the increase button
increaseButton.addEventListener('click', function() {
  if (fontSize < 100) {
    fontSize += 4;
    text.style.fontSize = `${fontSize}px`;
  }
});

// Add event listener to the decrease button
decreaseButton.addEventListener('click', function() {
  if (fontSize > 1) {
    fontSize -= 4;
    text.style.fontSize = `${fontSize}px`;
  }
});