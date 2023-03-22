    let warriorScore = 0;
    let computerScore = 0;

    const startBtn = document.getElementById("start");

    const introScreen = document.querySelector(".intro-screen");
    const matchScreen = document.querySelector(".playfield");

    const options = document.querySelectorAll(".options button");
    const warriorHand = document.querySelector(".warrior-hand");
    const computerHand = document.querySelector(".computer-hand");
 
    const computerOptions = ['shield', 'bow', 'sword'];
  
    // variables for updateScore function
    const playerScores = document.querySelector('.warrior-score p');
    const computerScores = document.querySelector('.computer-score p');
  
    // variables for comparing the score between user and computer
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
  
        // APPLYING COMPUTER OPTIONS
    
        options.forEach(option => {
          option.addEventListener('click', function() {
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
    
            //Here is where we initialize compare hands
    
            compareHands(this.textContent, computerChoice);
    
            //Update images
            warriorHand.src = `assets/img/${this.textContent}.jpg`;
            computerHand.src = `assets/img/${computerChoice}.jpg`;
          });
        });
    
    }

    function compareHands(playerChoice, computerChoice) {
        //Update 'Choose your option' text
  
        //Checking for a tie
        if (playerChoice === computerChoice) {
          winner.textContent = 'It is a tie!';
          return;
        }
  
        // Check for rock
        if (playerChoice === 'rock') {
          if (computerChoice === 'scissors') {
            winner.textContent = 'Player scores!';
            pScore++;
            updateScore();
            return;
          } else {
            winner.textContent = 'Computer scores!';
            cScore++;
            updateScore();
            return;
          }
        }
  
        //Check for paper
        if (playerChoice === 'paper') {
          if (computerChoice === 'scissors') {
            winner.textContent = 'Computer scores!';
            cScore++;
            updateScore();
            return;
          } else {
            winner.textContent = 'Player scores!';
            pScore++;
            updateScore();
            return;
          }
        }
  
        //Check for scissors
        if (playerChoice === 'scissors') {
          if (computerChoice === 'rock') {
            winner.textContent = 'Computer scores!';
            cScore++;
            updateScore();
            return;
          } else {
            winner.textContent = 'Player scores!';
            pScore++;
            updateScore();
            return;
          }
        }
  
      }


