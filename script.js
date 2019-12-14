var generateBtn = document.querySelector("#generate");

// create an array with all possible characters
// set length between 8 and 128 character length
// create confirm for special characters
// create confirm for numeric characters
// create confirm for lowercase characters
// create confirm for uppercase characters



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