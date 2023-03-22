let warriorScore = 0;
let computerScore = 0;

let userPick;
let computerPick;

const startBtn = document.getElementById("start");

const introScreen = document.querySelector(".intro-screen");
const matchScreen = document.querySelector(".playfield");

const options = document.querySelectorAll(".options button");
const warriorHand = document.getElementById("warrior-hand");
const computerHand = document.getElementById("computer-hand");

const winner = document.getElementById('winner');

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

      /**Using 'else if' as a way to decide the player and computer choices was inspired from 
      * https://github.com/kpsdev1 / https://github.com/kpsdev1/Rock-Paper-Scissors/blob/main/assets/js/script.js
      * I found this while searching for a tutorial/ideas for how to solve picking out what the user choice
      */

  options.forEach(option => {
    option.addEventListener('click', function() {
              
      let pick = Math.floor(Math.random() * computerOptions.length);
      if(pick === 0) {
          computerPick = 'shield';
      } else if(pick === 1) {
          computerPick = 'bow';
      } else {
          computerPick = 'sword';
      }

      if (this.getAttribute('data-choice') === 'shield') userPick = 'shield';
      else if (this.getAttribute('data-choice') === 'bow') userPick = 'bow';
      else userPick = 'sword';

      decideWinner();
      updateImg();
      updateScore();
    
    });

  });
}

function decideWinner() {
  
  if(userPick === 'shield' && computerPick === 'bow') {
    winner.innerHTML = 'Warrior wins!';
    warriorScore++;
      } else if (userPick === 'shield' && computerPick === 'sword') {
        winner.innerHTML = 'Opponent wins!';
        computerScore++;
      } else if (userPick === 'bow' && computerPick === 'shield'){
        winner.innerHTML = 'Warrior wins!';
        warriorScore++;
      } else if (userPick === 'bow' && computerPick === 'sword'){
        winner.innerHTML = 'Opponent wins!';
        computerScore++;
      } else if (userPick === 'sword' && computerPick === 'shield') {
        winner.innerHTML = 'Opponent wins!';
        computerScore++;
      } else if (userPick === 'sword' && computerPick === 'bow') {
        winner.innerHTML = 'Warrior wins!';
        warriorScore++;
      } else {
        winner.innerHTML = "It's a tie!";
      }
}

function updateImg() {
    if(userPick === 'shield') {
        warriorHand.src = `assets/img/shield.jpg`;
    } else if(userPick === 'bow') {
        warriorHand.src = `assets/img/bow.jpg`;
    } else {
        warriorHand.src = `assets/img/sword.jpg`;
    }
    if(computerHand === 'shield') {
        computerHand.src = `assets/img/shield.jpg`;
    } else if(computerHand === 'paper') {
        computerHand.src = `assets/img/bow.jpg`;
    } else {
        computerHand.src = `assets/img/sword.jpg`;
    }

}

function updateScore() {
    const warriorPoint = document.getElementById('warrior-score'); 
    const computerPoint = document.getElementById('computer-score'); 
    warriorPoint.textContent = warriorScore; 
    computerPoint.textContent = computerScore;
}

