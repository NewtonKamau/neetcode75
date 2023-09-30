// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) { 
    //create an object to store the number of times a number appears
    let map = {};
    //loop through the array of numbers
    for (let i = 0; i < nums.length; i++) {
        //if the number is in the object, increment the value by 1
        if (map[nums[i]]) {
            map[nums[i]]++;
        }
        //else set the value to 1
        else {
            map[nums[i]] = 1;
        }
    }
    //loop through the object
    for (let key in map) {
        //if the value is greater than 1, return true
        if (map[key] > 1) {
            return true;
        }
    }
    //else return false
    return false;

    
};