//August 1 2022
// Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
// He can do ten kata in an hour, but when he makes a mistake, he must do pushups. These pushups really tire poor Alex out, so every time he does them they take twice as long. His first set of redemption pushups takes 5 minutes. Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them. Your function should return how many mistakes Alex can afford to make.

function alexMistakes(numberOfKata, timeLimit){
    let timeAvailableToMessUp = timeLimit - (numberOfKata * 6)
    let mistakeTime = 5
    let numOfMistakes = 0
    let totalTime = 0
    console.log(`# of Kata: ${numberOfKata}, Time limit: ${timeLimit}`)
    console.log(`Time available to mess up: ${timeAvailableToMessUp}`)
    while(totalTime <= timeAvailableToMessUp) {
      totalTime += mistakeTime
      mistakeTime = (mistakeTime * 2)
      console.log(`Total time spent doing pushups: ${totalTime}`)
      numOfMistakes++
    }
    return numOfMistakes-1
    //5, 10, 20, 40, 80
    //5, 15, 35, 75
  }

  //August 2 2022
//   If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

function wordsToMarks(string){
  let code = new Map()
  let num = 1
  for(let letter of 'abcdefghijklmnopqrstuvwxyz') {
    code.set(letter, num)
    num++
  }
  let sum = 0
  for(let letter of string) {
    let currentLetter = code.get(letter)
    sum += currentLetter
  }
  return sum
}

//August 3 2022
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

function productArray(numbers){
  /*
  P:takes in an array of integers. they will only be positive whole number elements
  R:it will return an array of the same size. also positive whole numbers
  E: [1,2,3,4] would return [24,12,8,6]
  P:iterate through the array
    for each element, get all the other elements of the array
    get the product of those other elements
    that will be the new result of the current index
    after all elements are mapped return the new array
  */
  return numbers.map((el,i,arr) => {
    let others = arr.slice(0,i).concat(arr.slice(i+1))
    let product = others.reduce((acc, el) => acc * el, 1)
    return product
  })
}

//August 4 2022
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
  /*
    P: a string comprised of just a's, b's, and c's
    R: same length string where the a's become b's and the b's become a's. the c's are left untouched
    R: 'abc' => 'bac'
    P: make the string to an array to be able to use a map function
       then map every b to an a and a to a b
       return the new mapped array as a string
  */
    let arr = x.split('')
    return arr.map(el => {
      if(el === 'a') return 'b'
      if(el === 'b') return 'a'
      return el
    }).join('')
  }

  //August 6 2022
//   Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

function min(arr, toReturn) {
  /*
  P:an array of at least one number. only whole numbers and no duplicates.
  the 2nd will only be the string 'value' or 'index'
  R:a number represeting either the value or index of the lowest number in the array
  E: [1,2,3], index => 0, [2,3,4], value => 2
  P: first find the lowest number in the array and save it to a variable.
     then see if it is asking for the value or index
     return the value or the index
  */
    let lowestValue = Math.min(...arr)
    if(toReturn === 'value') {
      return lowestValue
    } else {
      let index = arr.findIndex(el => el === lowestValue) 
      return index
    }

}

//August 10 2022
// You are to write an function that takes a string as it's first paramter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5) 
// Should return

// "string-string-string-string-string"

// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

// Simple. Good luck.

function modifyMultiply (str,loc,num) {
  /*
    P: 1st param is a string which will be a sentence. 2nd will be a whole positive integer
      that will represent a word in the string starting from 0, last will be another whole
      positive integer that will be the amount of times to multiply the targeted word by.
    R: we will return a string. and that string will be the targeted word displayed x amount
    of times and seperated by a hyphen
    E: "the tree is tall", 2, 3 => "is-is-is"
    P:first split the string by the spaces to have an array of the words.
      then with the second param use it to find the necessary word and save it to a variable
      next create a new string with the saved word and repeat it x times according to the last param  
  */
  let strArr = str.split(' ')
  let word = strArr[loc]
  let resultArr = []
  for(let i = 0; i < num; i++) {
    resultArr.push(word)
  }
  return resultArr.join('-')
} 

//August 14 2022
// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37
// Expected output:

// 20
// 30
// 40

const closestMultiple10 = num => {
  /*
  P: a whole number positive or negative
  R: a whole number that is divisible by 10
  E: 7 => 10, 1 => 0
  P: find the two numbers divisible by 10 on the ends of n
     get the difference between n and the 2 ends
     return the one with the smallest difference
  */
  return Math.round(num / 10) * 10

};

//august 15 2022
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  /*
  P: takes in a string of letters
  R: returns an array containing the pairs of letters
  E: "card" => ['ca', 'rd'], "car" => ['ca', 'r_']
  P: first determine if the str has even or odd amount of letters
     if its even then
     
  */
  let arr = []
  let count = 0
  let pair
  for(let i = 0; i < str.length/2; i++) {
    pair = str.slice(count, count+2)
    arr.push(pair)
    count += 2
  }
  if(str.length % 2 === 0) {
    return arr
  }else {
    arr[arr.length-1] += '_'
    return arr
  }
  
}

//August 20 2022
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){
  
  let wordsArr = string.split(' ')
  let result = wordsArr.map(el => weirdify(el)).join(' ')
  return result
  
  function weirdify(word) {
    return word
          .split('')
          .map((el, i, arr) => i % 2 === 0 ? el.toUpperCase() : el.toLowerCase())
          .join('')
  }
}

//August 22 2022
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer){
  let str = ''
  for(let i = 0; i < integer-1; i++) {
    str += `${"+".repeat(integer)}\n`
  }
  return str+`${"+".repeat(integer)}`
}

//August 23 2022
// My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).

// Fortunately, I discovered that the virus hides my censored letters inside root directory.

// It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.

// Examples
// uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") ➜ "This is very strange"

// uncensor("A**Z*N*", "MAIG") ➜ "AMAZING"

// uncensor("xyz", "") ➜ "xyz"

function uncensor(infected, discovered) {
  let counter = 0
  
  let fixed = infected
              .split('')
              .map(el => el === '*' ? discovered[counter++] : el)
              .join('')
  
  return fixed
}

//August 24 2022

// Challenge:

// Given a string, return a copy of the string with the vowels' case swapped.

// For this kata, assume that vowels are in the set "aeouiAEOUI".

// Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

// Addendum: Your solution is only required to work for the ASCII character set.

// Please make sure you only swap cases for the vowels.

function swapVowelCase(str) {
  return str
         .split('')
         .map(el => "aeiou".includes(el) ? el.toUpperCase() : "AEIOU".includes(el) ? el.toLowerCase() : el)
         .join('')
}

//August 25 2022
// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
  /*
  P: string
  R: true or false
  E: "extra" => false, "CAR" => true, "CarT" => false
  P: use toUpperCase() to see if the string is all uppercase
  */
 
   return String(this) === String(this.toUpperCase())
 }

 //August 26 2022
//  Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str){
  let instances = {}
  
  for(let i = 0; i < str.length; i++) {
    if(instances[str[i]]) {
      instances[str[i]]++
    }else {
      instances[str[i]] = 1
    }
  }
  
  let arr = Object.values(instances)

  return arr.every(el => el === 1)
}

//August 28 2022
// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

function digits(n) {
  return String(n).length
}

//August 29 2022
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  let max = -Infinity
  let current
  for(let i = 0; i < array.length; i++) {
    current = array[i] * array[i+1]
    if(current > max) max = current
  }
  return max
}

//August 31 2022
// Consecutive Vowels
// You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from 'a'. Keep in mind that the consecutive vowel to 'u' is 'a' and the cycle continues.

// Return an integer with the length of the consecutive vowels found.

// This is better explained with a couple of examples:

// You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the 'a' and make your way right. The next vowel is an 'e' and it is the consecutive vowel, then 'i' and so forth until you get to 'u'. If you keep moving right you find 'a' which happens to be the consecutive vowel. Return 6.
// This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the 'a', then ignore the rest until you get to the 'e', which is the consecutive vowel, and so forth until you get to the 'o'. Return 4.
// Note
// For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. 'y' is not considered a vowel in this kata.

function getTheVowels(word) {
  let count = 0
  let vowels = Array(50).fill(['a','e','i','o','u']).flat()
  for(let i = 0; i < word.length; i++) {
    if(word[i] === vowels[count]) count++
  }
  return count
}