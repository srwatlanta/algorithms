var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
      let obj = {}
      for(let i = 0; i < s.length; i++){
        let char = s[i]
        obj[char] = (obj[char] || 0) + 1
      }
    for(let j = 0; j < t.length; j++){
      let char = t[j]
      if(!obj[char] || obj[char] === 0) return false
      else obj[char] -= 1
    }
    return true
  };