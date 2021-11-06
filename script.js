// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var possibleChar = [];
  var numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperChar = ["A", "B", "C", "D", "E", "F", "G", "h", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChar = ["#", "&", "@", "!", "<", "}", "*", "^", "$", "+", "%", "?", "~"];
  var userLength = prompt ("How many characters wouls you like your password? Length between 8 - 128");
  var userLower = confirm ("Would you like to use lowercase letters?");
  var userUpper = confirm ("Would you like to use uppercase letters?"); 
  var userSpecial = confirm ("Would you like to use special characters?"); 
  var userNumbers = confirm ("would like to include numbers?");
  var password = [];
  
  if (userNumbers){
    possibleChar = possibleChar.concat(numberChar);
    console.log("usernumber ran");
  }
  if (userLower){
    possibleChar = possibleChar.concat(lowerChar);
  }
  if (userUpper){
    possibleChar = possibleChar.concat(upperChar);
  }
  if (userSpecial){
    possibleChar = possibleChar.concat(specialChar);
  }
  console.log(possibleChar);
  for (var i=0; i <= userLength; i++){
    var randomIndex = Math.floor(Math.random() * possibleChar.length);
    console.log(randomIndex)
    var randomLetter = possibleChar[randomIndex];
    console.log(randomLetter);
    password.push(randomLetter);
  }
  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
