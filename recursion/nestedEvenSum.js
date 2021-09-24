const nestedEvenSum = (obj) => {
    // add whatever parameters you deem necessary - good luck!
    let arrayOfKeys = Object.keys(obj);
    let totalSum = 0;
    for (const key of arrayOfKeys) {
        if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
            totalSum += obj[key];
        }
        else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
            totalSum += nestedEvenSum(obj[key]);
        }
    }
    return totalSum;
};
const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
};
const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};
console.log(nestedEvenSum(obj1));
// 6
console.log(nestedEvenSum(obj2));
//# sourceMappingURL=nestedEvenSum.js.map