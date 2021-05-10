/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const reverseNum = parseInt(x.toString().split("").reverse().join(""));

    if (reverseNum < Math.pow(-2, 31) || reverseNum > Math.pow(2, 31) - 1) {
		return 0;
	}

    if(x < 0){
        return reverseNum * -1 
    }
        
    return reverseNum
};
