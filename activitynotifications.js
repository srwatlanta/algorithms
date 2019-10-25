function activityNotifications(expenditure, d) {
    if(expenditure.length < d) return 0
    let notices = 0
    for(let i = d; i < expenditure.length; i++){
      let mid = findMedian(expenditure.slice(i - d, i))
      if(expenditure[i] >= (mid * 2)) notices +=1
    }
    return notices
  }
  
  function findMedian(arr){
    let x = mergeSort(arr)
    if (x.length % 2 === 0){
      let z = x.length / 2
      return (x[z] + x[z + 1] / 2)
    }else{
      let first = Math.floor(x.length / 2)
      return x[first]
    }
  }
  
  function mergeSort (arr){
    if (arr.length <= 1) return arr
    let middle = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))
    return merge(left, right)
  }
  
  function merge(a, b){
    let arr = []
    let i = 0
    let j = 0
    while(i < a.length && j < b.length){
      if (a[i] < b[j]){
        arr.push(a[i])
        i++
      }else{
        arr.push(b[j])
        j++
      }
    }
    while(i < a.length){
      arr.push(a[i])
      i++
    }
    while(j < b.length){
      arr.push(b[j])
      j++
    }
    return arr
  }