let warriorScore = 0;
let computerScore = 0;

const startBtn = document.getElementById("start");

startBtn.addEventListener('click', function() {
    startGame();
    console.log('Start button is clicked');
});

//Function that adds the hide class to the intro screen and removes the hide class
// from the match screen

function startGame() {
    const introScreen = document.querySelector(".intro-screen");
    const matchScreen = document.querySelector(".playfield");

    console.log('game has begun');

    introScreen.classList.add('hide');
    matchScreen.classList.remove('hide');
};

