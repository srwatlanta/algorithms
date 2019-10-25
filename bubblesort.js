const bubbleSort = arr => {
    let noSwaps
    for(let i = arr.length; i > 0; i--){
      noSwaps = true
      for(let j = 0; j < i - 1; j++){
        let k = j + 1
        if(arr[j] > arr[k]){
          [arr[j], arr[k]] = [arr[k], arr[j]]
          noSwaps = false
        }
      }
      if(noSwaps === true) break
    }
    return arr
  }

  