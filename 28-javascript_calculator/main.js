const displayInput = document.querySelector(".big-display");
const miniDisplay = document.querySelector(".mini-display");

const clearBtn = document.querySelector(".clear");
const clearEntryBtn = document.querySelector(".clearEntry");
const backBtn = document.querySelector(".back-btn");
const equalBtn = document.querySelector(".equals");
const numBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");
const periodBtn = document.querySelector(".period");

let currentNum = "";
let prevNum = "";
let operation = "";
let period = "";
let history = [];

function computeResult(prevNum, currentNum, operation) {
  let total;
  const prev = parseFloat(prevNum);
  const curr = parseFloat(currentNum);

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
  return total.toString();
}

function onClickBackspace() {
  displayInput.value = displayInput.value.substring(
    0,
    displayInput.value.length - 1
  );
}

function getMiniDisplay(updateMiniDisplay) {
  miniDisplay.value += updateMiniDisplay;
}

backBtn.addEventListener("click", onClickBackspace);

periodBtn.addEventListener("click", function (e) {
  if (!currentNum.includes(".")) {
    currentNum += ".";
    displayInput.value = currentNum;
  }
});

clearEntryBtn.addEventListener("click", function (e) {
  displayInput.value = 0;
  currentNum = "";
});

clearBtn.addEventListener("click", function (e) {
  displayInput.value = 0;
  miniDisplay.value = "";
  currentNum = "";
  console.clear();
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
