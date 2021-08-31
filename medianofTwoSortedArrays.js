/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	var combineArrays = [...nums1, ...nums2].sort((a, b) => a - b);

    console.log( combineArrays)

	var evenOrOdd = combineArrays.length % 2;

	if (evenOrOdd === 0) {
		var medium =
			(combineArrays[(combineArrays.length / 2)-1] +
				combineArrays[(combineArrays.length / 2)]) /
			2;

		return medium;
	}

	return combineArrays[Math.floor(combineArrays.length / 2)];
};

console.log(findMedianSortedArrays([3], [-1, -2]));
