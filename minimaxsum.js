function miniMaxSum(arr) {
    let min = Infinity
    let max = -Infinity
    let total = 0
    for(let i = 0; i < arr.length; i++){
      min = Math.min(arr[i], min)
      max = Math.max(arr[i], min)
      total += arr[i]
    }
    return([(total - min), (total - max)])
  }