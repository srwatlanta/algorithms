const linearSearch = (arr, val) => {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === val)return i
    }
  }
  
  const binarySearch = (arr, val) => {
    let left = 0
    let right = arr.length
    let middle
    while(left <= right && arr[middle] !== val){
      middle = Math.floor((left + right) / 2)
      if (arr[middle] === val) return middle
      else if (arr[middle] > val) right = middle - 1
      else left = middle + 1
    }
    return -1
  }