/*
https://leetcode.com/problems/merge-strings-alternately/

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d

*/

var mergeAlternately = function (word1, word2) {
  let str = "";
  if (word1.length === word2.length) {
    for (let i = 0; i < word1.length; i++) {
      str += `${word1[i]}${word2[i]}`;
    }
  } else {
    const minLength =
      word1?.length < word2?.length ? word1?.length : word2?.length;
    const largeWord = word1?.length === minLength ? word2 : word1;

    for (let i = 0; i < minLength; i++) {
      str += `${word1[i]}${word2[i]}`;
    }
    
    // Slice the remaining
    str += largeWord.slice(minLength, largeWord.length);
  }
  return str;
};
