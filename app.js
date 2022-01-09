function getAiChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

function getChoiceUp() {
  playerChoice = event.target.id;
  aiChoice = getAiChoice();
  aiChoiceUp = aiChoice.toUpperCase();
  playerChoiceUp = playerChoice.toUpperCase();
}

function compare() {
  if (playerChoiceUp == aiChoiceUp) {
    declatration = document.getElementById("declaration").textContent =
      "its a tie";
  } else if (
    (playerChoiceUp == "ROCK" && aiChoiceUp == "PAPER") ||
    (playerChoiceUp == "PAPER" && aiChoiceUp == "SCISSORS") ||
    (playerChoiceUp == "SCISSORS" && aiChoiceUp == "ROCK")
  ) {
    ++aiScore;
    declatration = document.getElementById("declaration").textContent =
      "Computer Won!";
  } else {
    ++playerScore;
    declatration = document.getElementById("declaration").textContent =
      "You Won!";
  }
}

function playRound() {
  getChoiceUp();
  compare();
}

aiScore = 0;
playerScore = 0;

function game() {
  playRound();
  // if (playerScore > aiScore) {
  //   alert(`You won the game!
  //       Player score: ${playerScore}
  //       Computer score: ${aiScore}`);
  // } else if (playerScore < aiScore) {
  //   alert(`The computer won the game!
  //       Player score: ${playerScore}
  //       Computer score: ${aiScore}`);
  // } else {
  //   alert(`Its a tie!
  //     Player score: ${playerScore}
  //     Computer score: ${aiScore}`);
  // }
  // continuePlay = prompt("want to continue? yes/no");
  // if (continuePlay == "yes") {
  //   game();
  // } else {
  //   alert(`Game over!
  //     Player score: ${playerScore}
  //     Computer score: ${aiScore}`);
  // }
}

buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    game(event.target.id);
    playerSc = document.getElementById(
      "player-sc"
    ).textContent = `${playerScore}`;
    computerSc = document.getElementById(
      "computer-sc"
    ).textContent = `${aiScore}`;
    //
  })
);

playerImage = document.getElementById("player-choice-img").src = "rock.png";
console.log(playerImage);
