var productOfArray = function (arr) {
    if (arr.length === 0)
        return 1;
    return arr[0] * productOfArray(arr.slice(1));
};
console.log(productOfArray([1, 2, 3, 10]));
console.log(productOfArray([1, 2, 3]));
