const capitalizeWords = (arr: Array<string>): Array<string>=> {
  // add whatever parameters you deem necessary - good luck!
  let newArr = []
  if(arr.length === 0)return[]
  newArr = newArr.concat([ arr[0].toUpperCase()]);
  
  return newArr.concat(capitalizeWords(arr.splice(1)))
  
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words))