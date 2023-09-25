// organizing-javascript

// 1. Plain old Javascript Objects

const myObject = {
  property: "Value",
  otherProperty: 77,
  "obnozious property": function () {},
};

const PlayerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "x";
const playerTwoMarker = "O";

const playerOne = {
  name: "tim",
  marker: "X",
};

const playerTwo = {
  name: "jenn",
  marker: "O",
};

// 2. Object Constructors

function Player(name, marker) {
  name;
  marker;
}

const player3 = new Player("steve", "y");
// 3. Factory Functions
// 4. Module Patterns
// 5. Classes
// 6. ES6 Modules
