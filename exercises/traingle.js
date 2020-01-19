function triangle(arr) {
    for (let i = arr.length-2; i >= 0; i--){
      for (let j = 0; j < arr[i].length; j++){
        console.log("before", arr[i][j])
        arr[i][j] += Math.min(arr[i+1][j], arr[i+1][j+1])
        console.log("after", arr[i][j])
      }
    }
    return arr[0][0]
}