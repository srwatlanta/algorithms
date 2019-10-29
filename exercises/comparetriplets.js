function compareTriplets(a, b){
    aScore = 0
    bScore = 0
    for(let i = 0; i < 3; i ++){
      if(a[i] > b[i]){
        aScore += 1
      }else if (b[i] > a[i]){
        bScore += 1
      }else{
        null
      }
    }
    return [aScore, bScore]
  }