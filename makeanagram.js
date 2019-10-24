function makeAnagram(a, b){
    let count = 0
    let objA = {}
    let objB ={}
    for(let i = 0; i < a.length; i ++){
      objA[a[i]] = (objA[a[i]] || 0) + 1
    }
    for(let i = 0; i < b.length; i++){
      (objA[b[i]]) && objA[b[i]] !== 0 ? objA[b[i]] -= 1 : objB[b[i]] = (objB[b[i]] || 0) + 1
    }
    let list = Object.values(objA).concat(Object.values(objB))
    for(let i = 0; i < list.length; i ++){
      count += list[i]
    }
    return count
  }
  