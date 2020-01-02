function repeatedPattern(str) {
    let substring = "";
    let i = 0;
    let l = 0;
    while(i < str.length / 2) {
      substring += str[i]
      l++
      let j = i + 1
      while(j < str.length) {
        let temp = str.slice(j, j + l)
        if(temp !== substring) {
          break
        }
        j += l
      }
      i++
      if(j === str.length) return true
    }
    return false
  }