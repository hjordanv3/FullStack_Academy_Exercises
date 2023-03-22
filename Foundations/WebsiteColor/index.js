// Get elements from the DOM
const colorInput = document.getElementById('color-input');
const colorButton = document.getElementById('color-button');
const body = document.body;

// Add event listener to the color button
colorButton.addEventListener('click', function() {
  // Get color value from input box
  const colorValue = colorInput.value.toLowerCase();

  // Check if color is valid
  if (colorValue === 'red' || colorValue === 'blue' || colorValue === 'green' || colorValue === 'yellow' || colorValue === 'purple') {
    body.style.backgroundColor = colorValue;
  }
});