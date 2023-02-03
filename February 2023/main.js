//February 1 2023
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)
// Examples

// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
    const entries = Object.entries(results)
    const scores = entries.filter(el => el[1] >= 60).sort((a,b) => b[1] - a[1]).map(el => el[0])
    return scores
  }

  //February 2 2023
//   Task

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  let sum = 0
  const sorted = arr.sort((a,b) => a - b)
  let half = sorted.splice(0, sorted.length/2).reverse()
  for(let i = 0; i < sorted.length; i++) {
    sum += sorted[i] * half[i]
  }
  return sum
}
