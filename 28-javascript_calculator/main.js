const displayInput = document.querySelector(".big-display");
const miniDisplay = document.querySelector(".mini-display");

const clearBtn = document.querySelector(".clear");
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

function getMiniDisplay(updateMiniDisplay) {
  miniDisplay.value = updateMiniDisplay;
}

clearBtn.addEventListener("click", function (e) {
  // console.log(e.target.textContent);
  // getMiniDisplay(e.target.textContent);
  displayInput.value = 0;
  currentNum = "";
});

equalBtn.addEventListener("click", function (e) {
  let result;
  result = computeResult(prevNum, currentNum, operation);
  displayInput.value = result;
});

numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", function (e) {
    currentNum += e.target.textContent;
    displayInput.value = currentNum;
    getMiniDisplay(e.target.textContent);
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
