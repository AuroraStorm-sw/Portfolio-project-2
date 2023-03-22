let warriorScore = 0;
let computerScore = 0;

let userHand;

const startBtn = document.getElementById("start");

const introScreen = document.querySelector(".intro-screen");
const matchScreen = document.querySelector(".playfield");

const options = document.querySelectorAll(".options button");
const warriorHand = document.querySelector(".warrior-hand");
const computerHand = document.querySelector(".computer-hand");

const playerScores = document.querySelector('.warrior-score p');
const computerScores = document.querySelector('.computer-score p');

const winner = document.querySelector('.winner');

startBtn.addEventListener('click', function() {
  startGame();
  console.log('Start button is clicked');
});

//**Function that adds the hide class to the intro screen and removes the hide class
//* from the match screen

function startGame() {

  console.log('game has begun');

  introScreen.classList.add('hide');
  matchScreen.classList.remove('hide');

  playMatch();
};

function playMatch() {

  const computerOptions = ['shield', 'bow', 'sword'];

  options.forEach(option => {
    option.addEventListener('click', function() {
      const computerNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[computerNumber];

      console.log(computerChoice);

      /**Using 'else if' as a way to decide the players choice was inspired from 
      * https://github.com/kpsdev1 / https://github.com/kpsdev1/Rock-Paper-Scissors/blob/main/assets/js/script.js
      * I found this while searching for a tutorial/ideas for how to solve picking out what the user chose
      */

      if (this.getAttribute('data-type') === 'shield') userHand = 'shield';
      else if (this.getAttribute('data-type') === 'bow') userHand = 'bow';
      else userHand = 'sword';

      console.log(userHand);
    });
  });
}

function decideWinner() {
  
  if () {
    
  } else {
    
  }
  return result;
}
