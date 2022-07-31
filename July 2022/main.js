//July 1 2022
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
    if(bonus) {
      return `\u00A3${salary * 10}`
    }else {
      return `\u00A3${salary}`
    }
    }

//July 2 2022
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
  return a.every(el => el <= limit)
}

//July 3 2022
// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}

//July 9 2022
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme (triplet) {
  let middle = triplet.slice().sort((a, b) => a - b)[1]
  return triplet.indexOf(middle)
}

//July 10 2022
// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

function roundToNext5(n){
  while(n % 5 !== 0) {
    n++
  }
  return n
}

//July 16 2022
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
  if(queue[queue.length - 1] === 'wolf') return 'Pls go away and stop eating my sheep'
  let num = queue.length - (queue.indexOf('wolf')+1)
  return `Oi! Sheep number ${num}! You are about to be eaten by a wolf!`
}

//July 26 2022
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

function nearestSq(n){
  let higher
  let lower
  if(n === 1) return 1
  for(let i = 1; i <= n; i++) {
    if(i * i > n) {
      higher = i * i
      lower = (i - 1) * (i - 1)
      break
    }
  }
  if((higher - n) >= (n - lower)) {
    return lower
  }else {
    return higher
  }
}

//July 27 2022
// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

var replaceDots = function(str) {
  return str.replace(/[.]/g, '-');
}

//July 28 2022
// Write reverseList function that simply reverses lists.

function reverseList(arr) {
  return arr.reverse();
}

//July 29 2022
// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

var orderedCount = function (text) {
  let occurences = {}
  for(let i = 0; i < text.length; i++) {
    if(occurences['_'+text[i]]) {
      occurences['_'+text[i]] += 1
    }else {
      occurences['_'+text[i]] = 1
    }
  }
  let shit = []
  for(const property in occurences) {
    shit.push([property.slice(1), occurences[property]])
  }
  return shit
  
}

//July 30 2022
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

function removeRotten(bagOfFruits){
  if(!bagOfFruits) return []
  let arr = bagOfFruits.map(el => {
    if(el.includes('rotten')) {
      return el.slice(6).toLowerCase()
    }else {
      return el
    }
  })
  return arr
}

//July 31 2022
// Your task is to write function factorial.

function factorial(n){
  if(n === 0) return 1
  for(let i = n-1; i >= 1; i--) {
    n *= i
  }
  return n
}