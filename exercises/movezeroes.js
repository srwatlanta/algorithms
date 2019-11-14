var moveZeroes = function(nums) {
    let k = 0;
    for(let i=0; i< nums.length; i++){
        if(nums[i] === 0){
            k++;
        } else {
            nums[i-k] = nums[i];
            if(k>0)
                nums[i] = 0;
        }
    }        
    return nums;    
};