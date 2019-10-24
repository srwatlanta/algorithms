function twoStrings(s1, s2){
    let string = s1.concat(s2)
    return !(new Set(string).size === string.length)
  }