const maxSubArray = (arr, num) => {
    let max = 0
    for(let i = 0; i < num; i++){
      max += arr[i]
    }
    for(let i = num; i < arr.length; i++){
      max = Math.max(max, (max + arr[i] - arr[i-num]))
    }
    return num > arr.length ? null : max
  }
  
  maxSubArray([1, 4, 45, 3, 22, 6, 12, 15], 3)