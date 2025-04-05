const choiceBtns = document.querySelectorAll('.choice-btn');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

choiceBtns.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    playerChoiceDisplay.textContent = `You: ${getEmoji(playerChoice)}`;
    computerChoiceDisplay.textContent = `Computer: ${getEmoji(computerChoice)}`;
    resultDisplay.textContent = `Result: ${result}`;

    updateScore(result);
    scoreDisplay.textContent = `Score: You ${playerScore} - ${computerScore} Computer`;
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
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
    case 'scissors': return '✌️';
    default: return '';
  }
}