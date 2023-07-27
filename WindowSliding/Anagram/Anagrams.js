const findAnagrams = (s, p) => {
  // Your code goes here
  const map = new Map();
  const anagramArr = [];
  for (let letter of p) {
    map.set(letter, (map.get(letter) || 0) + 1);
  }
  let count = map.size;
  let i = 0,
    j = 0,
    k = p.length;
  while (j < s.length) {
    // if letter is found in string then decrease it's value
    if (map.has(s[j])) {
      map.set(s[j], map.get(s[j]) - 1);
    }
    // if letter value becomes zero then decrease count.
    // like if a become zero then decrease count and so on for b and c.
    if (map.get(s[j]) === 0) {
      count--;
    }
    if (j - i + 1 < k) j++;
    else if (j - i + 1 === k) {
      // count is zero then pushed  index 'i' into array
      if (count === 0) {
        anagramArr.push(i);
      }
      // check
      if (map.has(s[i])) {
        map.set(s[i], map.get(s[i]) + 1);
      }
      if (map.get(s[i]) === 1) {
        count++;
      }
      i++;
      j++;
    }
  }
  return anagramArr;
};

const result = findAnagrams("cbaebabacd", "abc");
console.log(result);
