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