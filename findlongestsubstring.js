const findLongestSubstring = (string) => {
    let longest = 0
    let obj = {}
    let start = 0
    for(let i = 0; i < string.length; i++){
      let letter = string[i]
      if(obj[letter]){
        start = Math.max(start, obj[letter])
      }
      longest = Math.max(longest, i - start + 1)
      obj[letter] = i + 1
    }
    return longest
  }
  
  findLongestSubstring("thisisawesome")