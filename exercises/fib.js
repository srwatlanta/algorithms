function fib2(n){
    if(n === 1) return 0
    if(n === 2) return 1
    var arr = [0, 1]
    
    for(let i = 2; i < n; i++){
      arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr[n - 1]
}