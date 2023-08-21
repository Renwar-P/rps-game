// defining the functions

const options = ["rock",
    "paper",
    "scissors"];
const buttons = document.querySelectorAll('.options button');
const resultElement = document.querySelector('.result');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const reloadButton = document.getElementById('reload');



// initialize player and computer scores
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

        if (result === "You win!") {
            playerScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }

        updateScores();


        //check if the game is over

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

    reloadButton.classList.remove('hidden');
};




