var intersect = function(nums1, nums2) {
    let obj = {}
    let arr = []
    for(let i = 0; i < nums2.length; i++){
      let key = nums2[i]
      obj[key] = (obj[key] || 0) + 1
    }
    
    for(let j = 0; j < nums1.length; j++){
      let key = nums1[j]
      if (obj[key]){
        arr.push(key)
        obj[key]--
      }
    }
    return arr  
  };