var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ""
    let prefix = strs[0]
    for(let i = 1; i < strs.length; i++){
        let word = strs[i]
        if (word.length === 0)return ""
        for(let j = 0; j < word.length; j++){
            if(prefix === word)break
            else if(word.length === 1){
                if(prefix[0] === word[0]){
                    prefix = prefix[0]
                }else return ""
            }
            else if(prefix[j] !== word[j]){
                if(j === 0) return ""
                prefix = prefix.slice(0, j)
                break
            }
            else if(j === word.length - 1)prefix = prefix.slice(0, j + 1)

        }
    }
    return prefix
};