//naive method
const searchMatchingSubStringCount = (str, strToCount) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < strToCount.length; j++) {
            if (strToCount[j] !== str[i + j])
                break;
            if (j === strToCount.length - 1)
                count++;
        }
    }
    return count;
};
console.log(searchMatchingSubStringCount("wowomgwowomg", "omg"));
//# sourceMappingURL=stringSearch.js.map