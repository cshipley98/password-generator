// Assignment code here
//create var  
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@$^&";
var numbers = "1234567890";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//write generate password function
function generatePassword(){
  var charLength = (prompt("How many characters do you want your password to be? Please enter a number between 8 and 128."))
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
