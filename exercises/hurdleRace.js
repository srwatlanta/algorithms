function hurdleRace(k, height) {
    let maxHurdle = 0
    for(let i = 0; i < height.length; i++){
      maxHurdle = Math.max(maxHurdle, height[i])
    }
    return Math.max((maxHurdle - k), 0)
  }