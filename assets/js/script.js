// Assignment code here
let letters = ["a","b","c","d","e","f","g"]
let upperLetters = ["A", "B"]
let numbers = [1, 2]
let characters = ["!","@"]
let characterPool = [];

// function that promts the user to chose 8 characters and no more than 128 characters
let userPrompt = function() {
  let passwordLength = prompt("How long would you like you password from 8-128?");
  if (passwordLength <= 8 && passwordLength >= 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    return userPrompt();
  }
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

}

// function that generates the password to the parameters that the users has given from the prompt

// random number generator
var randomNumber() {

}


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
