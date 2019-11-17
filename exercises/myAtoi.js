var myAtoi = function(s) {
    let arr = []
    let negative = null
    for(let i = 0; i < s.length; i++){
      let char = s[i]
      if(char !== " "){
        let num = Number(char)
        if(char === "-" && arr.length === 0){
          if(negative === null) negative = true
          else return 0
        }
        else if(char === "+" && arr.length === 0){
          if(negative === null) negative = false
          else return 0
        }
        else if(!isNaN(num)){
          arr.push(char)
        }
        else break
      }
      else{
        if(negative !== null || arr.length > 0) break
      }
    }
    if(arr.length === 0) return 0
    let final = Number(arr.join(''))
    if(negative === true)final = -Math.abs(final)
    if(final >= Math.pow(2, 31)){
        let x = Math.pow(2, 31)
        return (x - 1)
    }
    if(final < Math.pow(-2, 31))return Math.pow(-2, 31)
    return final
  };