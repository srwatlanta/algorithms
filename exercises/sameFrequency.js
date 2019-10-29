function sameFrequency(num1, num2){
    let obj1 = {}
    let first = num1.toString()
    let second = num2.toString()
    if (first.length !== second.length){
      return false
    }
    for(let i = 0; i < first.length; i++){
      obj1[first[i]] ? obj1[first[i]] +=1 : obj1[first[i]] = 1
    }
    for(let i = 0; i < second.length; i++){
      if(!obj1[second[i]] || obj1[second[i]] === 0) return false
      else obj1[second[i]] -= 1
    } 
    return true
  }
  
  sameFrequency(1233, 3321)