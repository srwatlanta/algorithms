function repeatedString(s, n) {
    if(s.length === 1 && s === 'a') return n
    let aCount = 0
    for(let i = 0; i < n; i ++){
      if(s[i] === 'a' || s[i % s.length] === 'a'){
        aCount += 1
      }
    }
    return aCount
}