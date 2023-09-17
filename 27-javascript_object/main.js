// JavaScript Object

const fruits = ["apple", "orange", "banana"];

// key: value
const user = {
  name: "Joseph",
  age: 25,
  isAdmin: true,
  "likes birds": true,
};

// read values inside an object
user.name;
user.age;
user.isAdmin;
user["likes birds"];

// remove value in an object
delete user.age;

// Add values in an object
user.job = "Software Engineer";

// Change value in an object
user.age = 27;

// Property value shorthand
function makeUSer(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user2 = makeUser("John", 30);
console.log(user2);

// property names limitation
let obj = {
  return: 3,
};
console.log(obj.return);

// Loop in an object
// for (key in object){};

for (let key in user) {
  console.log(user[key]);
}

// array coach for(let x of array)

// object for(let x in object)

// Exercise 1

const user = {
  name: "John",
  username: "smith",
};

user.name = "Pete";
delete user.name;

// Exercise 2

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Exercise 3

function isEmpty(obj) {}

function sumAllSalaries(obj) {
  for (let key in obj) {
    sum += key;
  }
}
