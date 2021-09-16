function sameFrequency(num1, num2) {
	// good luck. Add any arguments you deem necessary.
    const numOne = num1.toString();
    const numTwo = num2.toString();
    if (numOne.length !== numTwo.length) return false;

    const numFrequency1 = {}

    for (const num of numOne) {
        numFrequency1[num] = numFrequency1[num] ? numFrequency1[num] + 1 : 1;
    }

    for(const key of numTwo) {
        if(!numFrequency1[key])return false;
        numFrequency1[key] = numFrequency1[key] - 1;
    }
    return true
}

console.log(sameFrequency(182,281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));