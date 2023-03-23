let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let remainingGuesses = 5;

function checkGuess() {
  // Get user's guess
  const guessInput = document.getElementById("guessInput");
  const guess = Number(guessInput.value);

  // Check if guess is valid
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("result").innerHTML = "Please enter a valid number.";
    return;
  }

  // Check if guess has already been made
  if (guesses.includes(guess)) {
    document.getElementById("result").innerHTML = "You already guessed that number. Try again.";
    return;
  }

  // Decrease remaining guesses and check if game is over
  remainingGuesses--;
  guesses.push(guess);
  if (guess === randomNumber) {
    document.getElementById("result").innerHTML = "You guessed it! The number was " + randomNumber + ".";
    disableGame();
    return;
  } else if (remainingGuesses === 0) {
    document.getElementById("result").innerHTML = "You ran out of guesses. The number was " + randomNumber + ".";
    disableGame();
    return;
  } else {
    document.getElementById("result").innerHTML = "Guess again. You have " + remainingGuesses + " guesses remaining.";
  }

  // Provide feedback on guess
  const difference = Math.abs(randomNumber - guess);
  let feedback;
  if (difference > 50) {
    feedback = "Ice cold!";
  } else if (difference > 25) {
    feedback = "Cold.";
  } else if (difference > 10) {
    feedback = "Warm.";
  } else if (difference > 5) {
    feedback = "Hot!";
  } else {
    feedback = "Very hot!";
  }
  document.getElementById("guessList").innerHTML += "<li>" + guess + " - " + feedback + "</li>";
}

function disableGame() {
  document.getElementById("guessInput").disabled = true;
  document.getElementsByTagName("button")[0].disabled = true;
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guesses = [];
  remainingGuesses = 5;
  document.getElementById("result").innerHTML = "";
  document.getElementById("guessList").innerHTML = "";
  document.getElementById("guessInput").disabled = false;
  document.getElementsByTagName("button")[0].disabled = false;
}

function getHint() {
  const difference = Math.abs(randomNumber - guesses[guesses.length - 1]);
  let hint;
  if (difference > 50) {
    hint = "The number is very far away from " + guesses[guesses.length - 1] + ".";
  } else if (difference > 25) {
    hint = "The number is far away from " + guesses[guesses.length - 1] + ".";
  } else if (difference > 10) {
    hint = "The number is close to " + guesses[guesses.length - 1] + ".";
  } else if (difference > 5) {
    hint = "The number is very close to " + guesses[guesses.length - 1] + ".";
  } else {
    hint = "You are almost there!";
  }
  document.getElementById("result").innerHTML = hint;
}