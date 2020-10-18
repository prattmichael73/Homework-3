
var generateBtn = document.querySelector("#generate");
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialcharacters = "!@#$%^&*()"
var numbers = "1234567890"

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passwordstring = ""
  var passwordlength = prompt("Please choose password length, must be between 8 and 128 characters")
  while (isNaN(passwordlength)||passwordlength< 8||passwordlength>128) {
    alert("password link must be a number between 8 and 128")
    passwordlength = prompt("Please choose password length, must be between 8 and 128 characters")
  }
  console.log(passwordlength)
  var stringlength = parseInt(passwordlength)


  var hasSpecialCharacters = confirm("Do you want your password to contain special characters?");
  var hasNumbers = confirm("Do you want your password to contain numbers?");
  var hasUpperCase = confirm("Do you want your password to contain uppercase letters?");
  var hasLowerCase = confirm("Do you want your password to contain lower case letters?");
  var possString = "";


  if (hasSpecialCharacters === false &&
    hasNnumbers === false &&
    hasUpperCase === false &&
    hasLowerCase === false) {
    alert("Must choose one option")

  } else {
    if (hasSpecialCharacters) {
      possString += specialcharacters
      console.log(possString)

    } if (hasNumbers) {
      possString += numbers
      console.log(possString);

    } if (hasUpperCase) {
      possString = possString + uppercaseletters
      console.log(possString);

    } if (hasLowerCase) {
      possString += lowercaseletters
      console.log(possString);
    }
  }
 
  console.log(possString)

  var resetPassword = "";
  for (var i = 0; i < passwordlength; i++) {
    resetPassword += possString[Math.floor(Math.random() * possString.length) + 0];
  }

  console.log(resetPassword);
  return resetPassword;
}
generateBtn.addEventListener("click", writePassword);












