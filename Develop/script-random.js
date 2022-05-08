// Assignment Code
// var generateBtn = document.querySelector("#generate");

 // Write password to the #password input
// function writePassword() {
// var password = generatePassword();
// var passwordText = document.querySelector("#password");
// passwordText.value = password;

// }

// function randomInteger(max) {
//     var random = (math.random() * max);
//     return Math.floor(random) + 1;
// } 

function randomInteger(max) {
    var randomNumber = [];
    for (var i = 0; i < 10; i++) {
        randomNumber.push(i);
    }
    return randomNumber;
    }
    console.log(randomInteger(8));

randomInteger();
// function gatherTypes() {
// var promptUpper = window.prompt('Would you like to include upper case letters? Enter "Yes" or "No".');
//  if (promptUpper === "yes") {
//      window.alert('Capital Letters will be included!');
//      const alpha = Array.from(Array(26)).map((e, i) => i + 65);
//      const capitalLetters = alpha.map((x) => String.fromCharCode(x));
//      console.log(capitalLetters);


//  }
// console.log(capitalLetters);
// }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);