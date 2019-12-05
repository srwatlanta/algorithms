function getMoneySpent(keyboards, drives, b) {
    let total = 0
    for(let i = 0; i < keyboards.length; i++){
      for(let j = 0; j < drives.length; j++){
        let current = keyboards[i] + drives[j]
        if (current <= b){
          total = Math.max(current, total)
        }
      }
    }
    if(total === 0) total = -1
    return total
  }
  