// Assignment code here
function generatePassword() {
  let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  let specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];
  let possibleCharacters = [];

  let numberOfCharacters = prompt(
    "How many characters do you want in your password? Choose between 8-128 characters."
  );
  numberOfCharacters = parseInt(numberOfCharacters);

  if (
    isNaN(numberOfCharacters) ||
    numberOfCharacters < 8 ||
    numberOfCharacters > 128
  ) {
    return "Please choose a valid number of characters.";
  } else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
  }

  let hasLowercase = confirm("Do you want lowercase letters?");
  let hasUppercase = confirm("Do you want uppercase letters?");
  let hasNumbers = confirm("Do you want to use numbers?");
  let hasSpecial = confirm("Do you want special characters?");

  if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecial) {
    return "Please select at least one character type.";
  }

  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseLetters);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseLetters);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  let finalPassword = "";
  for (let i = 0; i < numberOfCharacters; i++) {
    // let rng = Math.floor(Math.random() * possibleCharacters.length);
    let rng = Math.ceil(Math.random() * possibleCharacters.length) - 1;
    finalPassword += possibleCharacters[rng];
  }

  return finalPassword;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
