let warriorScore = 0;
let computerScore = 0;
const warriorPoint = document.getElementById('warrior-score'); 
const computerPoint = document.getElementById('computer-score'); 

let userPick;
let computerPick;

const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart-game");
const quitBtn = document.getElementById("quit-game");

const introScreen = document.querySelector(".intro-screen");
const matchScreen = document.querySelector(".playfield");
const outroScreen = document.querySelector(".outro-screen");

const options = document.querySelectorAll(".options button");
const warriorHand = document.getElementById("warrior-hand");
const computerHand = document.getElementById("computer-hand");

const result = document.getElementById("result");

const winner = document.getElementById('winner');

const computerOptions = ['shield', 'bow', 'sword'];

/** 
 * 
*/

document.addEventListener("DOMContentLoaded", function () {
  startBtn.addEventListener('click', startGame);
  restartBtn.addEventListener('click', restartGame);
})


//**Function that adds the hide class to the intro screen and removes the hide class
//* from the match screen

function startGame() {

  introScreen.classList.add('hide');
  matchScreen.classList.remove('hide');

  playMatch();
};

/**
 * 
 */
function playMatch() {

 
      /**Using 'else if' as a way to decide the player and computer choices was inspired from 
      * https://github.com/kpsdev1 / https://github.com/kpsdev1/Rock-Paper-Scissors/blob/main/assets/js/script.js
      * I found this while searching for a tutorial/ideas for how to solve picking out what the user choice
      */

      options.forEach(option => {
      option.addEventListener('click', function() {
      
      const computerOption = () => {
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
    }

      computerOption();
      decideWinner();
      updateImg();
      updateScore();
      gameOver();
    });

  });
}

/**
 * 
 */

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

/**
 * 
 */

function updateImg() {
    if(userPick === 'shield') {
        warriorHand.src = `assets/img/shield.jpg`;
    } else if(userPick === 'bow') {
        warriorHand.src = `assets/img/bow.jpg`;
    } else {
        warriorHand.src = `assets/img/sword.jpg`;
    }
    if(computerPick === 'shield') {
        computerHand.src = `assets/img/shield.jpg`;
    } else if(computerPick === 'bow') {
        computerHand.src = `assets/img/bow.jpg`;
    } else {
        computerHand.src = `assets/img/sword.jpg`;
    }

}

/**
 * 
 */

function updateScore() {
    warriorPoint.innerHTML = warriorScore; 
    computerPoint.innerHTML = computerScore;
}

/**
 * 
 */

function gameOver() {
    if(warriorScore === 5) {
        matchScreen.classList.add('hide');
        outroScreen.classList.remove('hide');
        result.textContent = "You won the battle!"
        
    }
    if(computerScore === 5) {
        matchScreen.classList.add('hide');
        outroScreen.classList.remove('hide');
        result.textContent = "Oh, no! Your opponent won!"
        
    }
}

/**
 * 
 */

function restartGame() {
 
    outroScreen.classList.add('hide');
    matchScreen.classList.remove('hide');

    winner.innerHTML= "Choose your weapon!";

    computerHand.src = `assets/img/sword.jpg`;
    warriorHand.src = `assets/img/sword.jpg`;
}

