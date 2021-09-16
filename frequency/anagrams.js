//given two strings, write a function to determine if
// the second string is an anagram of the first.
// An anagrams is a word, phrase or name formaed by rearrranging the letter of another, 
// such as cinema formed from icecream

const isAnagram = (string1, string2) => {

    const frequencyStringOne = {};
    const frequencyStringTwo = {};
    countKeysInString(string1, frequencyStringOne)
    countKeysInString(string2, frequencyStringTwo);
    for (const key in frequencyStringOne) {
		if (!frequencyStringTwo[key]) {
			return false;
		}
        if (frequencyStringTwo[key] !== frequencyStringOne[key]) {
			return false;
		}
	} 
    return true;
}

const countKeysInString = (string, frequencyString) => {
    for (const char of string) {
        if(char === " ")continue
	    frequencyString[char] = (frequencyString[char] || 0) + 1;
	}
};

console.log(isAnagram(" ", " ")); // true
console.log(isAnagram("aaz", "zza")); // false
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false) // false
console.log(isAnagram("awesome", "awesom")); // false
console.log(isAnagram("qwerty", "qeywrt")); // true
console.log(isAnagram("texttwisttime", "timetwisttext")); // true
console.log(isAnagram("restful", "fluster"));// true