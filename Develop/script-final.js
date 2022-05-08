

passwordArray = [];
passwordArrayUpper = [];
passwordArrayLower = [];
passwordArrayNumbers = [];
passwordArrayCharacters = [];


// //Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
    function generate() {
        // Create prompts
        window.alert("Welcome to Password Generator! Please select some criteria for your new, awesome password!");
        var lengthOfPassword = prompt("Choose length of 8-128 characters.");
        if (lengthOfPassword === "" || lengthOfPassword=== null) {
            window.alert("You need to provide a valid answer! Please try again.");
            return generate();
        }
        if (lengthOfPassword < 8 || lengthOfPassword >128) {
            window.alert("Password must be between 8 to 128 characters.");
            return generate();
        }   
        /// NEED TO SET UP A CONDITION IF PEOPLE ENTER LETTERS INSTEAD OF NUMBERS! // 
        var upperCase = confirm("Click okay if you'd like to include upper case letters.");
        if (upperCase) {
            const alpha = Array.from(Array(26)).map((e, i) => i + 65);
            const capitalLetters = alpha.map((x) => String.fromCharCode(x));
            passwordArray = passwordArray.concat(capitalLetters);
        }
        var lowerCase = confirm("Click Okay if you'd like to include lower case letters.");
        if (lowerCase) {
            const alpha2 = Array.from(Array(26)).map((e, i) => i + 97);
            const smallLetters = alpha2.map((x) => String.fromCharCode(x));
            passwordArray = passwordArray.concat(smallLetters);
        }
        var integers = confirm("Click Okay if you'd like to include integers.");
        if (integers) {const numbers = Array.from(Array(10)).map((e, i) => i + 48);
            const integers = numbers.map((x) => String.fromCharCode(x));
            passwordArray = passwordArray.concat(integers);
        }
        var characters = confirm("Click Okay if you'd like to include characters.");
        if (!characters) {
            window.alert("You must include at least one character.");
            return generate();
        }
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
            // add to passwordArray
            passwordArray = passwordArray.concat(characters);
        }
        // NEED TO CREATE A CONFIRM - WHAT THEY PUT IN THEIR PASsWORD ***
        console.log(lengthOfPassword);
        console.log(passwordArray);
        console.log(upperCase);
        console.log(lowerCase);
        console.log(integers);
        console.log(characters);
    }
    generate ();

 var password = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
