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

//February 3 2023
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
  let one = s.split('').map((el,i) => i % 2 === 0 ? el.toUpperCase() : el).join('')
  let two = s.split('').map((el,i) => i % 2 !== 0 ? el.toUpperCase() : el).join('')
  return [one, two]
};

//February 4 2023
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

function alphabetWar(fight) {
  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  }
  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  }
  
  let rightSum = 0
  let leftSum = 0
  
  for(let i = 0; i < fight.length; i++) {
    if(left[fight[i]]) leftSum += left[fight[i]]
    if(right[fight[i]]) rightSum += right[fight[i]]
  }
  
  if(rightSum > leftSum) {
    return 'Right side wins!'
  }else if(leftSum > rightSum) {
    return 'Left side wins!'
  }else {
    return "Let's fight again!"
  }
}

