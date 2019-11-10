def highest_product_of_3(ints){
    if(ints.length < 3)throw new Error("need at least 3 integers")
      let highest = Math.max(ints[0], ints[1])
      let lowest = Math.min(ints[0], ints[1])
      let highest2Product = ints[0] * ints[1]
      let lowest2Product = highest2Product
      let highest3Product = ints[0] * ints[1] * ints[2]
      for(let i = 2; i < ints.length;i++){
          let current = ints[i]
          let potential = Math.max((highest2Product * current), (lowest2Product * current))
          highest3Product = Math.max(highest3Product, potential)
          highest2Product = Math.max(highest2Product, current * highest, current* lowest)
          lowest2Product = Math.min(lowest2Product, current * highest, current* lowest)
          highest = Math.max(highest, current)
          lowest = Math.min(lowest, current)
  
      }
      return highestProductOf3
  }
  
  