// https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index =1;
    for(i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i - 1]) {
        nums[index] = nums[i];
        index++;
        }
    }
    return index;
};