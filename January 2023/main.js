//January 1
// Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
    return number * -1
  }

//January 2
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  return s.repeat(n)
}

//January 3
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let count = 0
  for(let i = 0; i < str.length; i++) {
    if("aeiou".includes(str[i])) count++
  }
  return count
}

//January 4 2023
// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so: 
function findNeedle(haystack) {
  for(let i = 0; i < haystack.length; i++) {
    if(haystack[i] === "needle") return `found the needle at position ${i}`
  }
}

//January 5 2023
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// export function even_or_odd(n:number):string {
//   return n % 2 === 0 ? "Even" : "Odd"
// }

//January 6 2023
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

//     our team always plays 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

function points(games) {
  let points = 0
  for(game of games) {
    let xScore = Number(game[0])
    let yScore = Number(game[2])
    if(xScore > yScore) points += 3
    if(xScore === yScore) points += 1
  }
  return points
}

//January 9 2023
// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  return str.match(/[a-z]/gi).reverse().join('')
}

//January 10 2023
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords (s) {
  let sArray = s.split(' ')
  let sSet = [...new Set(sArray)]
  return sSet.join(' ')
}

//January 11 2023
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum (numbers) {
  let highest = Math.max(...numbers)
  numbers.splice(numbers.indexOf(highest), 1)
  let secondHighest = Math.max(...numbers)
  return highest + secondHighest
}

//January 13 2023
// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
  return (n-2) * 180
}

//January 14 2023
// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

// NOTES

//     Vowels in this context refers to: a e i o u y (including upper case)
//     This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
  let vowels = []
  for(let i = 0; i < word.length; i++) {
    if("AEIOUYaeiouy".includes(word[i])) vowels.push(i+1)
  }
  return vowels
}

//January 15 2023
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  array = array.map(el => String(el))
  let longest = array[0]
  for(let i = 0; i < array.length; i++) {
    if(array[i].length > longest.length) longest = array[i]
  }
  return Number(longest)
}

//January 17 2023
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
name = name.toLowerCase()
return `Hello ${name[0].toUpperCase()}${name.slice(1)}!`
};





