// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","&","+","/"];


function generatePassword() {
  var numOfChar = Number(prompt ("pick the amount of characters 8 thru 128."));
  if (numOfChar >= 8 && numOfChar <= 128) { 
    var useLowerCase = prompt ("do you want lowercase?") !== null;
    var useUpperCase = prompt ("do you want uppercase?") !== null;
    var useNumbers = prompt ("do you want numbers?") !== null;
    var useSymbols = prompt ("do you want symbols?") !== null;
    var allChoices = []
    if (useLowerCase) {
      allChoices.push(...lowerCase);
    } 
    if (useUpperCase) {
      allChoices.push(...upperCase);
    }
    if (useNumbers) {
      allChoices.push(...numbers);
    }
    if (useSymbols) {
      allChoices.push(...symbols);
    }
    console.log(allChoices)
  } else {
    alert("the number " + numOfChar + " is not 8 thru 128");
    generatePassword();
  }
  return; 
}
 

// !Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// !Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// !Create arrays of each of the following: uppercase letters, lowercase letters, numbers, special characters


// !Prompt user for number of characters in their password


// !If user chooses < 8 or > 128, restart the process


// !If user chooses length between 8 & 128, continue


// !Confirm whether user wants to use each of the character sets in the arrays


// CHOICE: Push all chosen arrays into a single mega-array OR keep them in separate arrays (I would recommend the first one)


// Need a function to generate a random character from the chosen array(s)
  // Math.floor(Math.random() * array.length)


// Add the chosen random character to an array or string


// Repeat generating random characters until the password is the chosen length


// Need a variable to store the user's choice for password length


// If storing random characters in an array, join them into a string


// Make use of the provided code to print the password to the page