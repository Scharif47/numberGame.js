'use strict';

// set secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


// read input value
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    document.querySelector('.message').textContent =
      '⚠ Please use a number greater than 0!';
    // Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎊 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score > highscore){
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // Input too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '😅 Your Guess has been too high.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😂 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // Input too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '😅 Your Guess has been too low.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😂 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Play again
document.querySelector(".again").addEventListener("click", function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});