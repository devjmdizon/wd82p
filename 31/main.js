// THe Class syntax

class Dog{
  constructor(breed, color){
    
  }
}

function Dog(breed, color) {
  this.breed = breed;
  this.color = color;
}

function dogFactory(breed, color) {
  const bark = () => console.log("Arf arf arf!");
  return { breed, color };
}
