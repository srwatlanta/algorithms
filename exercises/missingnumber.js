var missingNumber = function(nums) {
    let aim = nums.length * (nums.length + 1) / 2
    let total = 0
    for(let i = 0; i < nums.length; i++){
        total += nums[i]
    }
    return aim - total
};