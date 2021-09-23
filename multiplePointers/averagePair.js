function averagePair(arr, average) {
    let left = 0;
	let right = arr.length - 1;
    let totalSum = average * 2

    while (left < right) {
		let sum = arr[left] + arr[right]
		if (sum === totalSum) {
			return true;
		} else if (sum > totalSum) {
			right--;
		} else {
			left++;
		}
	}
    return false;
}


console.log(averagePair([1,2,3], 2.5));//true
console.log(averagePair([1, 3,3,5,6,7,10,12,19], 8));//true
console.log(averagePair([-1,0,3,4,5,6], 4.1));//false
console.log(averagePair([], 4));//false