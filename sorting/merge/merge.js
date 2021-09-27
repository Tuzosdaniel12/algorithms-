const mergeArray = (arr, arr2) => {
    let mergeArr = [];
    let i = 0;
    let j = 0;
    while (i < arr.length && j < arr2.length) {
        if (arr[i] < arr2[j]) {
            mergeArr.push(arr[i]);
            i++;
        }
        else {
            mergeArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr.length) {
        mergeArr.push(arr[i]);
        i++;
    }
    while (j < arr2.length) {
        mergeArr.push(arr2[j]);
        j++;
    }
    return mergeArr;
};
const mergeSort = (arr) => {
    if (arr.length === 1)
        return arr;
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.splice(middle));
    return mergeArray(left, right);
};
console.log(mergeSort([25, 96, 4, 8, 8, 9, 6, 45, 10]));
//# sourceMappingURL=merge.js.map