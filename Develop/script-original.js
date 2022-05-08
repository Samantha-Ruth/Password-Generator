window.alert("Welcome to Password Generator! Please pick a few criteria for your password!");

passwordArray = [];
passwordArrayUpper = [];
passwordArrayLower = [];
passwordArrayNumbers = [];
passwordArrayCharacters = [];

// // *****CREATE SERIES OF PROMPTS *****

// Length Prompt 
   var passwordLength = function() {
    var promptLength = window.prompt('How long would you like your password to be?  Please enter any length from 8 to 126 characters.'); 
      if (promptLength === "" || promptLength=== null) {
        window.alert("You need to provide a valid answer! Please try again.");
        console.log(promptLength);
  // **** NEED TO FIND OUT WHERE THIS NUMBER IS STORED AND THEN RETRIEVE IT BEFORE RUNNING IT THROUGH THE FOLLOWING CHECKER ***
  //     if (promptLength < 8 || promptLength > 128)
  //       window.alert("Please enter a number from 8 to 128.");
  //       console.log(promptLength);
  //     //use return to call it again and stop the rest of this function from running
        return passwordLength();
     }
  }

// //uppercase letters prompt
//    //Potentially write a prompt asking if upper, lower case or both. 
// var upperCase = confirm("Choose enter if you'd like to include upper case letters");
//   return upperCase;

   var upperCase = function() {
  var promptUpper = window.prompt('Would you like to include upper case letters? Enter "Yes" or "No".');
//    make prompt lowercsae
    promptUpper = promptUpper.toLowerCase();
    if (promptUpper === "" || promptUpper === null) {
      window.alert("You need to provide a valid answer! Please try again.");
    //use return to call it again and stop the rest of this function from running
     return upperCase();
   }
//    // There is an issue - won't recognize yes or no when entered if use !== below
//     // if (promptUpper !== "yes" || promptUpper !== "no") {
//     //   window.alert("You need to provide a valid answer! Please try again.");
//     //   return upperCase();
//     // }
    if (promptUpper=== "yes") {
      // Do I need this if I just pull from the DOM? 
      const alpha = Array.from(Array(26)).map((e, i) => i + 65);
      const capitalLetters = alpha.map((x) => String.fromCharCode(x));
      console.log(capitalLetters);
      console.log(capitalLetters[5]);
      passwordArray = passwordArray.concat(capitalLetters);
      console.log(passwordArray);
      console.log(passwordArrayUpper[5]);
      // Can't I just ask it to pull the array I already designated in global? 
    window.alert("You have chosen to include capital letters in your password.");
    }
      if (promptUpper=== "no") {
      window.alert("Your password will not have any capital letters.");
    }
    return promptUpper;
  }
  console.log(passwordArrayUpper);
  console.log(passwordArrayUpper[5]);

// lowercase letters prompt
   //Potentially write a prompt asking if upper, lower case or both. 
   var lowerCase = function() {
    var promptLower = window.prompt('Would you like to include lower case letters? Enter "Yes" or "No".');
      if (promptLower === "" || promptLower === null) {
        window.alert("You need to provide a valid answer! Please try again.");
      //use return to call it again and stop the rest of this function from running
       return lowerCase();
     }
    // convert promptFight to all lowercase so we can check with less options
      promptLower = promptLower.toLowerCase();
  
  
      if (promptLower=== "yes") {
        const alpha2 = Array.from(Array(26)).map((e, i) => i + 97);
        const smallLetters = alpha2.map((x) => String.fromCharCode(x));
        passwordArray = passwordArray.concat(smallLetters);
        console.log(passwordArray)
        window.alert("You have chosen to include lowercase letters in your password.");
    }
    if (promptLower=== "no") {
      window.alert("Your password will not have any lowercase letters.");
    }
  }
  

// integer prompt
var includeIntegers = function() {
  var promptIntegers = window.prompt('Would you like to include integers? Enter "Yes" or "No".');
    if (promptIntegers === "" || promptIntegers === null) {
      window.alert("You need to provide a valid answer! Please try again.");
    //use return to call it again and stop the rest of this function from running
     return includeIntegers();
   }
  // convert promptFight to all lowercase so we can check with less options
    promptIntegers = promptIntegers.toLowerCase();

  if (promptIntegers=== "yes") {
    const numbers = Array.from(Array(10)).map((e, i) => i + 48);
    const integers = numbers.map((x) => String.fromCharCode(x));
    passwordArrayNumbers.push(integers);
      window.alert("You have chosen to include integers in your password.");
  }
  if (promptIntegers=== "no") {
    window.alert("Your password will not have any integers.");
  }
}
// special characters prompt

var includeCharacters = function() {
  var promptCharacters = window.prompt('Would you like to include special characters? Enter "Yes" or "No".');
    if (promptCharacters === "" || promptCharacters === null) {
      window.alert("You need to provide a valid answer! Please try again.");
    //use return to call it again and stop the rest of this function from running
     return includeCharacters();
   }
  // convert promptFight to all lowercase so we can check with less options
    promptCharacters = promptCharacters.toLowerCase();

    if (promptCharacters=== "yes") {
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
    passwordArrayCharacters.push(...characters);
    window.alert("You have chosen to include special characters in your password.");
  }
  if (promptCharacters=== "no") {
    window.alert("Your password will not have any characters.");
  }
}
passwordLength ();
upperCase ();
lowerCase ();
includeIntegers ();
includeCharacters ();





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

//  ***** PART OF THE SOLUTION! ****
// function generatePassword() {
//   var password = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < 8; i++)
//     password += possible.charAt(Math.floor(Math.random() * possible.length));

//   return password;
// }

// console.log(generatePassword());









// *** Function for generating random numbers 

// function getRandom(max) {
//   var random = Math.floor(Math.random()* max);
//   return random;
//   // var random = Math.random() * max;
//   // return Math.floor(random) + 1;
// }

// function generate () {
//   var password = [];
//     for(var i = 0; i < 5; i++) {
//       var random = getRandom(94)
//       password.push(random)
//     }
//   return password;
// }
// console.log(generate());