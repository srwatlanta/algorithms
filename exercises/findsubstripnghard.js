var findSubstring = function(s, words) {
    let length = words[0].length
    let array = []
    let i = 0
    while(i < s.length){
      array.push(s.slice(i, i + length))
      i += length
    }
    let freqObj = {}
    for(let j = 0; j < words.length; j++){
      let word = words[j]
      freqObj[word] = (freqObj[word] || 0) + 1
    }
    let objCopy = Object.assign({}, freqObj)
    let goal = words.length
    let count = []
    for(let k = 0; k < array.length; k++){
       let word = array[k]
       if(objCopy[word] > 0){
         objCopy[word] -= 1
         for(let m = 1; m < goal; m++){
           console.log(objCopy)
           if(!objCopy[array[m + k]] || objCopy[array[m + k]] === 0){
             objCopy = Object.assign({}, freqObj)
             break
           }else{
             objCopy[array[m + k]] -= 1
             if(m === goal - 1){
               count.push(k)
               objCopy = Object.assign({}, freqObj)
             }
           }
         }
       }
    }
    let newCount = count.map(num => num * length)
    return newCount
    
  };