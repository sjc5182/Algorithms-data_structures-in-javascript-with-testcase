// Find all occurrence of anagrams of a given string s in a given string l. Return the list of starting indices.

// Assumptions

// s is not null or empty.
// l is not null.
// Examples

// l = "abcbac", s = "ab", return [0, 3] since the substring with length 2 starting from index 0/3 are all anagrams of "ab" ("ab", "ba").

// first check if long string is empty or not, return empty array if true
// iterate through string and slice the short string size and compare string value with short string value, capture the index if return true
// move the pointer position two next move till the end
function allAnagrams(sh, lo) {
  const Arr = [];
  let current = ''
  let shortStringSize = sh.length
  if(lo.length === '' || lo.length ===null){
    return []
  }
  // Be mindful, splice mutate the origin array, while slice doesn't
  for(let i = 0; i<lo.length; i++){
    let longString = lo.split('');
    current = longString.splice(i, shortStringSize).sort().join('')// ascii strings then the default sorting implementation will do
    if(sh === current){
      Arr.push([i, i+shortStringSize-1])
    }
  }
  return Arr
}



// Notes: 
//       1. to iterate through string, use "for loops" or "for of" loop. you can also use foreach, but makesure you convert string to array of char.

//test cases
 let testData = [
   ['a', ''], // []
   ['a', 'bcdefg'], // []
   ['a', 'aaa'], // [[0], [1], [2]
   ['aa', 'baaaa'], //[[0,1]]
   ['abc', 'bacbabc'], //[[0,2], [1,3], [2,4], [4,6]]
   ['aab', 'ababacbbaac']
 ]

 // Testing function
 function main(data){
  data.forEach(element => {
    console.log(allAnagrams(element[0], element[1]))
  });
 }

 main(testData)