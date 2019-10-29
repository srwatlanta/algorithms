let areThereDuplicates = (...args) =>{
    return !(new Set(args).size === args.length)
  }
  
  let areThereDuplicates2 = (...args) =>{
    let obj = {}
    for(let i = 0; i < args.length; i++){
      if(obj[args[i]]) return true
      else obj[args[i]] = true
    }
    return false
  }
  
  areThereDuplicates(1, 1, 2, 4, 3, 2, 32, 55)
  areThereDuplicates2(1, 2, 4, 3, 32, 55)