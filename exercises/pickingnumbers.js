function pickingNumbers(a) {
    let newA = new Array(100).fill(0)
    for(let i = 0; i < a.length; i++){
      let num = a[i]
      newA[num] += 1
    }
    
    let total = newA[0] + newA[1]
    for(let i = 2; i < newA.length; i++){
      total = Math.max(total, (newA[i] + newA[i - 1]))
    }
    
    return total
  }