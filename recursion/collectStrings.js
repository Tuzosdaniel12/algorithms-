const collectStrings = (obj) => {
    const tempObj = { ...obj };
    let tempArr = [];
    const arrayOfKeys = Object.keys(tempObj);
    for (const key of arrayOfKeys) {
        if (typeof tempObj[key] === "string") {
            tempArr = tempArr.concat([tempObj[key]]);
        }
        else if (typeof tempObj[key] === 'object' && !Array.isArray(tempObj[key]) && tempObj[key] !== null) {
            tempArr = tempArr.concat(collectStrings(tempObj[key]));
        }
    }
    return tempArr;
};
const ob = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};
console.log(collectStrings(ob)); // ["foo", "bar", "baz"])
//# sourceMappingURL=collectStrings.js.map