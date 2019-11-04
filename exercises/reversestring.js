function reverseWords(s){
    let x = s.split(" ")
for(let i = 0; i < x.length; i++){
  x[i] = reverseString(x[i])
}
return x.join(" ")
}

function reverseString(s){
if(s === "") return ""
return(reverseString(s.substr(1)) + s.charAt(0))
}