function isValid(s) {
    let obj = {}
    for(let i = 0; i < s.length; i++){
      let char = s[i]
      obj[char] = (obj[char] || 0) + 1
    }
    let single = false
    let keys = Object.keys(obj)
    let base = obj[keys[0]]
    for(let i = 1; i < keys.length; i++){
      if(obj[keys[i]] !== base && single){
        return "NO"
      }else if(obj[keys[i]] !== base){
        single = true
        if(Math.abs(obj[keys[i]] - base > 1)) return "NO"
      }
    }
    return "YES"
  }