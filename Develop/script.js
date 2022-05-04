window.alert("Welcome to Password Generator! Please pick a few criteria for your password!");


// Length: Prompt 
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


// UPPER CASE LETTERS: PROMPT
   //Potentially write a prompt asking if upper, lower case or both. 
var upperCase = function() {
  var promptUpper = window.prompt('Would you like to include upper case letters? Enter "Yes" or "No".');
    if (promptUpper === "" || promptUpper === null) {
      window.alert("You need to provide a valid answer! Please try again.");
    //use return to call it again and stop the rest of this function from running
     return upperCase();
   }
  // convert promptFight to all lowercase so we can check with less options
    promptUpper = promptUpper.toLowerCase();

    if (promptUpper=== "yes") {
   // Varify player has chosen to include upper case letters in their code.
    window.alert("You have chosen to include capital letters in your password.");
  }
  else {
    window.alert("Your password will not have any capital letters.");
  }
}

// LOWER CASE LETTERS: PROMPT
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
     // Varify player has chosen to include upper case letters in their code.
      window.alert("You have chosen to include lowercase letters in your password.");
    }
    else {
      window.alert("Your password will not have any lowercase letters.");
    }
  }

// INTEGERS: PROMPT

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
   // Varify player has chosen to include upper case letters in their code.
    window.alert("You have chosen to include integers in your password.");
  }
  else {
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
   // Varify player has chosen to include upper case letters in their code.
    window.alert("You have chosen to include special characters in your password.");
  }
  else {
    window.alert("Your password will not have any special characters.");
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




// var upperCase= function() {
//   // ask player if they'd like to include uppercase letters
//   var promptUpper = window.prompt('Would you like to include upper case letters? Enter "Yes" or "No".');

//   // validate prompt answer (** CAN I WRITE A CODE FOR THIS? PROMPTNULL? )

//   else {
//     // if (promptUpper === "Yes"), store uppercase letters in array
//     // else do nothing and continue on to the next window prompt. 
//   }