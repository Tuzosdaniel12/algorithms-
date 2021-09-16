// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}
//TODO: Create a function that returns a secure password `generatePassword()`
//TODO: create variable `tempPassword`
//TODO: prompted for the length of the password and store on variable `passwordLength`
//TODO: prompted if user whats lower case letters `isLowerCase`
//TODO: prompted if user whats upper case letters `isUpperCase`
//TODO: prompted if user whats numbers `isNumbers`
//TODO: prompted if user whats special characters `isSpecial`

//TODO: check users password criteria; based on answers create an array `usersPreferencesArray` and concat the array us the user criteria into
//for example if isLowerCase add all values of `lowerCase` array into `userPreferencesArray`

//TODO: create loop that loops based on user `passwordLength`
//TODO: create variable that stores a random `index` from 0 to `userPreferencesArray.length`
//TODO: add random char from `userPreferencesArray[index]`  to tempPassword
//TODO: check if At least have on char user password criteria
//return `tempPassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
