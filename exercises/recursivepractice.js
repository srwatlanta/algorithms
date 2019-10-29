const recursiveProduct = arr =>{
    if (arr.length === 1) return arr[0]
    return arr[0] * recursiveProduct(arr.slice(1))
  }
  
  const recursiveRange = num =>{
    if (num === 1) return 1
    return num + recursiveRange(num -1)
  }
  
  const recursiveFib = n => {
    if(n <= 2) return 1
    return recursiveFib(n-1) + recursiveFib(n-2)
  }
  
  const factorial = num => {
    if(num === 0) return 1
    return num * factorial(num-1)
  }
  
  const reverse = string =>{
    if (string.length <= 1) return string
    return reverse(string.slice(1)) + string[0]
  }
  
  const isPalindrome = string => {
    if(string.length === 1) return true
    if(string.length === 2) return string[0] === string[1]
    if(string[0] === string.slice(-1)){
      return isPalindrome(string.slice(1, -1))
    }
    return false
  }
  
  const flatten = arr =>{
    let newArray = []
    for(let i =0; i < arr.length; i++){
      if(Array.isArray(arr[i])) newArray = newArray.concat(flatten(arr[i]))
      else newArray.push(arr[i])
    }
    return newArray
  }
  
  flatten([1,[1,2], 4, [5,6,7], [9,10], 21, [1, [1,2,3]]])
  
  