const findLongestSubstring = (str) => {
    if(!str.length)return 0
    let startOfStr = 0;
    let endOfStr = 0;
    let substring = {}
    let longestSubstring = 0;
    let tempSubstring = 0

    while (endOfStr < str.length) {
		if (!substring[str[endOfStr]]) {
			substring[str[endOfStr]] = 1;
			tempSubstring++;
			endOfStr++;
		} else {
			substring = {};
			startOfStr++;
			longestSubstring = longestSubstring > tempSubstring ? longestSubstring : tempSubstring;
			tempSubstring = 0;
			endOfStr = startOfStr;
		}
	}
    return longestSubstring;
}

console.log(findLongestSubstring("anviajbatfeupyel"));