var collectOddValues = function (arr) {
    var result = [];
    var helper = function (helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.splice(1));
    };
    helper(arr);
    return result;
};
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
var collectOddValuesPure = function (arr) {
    var result = [];
    if (arr.length === 0) {
        return result;
    }
    if (arr[0] % 2 !== 0) {
        result.push(arr[0]);
    }
    result = result.concat(collectOddValues(arr.slice(1)));
    return result;
};
console.log(collectOddValuesPure([1, 2, 3, 4, 5, 6, 7, 8, 9]));
