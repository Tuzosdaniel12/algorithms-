const mergeArray = (arr, arr2) => {
    let mergeArr = [];
    let i = 0;
    let j = 0;
    while (i < arr.length && j < arr2.length) {
        console.log(i, j);
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
console.log(mergeArray([4, 8, 25, 96], [5, 6, 7, 9]));
//# sourceMappingURL=mergeArray.js.map