'use strict'
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber)
let score = 20;
let highScore = 0;

const numberDisplay = document.querySelector('.number');
const messageDisplay = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highScoreDisplay = document.querySelector('.highscore');
const guessInput = document.querySelector('.g'); 
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const body = document.querySelector('body');


function displayMessage(msg) {
    messageDisplay.textContent = msg;
}

checkBtn.addEventListener('click', function () {
    const guess = Number(guessInput.value);

    if (!guess) {
        displayMessage(' No number!');
    } else if (guess === randomNumber) {
        displayMessage(' Correct Number!');
        numberDisplay.textContent = randomNumber;
        body.style.backgroundColor = 'green';
        if (score > highScore) {
            highScore = score;
            highScoreDisplay.textContent = highScore;
        }
        checkBtn.disabled = true;
    } else {
        if (score > 1) {
            displayMessage(guess < randomNumber ? ' Too low!' : ' Too high!');
            score--;
            scoreDisplay.textContent = score;
        } else {
            displayMessage(' You lost the game!');
            scoreDisplay.textContent = 0;
            body.style.backgroundColor = 'red';
            numberDisplay.textContent = randomNumber;
            checkBtn.disabled = true;
        }
    }
});

againBtn.addEventListener('click', function () {
    score = 20;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    scoreDisplay.textContent = score;
    numberDisplay.textContent = '?';
    guessInput.value = '';
    displayMessage('Start guessing...');
    body.style.backgroundColor = '#222';
    checkBtn.disabled = false;
});