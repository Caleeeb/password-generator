// Assignment code here
let letters = ["a","b","c","d","e","f","g","h"]
let upperLetters = ["A", "B"]
let numbers = [1, 2]
let characters = ["!","@"]
let characterPool = [];
let passwordLength = 8;

// function that promts the user to chose 8 characters and no more than 128 characters
let userPrompt = function() {
  passwordLength = prompt("How long would you like you password from 8-128?");
  if (passwordLength <= 8 && passwordLength >= 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    return userPrompt();
  }
while ( characterPool.length == 0) {
let lowercase = confirm("Would you like your password to have lowercase letters?");
let uppercase = confirm("Would you like your password to have uppercase letters?");
let numeric = confirm("Would you like your password to have numbers?");
let specialCharacters = confirm("Would you like your password to have special characters?");
  if (lowercase) {
    characterPool = characterPool.concat(letters);
  }
  if (uppercase) {
    characterPool = characterPool.concat(upperLetters);
  }
  if (numeric) {
    characterPool = characterPool.concat(numbers);
  }
  if (specialCharacters) {
    characterPool = characterPool.concat(characters);
  }
  if (characterPool.length == 0) {
    alert("You must chose at least one character option.");
  }
}
writePassword();
}

// function that generates the password to the parameters that the users has given from the prompt
function generatePassword() {
  let password = ""; 
  for (i = 0; i < passwordLength; i++) {
    password = password + characterPool[randomNumber(0, characterPool.length - 1)];
  }
    return password;
}

// random number generator
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// random number 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
userPrompt();
