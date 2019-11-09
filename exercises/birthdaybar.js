function birthday(s, d, m) {
    let count = 0
    let total = 0
    for(let i = 0; i < m; i++){
      total += s[i]
    }
    if (total === d) count++
    for(let i = m; i < s.length; i++){
      total = total + s[i] - s[i - m]
      if(total === d)count++
    }
    return count
  }
  