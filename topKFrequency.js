// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    //create an object to store the number of times a number appears
    let map = {};
    //create an array to store the result
    let result = [];
    //loop through the array of numbers
    for (let i = 0; i < nums.length; i++) {
        //if the number is in the object, increment the value by 1
        if (map[nums[i]]) {
            map[nums[i]]++;
        }
        //else set the value to 1
            //map[nums[i]] = 1;
        else {
            
            map[nums[i]] = map[nums[i]] || 1;
        
            map[nums[i]] = 1;
        }
    }
    //sort the object by value
    let sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
    //loop through the sorted array and push the first k elements into the result array
    for (let i = 0; i < k; i++) {
        result.push(sorted[i][0]);
    }
    return result;

}
console.log(topKFrequent([1,1,1,2,2,3], k = 2))

    
