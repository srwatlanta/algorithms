function freqQueries(queries){
    let arr = []
    let obj = {}
    for(let i = 0; i < queries.length; i++){
      if(queries[i][0] === 1){
        obj[queries[i][1]] = (obj[queries[i][1]] || 0) + 1
      }else if(queries[i][0] === 2){
        obj[queries[i][1]] ? obj[queries[i][1]] -= 1 : null
      }else{
        Object.values(obj).includes(queries[i][1]) ? arr.push(1) : arr.push(0)
      }
    }
    return arr
  }