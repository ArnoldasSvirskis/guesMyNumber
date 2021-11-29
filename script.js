'use strict';

/*
console.log(document.querySelector('.message'.textContent));

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // when no input
  if (!guess) {
    displayMessage('NO NUMBER!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when gues is wrong
  else if (guess != secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too HIGH!' : 'Too LOW!');
      score--;
      document.querySelector('.score').textContent = score;
    } else displayMessage('You lost the game!🐱‍👤');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //const guess = document.querySelector('.guess').value == '';

  const guess = (document.querySelector('.guess').value = '');
  console.log(guess);

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  displayMessage('Start guessing!');

  document.querySelector('.score').textContent = 20;

  document.querySelector('.number').textContent = '?';

  return (secretNumber = Math.trunc(Math.random() * 20) + 1), (score = 20);
});
