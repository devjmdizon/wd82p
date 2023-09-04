let balance = 1000;
let transaction1;
let transaction2;
let transaction3;

transaction1 = balance + 500;
transaction2 = transaction1 - 200;
transaction3 = transaction2 - 1000;

console.log(`Exercise 1: The balance is now: ${transaction3}`);

// Exercise 2

// Create three variables 'testScore1', 'testScore2', and 'testScore3' and assign them different test scores as numbers.
// Calculate the average test score of these three scores and store it in a variable called 'averageScore'.
// Round the 'averageScore' to the nearest integer using Math.round().

// Log the 'averageScore' to the console.

// Your code here

let testScore1 = 92;
let testScore2 = 85.6;
let testScore3 = 72.5;
let averageScore = Math.round((testScore1 + testScore2 + testScore3) / 3);

console.log(`Exercise 2: Average test score is: ${averageScore}`);

// Exercise 3

// Create a variable called 'temperature' and assign it a temperature value in Celsius.
// Write a conditional statement (if-else) to determine the weather condition based on the temperature:
// - If the temperature is above 30°C, log "It's hot outside!"
// - If the temperature is between 20°C and 30°C (inclusive), log "The weather is pleasant."
// - If the temperature is below 20°C, log "It's a bit chilly."

// Your code here

let temperature = 19;

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature <= 30 && temperature >= 20) {
  console.log("The weather is pleasant");
} else {
  console.log("It's a bit chilly");
}
