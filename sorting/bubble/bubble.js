//O(n) or O(n^2)
const bubble = (arr) => {
    for (let j = arr.length; j > 0; j--) {
        let noSwaps = true;
        for (let i = 0; i < j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                noSwaps = false;
            }
        }
        if (noSwaps)
            break;
    }
    return arr;
};
const swap = (arr, index, index2) => {
    [arr[index], arr[index2]] = [arr[index2], arr[index]];
};
console.log(bubble([
    10, 14, 14, 18,
    29, 50, 30, 37
]));
//# sourceMappingURL=bubble.js.map