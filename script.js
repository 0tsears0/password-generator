var generateBtn = document.querySelector("#generate");

// create an array with all possible characters
var characters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*+?"];
// set length between 8 and 128 character length
var length = characters.length;

// create confirm for special characters
var confirmSpecial = confirm("Do you want special characters in your password?");
// create confirm for numeric characters
var confirmNumeric = confirm("Do you want numbers in your password?");
// create confirm for lowercase characters
var confirmLowercase = confirm("Do you want lowercase letters in your password?");
// create confirm for uppercase characters
var confirmUppercase = confirm("Do you want uppercase letters in your password?");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);