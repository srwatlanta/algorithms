function binaryGap(num){
    let max = 0
    for(let i = 0; i < num.length; i++){
      if(num[i] === "1"){
        let counter = 0
        for(let j = i + 1; j < num.length - i; j++){
          if(num[j] === "0"){
            counter++
          }else{
            max = Math.max(counter, max)
            break
          }
        }
      }
    }
    return max
  }