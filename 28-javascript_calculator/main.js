const displayInput = document.querySelector(".big-display");
const miniDisplay = document.querySelector(".mini-display");

const clearBtn = document.querySelector(".clear");
const clearEntryBtn = document.querySelector(".clearEntry");
const backBtn = document.querySelector(".back-btn");
const equalBtn = document.querySelector(".equals");
const numBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");

let currentNum = "";
let prevNum = "";
let operation = "";
let history = [];

function computeResult(prevNum, currentNum, operation) {
  let total;
  const prev = parseInt(prevNum);
  const curr = parseInt(currentNum);

  switch (operation) {
    case "+":
      total = prev + curr;
      break;
    case "-":
      total = prev - curr;
      break;
    case "*":
      total = prev * curr;
      break;
    case "/":
      total = prev / curr;
      break;
    default:
      return "";
  }
  return total;
}

function onClickBackspace() {
  displayInput.value = displayInput.value.substring(
    0,
    displayInput.value.length - 1
  );
}

backBtn.addEventListener("click", onClickBackspace);

function getMiniDisplay(updateMiniDisplay) {
  miniDisplay.value += updateMiniDisplay;
}

clearEntryBtn.addEventListener("click", function (e) {
  displayInput.value = 0;
  currentNum = "";
});

clearBtn.addEventListener("click", function (e) {
  displayInput.value = 0;
  miniDisplay.value = "";
  currentNum = "";
});

equalBtn.addEventListener("click", function (e) {
  let result;
  result = computeResult(prevNum, currentNum, operation);
  displayInput.value = result;
  if (result !== 0) {
    prevNumber = result;
    miniDisplay.value = prevNumber;
  } else {
    prevNum = currentNum;
    currentNum = "";
  }
});

numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", function (e) {
    currentNum += e.target.textContent;
    displayInput.value = currentNum;
    getMiniDisplay(currentNum);
  });
});

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", function (e) {
    operation = e.target.textContent;
    prevNum = currentNum;
    currentNum = "";
    displayInput.value = currentNum;
    getMiniDisplay(operation);
  });
});
