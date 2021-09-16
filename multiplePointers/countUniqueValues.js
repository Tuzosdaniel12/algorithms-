// console.log(countUniqueV)alues
// Implement a function called console.log(countUniqueValues, which accepts a sorted ar)ray, 
// and counts the unique values in the array. There can be negative numbers in the array, 
// but it will always be sorted.
const countUniqueValues = (arr) => {
    if(arr.length === 0) return 0;
    let pointerOne = 0;

    for (let i = 1; i < arr.length; i++) {
        if(arr[pointerOne] !== arr[i]){
            pointerOne++;
			arr[pointerOne] = arr[i];
        }
    }
    return pointerOne + 1;
}
console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4