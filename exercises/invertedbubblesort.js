const bubblesort = (arr, n) => {
    for(let i = 0; i < arr.length; i ++){
        for(let j = arr.length - 1; j > i; j--){
            let k = j - 1
            if(arr[j] < arr[k]){
              [arr[k], arr[j]] = [arr[j], arr[k]]
            }
        }
    }
}