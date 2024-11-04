'use strict';

// ------- Variables ------- //
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let defaultScore = 20;
let highScore = 0;

// ------ Functions ------- //
const successMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const numberBoxWidth = function (boxWidth) {
  document.querySelector('.number').style.width = boxWidth;
};

const gameScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const numberBox = function (numberValue) {
  document.querySelector('.number').textContent = numberValue;
};

const guessBox = function (boxValue) {
  document.querySelector('.guess').value = boxValue;
};

// ------ CODE ------- //

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input:
  if (!guess) {
    successMessage('🚫 No number');

    // When guess is right:
  } else if (guess === secretNumber) {
    successMessage('🥳 Correct number. Whoop whoop!');
    backgroundColor('#60b347');
    numberBoxWidth('30rem');
    numberBox(secretNumber);

    if (defaultScore > highScore) {
      highScore = defaultScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong:
  } else if (guess !== secretNumber) {
    if (defaultScore > 1) {
      successMessage(guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too Low');
      defaultScore--;
      gameScore(defaultScore);
    } else {
      successMessage('You lost the game 🥲');
      gameScore(0);
    }
  }
});

// Again - restoring the game
document.querySelector('.again').addEventListener('click', function () {
  defaultScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  successMessage('Start guessing...');
  guessBox('');
  gameScore(defaultScore);
  backgroundColor('#222');
  numberBoxWidth('15rem');
  numberBox('?');
});
