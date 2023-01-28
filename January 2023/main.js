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

//January 18 2023
// Sort the Gift Code

// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
// Examples (Input -- => Output):

// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

function sortGiftCode(code){
  return code.split('').sort().join('')
}

//January 19 2023
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray){
  return stringarray.map(el => Number(el))
}

//January 20 2023 Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x){
  let bumps = x.split('').filter(el => el === 'n').length
  return bumps <= 15 ? "Woohoo!" : "Car Dead"
}

//January 21 2023
// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.
// Notes:

//     Letters will always be lowercase.
//     Letters can overflow (see second to last example of the description)
//     If no letters are given, the function should return 'z'

// Examples:

// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

function addLetters(...letters) {
  if(letters.length === 0) return 'z'
  let nums = letters.map(el => el.charCodeAt() - 96)
  let sum = nums.reduce((acc, el) => acc + el)
  if(sum > 26) {
    sum = sum % 26 || 26
  }
  let letter = String.fromCharCode(sum + 96)
  return letter
}

//January 22 2023
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
  return numbersArray.filter(el => el % 2 === 0)
}

//January 23 2023
// #Get the averages of these numbers

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

// Example:

// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]

// If the array has 0 or 1 values or is null, your method should return an empty array.

function averages(numbers) {
  console.log(numbers)
  if(!numbers) return []
  let averages = []
  for(let i = 0; i < numbers.length-1; i++) {
    let avg = (numbers[i] + numbers[i + 1]) / 2
    averages.push(avg)
  }
  return averages
}

//January 24 2023
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(x){
  let stringSum = x
                  .filter(el => typeof el === 'string')
                  .map(el => Number(el))
                  .reduce((acc, el) => acc + el, 0)
  let integerSum = x
                  .filter(el => typeof el === 'number')
                  .reduce((acc, el) => acc + el, 0)
  return integerSum - stringSum
}

//January 25 2023
// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

var palindromeChainLength = function(n) {
  let steps = 0
  while(!isPalindrome(n)) {
    n += reverseNum(n)
    steps++
  }
  return steps
};

function isPalindrome(num) {
  return num.toString() === num.toString().split('').reverse().join('')
}

function reverseNum(num) {
  return Number(num.toString().split('').reverse().join(''))
}

//January 26 2023
// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
  let sum = n
  while(n >= 1) {
    sum += Math.floor(n / 2)
    n = Math.floor(n / 2)
  }
  return sum
}


//january 27 2023
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n){
  let sum = 0
  for(let i = 1; i <= n; i++) {
    sum += Math.pow(i, 3)
  }
  return sum
}








