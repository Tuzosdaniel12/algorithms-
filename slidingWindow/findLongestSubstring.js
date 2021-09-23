const findLongestSubstring = (str) => {
    if(!str.length)return 0
    let startOfStr = 0;
    let endOfStr = 0;
    let substring = {}
    let longestSubstring = 0;
    let tempSubstring = 0

    while (startOfStr < str.length) {

		if (!substring[str[startOfStr]]) {
			substring[str[startOfStr]] = 1;
			longestSubstring++;
			startOfStr++;
		} else {
			substring = {};
			endOfStr++;
			tempSubstring =
				longestSubstring > tempSubstring
					? longestSubstring
					: tempSubstring;
			longestSubstring = 0;
			startOfStr = endOfStr;
		}
	}
    return longestSubstring > tempSubstring ? longestSubstring : tempSubstring;
}

console.log(findLongestSubstring("anviaj"));