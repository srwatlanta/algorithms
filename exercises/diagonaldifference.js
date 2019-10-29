function diagonalDifference(arr) {
    let d1 = 0
    let d2 = 0
    let n = arr.length
    for(let i = 0; i < arr.length; i++){
      d1 += arr[i][i]
      d2 += arr[i][n - i - 1]
    }
    let diff = d1 - d2
    return Math.abs(diff)
  }