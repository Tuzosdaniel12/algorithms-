interface SomeRecursive {
    arr:Array<number>,
    (num:number):void;  
}

const someRecursive = (arr: Array<number>, cb:any):boolean => {
    if (arr.length === 0) return false;
    if (cb(arr[0])) return true;
    return someRecursive(arr.slice(1),cb);
}

const isOdd = (num): boolean => {
    return num % 2 !== 0
}

console.log(someRecursive([2,4, 6, 8, 9], isOdd));