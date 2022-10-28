//October 1 2022
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

function longestConsec(strarr, k) {
    if(k <= 0) return ""
    if(k >= strarr.length) return ""
    let strings = []
    for(let i = 0; i < strarr.length; i++) {
      let chunk = strarr.slice(i, i+k).join('')
      strings.push(chunk)
    }
    let counts = strings.map(el => el.length)
    let longest = counts.indexOf(Math.max(...counts))
    return strings[longest]
  }
  
  //October 2 2022
//   Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

function tribonacci(signature,n){
  let res = []
  for(let i = 0; i < n; i++) {
    if(i < 3) {
      res.push(signature[i])
      continue
    }
    let val = res.slice(i-3, i).reduce((acc,el) => acc + el)
    res.push(val)
  }
  return res
}

//October 4 2022
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
  var space = "";
  var star = "";
  var result = [];
  for (var i = 1; i <= nFloors; i++) {
    space = (" ").repeat(nFloors - i);
    star = ("*").repeat((2 * i) - 1);
    result.push(space + star + space);
  }
  return result;
}

//October 12 2022
// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

function fizzbuzz(num) {
  for(let i = 1; i <= num; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('Fizz Buzz')
    }else if(i % 5 === 0) {
      console.log('Buzz')
    }else if(i % 3 === 0) {
      console.log('Fizz')
    }else {
      console.log(i)
    }
  }
}
console.log(fizzbuzz(15))
console.log(fizzbuzz(20))
console.log(fizzbuzz(25))

//October 16 2022
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
      for(let j = 0; j < nums.length; j++) {
          if(i === j) continue
          if(nums[i] + nums[j] === target) return [i, j]
      }
  }
};

//October 18 2022
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(arr) {
  let nums = arr.map(el => Number(el))
  return nums.reduce((acc, el) => acc + el, 0)
}

console.log(sumMix([9, 3, '7', '3']))
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))

//October 19 2022
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

function getAverage(arr) {
  return Math.floor(arr.reduce((acc, el) => acc + el, 0) / arr.length)
  //O(n)
}

console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,2,3,4,5,]))
console.log(getAverage([1,1,1,1,1,1,1,2]))

//October 20 2022
// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

function repeats(arr) {
  let occurences = {}
  
  for(let i = 0; i < arr.length; i++) {
    if(occurences[arr[i]]) {
      occurences[arr[i]]++
    }else {
      occurences[arr[i]] = 1
    }
  }

  return arr.filter(el => occurences[el] < 2).reduce((acc, el) => acc + el, 0)

}

console.log(repeats([4,5,7,5,4,8]),15)
console.log(repeats([9, 10, 19, 13, 19, 13]),19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
console.log(repeats([5, 10, 19, 13, 10, 13]),24)

//October 21 2022
// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(arr, num) {
  return arr.filter(el => el % 2 === 0).slice(-num)

}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))

//October 25 2022
// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

function solve(arr) {
  return arr.map(el => [...new Set(el)])
            .map(el => el.length)
            .reduce((acc, el) => acc * el)
};

//October 26 2022
// Given an array of integers , Find the Nth smallest element in this array of integers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// nthSmallest({3,1,2} ,2) ==> return (2) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)

function nthSMallest(arr, pos) {
  return arr.sort((a,b) => a - b)[pos - 1]
}

//October 27 2022
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function transform(str) {
  return str
         .toLowerCase()
         .split('')
         .map(el => str.indexOf(el) === str.lastIndexOf(el) ? '(' : ')')
         .join('')
}

console.log(transform('din'), '(((')
console.log(transform("recede"), "()()()")
console.log(transform("Success"), ")())())")