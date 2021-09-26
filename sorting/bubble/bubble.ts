//O(n) or O(n^2)
const bubble = (arr: Array<any>):Array<any> =>{
    for(let j = arr.length; j > 0; j--){
        let noSwaps:boolean = true;
        console.log("swap")
        for(let i = 0; i < j - 1; i++){
            if(arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                noSwaps = false;
            }
        }
        if(noSwaps)break;
    }
    return arr
}

const swap = (arr: Array<number>,index: number, index2: number) =>{
    [arr[index], arr[index2]] = [arr[index2], arr[index]]
}

console.log(bubble([
10, 14, 14, 18,
  29, 50,30, 37
]))