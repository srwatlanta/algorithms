const minSubArrayLength = (arr, num) =>{
  let i = 0
  let j = 0
  let total = 0
  let min = Infinity
  while(i < arr.length){
    if(total < num && j < arr.length){ 
      total += arr[j]
      j++
    }else if(total >= num){
      min = Math.min(min, j-i)
      total -= arr[i]
      i++
    }else{
      break
    }
  }
  return min === Infinity ? null : min
}

minSubArrayLength([1,1, 1,1 ,1 ,16, 42, 21, 2, 122], 140)