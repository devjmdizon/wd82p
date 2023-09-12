// Problem 3: Reverse a String
let userString = prompt("Enter your word: ");
console.log(reverseString(userString));

function reverseString(str) {
  let newString = "";

  for (let index = str.length - 1; index >= 0; index--) {
    newString += str[index];
  }
  return newString;
}
