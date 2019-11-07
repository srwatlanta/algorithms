function migratoryBirds(arr) {
    let birdObj = {}
    for(let i = 0; i < arr.length; i++){
      let bird = arr[i]
      birdObj[bird] = (birdObj[bird] || 0) + 1
    }
    let maxBird = 0
    let birdCount = -Infinity
    for(const key in birdObj){
      if(birdObj[key] > birdCount){
        birdCount = birdObj[key]
        maxBird = key
      }else if(birdObj[key] === birdCount){
        maxBird = Math.min(maxBird, birdObj[key])
      }
    }
    return Number(maxBird)
  }