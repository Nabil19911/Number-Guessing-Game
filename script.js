"use strict";
//button
// - check
//      -function that check the click event
//inputs
// -guess
//      -store the input
//Message box
// -number
//      -Store random value
//          -show when the input value is similar
// -message
//      -out message whether the guess input is highr or lower
// -score
//      -update the value
// -highscore
//      -store the highest score
// Button
const btn = document.querySelector(".check");
const tryAgain = document.querySelector(".again");
// Input
const input = document.querySelector(".guess");
// Guessed Number display center
const guessNumber = document.querySelector(".number");
// Messages
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const body = document.querySelector("body");

// function to check the number
// variables
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let currentHighscore = 0;

const displayMessage = (msg) => (message.textContent = msg);

// EventListener
btn.addEventListener("click", () => {
  const userGuess = Number(input.value);
  if (!userGuess) {
    displayMessage("Number beween 1 to 20");
  } else if (currentScore < 1) {
    displayMessage("You have lost all the points");
    body.style.backgroundColor = "red";
  } else if (randomNumber !== userGuess) {
    currentScore--;
    displayMessage(randomNumber > userGuess ? "Too Low" : "Too High");
    score.textContent = currentScore;
  } else {
    displayMessage("You have guessed it");
    guessNumber.textContent = randomNumber;
    body.style.backgroundColor = "green";
    input.disabled = true;
    currentHighscore = currentScore;
    // highscore.textContent = currentHighscore;
  }
});

tryAgain.addEventListener("click", () => {
  if (currentScore >= Number(highscore.innerHTML)) {
    highscore.textContent = currentHighscore;
  }
  currentScore = 20;
  displayMessage("Start guessing...");
  guessNumber.textContent = "?";
  score.textContent = currentScore;
  input.value = "";
  input.disabled = false;
  body.style.backgroundColor = "#222";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
});
