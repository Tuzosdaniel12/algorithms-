/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    const reverse = x.toString()

    return reverse.split("").reverse().join("") === reverse 
};


console.log(isPalindrome(121));