function isSubsequence(str1, str2) {
	// good luck. Add any arguments you deem necessary.
    let index = 0;
    let tempIndex = 0
    if (!str1) return true;

	while (tempIndex < str2.length) {
		if (str2[tempIndex] === str1[index]) index++;
		if (index === str1.length) return true;
		tempIndex++;
	}
	return false;
}

console.log(isSubsequence("hello", "hello world")); //true
console.log(isSubsequence("sing", "sting"));//true
console.log(isSubsequence("abc", "abracadabra")); //true
console.log(isSubsequence("abc", "acb")); //false
