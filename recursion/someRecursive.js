const someRecursive = (arr, cb) => {
    if (arr.length === 0)
        return false;
    if (cb(arr[0]))
        return true;
    return someRecursive(arr.slice(1), cb);
};
const isOdd = (num) => {
    return num % 2 !== 0;
};
console.log(someRecursive([2, 4, 6, 8, 9], isOdd));
//# sourceMappingURL=someRecursive.js.map