window.alert("Welcome to Password Generator! Please pick a few criteria for your password!");

// **** CREATE ARRAYS *****

// Create Uppercase Array
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const capitalLetters = alpha.map((x) => String.fromCharCode(x));

// Create Lowercase Array
const alpha2 = Array.from(Array(26)).map((e, i) => i + 97);
const smallLetters = alpha2.map((x) => String.fromCharCode(x));

// Create Integer Array
const numbers = Array.from(Array(10)).map((e, i) => i + 48);
const integers = numbers.map((x) => String.fromCharCode(x));

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

const characters = firstCharacters.concat( secondCharacters,thirdCharacters,fourthCharacters);
// now have uppercaseArray, lowercaseArray, integerArray, and characterArray logging to the console. 
passwordArray = []

// *****CREATE SERIES OF PROMPTS *****

// // Length Prompt 
//    var passwordLength = function() {
//     var promptLength = window.prompt('How long would you like your password to be?  Please enter any length from 8 to 126 characters.'); 
//       if (promptLength === "" || promptLength=== null) {
//         window.alert("You need to provide a valid answer! Please try again.");
//         console.log(promptLength);
//   // **** NEED TO FIND OUT WHERE THIS NUMBER IS STORED AND THEN RETRIEVE IT BEFORE RUNNING IT THROUGH THE FOLLOWING CHECKER ***
//   //     if (promptLength < 8 || promptLength > 128)
//   //       window.alert("Please enter a number from 8 to 128.");
//   //       console.log(promptLength);
//   //     //use return to call it again and stop the rest of this function from running
//         return passwordLength();
//      }
//   }


// uppercase letters prompt
   //Potentially write a prompt asking if upper, lower case or both. 
var upperCase = function() {
  var promptUpper = window.prompt('Would you like to include upper case letters? Enter "Yes" or "No".');
    if (promptUpper === "" || promptUpper === null) {
      window.alert("You need to provide a valid answer! Please try again.");
    //use return to call it again and stop the rest of this function from running
     return upperCase();
   }
   promptUpper = promptUpper.toLowerCase();
    // if (promptUpper !== "yes" || promptUpper !== "no") {
    //   window.alert("You need to provide a valid answer! Please try again.");
    //   return upperCase();
    // }
    if (promptUpper=== "yes") {
      // Do I need this if I just pull from the DOM? 
      const upperCaseArray = (capitalLetters);
      // Can't I just ask it to pull the array I already designated in global? 
    window.alert("You have chosen to include capital letters in your password.");
    console.dir(promptUpper);
    }
      if (promptUpper=== "no") {
      window.alert("Your password will not have any capital letters.");
    }
}

// // lowercase letters prompt
//    //Potentially write a prompt asking if upper, lower case or both. 
//    var lowerCase = function() {
//     var promptLower = window.prompt('Would you like to include lower case letters? Enter "Yes" or "No".');
//       if (promptLower === "" || promptLower === null) {
//         window.alert("You need to provide a valid answer! Please try again.");
//       //use return to call it again and stop the rest of this function from running
//        return lowerCase();
//      }
//     // convert promptFight to all lowercase so we can check with less options
//       promptLower = promptLower.toLowerCase();
  
//       if (promptLower=== "yes") {
//         const lowerCaseArray = (smallLetters);
//         console.log(lowerCaseArray);
//         window.alert("You have chosen to include lowercase letters in your password.");
//     }
//     if (promptLower=== "no") {
//       window.alert("Your password will not have any lowercase letters.");
//     }
//   }

// // integer prompt

// var includeIntegers = function() {
//   var promptIntegers = window.prompt('Would you like to include integers? Enter "Yes" or "No".');
//     if (promptIntegers === "" || promptIntegers === null) {
//       window.alert("You need to provide a valid answer! Please try again.");
//     //use return to call it again and stop the rest of this function from running
//      return includeIntegers();
//    }
//   // convert promptFight to all lowercase so we can check with less options
//     promptIntegers = promptIntegers.toLowerCase();

//   if (promptIntegers=== "yes") {
//       const integerArray = (integers);
//       console.log(integerArray);
//       window.alert("You have chosen to include integers in your password.");
//   }
//   if (promptIntegers=== "no") {
//     window.alert("Your password will not have any integers.");
//   }
// }

// // special characters prompt

// var includeCharacters = function() {
//   var promptCharacters = window.prompt('Would you like to include special characters? Enter "Yes" or "No".');
//     if (promptCharacters === "" || promptCharacters === null) {
//       window.alert("You need to provide a valid answer! Please try again.");
//     //use return to call it again and stop the rest of this function from running
//      return includeCharacters();
//    }
//   // convert promptFight to all lowercase so we can check with less options
//     promptCharacters = promptCharacters.toLowerCase();

//     if (promptCharacters=== "yes") {
//       const characterArray = (characters);
//       console.log(characterArray);
//     window.alert("You have chosen to include special characters in your password.");
//   }
//   if (promptCharacters=== "no") {
//     window.alert("Your password will not have any characters.");
//   }
// }

// // passwordLength ();
upperCase ();
// lowerCase ();
// includeIntegers ();
// includeCharacters ();




// ***** // Assignment Code
// ***** var generateBtn = document.querySelector("#generate");

// ***** // Write password to the #password input
// ******* function writePassword() {
//  **** var password = generatePassword();
//   ******* var passwordText = document.querySelector("#password");

//  ****** passwordText.value = password;

// ******}


// ******// Add event listener to generate button
// ****** generateBtn.addEventListener("click", writePassword);



//     // if (promptUpper === "Yes"), store uppercase letters in array
//     // else do nothing and continue on to the next window prompt. 
//   }