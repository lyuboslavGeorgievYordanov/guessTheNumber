'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number ð«';
    displayMessage('No number ð«!');
    // When player guess
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'ð Correct number!';
    displayMessage('ð Correct number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        (document.querySelector('.message').textContent =
          guess > secretNumber ? 'Too high ð' : 'Too low ð')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'ð¤¦ââï¸You lost the game';
      displayMessage('ð¤¦ââï¸You lost the game');

      document.querySelector('.score').textContent = 0;
    }
  }
});
