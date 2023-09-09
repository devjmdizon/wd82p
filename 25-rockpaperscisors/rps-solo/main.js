//Buttons
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

//Scores
const userScorelabel = document.getElementById("player-score-label");
const tieScorelabel = document.getElementById("tie-score-label");
const computerScorelabel = document.getElementById("computer-score-label");

//Turns
const playerTurnLabel = document.getElementById("player-turn-label");
const computerTurnLabel = document.getElementById("computer-turn-label");

let userScore = 0;
let tieScore = 0;
let computerScore = 0;

function playGame(playerWeapon, computerWeapon) {
  if (playerWeapon === computerWeapon) {
    return "Tie";
  } else if (
    (playerWeapon === "rock" && computerWeapon === "scissors") ||
    (playerWeapon === "paper" && computerWeapon === "rock") ||
    (playerWeapon === "scissors" && computerWeapon === "paper")
  ) {
    return "You win";
  } else {
    return "You lose";
  }
}

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => openGamescreen());

function openGamescreen() {
  document.getElementById("img-logo").remove();
  document.getElementById("start-btn").remove();

  document
    .querySelector(".game-page-container")
    .setAttribute("style", "Display: flex;");

  document
    .querySelector(".turn-section")
    .setAttribute("style", "Display: flex;");
  document
    .querySelector(".weapon-buttons")
    .setAttribute("style", "Display: flex;");
}

function getComputerWeapon() {
  const weapons = ["rock", "paper", "scissors"];
  const randomWeapon = Math.round(Math.random() * (weapons.length - 1));

  return weapons[randomWeapon];
}

rockBtn.addEventListener("click", () => gameResult(rockBtn.textContent));

paperBtn.addEventListener("click", () => gameResult(paperBtn.textContent));

scissorsBtn.addEventListener("click", () =>
  gameResult(scissorsBtn.textContent)
);

function gameResult(playerWeapon) {
  const computerSelect = getComputerWeapon();
  const playerSelect = playerWeapon.toLowerCase();

  playerTurnLabel.textContent = playerSelect;
  computerTurnLabel.textContent = computerSelect;

  const result = playGame(playerSelect, computerSelect);

  if (result === "You win") {
    userScore++;
    userScorelabel.textContent = userScore;
  } else if (result === "You lose") {
    computerScore++;
    computerScorelabel.textContent = computerScore;
  } else {
    tieScore++;
    tieScorelabel.textContent = tieScore;
  }
}
