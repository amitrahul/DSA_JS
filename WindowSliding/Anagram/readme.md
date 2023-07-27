# Find All Anagrams in a String

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation: The substring with start index = 0 is "cba", which is an anagram of "abc".

The substring with start index = 6 is "bac", which is an anagram of "abc".

Constraints:

1 <= s.length, p.length <= 3\*10^4
s and p consist of lowercase English letters.

- Pseudo code : (solved using window sliding)
  Approach #01(Fixed window)

1. create a map to store all value of window (p) or substring.
2. create a count , which store size of map.
3. create i and j to iterate over string and an array to store result.
4. create k , which store length of window or substring.
5. iterate over string until j is less than string's length.
6. check if s[j] exist in map ,
   1. if it is then decrease value of that letter in map.
7. if s[j] value become zero then decrease count, beacuse that letter present in substring.
8. check window size(j - i + 1) is less than k then increase j by 1.
9. when window size(j - i + 1) is equal to k , then
   1. if count is zero then push i to array
   2. now we have to move our window before that, we check if the value at index i exist in map then increase it's value by 1.
   3. if value of that letter in map is 1 then increase it's count by 1.
   4. here we have performed revese engineering of step 6 and 7 beacuse we are removing i and including next j.
   5. now increase i and j by 1.
10. return array.
