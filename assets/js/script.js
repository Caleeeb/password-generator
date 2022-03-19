// set global variables
let letters = Array.from("abcdefghijklmnopqrstuvwxyz");
let upperLetters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "?", "."];
// delcrare this variable empty. later this will be filled with all of the arrays above using the array method 'concat'
let characterPool = [];
let passwordLength = 8;

// function that promts the user to chose 8 characters and no more than 128 characters
let userPrompt = function () {
  // prompt user for length of password 
  passwordLength = prompt("How long would you like you password from 8-128?");
  // check if the length falls under the parameters set, if not restart function
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    window.alert("You need to provide a valid answer! Please try again.");
    return userPrompt();
  }
  // set a while loop that will restart if no character options are chosen
  while (characterPool.length == 0) {
    // user choses what character options they want.
    let lowercase = confirm("Would you like your password to have lowercase letters?");
    let uppercase = confirm("Would you like your password to have uppercase letters?");
    let numeric = confirm("Would you like your password to have numbers?");
    let specialCharacters = confirm("Would you like your password to have special characters?");
    // based on the user's character options selected, concatenate those arrays
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
      characterPool = characterPool.concat(symbols);
    }
    if (characterPool.length == 0) {
      alert("You must chose at least one character option.");
    }
  }
  // generate the password after the user answers prompts
  writePassword();
}

// function that generates the password to the parameters that the users has given from the prompt
function generatePassword() {
  // normal start of an empty string variable for output password
  let password = "";
  for (i = 0; i < passwordLength; i++) {
    // use the random number function pull from the array cancatenated in generator function
    password = password + characterPool[randomNumber(0, characterPool.length - 1)];
  }
  return password;
}

// random number generator.
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

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

