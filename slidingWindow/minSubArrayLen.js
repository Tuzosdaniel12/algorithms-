function minSubArrayLen(nums, sum) {
	let total = 0;
	let start = 0;
	let end = 0;
	let minLen = Infinity;

	while (start < nums.length) {
		// if current window doesn't add up to the given 
		// move the window to right
		if (total < sum && end < nums.length) {
			// 1. --> 0<7 && 0<6
			// 2. --> 2<7 && 1<6
			// 3. --> 5<7 && 2<6
			// 4. --> 6<7 && 3<6
			// 6. --> 5<7 && 3<6
			// 8. --> 4<7 && 4<6
			// 11. --> 5<7 && 3<6

			total += nums[end];
			// 1. -->  total = 0 + 2
			// 2. -->  total = 2 + 3
			// 3. -->  total = 5 + 1
			// 4. -->  total = 5 + 2
			// 6. -->  total = 5 + 2
			// 8. -->  total = 4 + 4
			// 11. -->  total = 5 + 3

			end++;
			// 1. --> end = 1
			// 2. --> end = 2
			// 3. --> end = 3
			// 4. --> end = 3
			// 6. --> end = 4
			// 8. --> end = 5
			//11. --> end = 6
		}
		// if current window adds up to at least the sum given then
		// we can shrink the window
		else if (total >= sum) {
			//5. -->  7 >= 7
			//7. -->  7 >= 7
			//9. -->  8 >= 7
			//10. -->  7 >= 7
			//12. -->  8 >= 7
			minLen = Math.min(minLen, end - start);
			//5. --> infinity, 3 - 0
			//7. --> 3, 4 - 1
			//9. --> 3, 5 - 2
			//10. --> 3, 5 - 3
			//12. --> 2, 5 - 3
			total -= nums[start];
			//5. --> total = 7 - 2
			//7. --> total = 7 - 3
			//9. --> total = 8 - 1
			//10. --> total = 7 - 2
			//12. --> total = 8 - 4
			start++;
			//5. --> start = 1
			//7. --> start = 2
			//9. --> start = 3
			//10 --> start = 4
			//12 --> start = 5
		}
		// current total less than required total but we reach the end, need this or else we'll be in an infinite loop
		else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 --> because [4,3] is the smallest subarray
