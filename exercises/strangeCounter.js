function strangeCounter(t) {
    let start = 3
    while(t > start){
      t = t - start
      start *= 2
      console.log(t, start)
    }
    return start - t + 1
  }