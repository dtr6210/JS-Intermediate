// Question 3:

// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:
// https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array

const animals = ["Tiger", "Giraffe"];
console.log(animals);

// a) Add 2 new values to the end

animals.push("Cat", "Dog");
console.log(animals);

// b) Add 2 new values to the beginning

animals.unshift("Rabbit", "Bear");
console.log(animals);

// c) Sort the values

animals.sort();
console.log(animals);

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue

function replaceMiddleAnimal(newValue) {
  animals.splice(2, 1, newValue);
  return animals;
}

console.log(animals);
console.log(replaceMiddleAnimal("Zebra"));

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case

function findMatchingAnimals(beginsWith) {
  let animalBegins = [];
  for (animal of animals) {
    if (animal.startsWith(beginsWith)) {
      animalBegins.push(animal);
    }
  }
  return animalBegins;
}

console.log(findMatchingAnimals("C"));
console.log(findMatchingAnimals("Z"));
