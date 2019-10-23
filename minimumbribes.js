function minimumBribes(q) {
    let small = q.length
    let bribes = 0
    for(let i = q.length -1; i >= 0; i--){
        if(q[i] - i > 3){
            return "Too chaotic"
        }
        if(q[i] > i + 1){
          bribes += (q[i] - (i + 1))
        }else{
          if(small > q[i]) small = q[i]
          else if (q[i] !== small) bribes++
        }
    }
  return bribes
}