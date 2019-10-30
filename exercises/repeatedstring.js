function repeatedString(s, n) {
  if(s.length === 1 && s === 'a') return n
  let aCount = 0
  let times = Math.floor(n / s.length)
  let remainder = n % (s.length * times)
  let run = Math.min(n, s.length)
  for(let i = 0; i < run; i++){
    if(s[i] === 'a') aCount += 1
  }
  if(times === 0)return aCount
  else{
    if(remainder === 0)return (aCount * times)
    else{
      aCount = aCount * times
      for(let i = 0; i < remainder; i++){
        if (s[i] === 'a') aCount += 1
      }
      return aCount
    }
  }
}