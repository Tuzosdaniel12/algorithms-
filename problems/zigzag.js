
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
var convert = function(str, numRows) {
    let x = 0;
    let y = 0;
    let rows = numRows - 1;
    let arr = [... new Array(numRows)].map(_ => [])
    for (var i = 0; i < str.length; i++) {
            if (rows / x === Infinity ) {
				arr[y].push(str[i]);
			} else {
				arr[rows - x].push(str[i]);
				y = rows;
			}
            y++;
            if (y > rows) {
				y = 0;
				x++;
			}
            if (x >= rows) {
				x = 0;
			}
    }
    return arr.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []).join("");
};

console.log(convert("PAYPALISHIRING", 4));