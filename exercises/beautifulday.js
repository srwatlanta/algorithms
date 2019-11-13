function beautifulDays(i, j, k) {
    let count = 0
    while(i <= j){
      let diff = (i - getReverse(i)) / k
      if(Number.isInteger(diff)) count++
      i++
    }
    return count
  }
  
  function getReverse(num){
    let n = num + ""
    return Number(n.split("").reverse().join(""))
  }