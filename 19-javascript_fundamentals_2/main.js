function getDifference(num1, num2) {
  console.log(num1 - num2);
}

getDifference(4, 3);

const subtract = (num1, num2) => num1 - num2;
console.log(subtract(5, 4));

// Function with 2 parameters (firstName, lastName)

const fullName = (firstName, lastName) =>
  "Full name of the person is: " + firstName + " " + lastName;

console.log(fullName("Carlo", "Dacuyan"));
console.log(fullName("Jose", "Rizal"));
console.log(fullName("Juan", "Pablo"));

// Exercise 1

const add7 = (num1) => parseInt(num1) + 7;
console.log(add7(prompt("Enter number to add 7 to: ")));

// Exercise 2

const multiply = (num1, num2) => parseInt(num1 * num2);
console.log(
  multiply(prompt("Enter first number: "), prompt("Enter second number: 2"))
);

// Exercise 3

function capitalize(str) {}

console.log(capitalize("micHael"));
