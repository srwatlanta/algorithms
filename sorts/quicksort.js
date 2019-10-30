function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
      console.log(left, right)
      let pivot = findPivot(arr, left, right)
      quickSort(arr, left, pivot - 1)
      quickSort(arr, pivot + 1, right)
    }
    return arr
  }
  
  function findPivot (arr, start = 0, end = arr.length + 1){
    let pivot = arr[start]
    let swap = start
    for (let i = start + 1; i < arr.length; i++){
      if(arr[i] < pivot){
        swap++
        [arr[i], arr[swap]] = [arr[swap], arr[i]]
      }
    }
    [arr[start], arr[swap]] = [arr[swap], arr[start]]
    return swap
  }