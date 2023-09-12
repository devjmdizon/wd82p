// Problem 1: Sum of Two Numbers

const fNumber = parseInt(prompt("Enter First number: "));
const sNumber = parseInt(prompt("Enter Second number: "));
console.log("The sum of the numbers is: ", addNumbers(fNumber, sNumber));
function addNumbers(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
