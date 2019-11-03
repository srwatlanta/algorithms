function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0
    let orangeCount = 0
    for(let i = 0; i < apples.length; i++){
      if(a + apples[i] >= s && a + apples[i] <= t)appleCount++
    }
    for (let i = 0; i < oranges.length; i++){
      if(b + oranges[i] <= t && b + oranges[i] >= s)orangeCount++
    }
    console.log(appleCount)
    console.log(orangeCount)
  
  }