// Get elements from the DOM
const crane = document.getElementById('crane');
const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

// Set initial position of the crane
let cranePosition = { top: 50, left: 50 };

// Add event listener to the up button
upButton.addEventListener('click', function() {
  cranePosition.top -= 10;
  crane.style.top = `${cranePosition.top}%`;
});

// Add event listener to the down button
downButton.addEventListener('click', function() {
  cranePosition.top += 10;
  crane.style.top = `${cranePosition.top}%`;
});

// Add event listener to the left button
leftButton.addEventListener('click', function() {
  cranePosition.left -= 10;
  crane.style.left = `${cranePosition.left}%`;
});

// Add event listener to the right button
rightButton.addEventListener('click', function() {
  cranePosition.left += 10;
  crane.style.left = `${cranePosition.left}%`;
});