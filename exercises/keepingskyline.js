const skyline = arr =>{
    let builds = 0
    let maxXArr = []
    let maxYArr = []
    for(let i = 0; i < arr.length; i++){
      let maxX = 0
      let maxY = 0
      for(let j = 0; j< arr[0].length; j++){
        if(arr[i][j] > maxX)maxX = arr[i][j]
        if(arr[j][i] > maxY)maxY = arr[j][i]
      }
      maxXArr.push(maxX)
      maxYArr.push(maxY)
    }
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; j++){
        let temp = Math.min(maxXArr[i], maxYArr[j])
        builds += (temp - arr[i][j])
        arr[i][j] = temp
      }
    }
    return (builds)
  }