function countingValleys(n, s) {
    let valleys = 0
    let count = 0
    for(let i = 0; i < s.length; i ++){
        if (s[i] === "U"){
            count += 1
        }else if(s[i] === "D" && count === 0){
            count -= 1
            valleys += 1
        }else{
            count -=1
        }
    }
    return valleys
}