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


    //**Function to start the match
    function playMatch() {


        //Applying options for the computer



        options.forEach(option => {
            option.addEventListener('click', function() {

                const computerNumber = Math.floor(Math.random() * computerOptions);
                const computerChoice = computerOptions[computerNumber];

                console.log(computerChoice);
            })
        })
    };

