function isPalindrome(x){
    let s = x.toString()
    if(s.length === 1) return true
    if(s.length === 2){
      return s[0] === s[1]
    }
    if(s[0] === s[s.length - 1]){
      return isPalindrome(s.slice(1, -1))
    }
    return false
  }
  
  function isPalindrome(x){
    let s = x.toString()
    let left = 0
    let right = s.length - 1
    while(left < right){
      if(s[left] === s[right]){
        left ++
        right --
      }else{
        return false
      }
    }
    return true
  }