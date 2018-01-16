// Challenge 1
// Write a function which takes two arguments - a string and a positive integer.
// Return a string with passed 'name' and 'age' arguments.

function sayHi(name, age) {
  // Use templete literals with string interpolation.
  return `Hi. My name is ${name} and I'm ${age} years old`;
}

console.log(sayHi('Dziunia', 11));

///////////////////////////////////////////////////////////////////////////////
//Challenge 2
// Write a function which returns a corrected sencence with
// uppercased first letter and a period at the end.

function correctSentence(text) {
  // Find first letter in the sentence and turn it to uppercased.
  var sentence = text.charAt(0).toUpperCase() + text.slice(1);
  var sentenceLength = text.length;
  // Find last letter of the sentence and check if it's a period.
  // If not, add period at the end.
  var lastChar = text.charAt(sentenceLength - 1);
  lastChar !== '.' ? sentence += '.' : sentence;
  // if (lastChar !== '.'){
  //     sentence += '.';
  // }
  return sentence;
}

console.log(correctSentence('once there was a kitty cat'));

///////////////////////////////////////////////////////////////////////////////

// Challenge 3
// Find and return the first word in a string
// String might contain full stops, spaces, ascii characters etc.

function firstWord(a, b) {
  // Find the first word in a given text using RegExp match() method.
  var word = a.match(/[A-Za-z']+/)[0];

  return word;
}

console.log(firstWord('... and so on ...'));

///////////////////////////////////////////////////////////////////////////////
