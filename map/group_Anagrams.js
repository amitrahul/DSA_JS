/**
 * Problem Description
Given an array of strings, group anagrams together.

Input format
First line contains an integer N - Number of String.

Second line contains N strings.

Output format
Print each group on a separate line.

For each group print all anagrams of a group on a single line.

Note:The order of your output does not matter.

Sample Input 1
6 eat tea tan ate nat bat

Sample Output 1
ate eat tea
nat tan
bat

Sample Input 2
6 arun aurn desk kept kpet kkpk

Sample Output 2
arun aurn
kept kpet
kkpk
desk

Constraints
N <= 25000

Length of string <= 250

String contains only lowercase characters.
 * 
 */

/**
 * @param {number} n
 * @param {String[]} strings
 * @return {String[][]}
 */
function groupAnagram(n, strings) {
  // create an array to store the result
  const anagramArray = [];
  // created map data structure
  let map = new Map();

  // iterate over input array
  for (let element of strings) {
    // map key generated from it
    // convert all word in same format
    let key = element.split("").sort().join("");

    //Check if map has key or not
    // if it has then
    if (map.has(key)) {
      // get value of key from map which is in array format
      let valueArray = map.get(key);
      // store all other value of key to this array
      valueArray.push(element);
      // set the map with all values of key
      map.set(key, valueArray);
    } else {
      // add the key value to map
      // add value in array format beacuse
      // one key has multiple value
      map.set(key, [element]);
    }
  }

  // iterate over map to push value to result array
  for (let [k, v] of map) {
    anagramArray.push(v);
  }
  return anagramArray;
}

const input = ["ate", "eat", "tea", "nat", "tan", "bat"];

const result = groupAnagram(6, input);
console.log(result);
/** [ [ 'ate', 'eat', 'tea' ], [ 'nat', 'tan' ], [ 'bat' ] ] */
