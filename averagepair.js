const averagePair = (arr, num) => {
  let start = 0
  let end = arr.length -1
  while(start < end){
    let middle = ((arr[start] + arr[end]) / 2)
    if (middle === num) return true
    else middle > num ? end-- : start++
  }
  return false
}

averagePair([1,2,5,6,7,8], 7)