const threeSum = function(nums, sum) { 
    let result = [];
    nums = nums.sort()
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === sum) {
                    result.push([nums[i], nums[j], nums[k]])
                }
            }
        }   
    }
    return result;
}

console.log(threeSum([1,3,2,1,52,5,6,2,1,-9], 7))