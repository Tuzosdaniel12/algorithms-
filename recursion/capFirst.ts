const capitalizeFirst = (str: Array<string>): Array<string> => {
    // add whatever parameters you deem necessary - good luck!
    let newArr = []
    if (str.length === 0) return [];
    newArr.unshift(str[0].charAt(0).toUpperCase() + str[0].slice(1));
    return newArr.concat(capitalizeFirst(str.slice(1)))
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
