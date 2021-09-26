const selection = (arr:Array<number>):Array<number> => {
    
    const swap = (arr: Array<number>,index: number, index2: number) =>{
        [arr[index], arr[index2]] = [arr[index2], arr[index]]
    }

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[min] > arr[j]) min = j   
        }
        if(i !== min) swap(arr, min, i) 
    }
    return arr
}



console.log(selection([5,3,4,1,2]))