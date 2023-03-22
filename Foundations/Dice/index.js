// Get elements from the DOM
const sidesInput = document.getElementById('sides-input');
const rollButton = document.getElementById('roll-button');
const result = document.getElementById('result');

// Add event listener to the roll button
rollButton.addEventListener('click', function() {
  // Get number of sides from input box
  const sides = sidesInput.value;

  // Generate random number between 1 and number of sides
  const randomNumber = Math.floor(Math.random() * sides) + 1;

  // Display random number in result element
  result.textContent = `You rolled a ${randomNumber}!`;
});