//DOM Manipulation & events

// Select nodes in the DOM
const container = document.querySelector("#container");
const display = document.querySelector("#display");
const controls = document.querySelector("#controls");

//Create nodes in the DOM
const div = document.createElement("div");
div.classList.add("red-box");

// Appened elements in the DOM or another node;
container.appendChild(div);

// Remove Elements from the DOM
container.removeChild(div);

const div2 = document.createElement("div");
div2.style.backgroundColor = "red";
div2.style.height = "100px";

div2.setAttribute("style", "color:white;background-color:red; height: 100px;");
div2.textContent = "Hello";

container.appendChild(div2);

div2.classList.add("red-box");
div2.classList.remove("red-box");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is a text content";

container.appendChild(content);
