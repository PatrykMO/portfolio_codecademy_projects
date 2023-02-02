let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// The purpose of this function is to be called each round to determine which guess is closest to the target number.
function compareGuesses(humanGuess, computerGuess, target) {
    if (Math.abs(humanGuess- target) <=  Math.abs(computerGuess - target)) {
        return true;
    } if  (Math.abs(humanGuess - target) >=  Math.abs(computerGuess - target)){
        return false;
    }
}

// The purpose of this function is to be used to correctly increase the winner’s score after each round.
function updateScore(winner) {
    if (winner == 'human') {
        humanScore++;
    } if (winner == "computer") {
        computerScore++
    } else {

    }
}

// The purpose of this function is to be used to update the round number after each round.
function advanceRound() {
    return currentRoundNumber++
}