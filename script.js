var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

// create Password
function generatePassword() {
passwordArray = [];
var passwordRandom = [];
  // create prompts
  var lengthOfPassword = prompt("Choose length of 8-128 characters.");
    if (lengthOfPassword === "" || lengthOfPassword=== null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
    }
    // create a window alert if user doesn't enter a number
    n = parseInt(lengthOfPassword);
    if (isNaN(n)) {
      alert("You must enter a numerical value.");
      return generatePassword();
    } 
    if (lengthOfPassword < 8 || lengthOfPassword >128) {
      window.alert("Password must be between 8 to 128 characters.");
      return generatePassword();
    }  
  var upperCase = confirm("Click 'OK' if you'd like to include uppercase letters. If you don't want to include uppercase letters, click Cancel.");
    // if user requests upperCase letters, add to passwordArray
    if (upperCase) {
      const alpha = Array.from(Array(26)).map((e, i) => i + 65);
      const capitalLetters = alpha.map((x) => String.fromCharCode(x));
      passwordArray = passwordArray.concat(capitalLetters);
      var alertUpperCase = "Uppercase Letters\n";
    }
    else if (!upperCase) {
      var alertUpperCase = "";
    }
  var lowerCase = confirm("Click 'OK' if you'd like to include lowercase letters. If you don't want to include lowercase letters, click Cancel.");
    // if user requests lowerCase letters, add to passwordArray
    if (lowerCase) {
      const alpha2 = Array.from(Array(26)).map((e, i) => i + 97);
      const smallLetters = alpha2.map((x) => String.fromCharCode(x));
      passwordArray = passwordArray.concat(smallLetters);
      var alertLowerCase = "Lowercase Letters\n";
    }
    else if (!lowerCase) {
      var alertLowerCase = "";
    }
  var integers = confirm("Click 'OK' if you'd like to include integers. If you don't want to include integers, click Cancel");
    // if user requests integers, add to passwordArray
    if (integers) {
      const numbers = Array.from(Array(10)).map((e, i) => i + 48);
      const integers = numbers.map((x) => String.fromCharCode(x));
      passwordArray = passwordArray.concat(integers);
      var alertIntegers = "Integers\n";
      }
    else if (!integers) {
      var alertIntegers = "";
      }
  var characters = confirm("Click 'OK' if you'd like to include characters. If you don't want to include characters, click Cancel.");
    if (characters) {
      const character1 = Array.from(Array(6)).map((e, i) => i + 33);
      const firstCharacters = character1.map((x) => String.fromCharCode(x));
      /// and more characters
      const character2 = Array.from(Array(6)).map((e, i) => i + 58);
      const secondCharacters = character2.map((x) => String.fromCharCode(x));
      // and more
      const character3 = Array.from(Array(6)).map((e, i) => i + 91);
      const thirdCharacters = character3.map((x) => String.fromCharCode(x));
      // and more
      const character4 = Array.from(Array(3)).map((e, i) => i + 123);
      const fourthCharacters = character4.map((x) => String.fromCharCode(x));
      // add all together
      const characters = firstCharacters.concat( secondCharacters,thirdCharacters,fourthCharacters);
      // if user requests characters, add all characters to passwordArray
      passwordArray = passwordArray.concat(characters);
      var alertCharacters = "Characters\n";
    }
    else if (!characters) {
      var alertCharacters = "";
    }
  // create an alert if no characters are chosen.
  if (!characters && !integers && !lowerCase && !upperCase) {
    window.alert("You must include at least one character type.");
    return generatePassword();
    }
  // create an alert that validates the users responses.
  window.alert("You have chosen to include the following in your password:\n\n" + alertUpperCase + alertLowerCase + alertIntegers + alertCharacters);  
  // math random function
  function getRandomCharacter() {
    const randomCharacter = passwordArray[Math.floor(Math.random() * passwordArray.length)];
    return randomCharacter;
  }
  // loop of math random to create an array
  for (var i = 0; i < lengthOfPassword; i++) {
    var random = getRandomCharacter();
    passwordRandom.push(random);
  }
  // remove commas and return password result
    var passwordFinal = passwordRandom.join("");
  return passwordFinal;
}

generateBtn.addEventListener("click", writePassword);
