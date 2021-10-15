var longestPalindrome = function (str) {
	if(string.length < 1 || str === null) return "";

	let longest = "";

	for(let i = 0; i < string.length; i++) {
		let oddPalindrome = expandFromCenter(str, i, i)
		let evenPalindrome = expandFromCenter(str, i-1, i)

		longest =
			oddPalindrome.length > evenPalindrome.length
				? oddPalindrome
				: evenPalindrome;
		
	}
	return longest
};

const expandFromCenter = (str, left, right) =>{
	let i = 0;
	while(str[left - i] && str[left - i] === str[right +1]){
		i++
	}
	i--
	return str.slice(left - i, right + i + 1);
}

console.log(longestPalindrome("tacoca"));
