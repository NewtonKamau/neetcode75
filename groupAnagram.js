// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //create a object to store the anagrams
    let map = {};
    //loop through the array of strings
    for (let i = 0; i < strs.length; i++) {
        //sort the string
        let sorted = strs[i].split('').sort().join('');
        //if the sorted string is in the object, push the string into the array
        if (map[sorted]) {
            map[sorted].push(strs[i]);
        }
        //else create a new array with the string
        else {
            map[sorted] = [strs[i]];
        }
    }
    //return the values of the object
    return Object.values(map);


};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))