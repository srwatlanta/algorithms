var singleNumber = function(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        obj[num] ? delete obj[num] : obj[num] = 1
    }
    
    return Number(Object.keys(obj))
    
};