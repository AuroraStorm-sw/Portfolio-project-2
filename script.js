/**
 * all variables gathered in one place and used throughout the code
 */

// Node.js port for Render
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log('App listening on port' + port);

})

// score and score counting
let warriorScore = 0;
let computerScore = 0;
const warriorPoint = document.getElementById('warrior-score'); 
const computerPoint = document.getElementById('computer-score'); 

let userPick;
let computerPick;

const computerOptions = ['shield', 'bow', 'sword'];


// buttons
const startBtn = document.getElementById("start");
const quitButtons = document.getElementsByClassName("quit-button");
const restartButtons = document.getElementsByClassName("restart-button");

// the 3 main screens shown and hidden throughout the game
const introScreen = document.querySelector(".intro-screen");
const matchScreen = document.querySelector(".playfield");
const outroScreen = document.querySelector(".outro-screen");

// gameplay buttons and image display of each option
const options = document.querySelectorAll(".options button");
const warriorHand = document.getElementById("warrior-hand");
const computerHand = document.getElementById("computer-hand");

// text updates based on round winner/loser
const result = document.getElementById("result");
const winner = document.getElementById('winner');

/** 
 * event listeners are added after the DOM content has loaded to ensure everything
 * is responsive. 
 * The for loop for the restart and quit buttons is all done with help from former course student
 * Tony Albanese, who helped me understand how this works in order to get the buttons to call the 
 * same function on different parts of a webpage.
*/

document.addEventListener("DOMContentLoaded", function () {

    startBtn.addEventListener('click', startGame);
  
    for (let button of restartButtons) {
      button.addEventListener('click', restartGame);
    }
  
    for (let button of quitButtons) {
      button.addEventListener('click', quitGame);
    }
  });

/**
 * function that adds event listener for when someone clicks on one of the game buttons, followed  
 * by a Math library that randomly picks one of the three options for the computer; shield, bow, or sword. This
 * is then stored in the variable computeOption.
 * Below is an 'if else' statement that grabs the data-choice from the index.html and stores it in userPick
 * for later use when deciding winner.
 * Following is the calling of 5 functions that holds all the different game operations
 */

/**Using 'else if' as a way to decide the player and computer choices was inspired from 
* https://github.com/kpsdev1 / https://github.com/kpsdev1/Rock-Paper-Scissors/blob/main/assets/js/script.js
* I found this while searching for a tutorial/ideas for how to solve picking out how the different
* choices were to be implemented
*/

function onOptionClick(){
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
  };
    
    computerOption();
    decideWinner();
    updateImg();
    updateScore();
    gameOver();
}
/**Function that adds the hide class to the intro screen and removes the hide class 
 * from the match screen
*/
function startGame() {

  introScreen.classList.add('hide');
  matchScreen.classList.remove('hide');

  playMatch();
}

function playMatch() {

      options.forEach(option => {
      option.addEventListener('click', onOptionClick);

  });
}

/**
 * a function made up of 'else if' statements that decides which 'weapon' wins over the other and how
 * the game should behave based on what the player picks and what the computer picks.
 * each statement also updates the inner html of the h2 placed above the chosen weapons depending on who won.
 * The score is then added to by the warrorScore++ / computerScore++
 */

function decideWinner() {
  
  if(userPick === 'shield' && computerPick === 'bow') {
    winner.innerHTML = 'Warrior wins!';
    warriorScore++;
      } else if (userPick === 'shield' && computerPick === 'sword') {
        winner.innerHTML = 'Opponent wins!';
        computerScore++;
      } else if (userPick === 'bow' && computerPick === 'shield'){
        winner.innerHTML = 'Opponent wins!';
        computerScore++;
      } else if (userPick === 'bow' && computerPick === 'sword'){
        winner.innerHTML = 'Warrior wins!';
        warriorScore++;
      } else if (userPick === 'sword' && computerPick === 'shield') {
        winner.innerHTML = 'Warrior wins!';
        warriorScore++;
      } else if (userPick === 'sword' && computerPick === 'bow') {
        winner.innerHTML = 'Opponent wins!';
        computerScore++;
      } else {
        winner.innerHTML = "It's a tie!";
      }
}

/**
 * a function made up of 'if else' statements that changes the image of the weapons based on what the 
 * player and computer choses, swapping out the img source in the index.html "warrior-hand" and "computer-hand"
 * respectively.
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
 * a function that updates the scores after each round, adding the inner html value to respective 
 * score variable
 */

function updateScore() {
    warriorPoint.innerHTML = warriorScore; 
    computerPoint.innerHTML = computerScore;
    
}

/**
 * a function made up of two if statements deciding what information will be displayed depending on who
 * won, updating the h2 of the outroScreen with congratulations or commiserations.
 * it hides the matchScreen and shows the outroScreen, where the player have the option to replay the 
 * game or quit.
 */

function gameOver() {
    if(warriorScore === 5) {
        matchScreen.classList.add('hide');
        outroScreen.classList.remove('hide');
        result.textContent = "You won the battle!";
        
    }
    if(computerScore === 5) {
        matchScreen.classList.add('hide');
        outroScreen.classList.remove('hide');
        result.textContent = "Oh, no! Your opponent won!";
        
    }
}

/**
 * function to restart the game that resets the scores to 0.
 * it hides the outroScreen and brings back the matchScreen, changing the h2 back to the original text from
 * game start. It sets the images to a pair of swords.
 */

function restartGame() {

    warriorScore = 0;
    computerScore = 0;

    updateScore();

    outroScreen.classList.add('hide');
    matchScreen.classList.remove('hide');

    winner.innerHTML= "Choose your weapon!";

    computerHand.src = `assets/img/sword.jpg`;
    warriorHand.src = `assets/img/sword.jpg`;

}

/**
 * function to quit the game that resets the scores to 0.
 * it hides both the matchScreen and the outroScreen, showing the introScreen instead. It also resets
 * the images to the start up ones if the player choose so start a new game.
 */

function quitGame() {
  //Deregister your listeners here.

  options.forEach(option => {
    option.removeEventListener('click', onOptionClick);
  });

  warriorScore = 0;
  computerScore = 0;

  updateScore();
  
  outroScreen.classList.add('hide');
  matchScreen.classList.add('hide');
  introScreen.classList.remove('hide');

  computerHand.src = `assets/img/front.jpg`;
  warriorHand.src = `assets/img/front.jpg`;
}

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});