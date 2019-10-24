function candies(n, r){
    let candies = 0
    let temp = 1
    for(let i = 0; i < r.length; i++){
      if (r[i] >= r[i + 1]){
        if(r[i+1] > r[i+2]){
          candies += temp
          temp = 2
        }else{
          candies += temp
          temp = 1
        }
      }else{
        candies += temp
        temp ++
      }
    }
    return candies
  }