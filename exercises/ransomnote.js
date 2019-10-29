
//if all values in note are unique
function checkMagazine(magazine, note){
    if(note.length > magazine.length) return "No"
    let arr = magazine.concat(note)
    return new Set(arr).size === magazine.length ? "Yes" : "No"
  }

//if all values in note are not unique
  function checkMagazine(magazine, note){
    if(note.length > magazine.length) {
      console.log("No")
      return
    }
    let obj = {}
    for(let i = 0; i < magazine.length; i ++){
      obj[magazine[i]] = (obj[magazine[i]] || 0) + 1
    }
    for(let i = 0; i < note.length; i++){
      if(!obj[note[i]] || obj[note[i]] === 0) {
        console.log("No")
        return
      }else{
        obj[note[i]] -= 1
      }
    }
    console.log("Yes")
  }