function solutionCounter(A) {
    // Frequency counter
    let maxCount = 0
    let tempCount = 1
    let num1 = A[0]
    let num2 = -1
    for(let i = 1; i < A.length; i++){
      if(A[i] !== num1){
        if(num2 <  0){
          num2 = A[i]
          tempCount++
        }else if(num2 === A[i]){
          tempCount++
        }else{
          num1 = A[i]
          maxCount = (Math.max(maxCount, tempCount))
        }
      }else{
        tempCount++
      }
    }
    return tempCount
}