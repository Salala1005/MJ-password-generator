// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordOptions() {

  // check password length
  var length = prompt("How long is the password needed (number of characters e.g.: 9)? \n Please enter a number between 8 and 128 character inclusive.");
  while (length < 8 || length > 128 || length % 1 != 0 ) {
    if (length < 8) alert("Choose a password length more than 7.")
    if (length > 128) alert("Choose a password length less than 129.")
    if (length % 1 != 0) alert("Choose a integer.")
    var length = prompt("How long is the password needed (number of characters e.g.: 9)? \n Please enter a number between 8 and 128 character inclusive.");
  }

 // check password contains lowercase
  var lowerCaseChar = confirm("Please click OK for the password to contain lowercase. Otherwise click cancel.");

 // check password contains uppercase
 var upperCaseChar = confirm("Please click OK for the password to contain uppercase. Otherwise click cancel.");

 // check password contains number
 var numberChar = confirm("Please click OK for the password to contain number. Otherwise click cancel.");

  // check password contains special character
  var specialChar = confirm("Please click OK for the password to contain special character. Otherwise click cancel.");

  // code validates at least one character type should be selected
  var mininimumCharacterType = lowerCaseChar + upperCaseChar + numberChar + specialChar > 0

  while (!mininimumCharacterType) { 
   alert("Please choose at least one character type.")
   var lowerCaseChar = confirm("Please click OK for the password to contain lowercase. Otherwise click cancel.");
   var upperCaseChar = confirm("Please click OK for the password to contain uppercase. Otherwise click cancel.");
   var numberChar = confirm("Please click OK for the password to contain number. Otherwise click cancel.");
   var specialChar = confirm("Please click OK for the password to contain special character. Otherwise click cancel.");
   var mininimumCharacterType = lowerCaseChar + upperCaseChar + numberChar + specialChar > 0
  }

  passwordCriteria = {
  length : length,
  lowerCaseChar : lowerCaseChar,
  upperCaseChar : upperCaseChar,
  numberChar : numberChar,
  specialChar : specialChar,
  }

  return passwordCriteria

}


passwordCriteria = getPasswordOptions()
console.log(passwordCriteria)


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);