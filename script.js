// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%&*";

function generatePassword() {
  var passwordLength = window.prompt("how many characters")


  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Choose a password between 8 and 128");
    return

  }
var asklowercase = confirm("do you want lowercase letters?")
var askuppercase = confirm("do you want uppercase letters?")
var asknumbers = confirm("do you want numbers letters?")
var asksymbols = confirm("do you want symbols letters?")
if (asklowercase===false && askuppercase===false && asknumbers===false && asksymbols===false) {
  window.alert("choose at least one type of character");
  return
}
var password = ""
var options = ""
if (asklowercase===true){
  options += lowercase
}
if (askuppercase===true){
  options += uppercase
}
if (asknumbers===true){
  options += numbers
}
if (asksymbols===true){
  options += symbols
}

  for (i = 0; i < passwordLength; i++) {
    var randomPassword = options[Math.floor(Math.random() * options.length)];
password += randomPassword
  }

  return password

  // Add event listener to generate button

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);

