var strStr = function(haystack, needle) {
    if(needle === "") return 0
    if(needle.length > haystack.length)return -1
        for(let i = 0; i < haystack.length; i++){
      let j = 0
      while(j < needle.length){
        if(haystack[i + j] === needle[j]){
          if(j === needle.length - 1){
            return i
          }
          else j++
        }
        else break
      }    
    }
    return -1
};