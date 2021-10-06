const getDigit = (num:number,place:number):number =>{
    return Math.floor( Math.abs(num) / Math.pow(10, place)) % 10;
}

const digitCount = (num:number) =>{
    if(num === 0) return 1
    return Math.floor( Math.log10( Math.abs(num) ) ) + 1;
}

const mostDigits = (arr:Array<number>):number =>{
    let max = 0;
    for (const num of arr) {
        let digit = digitCount(num);
        max = max < digit ? digit : max;
    }
    return max;
}

const radixSort = (arr:Array<number>):Array<number> =>{
    const maxDigits:number = mostDigits(arr);
    for (let i = 0; i < maxDigits; i++) {
        let buckets:any[] = [[],[],[],[],[],[],[],[],[],[]]
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j])
        }
        arr = [].concat(...buckets);
    }
    return arr
}

console.log(radixSort([12345, 2, 11111, 78]))