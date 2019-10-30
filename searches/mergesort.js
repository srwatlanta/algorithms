const merge = (a, b) =>{
    let newArr = []
    let i = 0
    let j = 0
    while(i < a.length && j < b.length){
        if(a[i] < b[j]){
            newArr.push(a[i])
            i++
        }else{
            newArr.push(b[j])
            j++
        }
    }
    while(i < a.length){
      newArr.push(a[i])
      i++
    }
    while(j < b.length){
      newArr.push(b[j])
      j++
    }
    return newArr
}

function mergeSort(arr){
  if(arr.length <= 1)return arr
  let middle = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle))
  return merge(left, right)
}
