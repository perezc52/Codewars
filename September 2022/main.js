//September 1 2022
// Define a method/function that removes from a given array of integers all the values contained in a second array.

Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(el => !values_list.includes(el))
  }

  //September 2 2022
  // This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

var a = "code";
var b = "wa.rs";
var name = a + b;

//September 3 2022
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  return str.endsWith(ending)
 }

//September 4 2022
// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
  let sum = arr.map(el => el*el)
               .reduce((acc, el) => acc + el, 0)
  return Math.floor(Math.sqrt(sum) / 2)
}

//September 5 2022
// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW

function toAcronym(inp){
  return inp.split(' ').map(el => el[0].toUpperCase()).join('')
 }

 //September 7 2022
//  You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted

function maxDiff(list) {
  if(list.length === 0) return 0
  return Math.max(...list) - Math.min(...list)
};

//September 10 2022
// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

// examples:

// [2, 10, 9, 3] is a nice array because

//  2 =  3 - 1
// 10 =  9 + 1
//  3 =  2 + 1
//  9 = 10 - 1

// [4, 2, 3] is a nice array because

// 4 = 3 + 1
// 2 = 3 - 1
// 3 = 2 + 1 (or 3 = 4 - 1)

// [4, 2, 1] is a not a nice array because

// for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

function isNice(arr){
  if(arr.length === 0) return false
  let flag = true
  for(let i = 0; i < arr.length; i++) {
    if(!(arr.includes(arr[i]-1) || arr.includes(arr[i]+1))) {
      flag = false
    }
  }
  return flag
}

//September 11 2022
// A new school year is approaching, which also means students will be taking tests.

// The tests in this kata are to be graded in different ways. A certain number of points will be given for each correct answer and a certain number of points will be deducted for each incorrect answer. For ommitted answers, points will either be awarded, deducted, or no points will be given at all.

// Return the number of points someone has scored on varying tests of different lengths.

// The given parameters will be:

// An array containing a series of 0s, 1s, and 2s, where 0 is a correct answer, 1 is an omitted answer, and 2 is an incorrect answer.
// The points awarded for correct answers
// The points awarded for ommitted answers (note that this may be negative)
// The points deducted for incorrect answers (hint: this value has to be subtracted)
// Note: The input will always be valid (an array and three numbers)

// Examples
// #1:

// [0, 0, 0, 0, 2, 1, 0], 2, 0, 1  -->  9
// because:

// 5 correct answers: 5*2 = 10
// 1 omitted answer: 1*0 = 0
// 1 wrong answer: 1*1 = 1
// which is: 10 + 0 - 1 = 9

// #2:

// [0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)  -->  3

function scoreTest(str, right, omit, wrong){
  let result = 0
  for(let answer of str) {
    if(answer === 0) result += right
    if(answer === 1) result += omit
    if(answer === 2) result -= wrong
  }
  return result
}

//September 12 2022
// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
  return str.split('').join(' ')
}

//September 13 2022
// The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.

// Their first act in power is absolute wealth equality through coercive redistribution.

// Create a function that redistributes all wealth equally among all citizens.

// Wealth is represented as an array/list where every index is the wealth of a single citizen.
// The function should mutate the input such that every index has the same amount of wealth.

// See example:

// Input:
// [5, 10, 6]  >>> This represents:
//            # citizen 1 has wealth 5
//            # citizen 2 has wealth 10
//            # citizen 3 has wealth 6
// Should be after the test:
//  [7, 7, 7] >>> wealth has now been equally redistributed
// Info:

// MUTATE the input array/list, don't return anything
// Input is guaranteed to hold at least 1 citizen
// Wealth of a citizen will be an integer with minimum equal to 0 (negative wealth is not possible)
// Handling of floating point error will not be tested

function redistributeWealth(wealth) {
  let average = wealth.reduce((acc, el) => acc + el) / wealth.length
  for(let i = 0; i < wealth.length; i++) {
    wealth.splice(i, 1, average)
  }
  void wealth
}

//September 14 2022
// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array(arr){
  let arrArr = arr.split(',')
  if(arrArr.length <= 2) return null
  arrArr.pop()
  arrArr.shift()
  return arrArr.join(' ')
}

//September 15 2022
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Return the result as a Boolean

// Input >> Output Examples
// tidyNumber (12) ==> return (true)
// Explanation:
// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

// tidyNumber (32) ==> return (false)
// Explanation:
// The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

// tidyNumber (1024) ==> return (false)
// Explanation:
// The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

// tidyNumber (13579) ==> return (true)
// Explanation:
// The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

// tidyNumber (2335) ==> return (true)
// Explanation:
// The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3

function tidyNumber(n){
  return n.toString().split('').join('') == n.toString().split('').sort().join('')
}

//September 17 2022
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b)
}

//September 19 2022
// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x){
  return x.map(el => {
    if(el == 27) return '!'
    if(el == 28) return '?'
    if(el == 29) return ' '
    return String.fromCharCode(123-el)
  }).join('')
}

//September 20 2022
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  return array.filter(el => el % 2 === 0).slice(-number)
}

//September 21
// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
  let remainder = cap - on
  return remainder >= wait ? 0 : wait - remainder
}

//September 23 2022
// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr) {
  if(arr.length === mixArr.length) return 0
  mixArr = mixArr.sort((a,b) => a - b)
  for(let i = 0; i < arr.length; i++) {
    if(mixArr[i] !== arr[i]) return arr[i]
  }
}

//September 24 2022
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

function sumOfMinimums(arr) {
  return arr.map(el => Math.min(...el)).reduce((acc, el) => acc + el)
}

//September 25 2022
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
  let values = {}

  let wordsArr = words.split(' ')
  for(let i = 0; i < wordsArr.length; i++) {
    let num = wordsArr[i].split('').filter(el => '0123456789'.includes(el))[0]
    values[wordsArr[i]] = Number(num)
  }

  let sortedEntries = Object.entries(values).sort((a,b) => a[1] -b[1])

  return sortedEntries.map(el => el[0]).join(' ')

}

//September 26 2022
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  let odds = array.filter(el => el % 2 !== 0).sort((a,b) => a - b)
  let oddsCounter = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
      array[i] = odds[oddsCounter]
      oddsCounter++
    }
  }
  return array
}

//September 27 2022
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
  x = x.split(' ')
  let scores = x.map(el => {
    let count = 0
    for(let i = 0; i < el.length; i++) {
      count += el[i].charCodeAt() - 96
    }
    return count
  })
  let highestIndex = scores.indexOf(Math.max(...scores))
  return x[highestIndex]
}

//September 28 2022
// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr,n){
  let occurences = {}
  for(let i = 0; i < arr.length; i++) {
    if(occurences[arr[i]]) {
        occurences[arr[i]]++
        if(occurences[arr[i]] > n) {
        arr[i] = null
      }
    }else {
        occurences[arr[i]] = 1
        if(occurences[arr[i]] > n) {
        arr[i] = null
      }
    }
  }
  return arr.filter(el => el !== null)
}