var factorial = function (num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
};
console.log(factorial(10));
console.log(factorial(4));
console.log(factorial(7));
