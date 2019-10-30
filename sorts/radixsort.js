function radixSort(arr){
    let loop = mostDigits(arr)
    for(let i = 0; i < loop; i ++){
      let buckets = Array.from({length: 10}, () => [])
      for(let j = 0; j < arr.length; j++){
        let digit = getDigit(arr[j], i)
        buckets[digit].push(arr[j])      
      }
      arr = [].concat(...buckets)
    }  
    return arr
  }
  
  function mostDigits(arr){
    let max = 1
    for(let i = 0; i < arr.length; i++){
      max = Math.max(getDigitCount(arr[i]), max)
    }
    return max
  }
  
  function getDigitCount(num){
    if(num === 0)return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1 
  }
  
  function getDigit(num, i){
    return Math.floor(Math.abs(num)/ Math.pow(10, i)) % 10
  }