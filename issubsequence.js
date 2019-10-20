const isSubsequence = (sub, main) => {
    let j = 0
    for(let i = 0; i < main.length; i++){
      if(sub[j] ===  main[i]) j++
      if (j === sub.length) return true
     }
     return false
   }
  
  isSubsequence("hellr", "hello isabeller")