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
