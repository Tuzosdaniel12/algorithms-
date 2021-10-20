function charCount(str) {
	// countOfChars = {};
	// for (let char of str) {
	// 	char = char.toLowerCase();
	// 	if (/[a-z0-9]/.test(char)) {
	// 		countOfChars[char] = (countOfChars[char] || 0) + 1;
	// 	}
	// }

	return str.split("").reduce((countChars, char)=> {
            char = char.toLowerCase();
			if (/[a-z0-9]/.test(char)) countChars[char] = (countChars[char] || 0) + 1;
            return countChars;
	},{})

}



console.log(charCount("Hello World 123"))
