//Challenge 1
//Write a function which takes two arguments - a string and a positive integer.
//Return a string with passed 'name' and 'age' arguments.

function sayHi(name, age) {
  // Use templete literals with string interpolation.
  return `Hi. My name is ${name} and I'm ${age} years old`;
}

console.log(sayHi('Bunny', 1));
