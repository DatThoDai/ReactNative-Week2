// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)

// Initial values
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Select the necessary DOM elements
const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const guessElement = document.querySelector('.guess');
const againButton = document.querySelector('.again');

// Event listener for the "Again!" button
againButton.addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  messageElement.textContent = 'Start guessing...';
  numberElement.textContent = '?';
  scoreElement.textContent = score;
  guessElement.value = '';

  document.body.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
