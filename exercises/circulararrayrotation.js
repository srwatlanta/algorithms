function circularArrayRotation(a, k, queries) {
    let newA = rotateArray(a, k)
    let q = []
    for(let i = 0; i < queries.length; i++){
      let index = queries[i]
      q.push(newA[index])
    }
    return q
  }
  
  function rotateArray(a, k){
    let rem = a.length - (k % a.length)
    let first = a.slice(rem)
    let second = a.slice(0, rem)
    return first.concat(second)
  }
  