// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// The parsed integer is 42.
// Since 42 is in the range [-231, 231 - 1], the final result is 42.

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (str:string):any =>{
    const min:number = (-2)**(31);
    const max:number = 2**31 - 1;
    const result:number = parseInt(str);
  
    if (result < min) return min;
    if (result > max) return max;
    if (!result) return 0;
    return result
}

console.log(myAtoi("42"))

