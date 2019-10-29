function countSwaps(a) {
    let countSwaps = 0
    for(let i = a.length; i > 0; i--){
       for(let j = 0; j < i - 1; j++){
         let k = j + 1
         if (a[j] > a[k]){
           [a[j], a[k]] = [a[k], a[j]]
           countSwaps += 1
         }
       }
    }
    console.log(`Array is sorted in ${countSwaps} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length - 1]}`)
  }