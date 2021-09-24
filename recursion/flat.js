const flatten = (arr) => {
    let results = [];
    if (arr.length === 0)
        return [];
    if (typeof arr[0] === "number") {
        results.push(arr[0]);
    }
    else {
        return results.concat(flatten([...arr[0], ...arr.slice(1)]));
    }
    return results.concat(flatten(arr.slice(1)));
};
console.log(flatten([1, 2, 3, [4, 5], 6, 7, 8, 9]));
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
//# sourceMappingURL=flat.js.map

function flat(oldArr) {
	var newArr = [];
	for (var i = 0; i < oldArr.length; i++) {
		if (Array.isArray(oldArr[i])) {
			newArr = newArr.concat(flatten(oldArr[i]));
		} else {
			newArr.push(oldArr[i]);
		}
	}
	return newArr;
}