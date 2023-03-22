// Get elements from the DOM
const cookie = document.getElementById('cookie');
const clicks = document.getElementById('clicks');

// Set up initial click count
let clickCount = 0;

// Add event listener to the cookie image
cookie.addEventListener('click', function() {
  clickCount++;
  clicks.textContent = `Clicks: ${clickCount}`;
});
