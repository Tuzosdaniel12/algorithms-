// Write a function that takes an array of integers as an input and outputs the first duplicate.

// Ex:
// Input: [ 2, 5, 6, 3, 5 ]
// Output: 5

// Input: [ 1, 3, 4, 1, 3, 4 ]
// Output: 1

// Input: [ 2, 4, 5 ]
// Output: undefined

const findDup = (numbers) => {

    const objNumbers = {};

    for (const [index, num] of numbers.entries()) {
		objNumbers[num] = (objNumbers[num] || 0) + 1;
        if (objNumbers[num] > 1) return numbers[index];
	}
    
    return undefined;
}

console.log(findDup([2, 5, 6, 3, 5]));
console.log(findDup([1, 3, 4, 1, 3, 4]));
console.log(findDup([2, 4, 5]));