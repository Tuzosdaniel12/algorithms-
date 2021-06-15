/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	const str = x.toString().split(" ").join("").toLowerCase();

    const removeChar = str.replace(/[^a-zA-Z 0-9]/g, "");

	return removeChar.split("").reverse().join("") === removeChar;
};

console.log(isPalindrome("_eye"));


