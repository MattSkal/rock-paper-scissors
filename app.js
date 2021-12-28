function getAiChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

function getChoiceUp() {
  playerChoice = prompt("Rock, Paper, Scissors: ");
  aiChoice = getAiChoice();
  aiChoiceUp = aiChoice.toUpperCase();
  playerChoiceUp = playerChoice.toUpperCase();
}

function compare() {
  if (playerChoiceUp == aiChoiceUp) {
    alert(`${aiChoice} and ${playerChoice}
  its a tie
  Player score: ${playerScore}
  Computer score: ${aiScore}`);
  } else if (
    (playerChoiceUp == "ROCK" && aiChoiceUp == "PAPER") ||
    (playerChoiceUp == "PAPER" && aiChoiceUp == "SCISSORS") ||
    (playerChoiceUp == "SCISSORS" && aiChoiceUp == "ROCK")
  ) {
    ++aiScore;
    alert(`${aiChoice} beats ${playerChoice}
  Computer Won!
  Player score: ${playerScore}
  Computer score: ${aiScore}`);
  } else {
    ++playerScore;
    alert(`${playerChoice} beats ${aiChoice}
  You Won!
  Player score: ${playerScore}
  Computer score: ${aiScore}`);
  }
}

function playRound() {
  getChoiceUp();
  compare();
}

aiScore = 0;
playerScore = 0;

function game() {
  rounds = parseInt(
    prompt(`lets play rock, paper, scissors!
  how many rounds?`)
  );
  for (i = 0; i < rounds; i++) {
    playRound();
  }
  if (playerScore > aiScore) {
    alert(`You won the game!
      Player score: ${playerScore}
      Computer score: ${aiScore}`);
  } else if (playerScore < aiScore) {
    alert(`The computer won the game!
      Player score: ${playerScore}
      Computer score: ${aiScore}`);
  } else {
    alert(`Its a tie!
    Player score: ${playerScore}
    Computer score: ${aiScore}`);
  }
  continuePlay = prompt("want to continue? yes/no");
  if (continuePlay == "yes") {
    game();
  } else {
    alert(`Game over!
    Player score: ${playerScore}
    Computer score: ${aiScore}`);
  }
}

game();
