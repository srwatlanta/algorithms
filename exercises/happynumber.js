let seen = {}
function happyNumber(num){  
  if(num === 1) return true
  else if(seen[num]) return false
  let arr = num.toString().split('') 
  let total = 0
  for(let i = 0; i < arr.length; i++){
    total += (parseInt(arr[i]) * arr[i])
  }
  seen[num] = true
  return happyNumber(total)
}