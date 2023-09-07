function getComputerSelector() {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.round(Math.random() * (weapons.length - 1));

  return weapons[randomIndex];
}

const playerSelection = prompt("Enter your weapon: ");
const computerSelection = getComputerSelector();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a Tie!";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    return "You win!";
  } else {
    return "Computer Wins!";
  }
}

console.log(playerSelection);
console.log(getComputerSelector());
console.log(playRound(playerSelection, computerSelection));
