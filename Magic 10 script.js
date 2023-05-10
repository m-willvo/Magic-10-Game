'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!🎉🎉';

//document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//Generate random number for math equation

const randomNumber = Math.trunc(Math.random() * 10) + 1;

console.log(randomNumber);

//to show random number in challenge box
document.querySelector('.number').textContent = `? + ${randomNumber} = 10`;

let score = 10;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const result = guess + randomNumber;
  console.log(result);
  //When there is no imput
  if (!guess) {
    document.querySelector('.message').textContent =
      '🚫Did you forget to enter a number?😢';
    //When player is wrong
  } else if (result !== 10) {
    document.querySelector('.message').textContent = 'OOPs.🤭 Try again!';
    score--;
    document.querySelector('.score').textContent = score;
    //When player is right
  } else if (result === 10) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Correct. Aria, you are cool!🎉🎉';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#60b347';
      // When player is wrong
    } else if (result !== 10) {
      document.querySelector('.message').textContent = 'OOPs.🤭 Try again!';
    }
  }
});

//When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high!';
//       score--; // same as score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lose!';
//       document.querySelector('.score').textContent = 0;
//     }
//     //When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low!';
//       score--; // same as score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lose!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
