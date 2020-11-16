'use strict';

// ELEMENTS
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const message = document.querySelector('.message');
const secretNumber = document.querySelector('.number');
const labelScore = document.querySelector('.score');
const labelHighScore = document.querySelector('.highscore');

let randomNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;
labelScore.textContent = score;
labelHighScore.textContent = highScore;

const displayMessageScore = (text) => {
  message.textContent = text;
  score--;
  labelScore.textContent = score;
};

const gameOver = () => {
  message.textContent = '💥 You lost the game!';
  score = 0;
  labelScore.textContent = score;
  secretNumber.textContent = randomNumber;
};

const checkResult = () => {
  const guess = Number(document.querySelector('.guess').value);

  // If no guess
  if (!guess) {
    message.textContent = '⛔ I said guess!';

    // If guess is too high
  } else if (guess > randomNumber) {
    score > 1 ? displayMessageScore('📈 Too High!') : gameOver();

    // If guess is too low
  } else if (guess < randomNumber) {
    score > 1 ? displayMessageScore('📉 Too Low!') : gameOver();

    // If guess is correct
  } else if (guess === randomNumber) {
    message.textContent = '🎉 Correct Number';
    secretNumber.textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60B347';
    secretNumber.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      labelHighScore.textContent = highScore;
    }
  }
};

const playAgain = () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 100) + 1;
  labelScore.textContent = score;

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  message.textContent = 'Start guessing...';
  secretNumber.textContent = '?';
  secretNumber.style.width = '15rem';
};

btnCheck.addEventListener('click', checkResult);
btnAgain.addEventListener('click', playAgain);
