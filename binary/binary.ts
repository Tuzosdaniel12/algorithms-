const calcMiddle = (left:number, right:number):number=>{
        return Math.floor((left + right) / 2);
}

const binarySearch = (arr: Array<number>, num: number):number => {
    if(num < arr[0] || num > arr[arr.length - 1]) return -1
    let left = 0;
    let right = arr.length - 1;
    let middle = calcMiddle(left, right);

    while(arr[middle] !== num) {
        num > arr[middle]
            ? left = middle + 1
            : right = middle - 1
        middle = calcMiddle(left, right); 
    }
    return middle
}
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6) )// -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)) // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) )// 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)) //-1