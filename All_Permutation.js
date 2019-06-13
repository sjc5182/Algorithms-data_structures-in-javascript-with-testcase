// Given a string with no duplicate characters, return a list with all permutations of the characters.

// Examples

// Set = “abc”, all permutations are [“abc”, “acb”, “bac”, “bca”, “cab”, “cba”]
// Set = "", all permutations are [""]
// Set = null, all permutations are []


// abc
// acb
// bac
// bca
// cab
// cba
// 3*2*1=6

// logic is using recursive call, you don't know how big is the string, so recursive call till string charater is one left

function permutations(string) {
  let result = []
  if(string === ''){
    return [""]
  }
  if(string === null){
    return []
  }
  if(string.length === 1){
    result.push(string)
    return result
  }
  for(let i = 0; i<string.length; i++){
    let firstChar = string[i]
    let restString = string.substring(0, i) + string.substring(i+1)  
    let permutateRest = permutations(restString)
    for(let j = 0; j<permutateRest.length; j++){
      result.push(firstChar + permutateRest[j])
    }
  }
  return result
}

console.log(permutations('abcba'))

//test cases
// ;[
//   ['abc'],
//   ['a'],
//   ['ab'],
//   ['abcd'],
//   ['dbcae'],
//   ['ovcit'],
//   ['opgw'],
//   ['yzd'],
//   ['oxf'],
//   ['ep'],
//   ['qr'],
//   ['pjul'],
//   ['pwxm'],
//   ['xqc'],
//   ['fwyt'],
//   ['cibmj']
// ]
