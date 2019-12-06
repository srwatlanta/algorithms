var majorityElement = function(nums) {
    let goal = Math.floor(nums.length / 2) + 1
    let obj = {}
    for(let i = 0; i < nums.length; i++){
      let key = nums[i]
      obj[key] = (obj[key] || 0) + 1
      if(obj[key] === goal) return key
    }
  };