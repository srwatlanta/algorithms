function birthdayCakeCandles(ar) {
    let max = 0
    let obj = {}
    for(let i = 0; i < ar.length; i++){
      let height = arr[i]
      obj[height] = (obj[height] || 0) + 1
      max = Math.max(max, height)
    }
    return obj[max]
  }