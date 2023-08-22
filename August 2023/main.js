//July 31 2023

// Task

// King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

// To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.

// Arthur needs you to return true if he needs to invite more women or false if he is all set.
// Input/Output

//     [input] integer array L ($a in PHP)

// An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

// 2 <= L.length <= 50

//     [output] a boolean value

//     true if Arthur need to invite more women, false otherwise.

function inviteMoreWomen(L) {
    let women = L.filter(el => el === -1).length
    let men = L.filter(el => el === 1).length
    return women >= men ? false : true
   }

   //August 1 2023

//    You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

function fixTheMeerkat(arr) {
 return arr.reverse()
}

//August 2 2023
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value. 

function explode(s) {
  return s.split('').map(el => el.repeat(Number(el))).join('')
}

//August 3 2023

// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  return string.split('').map(el => (el === el.toUpperCase() ? ` ${el}` : el)).join('')
}

//August 4 2023
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input

//     customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.

// output

// The function should return an integer, the total time required.

function queueTime(customers, n) {
  let tills = Array(n).fill(0)
  for(let i = 0; i < customers.length; i++) {
    let tillMinimum = tills.reduce((min,current) => current < min ? current : min, tills[0])
    tills[tills.indexOf(tillMinimum)] += customers[i]
  }
  return Math.max(...tills)
}

//August 6 2023
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
// Arguments (Haskell)

//     First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
//     Second argument: the original string to be converted.

// Arguments (Other languages)

//     First argument (required): the original string to be converted.
//     Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

function titleCase(title, minorWords) {
  if(title === "") return ""
  
  title = title.split(' ')
  
  if(minorWords) {
    let minorWordsArr = minorWords.toLowerCase().split(' ')
    for(let i = 0; i < title.length; i++) {
      title[i] = title[i].toLowerCase()
      if(!minorWordsArr.includes(title[i])) {
        title[i] = title[i][0].toUpperCase() + title[i].slice(1).toLowerCase()
      }
    }
  } else {
    for(let i = 0; i < title.length; i++) {
    title[i] = title[i][0].toUpperCase() + title[i].slice(1).toLowerCase()
    }
  }
  
  title[0] = title[0][0].toUpperCase() + title[0].slice(1).toLowerCase()

  return title.join(' ')
}

//August 7 2023
// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.

function pairs(ar){
  let count = 0
  for(let i = 0; i < ar.length - 1; i+= 2) {
    if(ar[i] - ar[i + 1] === -1 || ar[i] - ar[i + 1] === 1) count++
  }
   return count
 };

 //August 8 2023
//  Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

function sevenAte9(str) {
  let arr = str.split('').map(el => Number(el) || el)
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 9 && arr[i-1] === 7 && arr[i+1] === 7 ) {
      arr.splice(i, 1)
    }
  }
  return arr.map(el => el.toString()).join('')
}

//August 9 2023

// The code provided is supposed return a person's Full Name given their first and last names.

// But it's not working properly.
// Notes

// The first and/or last names are never null, but may be empty.

class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName
    this.lastName = lastName
  }
  
  getFullName(){
    let str = this.firstName+" "+this.lastName
    return str.trim()
  }
  
}

//August 10 2023
// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

var flatten = function (array){
  return array.flat()
}

//August 11 2023
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// If there are no numbers of this kind in the range [a,b][a, b][a,b] the function should output an empty list.

// 90, 100 --> []

function sumDigPow(a, b) {
  let res = []
  for(let i = a; i <= b; i++) {
    let output = String(i).split('').map((el,i) => Math.pow(Number(el), i+1)).reduce((acc,el) => acc + el,0)
    if(output == i) res.push(i)
  }
  return res
}

//August 15 2023

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

//     < firstName here >, < country here > of the first Python developer who has signed up; or
//     There will be no Python developers if no Python developer has signed up.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];

// your function should return Victoria, Puerto Rico.

function getFirstPython(list) {
  let pythons = list.filter(el => el.language === 'Python')
  return pythons.length === 0 ? 'There will be no Python developers' : `${pythons[0].firstName}, ${pythons[0].country}`
}

//August 16 2023
// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];

function countLanguages(list) {
  let obj = {}
  for(let i = 0; i < list.length; i++) {
    if(obj.hasOwnProperty(list[i].language)) {
      obj[list[i].language] += 1
    }else {
      obj[list[i].language] = 1
    }
  }
  return obj
}

//August 17 2023
// ASC Week 1 Challenge 4 (Medium #1)

// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.
// Examples

// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

function vaporcode(string) {
  return string
    .split('')
    .filter(el => el !== ' ')
    .map(el => `${el.toUpperCase()}  `)
    .join('')
    .trimEnd()
}

//August 22 2023
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces

// input: 'CodeWars'

// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'

// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

function sortMyString(S) {
  let evens = S.split('').filter((el,i) => i % 2 === 0).join('')
  let odds = S.split('').filter((el,i) => i % 2 !== 0).join('')
  return `${evens} ${odds}`
}








