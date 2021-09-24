const stringifyNumbers = (obj) => {
    const tempObj = { ...obj };
    const arrayOfKeys = Object.keys(tempObj);
    for (const key of arrayOfKeys) {
        if (typeof tempObj[key] === "number") {
            tempObj[key] = tempObj[key].toString();
        }
        else if (typeof tempObj[key] === 'object' && !Array.isArray(tempObj[key]) && tempObj[key] !== null) {
            tempObj[key] = stringifyNumbers(tempObj[key]);
        }
    }
    return tempObj;
};
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};
console.log(stringifyNumbers(obj));
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
//# sourceMappingURL=stringifyNumbers.js.map