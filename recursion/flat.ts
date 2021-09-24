const flatten = (arr: Array<any>): Array<number>=>{
    let results = [];
    if(arr.length === 0) return []
    if(typeof arr[0] === "number"){
        results.push(arr[0])
    }else{
        return results.concat(flatten([...arr[0],...arr.slice(1)]))
    }
    return results.concat(flatten(arr.slice(1)));
}

console.log(flatten( [ 1, 2, 3,[ 4 , 5 ], 6, 7, 8, 9 ]))
console.log(flatten([1, 2, 3, [4, 5] ]) )// [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3