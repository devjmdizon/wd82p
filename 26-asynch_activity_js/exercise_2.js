// Problem 2: Factorial of a Number

const number = parseInt(prompt("Enter Number: "));
console.log("The Factorial of " + number + " is: ", factorial(number));

function factorial(num) {
  for (let fact = num - 1; fact > 1; fact--) {
    num = fact * num;
  }
  return num;
}
