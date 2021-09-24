const power = (num, num2) => {
    if (num2 === 0)
        return 1;
    if (num2 === 2) {
        return num * num;
    }
    return num * power(num, num2 - 1);
};
console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
console.log(power(2, 5));
//# sourceMappingURL=power.js.map