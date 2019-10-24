//if strings are all unique characters
function twoStrings(s1, s2){
    let string = s1.concat(s2)
    return !(new Set(string).size === string.length)
  }

//otherwise
function twoStrings(s1, s2){
    let obj = {}
    for(let i = 0; i < s1.length; i ++){
      let char = s1[i]
      obj[char] = (obj[char] || 0) + 1
    }
    for(let i = 0; i < s2.length; i++){
      let char = s2[i]
      if(obj[char]) return "YEs"
    }
    return "NO"
  }
