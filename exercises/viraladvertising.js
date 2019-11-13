function viralAdvertising(n){
    let share = 5
    let likes = 0
    for(let i = 0; i < n; i++){
      share = Math.floor(share / 2)
      likes += share
      share *= 3
    }
    return likes
  }