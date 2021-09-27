const pivot = (arr: Array<number>, start:number, end:number):number=>{
    let pivotNumber:number = arr[start];
    let swapIndex:number = start;
    for(var i = start + 1; i < end; i++) {
        if(pivotNumber > arr[i]){
            swapIndex++ 
            swapInx(arr, swapIndex, i);
        }
    }
    swapInx(arr, swapIndex, start);
    return swapIndex
}

const swapInx = (arr: Array<number>, indx:number, indx2:number) =>{
        [arr[indx], arr[indx2]] = [arr[indx2], arr[indx]]
}

const quickSort = (arr:Array<number>, left:number, right:number):Array<number> =>{
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

let testArray:number[] = [25,96, 4,8, 8,9,6,45,10]
console.log(quickSort(testArray, 0, testArray.length))