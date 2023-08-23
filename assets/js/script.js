// defining the functions
//this code is taken from the updateScore function from <https://www.codewithfaraz.com/content/107/create-rock-paper-scissors-game-with-html-css-and-javascript#javascript-code>

const options = ["rock",
    "paper",
    "scissors"];
const buttons = document.querySelectorAll('.options button');
const resultElement = document.querySelector('.result');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const reloadButton = document.getElementById('reload');



// initialize player and computer scores
//this code is taken from <https://www.codewithfaraz.com/content/107/create-rock-paper-scissors-game-with-html-css-and-javascript#javascript-code>
let playerScore = 0;
let computerScore = 0;



// defining the button eventlistener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = options[Math.floor(Math.random() * options.length)];




        // determine the result of the round

        const result = playRound(playerChoice, computerChoice);
        displayResult(result);


        //updates the result 
        //this if function is taken from the updateScore function from <https://www.codewithfaraz.com/content/107/create-rock-paper-scissors-game-with-html-css-and-javascript#javascript-code>

        if (result === "You win!") {
            playerScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }

        updateScores();


        //check if the game is over
        //I got the code to write this from <https://stackoverflow.com/questions/73178661/rock-paper-scissors-5-round-logic>. 

        if (playerScore + computerScore === 5) {
            endGame();
        }
    });
});




// eventlistener for the reload button
reloadButton.addEventListener('click', () => {
    resetGame();
});


// function to determine the result of a round
//this function is taken from the updateScore function from <https://www.codewithfaraz.com/content/107/create-rock-paper-scissors-game-with-html-css-and-javascript#javascript-code>
const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
};


// display the result 
const displayResult = (result) => {
    resultElement.textContent = result;
};


//function to update the score
const updateScores = () => {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
};


//function to run when the game ends
const endGame = () => {
    buttons.forEach(button => {
        button.disabled = true;
    });
    // I got the code to hide a button from https://stackoverflow.com/questions/8685107/hiding-a-button-in-javascript
    reloadButton.classList.remove('hidden');
};


//function to reset the game
const resetGame = () => {
    playerScore = 0;
    computerScore = 0;

    buttons.forEach(button => {
        button.disabled = false;
    });
    // I got the code to hide a button from https://stackoverflow.com/questions/8685107/hiding-a-button-in-javascript
    resultElement.textContent = "";
    updateScores();
    reloadButton.classList.add('hidden');
};

updateScores();



