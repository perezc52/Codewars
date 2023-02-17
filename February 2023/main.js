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

//February 5 2023
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

//     If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//     If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}

//February 6 2023
// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

function countRedBeads(n) {
  if(n < 2) return 0
  return (n - 1) * 2
}

//february 7 2023
// You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?
// Your Task

// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.
// Rules

//     you can put at most 8 eggs into the pot at once
//     it takes 5 minutes to boil an egg
//     we assume, that the water is boiling all the time (no time to heat up)
//     for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

// Example (Input --> Output)

// 0 --> 0
// 5 --> 5
// 10 --> 10

function cookingTime(eggs) {
  let pots = Math.ceil(eggs / 8)
  return pots * 5
}

//February 8 2023
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
// Task

// Your task is to return a number from a string.
// Details

// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

var filterString = function(value) {
  let arr = value.split('')
  let nums = arr.filter(el => Number(el) || el === '0').join('')
  return Number(nums)
}

//February 9 2023
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// Notes:

//     If either input is an empty string, consider it as zero.

//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
  let sum = Number(a) + Number(b)
  return sum.toString()
}

//February 10 2023
// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys

function menFromBoys(arr){
 let evens = new Set(arr.filter(el => el % 2 === 0).sort((a,b) => a - b))
 let odds = new Set(arr.filter(el => el % 2 !== 0).sort((a,b) => b - a))
 return [...evens, ...odds]
}

//February 12 2023
// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

function switchItUp(number){
  switch(number) {
      case 0: return "Zero"
      case 1: return "One"
      case 2: return "Two"
      case 3: return "Three"
      case 4: return "Four"
      case 5: return "Five"
      case 6: return "Six"
      case 7: return "Seven"
      case 8: return "Eight"
      case 9: return "Nine"
  }
}

//February 13 2023
// Definition

// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Task

// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

function strong(n) {
  let factorialSum = n.toString().split('').reduce((acc, el) => Number(acc) + Number(factorial(el)) , 0)
  return n === factorialSum ? "STRONG!!!!": "Not Strong !!"
}

function factorial(num) {
  let res = 1
  for(let i = num; i > 0; i--) {
    res *= i
  }
    return res
}

//February 14 2023
// Grade book

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	'F'

function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3
  if(avg >= 90 && avg <= 100) return 'A'
  if(avg >= 80 && avg < 90) return 'B'
  if(avg >= 70 && avg < 80) return 'C'
  if(avg >= 60 && avg < 70) return 'D'
  if(avg < 60) return 'F'
}

//February 15 2023

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
  return typeof x === 'string' ? "Error" : (x * 50) + 6
}

//February 16 2023
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.

function correct(string)
{
	return string.split('').map(el => {
    if(el === '5') return 'S'
    if(el === '0') return 'O'
    if(el === '1') return 'I'
    return el
  }).join('')
}