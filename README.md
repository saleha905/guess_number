# Guess Number Game

A simple number-guessing game built with HTML, CSS, and JavaScript. The player tries to guess a randomly selected number, and the game responds with hints (too high, too low, or correct) until the correct guess is made.

## Features
- Generates a random number on page load  
- Takes user input for guesses  
- Provides feedback for each guess (too high, too low, or correct)  
- Clean and minimal interface  
- Lightweight, no external dependencies  

## How It Works
When the page loads, the script picks a random target number.  
Each time the user submits a guess via the input form:  
- If the guess is too high, the game tells the user to guess lower  
- If the guess is too low, the game tells the user to guess higher  
- If the guess is correct, the game displays a success message  

## How to Run
1. Clone the repository:  
   ```bash
   git clone https://github.com/saleha905/guess_number.git
2. Open index.html in your browser
3. Enter a number and submit your guess — follow the hints until you guess the correct number
Project Structure
guess_number/
│── index.html  
│── style.css  
└── script.js
What You’ll Learn

Handling user input in JavaScript

Conditional logic and branching (if-else)

Updating the UI based on game state

Basic DOM manipulation

Possible Enhancements

Add a maximum number of attempts and end game if exceeded (e.g. 5 or 10 tries)

Display previous guesses so player can track history

Add a reset/restart button

Add animations or sound feedback for correct / incorrect guesses

Make UI responsive and mobile friendly
