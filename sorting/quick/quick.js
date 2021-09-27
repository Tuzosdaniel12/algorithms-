const pivot = (arr, start, end) => {
    let pivotNumber = arr[start];
    let swapIndex = start;
    for (var i = start + 1; i < end; i++) {
        if (pivotNumber > arr[i]) {
            swapIndex++;
            swapInx(arr, swapIndex, i);
        }
    }
    swapInx(arr, swapIndex, start);
    return swapIndex;
};
const swapInx = (arr, indx, indx2) => {
    [arr[indx], arr[indx2]] = [arr[indx2], arr[indx]];
};
const quickSort = (arr, left, right) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
};
let testArray = [25, 96, 4, 8, 8, 9, 6, 45, 10];
console.log(quickSort(testArray, 0, testArray.length));
//# sourceMappingURL=quick.js.map