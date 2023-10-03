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
  
  if (charLength < 8 || charLength > 128){
    alert("Your password must be between 8 and 128 characters");
  }
  var passwordChar = ""
  
if (confirm("Do you want uppercase characters?")){
  passwordChar = passwordChar + uppercase
}
if (confirm("Do you want lowercase characters?")){
  passwordChar = passwordChar + lowercase
}
if (confirm("Do you want a special character?")){
  passwordChar = passwordChar + specialChar
}
if (confirm("Do you want numbers?")){
  passwordChar = passwordChar + numbers
}

var password = ""
for(var i = 0 ; i < charLength; i++){
  password = password + passwordChar[Math.floor(Math.random() * passwordChar.length)]
}
return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
