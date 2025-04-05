const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

choiceBtns.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();

    playerChoiceDisplay.textContent = `${playerChoice} ${getEmoji(playerChoice)}`;
    computerChoiceDisplay.textContent = `${computerChoice} ${getEmoji(computerChoice)}`;

    const result = getResult(playerChoice, computerChoice);
    resultDisplay.textContent = result;

    updateScore(result);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(player, computer) {
  if (player === computer) return "Draw!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return "You Win!";
  }
  return "You Lose!";
}

function updateScore(result) {
  if (result === "You Win!") playerScore++;
  if (result === "You Lose!") computerScore++;
}

function getEmoji(choice) {
  switch (choice) {
    case 'rock': return '✊';
    case 'paper': return '✋';
    case 'scissors': return '✌';
    default: return '';
  }
}
