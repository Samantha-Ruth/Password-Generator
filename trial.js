
// Functions to create password criteria
// Create Uppercase Array
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const capitalLetters = alpha.map((x) => String.fromCharCode(x));
console.log(capitalLetters);

// Create Lowercase Array
const alpha2 = Array.from(Array(26)).map((e, i) => i + 97);
const smallLetters = alpha2.map((x) => String.fromCharCode(x));
console.log(smallLetters);

// Create Integer Array
const numbers = Array.from(Array(10)).map((e, i) => i + 48);
const integers = numbers.map((x) => String.fromCharCode(x));
console.log(integers);

//  Create Character Array

const character1 = Array.from(Array(6)).map((e, i) => i + 33);
const firstCharacters = character1.map((x) => String.fromCharCode(x));

/// and more characters
const character2 = Array.from(Array(6)).map((e, i) => i + 58);
const secondCharacters = character2.map((x) => String.fromCharCode(x));

// and more
const character3 = Array.from(Array(6)).map((e, i) => i + 91);
const thirdCharacters = character3.map((x) => String.fromCharCode(x));

const character4 = Array.from(Array(3)).map((e, i) => i + 123);
const fourthCharacters = character4.map((x) => String.fromCharCode(x));

const characterArray = firstCharacters.concat( secondCharacters,thirdCharacters,fourthCharacters);
console.log(characterArray);
// now have Uppercase Array, Lowercase Array, Integer Array, characterArray, 
